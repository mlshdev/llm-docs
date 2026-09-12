> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceslider/setvalue(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceslider/setvalue(_:))

# setValue(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Changes the value of the slider.

## Declaration

```swift
func setValue(_ value: Float)
```

## Parameters

- `value`: The new value for the slider. If the new value is outside of the slider’s acceptable range, this method clamps the new value to the minimum or maximum value.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)

### Setting the Slider Value

- [setColor(\_:)](setcolor%28__%29.md): Sets the color of the slider bar.
- [setNumberOfSteps(\_:)](setnumberofsteps%28__%29.md): Sets the number of steps for the slider.

# setValue: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Changes the value of the slider.

## Declaration

```objectivec
- (void) setValue:(float) value;
```

## Parameters

- `value`: The new value for the slider. If the new value is outside of the slider’s acceptable range, this method clamps the new value to the minimum or maximum value.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)

### Setting the Slider Value

- [setColor:](setcolor%28__%29.md): Sets the color of the slider bar.
- [setNumberOfSteps:](setnumberofsteps%28__%29.md): Sets the number of steps for the slider.
