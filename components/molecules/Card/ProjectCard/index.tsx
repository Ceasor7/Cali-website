import Button from 'components/atoms/Button';
import ButtonLink from 'components/atoms/Button/ButtonLink';
import LazyCard, { LazyCardProps } from 'components/atoms/LazyCard';
import Text from 'components/atoms/Text';

interface ProjectCardProps extends LazyCardProps {
  title: string;
  description: string;
}

const ProjectCard = ({
  title,
  description,
  bottomSquareSize = 'small',
  height = 300,
}: ProjectCardProps) => {
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <LazyCard bottomSquareSize={bottomSquareSize} height={height} />
      <div className="flex flex-col place-items-center text-center mt-10">
        <div className="mb-2.5">
          <Text value={title} textStyle="ProjectTitle" />
        </div>
        <div className="mb-9">
          <Text value={description} textStyle="ProjectDescription" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
