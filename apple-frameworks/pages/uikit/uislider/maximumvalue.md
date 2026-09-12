> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uislider/maximumvalue](https://developer.apple.com/documentation/uikit/uislider/maximumvalue)

# maximumValue (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The maximum value of the slider.

## Declaration

```swift
var maximumValue: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to set the value that the trailing end of the slider represents. If you change the value of this property, and the current value of the slider is above the new maximum, the slider adjusts the [value](value.md) property to match the new maximum. If you set the maximum value to a value smaller than the minimum, the slider updates the minimum value to equal the maximum.

The default value of this property is 1.0.

## See Also

### Accessing the slider’s value limits

- [minimumValue](minimumvalue.md): The minimum value of the slider.

# maximumValue (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The maximum value of the slider.

## Declaration

```objectivec
@property (nonatomic) float maximumValue;
```

<a id="Discussion"></a>

## Discussion

Use this property to set the value that the trailing end of the slider represents. If you change the value of this property, and the current value of the slider is above the new maximum, the slider adjusts the [value](value.md) property to match the new maximum. If you set the maximum value to a value smaller than the minimum, the slider updates the minimum value to equal the maximum.

The default value of this property is 1.0.

## See Also

### Accessing the slider’s value limits

- [minimumValue](minimumvalue.md): The minimum value of the slider.
