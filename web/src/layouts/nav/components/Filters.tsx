import { Box, Stack, NumberInput } from "@mantine/core";
import FilterSlider from "../../../components/FilterSlider";
import { TbReceipt2 } from "react-icons/tb";

const Filters: React.FC = () => {
  return (
    <>
      <Box mt={15} sx={{ fontWeight: 400 }}>
        <Stack>
          <NumberInput label="Max price" hideControls icon={<TbReceipt2 fontSize={20} />} />
          <FilterSlider label="Seats" min={1} max={16} />
          <FilterSlider label="Doors" max={8} min={1} />
        </Stack>
      </Box>
    </>
  );
};

export default Filters;
