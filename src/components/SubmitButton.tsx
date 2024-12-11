import Loader from "@/assets/icons/loader.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <Button type="submit" disabled={isLoading} className={className ?? "shad-primary-btn w-full"}>
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image src={Loader} alt="loader" height={24} width={24} className="animate-spin" />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </Button>
  );
};
