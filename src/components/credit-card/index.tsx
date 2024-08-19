import { View, Text } from "react-native";
import Animated, {useAnimatedStyle, SharedValue} from "react-native-reanimated";

import { styles } from "./styles" 

type CreditCardProps = {
    cardSide: SharedValue<number>
}

export enum CARD_SIDE{
    front = 0,
    back = 1,
}

export function CreditCard({cardSide}: CreditCardProps){
    const frontAnimetedStyles = useAnimatedStyle(() => {
        return{}
    })
    return(
        <View>
            <Animated.View style={[styles.card, styles.front]}>
                <View style={styles.header}>
                    <View style={[styles.circle, styles.logo]}/>
                    <Text>Meu cartão</Text> 
                </View>

                <View style={styles.footer}>
                    <Text style={styles.name}>Lucas Felipe</Text>

                    <View style={styles.flag}>
                        <View style={[styles.circle, styles.red]} />
                        <View style={[styles.circle, styles.orange]} />
                    </View>
                </View>
            </Animated.View>

            <Animated.View style={[styles.card, styles.back]}>
                <View>
                    <Text style={styles.label}>Número do cartão</Text>
                    <Text style={styles.value}>1234 5678 9012 3456</Text>
                </View>

                <View style={styles.footer}>
                    <View>
                        <Text style={styles.label}>Valida</Text>
                        <Text style={styles.value}>12/02</Text>
                    </View>

                    <View>
                        <Text style={styles.label}>CVV</Text>
                        <Text style={styles.value}>12/02</Text>
                    </View>
                </View>
            </Animated.View>   
        </View>
    )
}   