> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor/frameresizecursorfromposition:indirections:](https://developer.apple.com/documentation/appkit/nscursor/frameresizecursorfromposition:indirections:)

# frameResizeCursorFromPosition:inDirections:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

Returns the cursor for resizing a rectangular frame from the specified edge or corner.

## Declaration

```objectivec
+ (NSCursor *) frameResizeCursorFromPosition:(NSCursorFrameResizePosition) position inDirections:(NSCursorFrameResizeDirections) directions;
```

## Parameters

- `position`: The position along the perimeter of a rectangular frame (its edges and corners) from which it’s resized.
- `directions`: The directions in which a rectangular frame can be resized.
