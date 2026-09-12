> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopoverpresentationcontroller/arrowdirection](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontroller/arrowdirection)

# arrowDirection (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The arrow direction in use by the popover.

## Declaration

```swift
var arrowDirection: UIPopoverArrowDirection { get }
```

<a id="Discussion"></a>

## Discussion

When the popover is onscreen, this property reflects the actual arrow direction. Before and after presentation, the value of this property is [unknown](../uipopoverarrowdirection/unknown.md).

## See Also

### Configuring the popover arrows

- [permittedArrowDirections](permittedarrowdirections.md): The arrow directions that you allow for the popover.

# arrowDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The arrow direction in use by the popover.

## Declaration

```objectivec
@property (nonatomic, readonly) UIPopoverArrowDirection arrowDirection;
```

<a id="Discussion"></a>

## Discussion

When the popover is onscreen, this property reflects the actual arrow direction. Before and after presentation, the value of this property is [UIPopoverArrowDirectionUnknown](../uipopoverarrowdirection/unknown.md).

## See Also

### Configuring the popover arrows

- [permittedArrowDirections](permittedarrowdirections.md): The arrow directions that you allow for the popover.
