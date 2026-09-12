> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpath/mutablecopy(using:)](https://developer.apple.com/documentation/coregraphics/cgpath/mutablecopy(using:))

# mutableCopy(using:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a mutable copy of a graphics path transformed by a transformation matrix.

## Declaration

```swift
func mutableCopy(using transform: UnsafePointer<CGAffineTransform>?) -> CGMutablePath?
```

## Parameters

- `transform`: A pointer to an affine transformation matrix, or `NULL` if no transformation is needed. If specified, Core Graphics applies the transformation to all elements of the new path.

<a id="return-value"></a>

## Return Value

A new, mutable copy of the specified path transformed by the transform parameter. You are responsible for releasing this object.

## See Also

### Copying a Graphics Path

- [mutableCopy()](mutablecopy%28%29.md): Creates a mutable copy of an existing graphics path.

# CGPathCreateMutableCopyByTransformingPath (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a mutable copy of a graphics path transformed by a transformation matrix.

## Declaration

```objectivec
extern CGMutablePathRefCGPathCreateMutableCopyByTransformingPath(CGPathRef path, const CGAffineTransform *transform);
```

## Parameters

- `path`: The path to copy.
- `transform`: A pointer to an affine transformation matrix, or `NULL` if no transformation is needed. If specified, Core Graphics applies the transformation to all elements of the new path.

<a id="return-value"></a>

## Return Value

A new, mutable copy of the specified path transformed by the transform parameter. You are responsible for releasing this object.

## See Also

### Copying a Graphics Path

- [CGPathCreateMutableCopy](mutablecopy%28%29.md): Creates a mutable copy of an existing graphics path.
