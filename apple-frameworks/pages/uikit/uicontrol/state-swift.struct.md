> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/state-swift.struct](https://developer.apple.com/documentation/uikit/uicontrol/state-swift.struct)

# UIControl.State (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants describing the state of a control.

## Declaration

```swift
struct State
```

<a id="overview"></a>

## Overview

A control can have more than one state at a time. Controls can have different configurations according to their state. For example, a [UIButton](../uibutton.md) object can display one image when it’s in its normal state and a different image when it’s highlighted.

## Topics

### Constants

- [normal](state-swift.struct/normal.md): The normal, or default, state of a control where the control is enabled but neither selected nor highlighted.
- [highlighted](state-swift.struct/highlighted.md): The highlighted state of a control.
- [disabled](state-swift.struct/disabled.md): The disabled state of a control.
- [selected](state-swift.struct/selected.md): The selected state of a control.
- [focused](state-swift.struct/focused.md): The focused state of a control.
- [application](state-swift.struct/application.md): Additional control-state flags available for app use.
- [reserved](state-swift.struct/reserved.md): Control-state flags reserved for internal framework use.

### Initializers

- [init(rawValue:)](state-swift.struct/init%28rawvalue_%29.md): Creates a control state with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing state

- [state](state-swift.property.md): The state of the control, specified as a bit mask value.
- [isEnabled](isenabled.md): A Boolean value indicating whether the control is in the enabled state.
- [isSelected](isselected.md): A Boolean value indicating whether the control is in the selected state.
- [isHighlighted](ishighlighted.md): A Boolean value indicating whether the control draws a highlight.

# UIControlState (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants describing the state of a control.

## Declaration

```objectivec
enum UIControlState : NSUInteger;
```

<a id="overview"></a>

## Overview

A control can have more than one state at a time. Controls can have different configurations according to their state. For example, a [UIButton](../uibutton.md) object can display one image when it’s in its normal state and a different image when it’s highlighted.

## Topics

### Constants

- [UIControlStateNormal](state-swift.struct/normal.md): The normal, or default, state of a control where the control is enabled but neither selected nor highlighted.
- [UIControlStateHighlighted](state-swift.struct/highlighted.md): The highlighted state of a control.
- [UIControlStateDisabled](state-swift.struct/disabled.md): The disabled state of a control.
- [UIControlStateSelected](state-swift.struct/selected.md): The selected state of a control.
- [UIControlStateFocused](state-swift.struct/focused.md): The focused state of a control.
- [UIControlStateApplication](state-swift.struct/application.md): Additional control-state flags available for app use.
- [UIControlStateReserved](state-swift.struct/reserved.md): Control-state flags reserved for internal framework use.

## See Also

### Managing state

- [state](state-swift.property.md): The state of the control, specified as a bit mask value.
- [enabled](isenabled.md): A Boolean value indicating whether the control is in the enabled state.
- [selected](isselected.md): A Boolean value indicating whether the control is in the selected state.
- [highlighted](ishighlighted.md): A Boolean value indicating whether the control draws a highlight.
