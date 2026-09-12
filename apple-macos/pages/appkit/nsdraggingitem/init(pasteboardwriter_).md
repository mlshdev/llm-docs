> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingitem/init(pasteboardwriter:)](https://developer.apple.com/documentation/appkit/nsdraggingitem/init(pasteboardwriter:))

# init(pasteboardWriter:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.7+

Creates and returns a dragging item using the specified content.

## Declaration

```swift
init(pasteboardWriter: any NSPasteboardWriting)
```

## Parameters

- `pasteboardWriter`: The object that provides the dragging content. The object must implement the [NSPasteboardWriting](../nspasteboardwriting.md) protocol.

<a id="return-value"></a>

## Return Value

An initialized NSDraggingItem instance with the specified dragging content.

<a id="Discussion"></a>

## Discussion

When the developer creates an `NSDraggingItem` instance , it is for use with the view method [beginDraggingSession(with:event:source:)](../nsview/begindraggingsession%28with_event_source_%29.md) During the invocation of that method, the `pasteboardWriter` is placed onto the dragging pasteboard for the `NSDraggingSession` that contains the dragging item instance.

The designated initializer.

# initWithPasteboardWriter: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Creates and returns a dragging item using the specified content.

## Declaration

```objectivec
- (instancetype) initWithPasteboardWriter:(id<NSPasteboardWriting>) pasteboardWriter;
```

## Parameters

- `pasteboardWriter`: The object that provides the dragging content. The object must implement the [NSPasteboardWriting](../nspasteboardwriting.md) protocol.

<a id="return-value"></a>

## Return Value

An initialized NSDraggingItem instance with the specified dragging content.

<a id="Discussion"></a>

## Discussion

When the developer creates an `NSDraggingItem` instance , it is for use with the view method [beginDraggingSessionWithItems:event:source:](../nsview/begindraggingsession%28with_event_source_%29.md) During the invocation of that method, the `pasteboardWriter` is placed onto the dragging pasteboard for the `NSDraggingSession` that contains the dragging item instance.

The designated initializer.
