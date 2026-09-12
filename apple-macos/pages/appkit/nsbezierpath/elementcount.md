> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/elementcount](https://developer.apple.com/documentation/appkit/nsbezierpath/elementcount)

# elementCount (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The total number of path elements in the path.

## Declaration

```swift
var elementCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

Each element type corresponds to one of the operations described in Path Elements.

## See Also

### Accessing Elements of a Path

- [cgPath](cgpath.md)
- [element(at:)](element%28at_%29.md): Returns the type of path element at the specified index.
- [element(at:associatedPoints:)](element%28at_associatedpoints_%29.md): Gets the element type and (and optionally) the associated points for the path element at the specified index.
- [removeAllPoints()](removeallpoints%28%29.md): Removes all path elements from the path, effectively clearing the path.
- [setAssociatedPoints(\_:at:)](setassociatedpoints%28__at_%29.md): Changes the points associated with the specified path element.

# elementCount (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The total number of path elements in the path.

## Declaration

```objectivec
@property (readonly) NSInteger elementCount;
```

<a id="Discussion"></a>

## Discussion

Each element type corresponds to one of the operations described in Path Elements.

## See Also

### Accessing Elements of a Path

- [CGPath](cgpath.md)
- [elementAtIndex:](element%28at_%29.md): Returns the type of path element at the specified index.
- [elementAtIndex:associatedPoints:](element%28at_associatedpoints_%29.md): Gets the element type and (and optionally) the associated points for the path element at the specified index.
- [removeAllPoints](removeallpoints%28%29.md): Removes all path elements from the path, effectively clearing the path.
- [setAssociatedPoints:atIndex:](setassociatedpoints%28__at_%29.md): Changes the points associated with the specified path element.
