> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsclipview/viewframechanged(_:)](https://developer.apple.com/documentation/appkit/nsclipview/viewframechanged(_:))

# viewFrameChanged(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles an [frameDidChangeNotification](../nsview/framedidchangenotification.md), passed in the `aNotification` argument, by updating a containing [NSScrollView](../nsscrollview.md) based on the new frame.

## Declaration

```swift
func viewFrameChanged(_ notification: Notification)
```

## See Also

### Overriding NSView Methods

- [viewBoundsChanged(\_:)](viewboundschanged%28__%29.md): Handles an [boundsDidChangeNotification](../nsview/boundsdidchangenotification.md), passed in the `aNotification` argument, by updating a containing [NSScrollView](../nsscrollview.md) based on the new bounds.

# viewFrameChanged: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Handles an [NSViewFrameDidChangeNotification](../nsview/framedidchangenotification.md), passed in the `aNotification` argument, by updating a containing [NSScrollView](../nsscrollview.md) based on the new frame.

## Declaration

```objectivec
- (void) viewFrameChanged:(NSNotification *) notification;
```

## See Also

### Overriding NSView Methods

- [viewBoundsChanged:](viewboundschanged%28__%29.md): Handles an [NSViewBoundsDidChangeNotification](../nsview/boundsdidchangenotification.md), passed in the `aNotification` argument, by updating a containing [NSScrollView](../nsscrollview.md) based on the new bounds.
