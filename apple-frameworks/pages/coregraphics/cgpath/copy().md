> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpath/copy()](https://developer.apple.com/documentation/coregraphics/cgpath/copy())

# copy() (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an immutable copy of a graphics path.

## Declaration

```swift
func copy() -> CGPath?
```

<a id="return-value"></a>

## Return Value

A new, immutable copy of the specified path. You are responsible for releasing this object.

## See Also

### Copying a Graphics Path

- [copy(using:)](copy%28using_%29.md): Creates an immutable copy of a graphics path transformed by a transformation matrix.
- [copy(dashingWithPhase:lengths:transform:)](copy%28dashingwithphase_lengths_transform_%29.md): Returns a new path equivalent to the results of drawing the path with a dashed stroke.
- [copy(strokingWithWidth:lineCap:lineJoin:miterLimit:transform:)](copy%28strokingwithwidth_linecap_linejoin_miterlimit_transform_%29.md): Returns a new path equivalent to the results of drawing the path with a solid stroke.
- [mutableCopy()](mutablecopy%28%29.md): Creates a mutable copy of an existing graphics path.
- [mutableCopy(using:)](mutablecopy%28using_%29.md): Creates a mutable copy of a graphics path transformed by a transformation matrix.

# CGPathCreateCopy (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an immutable copy of a graphics path.

## Declaration

```objectivec
extern CGPathRefCGPathCreateCopy(CGPathRef path);
```

## Parameters

- `path`: The path to copy.

<a id="return-value"></a>

## Return Value

A new, immutable copy of the specified path. You are responsible for releasing this object.

## See Also

### Copying a Graphics Path

- [CGPathCreateCopyByTransformingPath](copy%28using_%29.md): Creates an immutable copy of a graphics path transformed by a transformation matrix.
- [CGPathCreateCopyByDashingPath](../cgpathcreatecopybydashingpath.md): Creates a dashed copy of another path.
- [CGPathCreateCopyByStrokingPath](../cgpathcreatecopybystrokingpath.md): Creates a stroked copy of another path.
- [CGPathCreateMutableCopy](mutablecopy%28%29.md): Creates a mutable copy of an existing graphics path.
- [CGPathCreateMutableCopyByTransformingPath](mutablecopy%28using_%29.md): Creates a mutable copy of a graphics path transformed by a transformation matrix.
