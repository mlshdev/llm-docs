> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/positioningrect](https://developer.apple.com/documentation/appkit/nspopover/positioningrect)

# positioningRect (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The rectangle within the positioning view relative to which the popover should be positioned.

## Declaration

```swift
var positioningRect: NSRect { get set }
```

<a id="Discussion"></a>

## Discussion

Popovers are positioned relative to a positioning view and are automatically moved when the location or size of the positioning view changes.

Sometimes it is desirable to position popovers relative to a rectangle within the positioning view. In this case, you must update the `positioningRect` property whenever this rectangle changes.

This property is exposed as a read-only binding.

## See Also

### Managing a Popover’s Position and Size

- [behavior](behavior-swift.property.md): Specifies the behavior of the popover.
- [show(relativeTo:of:preferredEdge:)](show%28relativeto_of_preferrededge_%29.md): Shows the popover anchored to the specified view.

# positioningRect (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The rectangle within the positioning view relative to which the popover should be positioned.

## Declaration

```objectivec
@property NSRect positioningRect;
```

<a id="Discussion"></a>

## Discussion

Popovers are positioned relative to a positioning view and are automatically moved when the location or size of the positioning view changes.

Sometimes it is desirable to position popovers relative to a rectangle within the positioning view. In this case, you must update the `positioningRect` property whenever this rectangle changes.

This property is exposed as a read-only binding.

## See Also

### Managing a Popover’s Position and Size

- [behavior](behavior-swift.property.md): Specifies the behavior of the popover.
- [showRelativeToRect:ofView:preferredEdge:](show%28relativeto_of_preferrededge_%29.md): Shows the popover anchored to the specified view.
