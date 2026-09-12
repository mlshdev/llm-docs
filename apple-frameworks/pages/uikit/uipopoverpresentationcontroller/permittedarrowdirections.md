> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopoverpresentationcontroller/permittedarrowdirections](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontroller/permittedarrowdirections)

# permittedArrowDirections (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The arrow directions that you allow for the popover.

## Declaration

```swift
var permittedArrowDirections: UIPopoverArrowDirection { get set }
```

<a id="Discussion"></a>

## Discussion

Prior to displaying the popover, set this property to the arrow directions that you allow for your popover. The actual arrow direction in use by the popover is stored in the [arrowDirection](arrowdirection.md) property.

The default value of this property is [any](../uipopoverarrowdirection/any.md).

## See Also

### Configuring the popover arrows

- [arrowDirection](arrowdirection.md): The arrow direction in use by the popover.

# permittedArrowDirections (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The arrow directions that you allow for the popover.

## Declaration

```objectivec
@property (nonatomic, assign) UIPopoverArrowDirection permittedArrowDirections;
```

<a id="Discussion"></a>

## Discussion

Prior to displaying the popover, set this property to the arrow directions that you allow for your popover. The actual arrow direction in use by the popover is stored in the [arrowDirection](arrowdirection.md) property.

The default value of this property is [UIPopoverArrowDirectionAny](../uipopoverarrowdirection/any.md).

## See Also

### Configuring the popover arrows

- [arrowDirection](arrowdirection.md): The arrow direction in use by the popover.
