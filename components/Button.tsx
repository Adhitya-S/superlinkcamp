import Image from "next/image";



type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
}

const Button = ({ type,title,icon,variant }: ButtonProps) => {
  return (
    <button
    className={'flexCenter gap-1 rounded-full border-opacity-100 bg-red-600 ${variant}'}
      type={type}
    > 
      {icon && <Image src={icon} alt={title} width={40} height={40}  />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button