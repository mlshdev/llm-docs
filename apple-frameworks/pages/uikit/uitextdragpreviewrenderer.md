> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdragpreviewrenderer](https://developer.apple.com/documentation/uikit/uitextdragpreviewrenderer)

# UITextDragPreviewRenderer (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Renders previews of text dragged by the user.

## Declaration

```swift
@MainActor class UITextDragPreviewRenderer
```

<a id="overview"></a>

## Overview

Use this class to provide custom previews of dragged text that follows user interface guidelines and handles right-to-left text. You provide the layout manager and the range to render the preview.

Subclasses may override the [adjust(firstLineRect:bodyRect:lastLineRect:textOrigin:)](uitextdragpreviewrenderer/adjust%28firstlinerect_bodyrect_lastlinerect_textorigin_%29.md) method to modify the detected rectangles as needed during the drag operation.

## Topics

### Initializing a text drag preview renderer

- [init(layoutManager:range:)](uitextdragpreviewrenderer/init%28layoutmanager_range_%29.md): Initializes and returns a text drag preview renderer with the specified layout managers and range to render the text drag preview.
- [init(layoutManager:range:unifyRects:)](uitextdragpreviewrenderer/init%28layoutmanager_range_unifyrects_%29.md): Returns an initialized renderer of a text drag preview with the specified layout manager, range, and rectangle detection behavior.

### Getting and setting bounding rectangles

- [bodyRect](uitextdragpreviewrenderer/bodyrect.md): The bounding rectangle of the text in the middle of the drag preview.
- [firstLineRect](uitextdragpreviewrenderer/firstlinerect.md): The bounding rectangle of the first line of text in the drag preview.
- [lastLineRect](uitextdragpreviewrenderer/lastlinerect.md): The bounding rectangle of the last line of text in the drag preview.
- [adjust(firstLineRect:bodyRect:lastLineRect:textOrigin:)](uitextdragpreviewrenderer/adjust%28firstlinerect_bodyrect_lastlinerect_textorigin_%29.md): Adjusts the size and origin of the bounding rectangles during a text drag operation.

### Getting the preview image

- [image](uitextdragpreviewrenderer/image.md): The image of the text drag preview that’s rendered by the layout manager.

### Getting the layout manager

- [layoutManager](uitextdragpreviewrenderer/layoutmanager.md): The layout manager that renders the text drag preview.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Drag content

- [UITextDragRequest](uitextdragrequest.md): The interface for describing the attributes of a drag activity originating in a text view.

# UITextDragPreviewRenderer (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Renders previews of text dragged by the user.

## Declaration

```objectivec
@interface UITextDragPreviewRenderer : NSObject
```

<a id="overview"></a>

## Overview

Use this class to provide custom previews of dragged text that follows user interface guidelines and handles right-to-left text. You provide the layout manager and the range to render the preview.

Subclasses may override the [adjustFirstLineRect:bodyRect:lastLineRect:textOrigin:](uitextdragpreviewrenderer/adjust%28firstlinerect_bodyrect_lastlinerect_textorigin_%29.md) method to modify the detected rectangles as needed during the drag operation.

## Topics

### Initializing a text drag preview renderer

- [initWithLayoutManager:range:](uitextdragpreviewrenderer/init%28layoutmanager_range_%29.md): Initializes and returns a text drag preview renderer with the specified layout managers and range to render the text drag preview.
- [initWithLayoutManager:range:unifyRects:](uitextdragpreviewrenderer/init%28layoutmanager_range_unifyrects_%29.md): Returns an initialized renderer of a text drag preview with the specified layout manager, range, and rectangle detection behavior.

### Getting and setting bounding rectangles

- [bodyRect](uitextdragpreviewrenderer/bodyrect.md): The bounding rectangle of the text in the middle of the drag preview.
- [firstLineRect](uitextdragpreviewrenderer/firstlinerect.md): The bounding rectangle of the first line of text in the drag preview.
- [lastLineRect](uitextdragpreviewrenderer/lastlinerect.md): The bounding rectangle of the last line of text in the drag preview.
- [adjustFirstLineRect:bodyRect:lastLineRect:textOrigin:](uitextdragpreviewrenderer/adjust%28firstlinerect_bodyrect_lastlinerect_textorigin_%29.md): Adjusts the size and origin of the bounding rectangles during a text drag operation.

### Getting the preview image

- [image](uitextdragpreviewrenderer/image.md): The image of the text drag preview that’s rendered by the layout manager.

### Getting the layout manager

- [layoutManager](uitextdragpreviewrenderer/layoutmanager.md): The layout manager that renders the text drag preview.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Drag content

- [UITextDragRequest](uitextdragrequest.md): The interface for describing the attributes of a drag activity originating in a text view.
