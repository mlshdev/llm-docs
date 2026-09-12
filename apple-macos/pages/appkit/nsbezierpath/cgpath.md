> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/cgpath](https://developer.apple.com/documentation/appkit/nsbezierpath/cgpath)

# cgPath (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

## Declaration

```swift
var cgPath: CGPath { get set }
```

## See Also

### Accessing Elements of a Path

- [elementCount](elementcount.md): The total number of path elements in the path.
- [element(at:)](element%28at_%29.md): Returns the type of path element at the specified index.
- [element(at:associatedPoints:)](element%28at_associatedpoints_%29.md): Gets the element type and (and optionally) the associated points for the path element at the specified index.
- [removeAllPoints()](removeallpoints%28%29.md): Removes all path elements from the path, effectively clearing the path.
- [setAssociatedPoints(\_:at:)](setassociatedpoints%28__at_%29.md): Changes the points associated with the specified path element.

# CGPath (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

## Declaration

```objectivec
@property (nonnull) CGPathRef CGPath;
```

## See Also

### Accessing Elements of a Path

- [elementCount](elementcount.md): The total number of path elements in the path.
- [elementAtIndex:](element%28at_%29.md): Returns the type of path element at the specified index.
- [elementAtIndex:associatedPoints:](element%28at_associatedpoints_%29.md): Gets the element type and (and optionally) the associated points for the path element at the specified index.
- [removeAllPoints](removeallpoints%28%29.md): Removes all path elements from the path, effectively clearing the path.
- [setAssociatedPoints:atIndex:](setassociatedpoints%28__at_%29.md): Changes the points associated with the specified path element.
