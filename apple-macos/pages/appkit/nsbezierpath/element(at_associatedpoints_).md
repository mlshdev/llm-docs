> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/element(at:associatedpoints:)](https://developer.apple.com/documentation/appkit/nsbezierpath/element(at:associatedpoints:))

# element(at:associatedPoints:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Gets the element type and (and optionally) the associated points for the path element at the specified index.

## Declaration

```swift
func element(at index: Int, associatedPoints points: NSPointArray?) -> NSBezierPath.ElementType
```

## Parameters

- `index`: The index of the desired path element.
- `points`: On input, a C-style array containing up to three `NSPoint` data types, or `NULL` if you do not want the points. On output, the data points associated with the specified path element.

<a id="return-value"></a>

## Return Value

The type of the path element. For a list of constants, see [NSBezierPath.ElementType](elementtype.md).

<a id="Discussion"></a>

## Discussion

If you specify a value for the points parameter, your array must be large enough to hold the number of points for the given path element. Move, close path, and line segment commands return one point. Curve operations return three points.

For curve operations, the order of the points is controlPoint1 (`points`\[0\]), controlPoint2 (`points`\[1\]), endPoint (`points`\[2\]).

## See Also

### Accessing Elements of a Path

- [cgPath](cgpath.md)
- [elementCount](elementcount.md): The total number of path elements in the path.
- [element(at:)](element%28at_%29.md): Returns the type of path element at the specified index.
- [removeAllPoints()](removeallpoints%28%29.md): Removes all path elements from the path, effectively clearing the path.
- [setAssociatedPoints(\_:at:)](setassociatedpoints%28__at_%29.md): Changes the points associated with the specified path element.

# elementAtIndex:associatedPoints: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Gets the element type and (and optionally) the associated points for the path element at the specified index.

## Declaration

```objectivec
- (NSBezierPathElement) elementAtIndex:(NSInteger) index associatedPoints:(NSPointArray) points;
```

## Parameters

- `index`: The index of the desired path element.
- `points`: On input, a C-style array containing up to three `NSPoint` data types, or `NULL` if you do not want the points. On output, the data points associated with the specified path element.

<a id="return-value"></a>

## Return Value

The type of the path element. For a list of constants, see [NSBezierPathElement](elementtype.md).

<a id="Discussion"></a>

## Discussion

If you specify a value for the points parameter, your array must be large enough to hold the number of points for the given path element. Move, close path, and line segment commands return one point. Curve operations return three points.

For curve operations, the order of the points is controlPoint1 (`points`\[0\]), controlPoint2 (`points`\[1\]), endPoint (`points`\[2\]).

## See Also

### Accessing Elements of a Path

- [CGPath](cgpath.md)
- [elementCount](elementcount.md): The total number of path elements in the path.
- [elementAtIndex:](element%28at_%29.md): Returns the type of path element at the specified index.
- [removeAllPoints](removeallpoints%28%29.md): Removes all path elements from the path, effectively clearing the path.
- [setAssociatedPoints:atIndex:](setassociatedpoints%28__at_%29.md): Changes the points associated with the specified path element.
