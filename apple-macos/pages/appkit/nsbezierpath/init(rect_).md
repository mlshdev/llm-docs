> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/init(rect:)](https://developer.apple.com/documentation/appkit/nsbezierpath/init(rect:))

# init(rect:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates and returns a new Bézier path object initialized with a rectangular path.

## Declaration

```swift
init(rect: NSRect)
```

## Parameters

- `rect`: The rectangle describing the path to create.

<a id="return-value"></a>

## Return Value

A new path object with the rectangular path.

<a id="Discussion"></a>

## Discussion

The path is constructed by starting at the origin of `aRect` and adding line segments in a counterclockwise direction.

## See Also

### Related Documentation

- [fill(\_:)](fill%28__%29.md): Fills the specified rectangular path with the current fill color.
- [stroke(\_:)](stroke%28__%29.md): Strokes the path of the specified rectangle using the current stroke color and the default drawing attributes.
- [appendRect(\_:)](appendrect%28__%29.md): Appends a rectangular path to the path.

### Creating a Bézier Path

- [init(ovalIn:)](init%28ovalin_%29.md): Creates and returns a new Bézier path object initialized with an oval path inscribed in the specified rectangle.
- [init(roundedRect:xRadius:yRadius:)](init%28roundedrect_xradius_yradius_%29.md): Creates and returns a new Bézier path object initialized with a rounded rectangular path.
- [init(cgPath:)](init%28cgpath_%29-96cxk.md)
- [flattened](flattened.md): A flattened version of the path object.
- [reversed](reversed.md): A path containing the reversed contents of the current path object.

# bezierPathWithRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns a new Bézier path object initialized with a rectangular path.

## Declaration

```objectivec
+ (NSBezierPath *) bezierPathWithRect:(NSRect) rect;
```

## Parameters

- `rect`: The rectangle describing the path to create.

<a id="return-value"></a>

## Return Value

A new path object with the rectangular path.

<a id="Discussion"></a>

## Discussion

The path is constructed by starting at the origin of `aRect` and adding line segments in a counterclockwise direction.

## See Also

### Related Documentation

- [fillRect:](fill%28__%29.md): Fills the specified rectangular path with the current fill color.
- [bezierPath](bezierpath.md): Creates and returns a new Bézier path object.
- [strokeRect:](stroke%28__%29.md): Strokes the path of the specified rectangle using the current stroke color and the default drawing attributes.
- [appendBezierPathWithRect:](appendrect%28__%29.md): Appends a rectangular path to the path.

### Creating a Bézier Path

- [bezierPath](bezierpath.md): Creates and returns a new Bézier path object.
- [bezierPathWithOvalInRect:](init%28ovalin_%29.md): Creates and returns a new Bézier path object initialized with an oval path inscribed in the specified rectangle.
- [bezierPathWithRoundedRect:xRadius:yRadius:](init%28roundedrect_xradius_yradius_%29.md): Creates and returns a new Bézier path object initialized with a rounded rectangular path.
- [bezierPathWithCGPath:](init%28cgpath_%29-96cxk.md)
- [bezierPathByFlatteningPath](flattened.md): A flattened version of the path object.
- [bezierPathByReversingPath](reversed.md): A path containing the reversed contents of the current path object.
