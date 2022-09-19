import { ColorInput } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';
import { useIsFirstRender } from '../../../hooks/useIsFirstRender';
import { useLocales } from '../../../providers/LocaleProvider';
import { fetchNui } from '../../../utils/fetchNui';
import { isEnvBrowser } from '../../../utils/misc';
import { useAppDispatch } from '../../../state';

const Color: React.FC = () => {
  const { locale } = useLocales();
  const isFirst = useIsFirstRender();
  const [color, setColor] = useState('');
  const debouncedColor = useDebounce(color);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isFirst) return;
    if (!isEnvBrowser()) fetchNui('changeColor', debouncedColor);
    dispatch.vehicleColor.setVehicleColor(debouncedColor);
  }, [debouncedColor]);

  return (
    <>
      <ColorInput
        label={locale.ui.vehicle_info.vehicle_color}
        format="rgb"
        value={color}
        onChange={(value) => setColor(value)}
        sx={{ width: '100%' }}
      />
    </>
  );
};

export default Color;
