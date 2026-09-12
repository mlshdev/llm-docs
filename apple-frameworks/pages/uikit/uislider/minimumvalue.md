> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uislider/minimumvalue](https://developer.apple.com/documentation/uikit/uislider/minimumvalue)

# minimumValue (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The minimum value of the slider.

## Declaration

```swift
var minimumValue: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to set the value that the leading end of the slider represents. If you change the value of this property, and the current value of the slider is below the new minimum, the slider adjusts the [value](value.md) property to match the new minimum. If you set the minimum value to a value larger than the maximum, the slider updates the maximum value to equal the minimum.

The default value of this property is 0.0.

## See Also

### Accessing the slider’s value limits

- [maximumValue](maximumvalue.md): The maximum value of the slider.

# minimumValue (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The minimum value of the slider.

## Declaration

```objectivec
@property (nonatomic) float minimumValue;
```

<a id="Discussion"></a>

## Discussion

Use this property to set the value that the leading end of the slider represents. If you change the value of this property, and the current value of the slider is below the new minimum, the slider adjusts the [value](value.md) property to match the new minimum. If you set the minimum value to a value larger than the maximum, the slider updates the maximum value to equal the minimum.

The default value of this property is 0.0.

## See Also

### Accessing the slider’s value limits

- [maximumValue](maximumvalue.md): The maximum value of the slider.
