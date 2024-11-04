import React, { useState } from 'react';
import {  Text, Button, Alert, Image, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const MyApp = () => {

    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [answer5, setAnswer5] = useState('');


    const correctAnswers = {
        1: 'Crocodile',
        2: 'Peacock',
        3: 'Elephant',
        4: 'Penguin',
        5: 'Giraffe'
    };

    const checkAnswers = () => {

        let score = 0;
        if (answer1 === correctAnswers[1]) score++;
        if (answer2 === correctAnswers[2]) score++;
        if (answer3 === correctAnswers[3]) score++;
        if (answer4 === correctAnswers[4]) score++;
        if (answer5 === correctAnswers[5]) score++;


        let message;
        if (score === 5) {
            message = "Excellent! You got all answers correct!";
        } else if (score === 0) {
            message = "Better luck next time! You got none of the answers correct.";
        } else {
            message = `You got ${score} out of 5 correct!`;
        }


        Alert.alert(message);
    };

    return (
        <ScrollView contentContainerStyle={{ padding: 20 }}>
            {/* Question 1 */}
            <Text style={{ paddingTop: 20, fontSize: 16, fontWeight: 'bold' }}>
                1. Which animal has powerful jaws and is often found in rivers ?
            </Text>
            <Image source={require('./img/crocodile.jpg')} style={{ width: 200, height: 200 }} />
            <RNPickerSelect
                onValueChange={(value) => setAnswer1(value)}
                items={[
                    { label: 'Alligator', value: 'Alligator' },
                    { label: 'Crocodile', value: 'Crocodile' },
                    { label: 'Komodo Dragon', value: 'Komodo Dragon' },
                    { label: 'Iguana', value: 'Iguana' }
                ]}
            />

            {/* Question 2 */}
            <Text style={{ paddingTop: 20, fontSize: 16, fontWeight: 'bold' }}>
                2. Which animal is known for its vibrant feathers and majestic tail display?
            </Text>
            <Image source={require('./img/peacock.jpg')} style={{ width: 200, height: 200}} />
            <RNPickerSelect
                onValueChange={(value) => setAnswer2(value)}
                items={[
                    { label: 'Parrot', value: 'Parrot' },
                    { label: 'Peacock', value: 'Peacock' },
                    { label: 'Pheasant', value: 'Pheasant' },
                    { label: 'Flamingo', value: 'Flamingo' }
                ]}
            />

            {/* Question 3 */}
            <Text style={{ paddingTop: 20, fontSize: 16, fontWeight: 'bold' }}>
                3. Which animal is the  largest mammals?
            </Text>
            <Image source={require('./img/elephant.jpg')} style={{ width: 200, height: 200 }} />
            <RNPickerSelect
                onValueChange={(value) => setAnswer3(value)}
                items={[
                    { label: 'Horse', value: 'Horse' },
                    { label: 'Elephant', value: 'Elephant' },
                    { label: 'Whale', value: 'Whale' },
                    { label: 'Giraffe', value: 'Giraffe' }
                ]}
            />

            {/* Question 4 */}
            <Text style={{ paddingTop: 20, fontSize: 16, fontWeight: 'bold' }}>
                4. Which of these animals is native to cold climates and cannot fly?
            </Text>
            <Image source={require('./img/penguin.jpg')} style={{ width: 200, height: 200 }} />
            <RNPickerSelect
                onValueChange={(value) => setAnswer4(value)}
                items={[
                    { label: 'Seagull', value: 'Seagull' },
                    { label: 'Penguin', value: 'Penguin' },
                    { label: 'Albatross', value: 'Albatross' },
                    { label: 'Flamingo', value: 'Flamingo' }
                ]}
            />

            {/* Question 5 */}
            <Text style={{ paddingTop: 20, fontSize: 16, fontWeight: 'bold' }}>
                5. Which animal uses its long neck to reach high branches?
            </Text>
            <Image source={require('./img/giraffe.jpg')} style={{ width: 200, height: 200 }} />
            <RNPickerSelect
                onValueChange={(value) => setAnswer5(value)}
                items={[
                    { label: 'Giraffe', value: 'Giraffe' },
                    { label: 'Elephant', value: 'Elephant' },
                    { label: 'Zebra', value: 'Zebra' },
                    { label: 'Kangaroo', value: 'Kangaroo' }
                ]}
            />

            <Button title="Submit Answers" onPress={checkAnswers} />
        </ScrollView>
    );
};

export default MyApp;
