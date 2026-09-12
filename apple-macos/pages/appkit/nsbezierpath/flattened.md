> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/flattened](https://developer.apple.com/documentation/appkit/nsbezierpath/flattened)

# flattened (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A flattened version of the path object.

## Declaration

```swift
@NSCopying var flattened: NSBezierPath { get }
```

<a id="Discussion"></a>

## Discussion

Flattening a path converts all curved line segments into straight line approximations. The granularity of the approximations is controlled by the path’s current flatness value, which is set using [defaultFlatness](defaultflatness.md).

## See Also

### Creating a Bézier Path

- [init(ovalIn:)](init%28ovalin_%29.md): Creates and returns a new Bézier path object initialized with an oval path inscribed in the specified rectangle.
- [init(rect:)](init%28rect_%29.md): Creates and returns a new Bézier path object initialized with a rectangular path.
- [init(roundedRect:xRadius:yRadius:)](init%28roundedrect_xradius_yradius_%29.md): Creates and returns a new Bézier path object initialized with a rounded rectangular path.
- [init(cgPath:)](init%28cgpath_%29-96cxk.md)
- [reversed](reversed.md): A path containing the reversed contents of the current path object.

# bezierPathByFlatteningPath (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A flattened version of the path object.

## Declaration

```objectivec
@property (copy, readonly) NSBezierPath * bezierPathByFlatteningPath;
```

<a id="Discussion"></a>

## Discussion

Flattening a path converts all curved line segments into straight line approximations. The granularity of the approximations is controlled by the path’s current flatness value, which is set using [defaultFlatness](defaultflatness.md).

## See Also

### Creating a Bézier Path

- [bezierPath](bezierpath.md): Creates and returns a new Bézier path object.
- [bezierPathWithOvalInRect:](init%28ovalin_%29.md): Creates and returns a new Bézier path object initialized with an oval path inscribed in the specified rectangle.
- [bezierPathWithRect:](init%28rect_%29.md): Creates and returns a new Bézier path object initialized with a rectangular path.
- [bezierPathWithRoundedRect:xRadius:yRadius:](init%28roundedrect_xradius_yradius_%29.md): Creates and returns a new Bézier path object initialized with a rounded rectangular path.
- [bezierPathWithCGPath:](init%28cgpath_%29-96cxk.md)
- [bezierPathByReversingPath](reversed.md): A path containing the reversed contents of the current path object.
