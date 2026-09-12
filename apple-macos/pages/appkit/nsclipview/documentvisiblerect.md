> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsclipview/documentvisiblerect](https://developer.apple.com/documentation/appkit/nsclipview/documentvisiblerect)

# documentVisibleRect (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The exposed rectangle of the clip view’s document view, in the document view’s own coordinate system.

## Declaration

```swift
var documentVisibleRect: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

Note that this rectangle doesn’t reflect the effects of any clipping that may occur above the [NSClipView](../nsclipview.md) itself. To get the portion of the document view that’s guaranteed to be visible, send it a `visibleRect` message.

## See Also

### Accessing the Visible Portion

- [documentRect](documentrect.md): The rectangle defining the document view’s frame, adjusted to the size of the clip view if the document view is smaller.

# documentVisibleRect (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The exposed rectangle of the clip view’s document view, in the document view’s own coordinate system.

## Declaration

```objectivec
@property (readonly) NSRect documentVisibleRect;
```

<a id="Discussion"></a>

## Discussion

Note that this rectangle doesn’t reflect the effects of any clipping that may occur above the [NSClipView](../nsclipview.md) itself. To get the portion of the document view that’s guaranteed to be visible, send it a `visibleRect` message.

## See Also

### Accessing the Visible Portion

- [documentRect](documentrect.md): The rectangle defining the document view’s frame, adjusted to the size of the clip view if the document view is smaller.
