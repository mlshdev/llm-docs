> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/reversed](https://developer.apple.com/documentation/appkit/nsbezierpath/reversed)

# reversed (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A path containing the reversed contents of the current path object.

## Declaration

```swift
@NSCopying var reversed: NSBezierPath { get }
```

<a id="Discussion"></a>

## Discussion

The reversed path does not necessarily have a different appearance when rendered. Instead, it changes the direction in which path segments are drawn. For example, reversing the path of a rectangle (whose line segments are normally drawn starting at the origin and proceeding in a counterclockwise direction) causes its line segments to be drawn in a clockwise direction instead. Drawing a reversed path could affect the appearance of a filled pattern, depending on the pattern and the fill rule in use.

The path in this property is created by reversing each whole or partial subpath in the path object individually.

## See Also

### Creating a Bézier Path

- [init(ovalIn:)](init%28ovalin_%29.md): Creates and returns a new Bézier path object initialized with an oval path inscribed in the specified rectangle.
- [init(rect:)](init%28rect_%29.md): Creates and returns a new Bézier path object initialized with a rectangular path.
- [init(roundedRect:xRadius:yRadius:)](init%28roundedrect_xradius_yradius_%29.md): Creates and returns a new Bézier path object initialized with a rounded rectangular path.
- [init(cgPath:)](init%28cgpath_%29-96cxk.md)
- [flattened](flattened.md): A flattened version of the path object.

# bezierPathByReversingPath (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A path containing the reversed contents of the current path object.

## Declaration

```objectivec
@property (copy, readonly) NSBezierPath * bezierPathByReversingPath;
```

<a id="Discussion"></a>

## Discussion

The reversed path does not necessarily have a different appearance when rendered. Instead, it changes the direction in which path segments are drawn. For example, reversing the path of a rectangle (whose line segments are normally drawn starting at the origin and proceeding in a counterclockwise direction) causes its line segments to be drawn in a clockwise direction instead. Drawing a reversed path could affect the appearance of a filled pattern, depending on the pattern and the fill rule in use.

The path in this property is created by reversing each whole or partial subpath in the path object individually.

## See Also

### Creating a Bézier Path

- [bezierPath](bezierpath.md): Creates and returns a new Bézier path object.
- [bezierPathWithOvalInRect:](init%28ovalin_%29.md): Creates and returns a new Bézier path object initialized with an oval path inscribed in the specified rectangle.
- [bezierPathWithRect:](init%28rect_%29.md): Creates and returns a new Bézier path object initialized with a rectangular path.
- [bezierPathWithRoundedRect:xRadius:yRadius:](init%28roundedrect_xradius_yradius_%29.md): Creates and returns a new Bézier path object initialized with a rounded rectangular path.
- [bezierPathWithCGPath:](init%28cgpath_%29-96cxk.md)
- [bezierPathByFlatteningPath](flattened.md): A flattened version of the path object.
