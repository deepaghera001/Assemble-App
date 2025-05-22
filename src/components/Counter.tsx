import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decremented, incremented } from '../redux/features/counterSlice';
import { AppDispatch, RootState } from '../redux/store';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
      <Text testID="counter-text">Count: {count}</Text>
      <View style={{ marginVertical: 20 }}>
        <Button
          title="Increment"
          onPress={() => dispatch(incremented())}
          testID="increment-btn"
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="Decrement"
          onPress={() => dispatch(decremented())}
          testID="decrement-btn"
        />
      </View>
    </View>
  );
}