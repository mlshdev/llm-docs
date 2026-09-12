> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceslider/setnumberofsteps(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceslider/setnumberofsteps(_:))

# setNumberOfSteps(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the number of steps for the slider.

## Declaration

```swift
func setNumberOfSteps(_ numberOfSteps: Int)
```

## Parameters

- `numberOfSteps`: The number of steps between the minimum and maximum value. If the slider’s value is continuous, calling this method has no effect.

<a id="Discussion"></a>

## Discussion

Each tap on the slider’s increment or decrement areas changes the slider value by one step. The value of each step is equal to the difference between the minimum and maximum values divided by the number of steps. For example, if the minimum value is `0`, the maximum value is `1`, and the number of steps is `10`, each step increments or decrements the value by `0.1`.

## See Also

### Setting the Slider Value

- [setValue(\_:)](setvalue%28__%29.md): Changes the value of the slider.
- [setColor(\_:)](setcolor%28__%29.md): Sets the color of the slider bar.

# setNumberOfSteps: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the number of steps for the slider.

## Declaration

```objectivec
- (void) setNumberOfSteps:(NSInteger) numberOfSteps;
```

## Parameters

- `numberOfSteps`: The number of steps between the minimum and maximum value. If the slider’s value is continuous, calling this method has no effect.

<a id="Discussion"></a>

## Discussion

Each tap on the slider’s increment or decrement areas changes the slider value by one step. The value of each step is equal to the difference between the minimum and maximum values divided by the number of steps. For example, if the minimum value is `0`, the maximum value is `1`, and the number of steps is `10`, each step increments or decrements the value by `0.1`.

## See Also

### Setting the Slider Value

- [setValue:](setvalue%28__%29.md): Changes the value of the slider.
- [setColor:](setcolor%28__%29.md): Sets the color of the slider bar.
