> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsclipview/viewboundschanged(_:)](https://developer.apple.com/documentation/appkit/nsclipview/viewboundschanged(_:))

# viewBoundsChanged(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles an [boundsDidChangeNotification](../nsview/boundsdidchangenotification.md), passed in the `aNotification` argument, by updating a containing [NSScrollView](../nsscrollview.md) based on the new bounds.

## Declaration

```swift
func viewBoundsChanged(_ notification: Notification)
```

## See Also

### Overriding NSView Methods

- [viewFrameChanged(\_:)](viewframechanged%28__%29.md): Handles an [frameDidChangeNotification](../nsview/framedidchangenotification.md), passed in the `aNotification` argument, by updating a containing [NSScrollView](../nsscrollview.md) based on the new frame.

# viewBoundsChanged: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles an [NSViewBoundsDidChangeNotification](../nsview/boundsdidchangenotification.md), passed in the `aNotification` argument, by updating a containing [NSScrollView](../nsscrollview.md) based on the new bounds.

## Declaration

```objectivec
- (void) viewBoundsChanged:(NSNotification *) notification;
```

## See Also

### Overriding NSView Methods

- [viewFrameChanged:](viewframechanged%28__%29.md): Handles an [NSViewFrameDidChangeNotification](../nsview/framedidchangenotification.md), passed in the `aNotification` argument, by updating a containing [NSScrollView](../nsscrollview.md) based on the new frame.
