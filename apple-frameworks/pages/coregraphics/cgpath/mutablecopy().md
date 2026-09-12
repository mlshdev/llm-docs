> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpath/mutablecopy()](https://developer.apple.com/documentation/coregraphics/cgpath/mutablecopy())

# mutableCopy() (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a mutable copy of an existing graphics path.

## Declaration

```swift
func mutableCopy() -> CGMutablePath?
```

<a id="return-value"></a>

## Return Value

A new, mutable, copy of the specified path. You are responsible for releasing this object.

<a id="Discussion"></a>

## Discussion

You can modify a mutable graphics path by calling the various path geometry functions, such as [CGPathAddArc](https://developer.apple.com/documentation/coregraphics/cgpathaddarc), [CGPathAddLineToPoint](https://developer.apple.com/documentation/coregraphics/cgpathaddlinetopoint), and [CGPathMoveToPoint](https://developer.apple.com/documentation/coregraphics/cgpathmovetopoint).

## See Also

### Copying a Graphics Path

- [mutableCopy(using:)](mutablecopy%28using_%29.md): Creates a mutable copy of a graphics path transformed by a transformation matrix.

# CGPathCreateMutableCopy (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a mutable copy of an existing graphics path.

## Declaration

```objectivec
extern CGMutablePathRefCGPathCreateMutableCopy(CGPathRef path);
```

## Parameters

- `path`: The path to copy.

<a id="return-value"></a>

## Return Value

A new, mutable, copy of the specified path. You are responsible for releasing this object.

<a id="Discussion"></a>

## Discussion

You can modify a mutable graphics path by calling the various path geometry functions, such as [CGPathAddArc](https://developer.apple.com/documentation/coregraphics/cgpathaddarc), [CGPathAddLineToPoint](https://developer.apple.com/documentation/coregraphics/cgpathaddlinetopoint), and [CGPathMoveToPoint](https://developer.apple.com/documentation/coregraphics/cgpathmovetopoint).

## See Also

### Copying a Graphics Path

- [CGPathCreateMutableCopyByTransformingPath](mutablecopy%28using_%29.md): Creates a mutable copy of a graphics path transformed by a transformation matrix.
