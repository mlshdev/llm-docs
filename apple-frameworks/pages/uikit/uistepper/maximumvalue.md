> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistepper/maximumvalue](https://developer.apple.com/documentation/uikit/uistepper/maximumvalue)

# maximumValue (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The highest possible numeric value for the stepper.

## Declaration

```swift
var maximumValue: Double { get set }
```

<a id="Discussion"></a>

## Discussion

Must be numerically greater than [minimumValue](minimumvalue.md). If you attempt to set a value equal to or lower than [minimumValue](minimumvalue.md), the system raises an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception.

The default value of this property is `100`.

## See Also

### Configuring the stepper

- [isContinuous](iscontinuous.md): A Boolean value that determines whether to send value changes during user interaction or after user interaction ends.
- [autorepeat](autorepeat.md): A Boolean value that determines whether to repeatedly change the stepper’s value as the user presses and holds a stepper button.
- [wraps](wraps.md): A Boolean value that determines whether the stepper can wrap its value to the minimum or maximum value when incrementing and decrementing the value.
- [minimumValue](minimumvalue.md): The lowest possible numeric value for the stepper.
- [stepValue](stepvalue.md): The step, or increment, value for the stepper.

# maximumValue (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The highest possible numeric value for the stepper.

## Declaration

```objectivec
@property (nonatomic) double maximumValue;
```

<a id="Discussion"></a>

## Discussion

Must be numerically greater than [minimumValue](minimumvalue.md). If you attempt to set a value equal to or lower than [minimumValue](minimumvalue.md), the system raises an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception.

The default value of this property is `100`.

## See Also

### Configuring the stepper

- [continuous](iscontinuous.md): A Boolean value that determines whether to send value changes during user interaction or after user interaction ends.
- [autorepeat](autorepeat.md): A Boolean value that determines whether to repeatedly change the stepper’s value as the user presses and holds a stepper button.
- [wraps](wraps.md): A Boolean value that determines whether the stepper can wrap its value to the minimum or maximum value when incrementing and decrementing the value.
- [minimumValue](minimumvalue.md): The lowest possible numeric value for the stepper.
- [stepValue](stepvalue.md): The step, or increment, value for the stepper.
