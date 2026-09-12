> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/init(ovalin:)](https://developer.apple.com/documentation/appkit/nsbezierpath/init(ovalin:))

# init(ovalIn:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates and returns a new Bézier path object initialized with an oval path inscribed in the specified rectangle.

## Declaration

```swift
init(ovalIn rect: NSRect)
```

## Parameters

- `rect`: The rectangle in which to inscribe an oval.

<a id="return-value"></a>

## Return Value

An `NSBezierPath` new path object with the oval path.

<a id="Discussion"></a>

## Discussion

If the `aRect` parameter specifies a square, the inscribed path is a circle. The path is constructed by starting in the lower-right quadrant of the rectangle and adding arc segments counterclockwise to complete the oval.

## See Also

### Related Documentation

- [appendOval(in:)](appendoval%28in_%29.md): Appends an oval path to the path, inscribing the oval in the specified rectangle.

### Creating a Bézier Path

- [init(rect:)](init%28rect_%29.md): Creates and returns a new Bézier path object initialized with a rectangular path.
- [init(roundedRect:xRadius:yRadius:)](init%28roundedrect_xradius_yradius_%29.md): Creates and returns a new Bézier path object initialized with a rounded rectangular path.
- [init(cgPath:)](init%28cgpath_%29-96cxk.md)
- [flattened](flattened.md): A flattened version of the path object.
- [reversed](reversed.md): A path containing the reversed contents of the current path object.

# bezierPathWithOvalInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns a new Bézier path object initialized with an oval path inscribed in the specified rectangle.

## Declaration

```objectivec
+ (NSBezierPath *) bezierPathWithOvalInRect:(NSRect) rect;
```

## Parameters

- `rect`: The rectangle in which to inscribe an oval.

<a id="return-value"></a>

## Return Value

An `NSBezierPath` new path object with the oval path.

<a id="Discussion"></a>

## Discussion

If the `aRect` parameter specifies a square, the inscribed path is a circle. The path is constructed by starting in the lower-right quadrant of the rectangle and adding arc segments counterclockwise to complete the oval.

## See Also

### Related Documentation

- [bezierPath](bezierpath.md): Creates and returns a new Bézier path object.
- [appendBezierPathWithOvalInRect:](appendoval%28in_%29.md): Appends an oval path to the path, inscribing the oval in the specified rectangle.

### Creating a Bézier Path

- [bezierPath](bezierpath.md): Creates and returns a new Bézier path object.
- [bezierPathWithRect:](init%28rect_%29.md): Creates and returns a new Bézier path object initialized with a rectangular path.
- [bezierPathWithRoundedRect:xRadius:yRadius:](init%28roundedrect_xradius_yradius_%29.md): Creates and returns a new Bézier path object initialized with a rounded rectangular path.
- [bezierPathWithCGPath:](init%28cgpath_%29-96cxk.md)
- [bezierPathByFlatteningPath](flattened.md): A flattened version of the path object.
- [bezierPathByReversingPath](reversed.md): A path containing the reversed contents of the current path object.
