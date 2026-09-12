> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistepper/iscontinuous](https://developer.apple.com/documentation/uikit/uistepper/iscontinuous)

# isContinuous (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether to send value changes during user interaction or after user interaction ends.

## Declaration

```swift
var isContinuous: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the stepper sends value change events immediately as the value changes during user interaction. If [false](https://developer.apple.com/documentation/swift/false), the stepper sends a value change event after user interaction ends.

The default value for this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the stepper

- [autorepeat](autorepeat.md): A Boolean value that determines whether to repeatedly change the stepper’s value as the user presses and holds a stepper button.
- [wraps](wraps.md): A Boolean value that determines whether the stepper can wrap its value to the minimum or maximum value when incrementing and decrementing the value.
- [minimumValue](minimumvalue.md): The lowest possible numeric value for the stepper.
- [maximumValue](maximumvalue.md): The highest possible numeric value for the stepper.
- [stepValue](stepvalue.md): The step, or increment, value for the stepper.

# continuous (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether to send value changes during user interaction or after user interaction ends.

## Declaration

```objectivec
@property (nonatomic, getter=isContinuous) BOOL continuous;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the stepper sends value change events immediately as the value changes during user interaction. If [false](https://developer.apple.com/documentation/swift/false), the stepper sends a value change event after user interaction ends.

The default value for this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the stepper

- [autorepeat](autorepeat.md): A Boolean value that determines whether to repeatedly change the stepper’s value as the user presses and holds a stepper button.
- [wraps](wraps.md): A Boolean value that determines whether the stepper can wrap its value to the minimum or maximum value when incrementing and decrementing the value.
- [minimumValue](minimumvalue.md): The lowest possible numeric value for the stepper.
- [maximumValue](maximumvalue.md): The highest possible numeric value for the stepper.
- [stepValue](stepvalue.md): The step, or increment, value for the stepper.
