import { TextInputProps } from "react-native";
import { Container } from "./style";
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {

}

export default function Input({...rest}: Props) {
    const { COLORS } = useTheme();

    return (
        <Container 
            placeholderTextColor={COLORS.GRAY_400}
            {...rest}
        />
    )
}