> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/clip(_:)](https://developer.apple.com/documentation/appkit/nsbezierpath/clip(_:))

# clip(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Intersects the specified rectangle with the clipping path of the current graphics context and makes the resulting shape the current clipping path.

## Declaration

```swift
class func clip(_ rect: NSRect)
```

## Parameters

- `rect`: The rectangle to intersect with the current clipping path.

## See Also

### Specifying a Clipping Path

- [addClip()](addclip%28%29.md): Intersects the area enclosed by the path with the clipping path of the current graphics context and makes the resulting shape the current clipping path.
- [setClip()](setclip%28%29.md): Replaces the clipping path of the current graphics context with the area inside the path.

# clipRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Intersects the specified rectangle with the clipping path of the current graphics context and makes the resulting shape the current clipping path.

## Declaration

```objectivec
+ (void) clipRect:(NSRect) rect;
```

## Parameters

- `rect`: The rectangle to intersect with the current clipping path.

## See Also

### Specifying a Clipping Path

- [addClip](addclip%28%29.md): Intersects the area enclosed by the path with the clipping path of the current graphics context and makes the resulting shape the current clipping path.
- [setClip](setclip%28%29.md): Replaces the clipping path of the current graphics context with the area inside the path.
