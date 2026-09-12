> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpathcreatecopybydashingpath](https://developer.apple.com/documentation/coregraphics/cgpathcreatecopybydashingpath)

# CGPathCreateCopyByDashingPath

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a dashed copy of another path.

## Declaration

```objectivec
extern CGPathRefCGPathCreateCopyByDashingPath(CGPathRef path, const CGAffineTransform *transform, CGFloat phase, const CGFloat *lengths, size_t count);
```

## Parameters

- `path`: The path to copy.
- `transform`: A pointer to an affine transformation matrix, or `NULL` if no transformation is needed. If specified, Core Graphics applies the transformation to elements of the converted path before adding them to the new path.
- `phase`: A value that specifies how far into the dash pattern the line starts, in units of the user space. For example, passing a value of `3` means the line is drawn with the dash pattern starting at three units from its beginning. Passing a value of `0` draws a line starting with the beginning of a dash pattern.
- `lengths`: An array of values that specify the lengths of the painted segments and unpainted segments, respectively, of the dash pattern—or `NULL` for no dash pattern.

  For example, passing an array with the values `[2,3]` sets a dash pattern that alternates between a 2-user-space-unit-long painted segment and a 3-user-space-unit-long unpainted segment. Passing the values `[1,3,4,2]` sets the pattern to a 1-unit painted segment, a 3-unit unpainted segment, a 4-unit painted segment, and a 2-unit unpainted segment.
- `count`: If the `lengths` parameter specifies an array, pass the number of elements in the array. Otherwise, pass `0`.

<a id="return-value"></a>

## Return Value

A new, immutable path. You are responsible for releasing this object.

<a id="Discussion"></a>

## Discussion

The new path is created so that filling the new path draws the same pixels as stroking the original path with the specified dash parameters.

## See Also

### Copying a Graphics Path

- [CGPathCreateCopy](cgpath/copy%28%29.md): Creates an immutable copy of a graphics path.
- [CGPathCreateCopyByTransformingPath](cgpath/copy%28using_%29.md): Creates an immutable copy of a graphics path transformed by a transformation matrix.
- [CGPathCreateCopyByStrokingPath](cgpathcreatecopybystrokingpath.md): Creates a stroked copy of another path.
- [CGPathCreateMutableCopy](cgpath/mutablecopy%28%29.md): Creates a mutable copy of an existing graphics path.
- [CGPathCreateMutableCopyByTransformingPath](cgpath/mutablecopy%28using_%29.md): Creates a mutable copy of a graphics path transformed by a transformation matrix.
