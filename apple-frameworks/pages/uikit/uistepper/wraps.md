> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistepper/wraps](https://developer.apple.com/documentation/uikit/uistepper/wraps)

# wraps (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether the stepper can wrap its value to the minimum or maximum value when incrementing and decrementing the value.

## Declaration

```swift
var wraps: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), incrementing beyond [maximumValue](maximumvalue.md) sets [value](value.md) to [minimumValue](minimumvalue.md); likewise, decrementing below [minimumValue](minimumvalue.md) sets [value](value.md) to [maximumValue](maximumvalue.md). If [false](https://developer.apple.com/documentation/swift/false), the stepper doesn’t increment beyond [maximumValue](maximumvalue.md) nor does it decrement below [minimumValue](minimumvalue.md) but rather holds at those values.

The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the stepper

- [isContinuous](iscontinuous.md): A Boolean value that determines whether to send value changes during user interaction or after user interaction ends.
- [autorepeat](autorepeat.md): A Boolean value that determines whether to repeatedly change the stepper’s value as the user presses and holds a stepper button.
- [minimumValue](minimumvalue.md): The lowest possible numeric value for the stepper.
- [maximumValue](maximumvalue.md): The highest possible numeric value for the stepper.
- [stepValue](stepvalue.md): The step, or increment, value for the stepper.

# wraps (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether the stepper can wrap its value to the minimum or maximum value when incrementing and decrementing the value.

## Declaration

```objectivec
@property (nonatomic) BOOL wraps;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), incrementing beyond [maximumValue](maximumvalue.md) sets [value](value.md) to [minimumValue](minimumvalue.md); likewise, decrementing below [minimumValue](minimumvalue.md) sets [value](value.md) to [maximumValue](maximumvalue.md). If [false](https://developer.apple.com/documentation/swift/false), the stepper doesn’t increment beyond [maximumValue](maximumvalue.md) nor does it decrement below [minimumValue](minimumvalue.md) but rather holds at those values.

The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the stepper

- [continuous](iscontinuous.md): A Boolean value that determines whether to send value changes during user interaction or after user interaction ends.
- [autorepeat](autorepeat.md): A Boolean value that determines whether to repeatedly change the stepper’s value as the user presses and holds a stepper button.
- [minimumValue](minimumvalue.md): The lowest possible numeric value for the stepper.
- [maximumValue](maximumvalue.md): The highest possible numeric value for the stepper.
- [stepValue](stepvalue.md): The step, or increment, value for the stepper.
