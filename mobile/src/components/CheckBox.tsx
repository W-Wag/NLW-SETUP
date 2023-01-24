import { Text, TouchableOpacity,TouchableOpacityProps, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import colors from "tailwindcss/colors";
import Animated, { SlideInLeft, ZoomOut} from "react-native-reanimated";

interface Props extends TouchableOpacityProps {
    title: string;
    checked?: boolean;
    
}

export function Checkbox( {title, checked = false, ...rest }: Props){
    return(
        <TouchableOpacity
        activeOpacity={0.8}
        className="flex-row mb-2 items-center"
        {...rest}>
       {
            checked ?
            <Animated.View className="h-8 bg-green-500 rounded-lg items-center justify-center"
            entering={SlideInLeft}
            exiting={ZoomOut}
            >
                <Feather
                name="check"
                size={20}
                color={colors.white}
                />

            </Animated.View >
            :
            <View className="-8 w-8 bg-zinc-900 rounded-lg"/>
        }
        <Text className="text-white text-base ml-3 font-semibold">
            {title}
        </Text>
        </TouchableOpacity>
    );
}