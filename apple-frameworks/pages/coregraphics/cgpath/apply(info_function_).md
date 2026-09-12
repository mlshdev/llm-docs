> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpath/apply(info:function:)](https://developer.apple.com/documentation/coregraphics/cgpath/apply(info:function:))

# apply(info:function:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

For each element in a graphics path, calls a custom applier function.

## Declaration

```swift
func apply(info: UnsafeMutableRawPointer?, function: CGPathApplierFunction)
```

## Parameters

- `info`: A pointer to the user data that Core Graphics will pass to the function being applied, or `NULL`.
- `function`: A pointer to the function to apply. See [CGPathApplierFunction](../cgpathapplierfunction.md) for more information.

<a id="Discussion"></a>

## Discussion

For each element in the specified path, Core Graphics calls the applier function, which can examine (but not modify) the element.

## See Also

### Applying a Function to the Elements of a Path

- [CGPathApplierFunction](../cgpathapplierfunction.md): Defines a callback function that can view an element in a graphics path.
- [CGPathElement](../cgpathelement.md): A data structure that provides information about a path element.
- [CGPathElementType](../cgpathelementtype.md): The type of element found in a path.

# CGPathApply (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

For each element in a graphics path, calls a custom applier function.

## Declaration

```objectivec
extern void CGPathApply(CGPathRef path, void *info, CGPathApplierFunction function);
```

## Parameters

- `path`: The path to which the function will be applied.
- `info`: A pointer to the user data that Core Graphics will pass to the function being applied, or `NULL`.
- `function`: A pointer to the function to apply. See [CGPathApplierFunction](../cgpathapplierfunction.md) for more information.

<a id="Discussion"></a>

## Discussion

For each element in the specified path, Core Graphics calls the applier function, which can examine (but not modify) the element.

## See Also

### Applying a Function to the Elements of a Path

- [CGPathApplierFunction](../cgpathapplierfunction.md): Defines a callback function that can view an element in a graphics path.
- [CGPathElement](../cgpathelement.md): A data structure that provides information about a path element.
- [CGPathElementType](../cgpathelementtype.md): The type of element found in a path.
