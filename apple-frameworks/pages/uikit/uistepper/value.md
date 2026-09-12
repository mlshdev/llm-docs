> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistepper/value](https://developer.apple.com/documentation/uikit/uistepper/value)

# value (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The numeric value of the stepper.

## Declaration

```swift
var value: Double { get set }
```

<a id="Discussion"></a>

## Discussion

When the value changes, the stepper sends the [valueChanged](../uicontrol/event/valuechanged.md) flag to its target (see [addTarget(\_:action:for:)](../uicontrol/addtarget%28__action_for_%29.md)). Refer to the description of the [isContinuous](iscontinuous.md) property for information about whether value change events are sent continuously or when user interaction ends.

The default value for this property is `0`. This property is clamped at its lower extreme to [minimumValue](minimumvalue.md) and is clamped at its upper extreme to [maximumValue](maximumvalue.md).

# value (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The numeric value of the stepper.

## Declaration

```objectivec
@property (nonatomic) double value;
```

<a id="Discussion"></a>

## Discussion

When the value changes, the stepper sends the [UIControlEventValueChanged](../uicontrol/event/valuechanged.md) flag to its target (see [addTarget:action:forControlEvents:](../uicontrol/addtarget%28__action_for_%29.md)). Refer to the description of the [continuous](iscontinuous.md) property for information about whether value change events are sent continuously or when user interaction ends.

The default value for this property is `0`. This property is clamped at its lower extreme to [minimumValue](minimumvalue.md) and is clamped at its upper extreme to [maximumValue](maximumvalue.md).
