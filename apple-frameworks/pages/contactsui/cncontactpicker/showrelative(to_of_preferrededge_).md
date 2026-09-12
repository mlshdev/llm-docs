> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactpicker/showrelative(to:of:preferrededge:)](https://developer.apple.com/documentation/contactsui/cncontactpicker/showrelative(to:of:preferrededge:))

# showRelative(to:of:preferredEdge:) (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Shows the picker popover anchored to the specified view.

## Declaration

```swift
func showRelative(to positioningRect: NSRect, of positioningView: NSView, preferredEdge: NSRectEdge)
```

## Parameters

- `positioningRect`: The content size of the popover.
- `positioningView`: The view to which the popover should be positioned.
- `preferredEdge`: The edge to which the popover should be anchored to.

## See Also

### Related Documentation

- [NSPopover](https://developer.apple.com/documentation/appkit/nspopover): A means to display additional content related to existing content on the screen.

# showRelativeToRect:ofView:preferredEdge: (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Shows the picker popover anchored to the specified view.

## Declaration

```objectivec
- (void) showRelativeToRect:(NSRect) positioningRect ofView:(NSView *) positioningView preferredEdge:(NSRectEdge) preferredEdge;
```

## Parameters

- `positioningRect`: The content size of the popover.
- `positioningView`: The view to which the popover should be positioned.
- `preferredEdge`: The edge to which the popover should be anchored to.

## See Also

### Related Documentation

- [NSPopover](https://developer.apple.com/documentation/appkit/nspopover): A means to display additional content related to existing content on the screen.
