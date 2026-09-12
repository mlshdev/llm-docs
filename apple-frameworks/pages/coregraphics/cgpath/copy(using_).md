> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpath/copy(using:)](https://developer.apple.com/documentation/coregraphics/cgpath/copy(using:))

# copy(using:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an immutable copy of a graphics path transformed by a transformation matrix.

## Declaration

```swift
func copy(using transform: UnsafePointer<CGAffineTransform>?) -> CGPath?
```

## Parameters

- `transform`: A pointer to an affine transformation matrix, or `NULL` if no transformation is needed. If specified, Core Graphics applies the transformation to all elements of the new path.

<a id="return-value"></a>

## Return Value

A new, immutable copy of the path. You are responsible for releasing this object.

## See Also

### Copying a Graphics Path

- [copy()](copy%28%29.md): Creates an immutable copy of a graphics path.
- [copy(dashingWithPhase:lengths:transform:)](copy%28dashingwithphase_lengths_transform_%29.md): Returns a new path equivalent to the results of drawing the path with a dashed stroke.
- [copy(strokingWithWidth:lineCap:lineJoin:miterLimit:transform:)](copy%28strokingwithwidth_linecap_linejoin_miterlimit_transform_%29.md): Returns a new path equivalent to the results of drawing the path with a solid stroke.
- [mutableCopy()](mutablecopy%28%29.md): Creates a mutable copy of an existing graphics path.
- [mutableCopy(using:)](mutablecopy%28using_%29.md): Creates a mutable copy of a graphics path transformed by a transformation matrix.

# CGPathCreateCopyByTransformingPath (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an immutable copy of a graphics path transformed by a transformation matrix.

## Declaration

```objectivec
extern CGPathRefCGPathCreateCopyByTransformingPath(CGPathRef path, const CGAffineTransform *transform);
```

## Parameters

- `path`: The path to copy.
- `transform`: A pointer to an affine transformation matrix, or `NULL` if no transformation is needed. If specified, Core Graphics applies the transformation to all elements of the new path.

<a id="return-value"></a>

## Return Value

A new, immutable copy of the path. You are responsible for releasing this object.

## See Also

### Copying a Graphics Path

- [CGPathCreateCopy](copy%28%29.md): Creates an immutable copy of a graphics path.
- [CGPathCreateCopyByDashingPath](../cgpathcreatecopybydashingpath.md): Creates a dashed copy of another path.
- [CGPathCreateCopyByStrokingPath](../cgpathcreatecopybystrokingpath.md): Creates a stroked copy of another path.
- [CGPathCreateMutableCopy](mutablecopy%28%29.md): Creates a mutable copy of an existing graphics path.
- [CGPathCreateMutableCopyByTransformingPath](mutablecopy%28using_%29.md): Creates a mutable copy of a graphics path transformed by a transformation matrix.
