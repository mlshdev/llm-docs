> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/element(at:)](https://developer.apple.com/documentation/appkit/nsbezierpath/element(at:))

# element(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the type of path element at the specified index.

## Declaration

```swift
func element(at index: Int) -> NSBezierPath.ElementType
```

## Parameters

- `index`: The index of the desired path element.

<a id="return-value"></a>

## Return Value

The type of the path element. For a list of constants, see [NSBezierPath.ElementType](elementtype.md).

<a id="Discussion"></a>

## Discussion

Path elements describe the commands used to define a path and include basic commands such as moving to a specific point, creating a line segment, creating a curve, or closing the path. The elements are stored in the order of their execution.

## See Also

### Related Documentation

- [reversed](reversed.md): A path containing the reversed contents of the current path object.

### Accessing Elements of a Path

- [cgPath](cgpath.md)
- [elementCount](elementcount.md): The total number of path elements in the path.
- [element(at:associatedPoints:)](element%28at_associatedpoints_%29.md): Gets the element type and (and optionally) the associated points for the path element at the specified index.
- [removeAllPoints()](removeallpoints%28%29.md): Removes all path elements from the path, effectively clearing the path.
- [setAssociatedPoints(\_:at:)](setassociatedpoints%28__at_%29.md): Changes the points associated with the specified path element.

# elementAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the type of path element at the specified index.

## Declaration

```objectivec
- (NSBezierPathElement) elementAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the desired path element.

<a id="return-value"></a>

## Return Value

The type of the path element. For a list of constants, see [NSBezierPathElement](elementtype.md).

<a id="Discussion"></a>

## Discussion

Path elements describe the commands used to define a path and include basic commands such as moving to a specific point, creating a line segment, creating a curve, or closing the path. The elements are stored in the order of their execution.

## See Also

### Related Documentation

- [bezierPathByReversingPath](reversed.md): A path containing the reversed contents of the current path object.

### Accessing Elements of a Path

- [CGPath](cgpath.md)
- [elementCount](elementcount.md): The total number of path elements in the path.
- [elementAtIndex:associatedPoints:](element%28at_associatedpoints_%29.md): Gets the element type and (and optionally) the associated points for the path element at the specified index.
- [removeAllPoints](removeallpoints%28%29.md): Removes all path elements from the path, effectively clearing the path.
- [setAssociatedPoints:atIndex:](setassociatedpoints%28__at_%29.md): Changes the points associated with the specified path element.
