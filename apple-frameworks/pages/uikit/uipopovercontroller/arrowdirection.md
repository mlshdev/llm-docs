> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopovercontroller/arrowdirection](https://developer.apple.com/documentation/uikit/uipopovercontroller/arrowdirection)

# arrowDirection (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

The direction of the popover’s arrow.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```swift
var arrowDirection: UIPopoverArrowDirection { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [unknown](../uipopoverarrowdirection/unknown.md). When you present the popover, the value changes to reflect the actual direction of the arrow being used by the popover. When the popover is subsequently dismissed, the value of this property returns to [unknown](../uipopoverarrowdirection/unknown.md).

## See Also

### Getting the popover attributes

- [isPopoverVisible](ispopovervisible.md): Deprecated. A Boolean value indicating whether the popover is currently visible.

# popoverArrowDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

The direction of the popover’s arrow.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```objectivec
@property (nonatomic, readonly) UIPopoverArrowDirection popoverArrowDirection;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [UIPopoverArrowDirectionUnknown](../uipopoverarrowdirection/unknown.md). When you present the popover, the value changes to reflect the actual direction of the arrow being used by the popover. When the popover is subsequently dismissed, the value of this property returns to [UIPopoverArrowDirectionUnknown](../uipopoverarrowdirection/unknown.md).

## See Also

### Getting the popover attributes

- [popoverVisible](ispopovervisible.md): Deprecated. A Boolean value indicating whether the popover is currently visible.
