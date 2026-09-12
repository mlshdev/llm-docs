> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/bezierpath](https://developer.apple.com/documentation/appkit/nsbezierpath/bezierpath)

# bezierPath

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns a new Bézier path object.

## Declaration

```objectivec
+ (NSBezierPath *) bezierPath;
```

<a id="return-value"></a>

## Return Value

A new empty path object.

## See Also

### Creating a Bézier Path

- [bezierPathWithOvalInRect:](init%28ovalin_%29.md): Creates and returns a new Bézier path object initialized with an oval path inscribed in the specified rectangle.
- [bezierPathWithRect:](init%28rect_%29.md): Creates and returns a new Bézier path object initialized with a rectangular path.
- [bezierPathWithRoundedRect:xRadius:yRadius:](init%28roundedrect_xradius_yradius_%29.md): Creates and returns a new Bézier path object initialized with a rounded rectangular path.
- [bezierPathWithCGPath:](init%28cgpath_%29-96cxk.md)
- [bezierPathByFlatteningPath](flattened.md): A flattened version of the path object.
- [bezierPathByReversingPath](reversed.md): A path containing the reversed contents of the current path object.
