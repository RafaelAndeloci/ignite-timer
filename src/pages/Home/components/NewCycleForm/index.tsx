import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em </label>
      <TaskInput
        disabled={!!activeCycle}
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome ao seu projeto"
        {...register("task")}
      />

      <datalist id="task-suggestions">
        <option value="projeto 1" />
        <option value="projeto 2" />
        <option value="projeto 3" />
        <option value="Banana" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        disabled={!!activeCycle}
        type="number"
        id="minutesAmount"
        placeholder="00"
        min={5}
        max={60}
        step={5}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
