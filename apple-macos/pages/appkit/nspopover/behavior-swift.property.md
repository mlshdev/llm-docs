> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/behavior-swift.property](https://developer.apple.com/documentation/appkit/nspopover/behavior-swift.property)

# behavior (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Specifies the behavior of the popover.

## Declaration

```swift
var behavior: NSPopover.Behavior { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [NSPopover.Behavior.applicationDefined](behavior-swift.enum/applicationdefined.md). See [NSPopover.Behavior](behavior-swift.enum.md) for possible value.

## See Also

### Managing a Popover’s Position and Size

- [show(relativeTo:of:preferredEdge:)](show%28relativeto_of_preferrededge_%29.md): Shows the popover anchored to the specified view.
- [positioningRect](positioningrect.md): The rectangle within the positioning view relative to which the popover should be positioned.

# behavior (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Specifies the behavior of the popover.

## Declaration

```objectivec
@property NSPopoverBehavior behavior;
```

<a id="Discussion"></a>

## Discussion

The default value is [NSPopoverBehaviorApplicationDefined](behavior-swift.enum/applicationdefined.md). See [NSPopoverBehavior](behavior-swift.enum.md) for possible value.

## See Also

### Managing a Popover’s Position and Size

- [showRelativeToRect:ofView:preferredEdge:](show%28relativeto_of_preferrededge_%29.md): Shows the popover anchored to the specified view.
- [positioningRect](positioningrect.md): The rectangle within the positioning view relative to which the popover should be positioned.
