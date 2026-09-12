> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/init(roundedrect:xradius:yradius:)](https://developer.apple.com/documentation/appkit/nsbezierpath/init(roundedrect:xradius:yradius:))

# init(roundedRect:xRadius:yRadius:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Creates and returns a new Bézier path object initialized with a rounded rectangular path.

## Declaration

```swift
init(roundedRect rect: NSRect, xRadius: CGFloat, yRadius: CGFloat)
```

## Parameters

- `rect`: The rectangle that defines the basic shape of the path.
- `xRadius`: The radius of each corner oval along the x-axis. Values larger than half the rectangle’s width are clamped to half the width.
- `yRadius`: The radius of each corner oval along the y-axis. Values larger than half the rectangle’s height are clamped to half the height.

<a id="return-value"></a>

## Return Value

A new path object with the rounded rectangular path.

<a id="Discussion"></a>

## Discussion

The path is constructed in a counter-clockwise direction, starting at the top-left corner of the rectangle. If either one of the radius parameters contains the value `0.0`, the returned path is a plain rectangle without rounded corners.

## See Also

### Related Documentation

- [appendRoundedRect(\_:xRadius:yRadius:)](appendroundedrect%28__xradius_yradius_%29.md): Appends a rounded rectangular path to the path.

### Creating a Bézier Path

- [init(ovalIn:)](init%28ovalin_%29.md): Creates and returns a new Bézier path object initialized with an oval path inscribed in the specified rectangle.
- [init(rect:)](init%28rect_%29.md): Creates and returns a new Bézier path object initialized with a rectangular path.
- [init(cgPath:)](init%28cgpath_%29-96cxk.md)
- [flattened](flattened.md): A flattened version of the path object.
- [reversed](reversed.md): A path containing the reversed contents of the current path object.

# bezierPathWithRoundedRect:xRadius:yRadius: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Creates and returns a new Bézier path object initialized with a rounded rectangular path.

## Declaration

```objectivec
+ (NSBezierPath *) bezierPathWithRoundedRect:(NSRect) rect xRadius:(CGFloat) xRadius yRadius:(CGFloat) yRadius;
```

## Parameters

- `rect`: The rectangle that defines the basic shape of the path.
- `xRadius`: The radius of each corner oval along the x-axis. Values larger than half the rectangle’s width are clamped to half the width.
- `yRadius`: The radius of each corner oval along the y-axis. Values larger than half the rectangle’s height are clamped to half the height.

<a id="return-value"></a>

## Return Value

A new path object with the rounded rectangular path.

<a id="Discussion"></a>

## Discussion

The path is constructed in a counter-clockwise direction, starting at the top-left corner of the rectangle. If either one of the radius parameters contains the value `0.0`, the returned path is a plain rectangle without rounded corners.

## See Also

### Related Documentation

- [bezierPath](bezierpath.md): Creates and returns a new Bézier path object.
- [appendBezierPathWithRoundedRect:xRadius:yRadius:](appendroundedrect%28__xradius_yradius_%29.md): Appends a rounded rectangular path to the path.

### Creating a Bézier Path

- [bezierPath](bezierpath.md): Creates and returns a new Bézier path object.
- [bezierPathWithOvalInRect:](init%28ovalin_%29.md): Creates and returns a new Bézier path object initialized with an oval path inscribed in the specified rectangle.
- [bezierPathWithRect:](init%28rect_%29.md): Creates and returns a new Bézier path object initialized with a rectangular path.
- [bezierPathWithCGPath:](init%28cgpath_%29-96cxk.md)
- [bezierPathByFlatteningPath](flattened.md): A flattened version of the path object.
- [bezierPathByReversingPath](reversed.md): A path containing the reversed contents of the current path object.
