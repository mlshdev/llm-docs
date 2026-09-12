> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uislider/value](https://developer.apple.com/documentation/uikit/uislider/value)

# value (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The slider’s current value.

## Declaration

```swift
var value: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to get and set the slider’s current value. To render an animated transition from the current value to the new value, use the [setValue(\_:animated:)](setvalue%28__animated_%29.md) method instead.

If you try to set a value that’s below the minimum or above the maximum, the minimum or maximum value is set instead. The default value of this property is `0.0`.

## See Also

### Accessing the slider’s value

- [setValue(\_:animated:)](setvalue%28__animated_%29.md): Sets the slider’s current value, allowing you to animate the change visually.

# value (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The slider’s current value.

## Declaration

```objectivec
@property (nonatomic) float value;
```

<a id="Discussion"></a>

## Discussion

Use this property to get and set the slider’s current value. To render an animated transition from the current value to the new value, use the [setValue:animated:](setvalue%28__animated_%29.md) method instead.

If you try to set a value that’s below the minimum or above the maximum, the minimum or maximum value is set instead. The default value of this property is `0.0`.

## See Also

### Accessing the slider’s value

- [setValue:animated:](setvalue%28__animated_%29.md): Sets the slider’s current value, allowing you to animate the change visually.
