> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor/frameresizeposition](https://developer.apple.com/documentation/appkit/nscursor/frameresizeposition)

# NSCursor.FrameResizePosition (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

The position along the perimeter of a rectangular frame (its edges and corners) from which it’s resized.

## Declaration

```swift
@frozen enum FrameResizePosition
```

## Topics

### Enumeration Cases

- [NSCursor.FrameResizePosition.bottom](frameresizeposition/bottom.md): The bottom edge of the frame.
- [NSCursor.FrameResizePosition.bottomLeft](frameresizeposition/bottomleft.md): The bottom left corner of the frame.
- [NSCursor.FrameResizePosition.bottomRight](frameresizeposition/bottomright.md): The bottom right corner of the frame.
- [NSCursor.FrameResizePosition.left](frameresizeposition/left.md): The left edge of the frame.
- [NSCursor.FrameResizePosition.right](frameresizeposition/right.md): The right edge of the frame.
- [NSCursor.FrameResizePosition.top](frameresizeposition/top.md): The top edge of the frame.
- [NSCursor.FrameResizePosition.topLeft](frameresizeposition/topleft.md): The top left corner of the frame.
- [NSCursor.FrameResizePosition.topRight](frameresizeposition/topright.md): The top right corner of the frame.

### Initializers

- [init(rawValue:)](frameresizeposition/init%28rawvalue_%29.md)

### Type Methods

- [bottomLeading(relativeTo:)](frameresizeposition/bottomleading%28relativeto_%29.md): The bottom leading corner of the frame, in the given user interface layout direction.
- [bottomTrailing(relativeTo:)](frameresizeposition/bottomtrailing%28relativeto_%29.md): The bottom trailing corner of the frame, in the given user interface layout direction.
- [leading(relativeTo:)](frameresizeposition/leading%28relativeto_%29.md): The leading edge of the frame, in the given user interface layout direction.
- [topLeading(relativeTo:)](frameresizeposition/topleading%28relativeto_%29.md): The top leading corner of the frame, in the given user interface layout direction.
- [topTrailing(relativeTo:)](frameresizeposition/toptrailing%28relativeto_%29.md): The top trailing corner of the frame, in the given user interface layout direction.
- [trailing(relativeTo:)](frameresizeposition/trailing%28relativeto_%29.md): The trailing edge of the frame, in the given user interface layout direction.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [NSHorizontalDirection](../nshorizontaldirection.md): An absolute direction on the horizontal axis.
- [NSSharingCollaborationMode](../nssharingcollaborationmode.md): Represents the types of sharing (collaborating on an item vs. sending a copy of the item) The share picker supports up to two modes, each of which corresponds to one of these types
- [NSImage.DynamicRange](../nsimage/dynamicrange.md): Describes how High Dynamic Range (HDR) image content displays.
- [NSTextCursorAccessoryPlacement](../nstextcursoraccessoryplacement.md)
- [NSVerticalDirection](../nsverticaldirection.md): A direction on the vertical axis.
- [NSWritingToolsBehavior](../nswritingtoolsbehavior.md): Constants that specify the Writing Tools experience for the underlying view.
- [NSWritingToolsResultOptions](../nswritingtoolsresultoptions.md): Constants to specify what type of content to allow in Writing Tools suggestions or rewrites.

# NSCursorFrameResizePosition (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

The position along the perimeter of a rectangular frame (its edges and corners) from which it’s resized.

## Declaration

```objectivec
enum NSCursorFrameResizePosition : NSUInteger;
```

## Topics

### Enumeration Cases

- [NSCursorFrameResizePositionBottom](frameresizeposition/bottom.md): The bottom edge of the frame.
- [NSCursorFrameResizePositionBottomLeft](frameresizeposition/bottomleft.md): The bottom left corner of the frame.
- [NSCursorFrameResizePositionBottomRight](frameresizeposition/bottomright.md): The bottom right corner of the frame.
- [NSCursorFrameResizePositionLeft](frameresizeposition/left.md): The left edge of the frame.
- [NSCursorFrameResizePositionRight](frameresizeposition/right.md): The right edge of the frame.
- [NSCursorFrameResizePositionTop](frameresizeposition/top.md): The top edge of the frame.
- [NSCursorFrameResizePositionTopLeft](frameresizeposition/topleft.md): The top left corner of the frame.
- [NSCursorFrameResizePositionTopRight](frameresizeposition/topright.md): The top right corner of the frame.

## See Also

### Enumerations

- [NSCursorFrameResizeDirections](../nscursorframeresizedirections.md): The directions in which a rectangular frame can be resized.
- [NSHorizontalDirections](../nshorizontaldirections.md): The absolute directions on the horizontal axis.
- [NSSharingCollaborationMode](../nssharingcollaborationmode.md): Represents the types of sharing (collaborating on an item vs. sending a copy of the item) The share picker supports up to two modes, each of which corresponds to one of these types
- [NSImageDynamicRange](../nsimage/dynamicrange.md): Describes how High Dynamic Range (HDR) image content displays.
- [NSTextCursorAccessoryPlacement](../nstextcursoraccessoryplacement.md)
- [NSVerticalDirections](../nsverticaldirections.md): The directions on the vertical axis.
- [NSWritingToolsBehavior](../nswritingtoolsbehavior.md): Constants that specify the Writing Tools experience for the underlying view.
- [NSWritingToolsResultOptions](../nswritingtoolsresultoptions.md): Constants to specify what type of content to allow in Writing Tools suggestions or rewrites.
