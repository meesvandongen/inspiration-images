import { useGridSize } from '@/components/ui/grid';
import { Slider } from '@/components/ui/slider';

export function GridSizeSlider() {
  const { size, setSize } = useGridSize();

  return (
    <div className="w-32">
      <Slider
        value={[size]}
        onValueChange={(value) => setSize(value[0])}
        min={200}
        max={700}
        step={100}
        aria-label="Grid Size"
      />
    </div>
  );
}
