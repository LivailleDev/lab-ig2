import { ButtonHTMLAttributes, ReactNode  } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild, className, ...props}: ButtonProps){
    const Comp = asChild ? Slot: 'button';

    return (
        <Comp 
        className={clsx(
            'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-400 focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500', className
           )}
           {...props}
        >
          {children}
        </Comp>
    )
}       