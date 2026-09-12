> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitooltipinteraction/isenabled](https://developer.apple.com/documentation/uikit/uitooltipinteraction/isenabled)

# isEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the tooltip interaction is in the enabled state.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

A view or control can only display a tooltip from an enabled interaction. Set the value of the [isEnabled](isenabled.md) property to [true](https://developer.apple.com/documentation/swift/true) to enable the interaction or [false](https://developer.apple.com/documentation/swift/false) to disable it. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the interaction

- [defaultToolTip](defaulttooltip.md): The text that appears in a tooltip by default.

# enabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the tooltip interaction is in the enabled state.

## Declaration

```objectivec
@property (nonatomic, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

A view or control can only display a tooltip from an enabled interaction. Set the value of the [enabled](isenabled.md) property to [true](https://developer.apple.com/documentation/swift/true) to enable the interaction or [false](https://developer.apple.com/documentation/swift/false) to disable it. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the interaction

- [defaultToolTip](defaulttooltip.md): The text that appears in a tooltip by default.
