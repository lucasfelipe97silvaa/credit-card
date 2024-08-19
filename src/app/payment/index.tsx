import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style"

import { CARD_SIDE, CreditCard } from "@/components/credit-card";
import { useSharedValue } from "react-native-reanimated";


export function Payment(){
    const cardSide = useSharedValue(CARD_SIDE.front)

    function showFrontCard(){
        cardSide.value = CARD_SIDE.front
    }

    function showBackCard(){
        cardSide.value = CARD_SIDE.back
    }

    function handleFlipCard(){
        console.log(cardSide.value)
        if(cardSide.value === CARD_SIDE.front){
            showBackCard()
        }else {
            showFrontCard()
        }
    }

    return(
        <View style={styles.container}>
            <CreditCard cardSide={cardSide}/>

            <TouchableOpacity style={styles.button} onPress={handleFlipCard}>
                <Text>inverter</Text>
            </TouchableOpacity>
        </View>
    )
}