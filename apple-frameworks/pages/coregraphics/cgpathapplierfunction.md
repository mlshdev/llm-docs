> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpathapplierfunction](https://developer.apple.com/documentation/coregraphics/cgpathapplierfunction)

# CGPathApplierFunction (Swift)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines a callback function that can view an element in a graphics path.

## Declaration

```swift
typealias CGPathApplierFunction = (UnsafeMutableRawPointer?, UnsafePointer<CGPathElement>) -> Void
```

<a id="Discussion"></a>

## Discussion

See also [apply(info:function:)](cgpath/apply%28info_function_%29.md).

## See Also

### Applying a Function to the Elements of a Path

- [apply(info:function:)](cgpath/apply%28info_function_%29.md): For each element in a graphics path, calls a custom applier function.
- [CGPathElement](cgpathelement.md): A data structure that provides information about a path element.
- [CGPathElementType](cgpathelementtype.md): The type of element found in a path.

# CGPathApplierFunction (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines a callback function that can view an element in a graphics path.

## Declaration

```objectivec
typedef void (*)(void *, const struct CGPathElement *) CGPathApplierFunction;
```

<a id="Discussion"></a>

## Discussion

See also [CGPathApply](cgpath/apply%28info_function_%29.md).

## See Also

### Applying a Function to the Elements of a Path

- [CGPathApply](cgpath/apply%28info_function_%29.md): For each element in a graphics path, calls a custom applier function.
- [CGPathElement](cgpathelement.md): A data structure that provides information about a path element.
- [CGPathElementType](cgpathelementtype.md): The type of element found in a path.
