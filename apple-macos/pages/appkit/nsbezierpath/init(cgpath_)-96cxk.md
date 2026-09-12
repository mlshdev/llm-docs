> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/init(cgpath:)-96cxk](https://developer.apple.com/documentation/appkit/nsbezierpath/init(cgpath:)-96cxk)

# init(cgPath:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 14.0+

## Declaration

```swift
init(cgPath: CGPath)
```

## See Also

### Creating a Bézier Path

- [init(ovalIn:)](init%28ovalin_%29.md): Creates and returns a new Bézier path object initialized with an oval path inscribed in the specified rectangle.
- [init(rect:)](init%28rect_%29.md): Creates and returns a new Bézier path object initialized with a rectangular path.
- [init(roundedRect:xRadius:yRadius:)](init%28roundedrect_xradius_yradius_%29.md): Creates and returns a new Bézier path object initialized with a rounded rectangular path.
- [flattened](flattened.md): A flattened version of the path object.
- [reversed](reversed.md): A path containing the reversed contents of the current path object.

# bezierPathWithCGPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 14.0+

## Declaration

```objectivec
+ (NSBezierPath *) bezierPathWithCGPath:(CGPathRef) cgPath;
```

## See Also

### Creating a Bézier Path

- [bezierPath](bezierpath.md): Creates and returns a new Bézier path object.
- [bezierPathWithOvalInRect:](init%28ovalin_%29.md): Creates and returns a new Bézier path object initialized with an oval path inscribed in the specified rectangle.
- [bezierPathWithRect:](init%28rect_%29.md): Creates and returns a new Bézier path object initialized with a rectangular path.
- [bezierPathWithRoundedRect:xRadius:yRadius:](init%28roundedrect_xradius_yradius_%29.md): Creates and returns a new Bézier path object initialized with a rounded rectangular path.
- [bezierPathByFlatteningPath](flattened.md): A flattened version of the path object.
- [bezierPathByReversingPath](reversed.md): A path containing the reversed contents of the current path object.
