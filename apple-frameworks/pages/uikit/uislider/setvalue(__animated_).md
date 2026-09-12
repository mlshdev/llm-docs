> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uislider/setvalue(_:animated:)](https://developer.apple.com/documentation/uikit/uislider/setvalue(_:animated:))

# setValue(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the slider’s current value, allowing you to animate the change visually.

## Declaration

```swift
func setValue(_ value: Float, animated: Bool)
```

## Parameters

- `value`: The new value to assign to the [value](value.md) property
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the change in value; otherwise, specify [false](https://developer.apple.com/documentation/swift/false) to update the slider’s appearance immediately. Animations are performed asynchronously and do not block the calling thread.

<a id="Discussion"></a>

## Discussion

If you specify a value that is beyond the minimum or maximum values, the slider limits the value to the minimum or maximum. For example, if the minimum value is 0.0 and you specify -1.0, the slider sets the [value](value.md) property to 0.0.

## See Also

### Accessing the slider’s value

- [value](value.md): The slider’s current value.

# setValue:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the slider’s current value, allowing you to animate the change visually.

## Declaration

```objectivec
- (void) setValue:(float) value animated:(BOOL) animated;
```

## Parameters

- `value`: The new value to assign to the [value](value.md) property
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the change in value; otherwise, specify [false](https://developer.apple.com/documentation/swift/false) to update the slider’s appearance immediately. Animations are performed asynchronously and do not block the calling thread.

<a id="Discussion"></a>

## Discussion

If you specify a value that is beyond the minimum or maximum values, the slider limits the value to the minimum or maximum. For example, if the minimum value is 0.0 and you specify -1.0, the slider sets the [value](value.md) property to 0.0.

## See Also

### Accessing the slider’s value

- [value](value.md): The slider’s current value.
