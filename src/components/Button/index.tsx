import { TouchableOpacityProps } from 'react-native';
import { ButtonTypeStyleProps, Container, Title } from './style';

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
}

export default function Button({title, type = 'PRIMARY', ...props}: Props) {

    return (
        <Container 
            type={type}
            {...props}
        >
            <Title>{title}</Title>
        </Container>
    );
}