> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpathelement](https://developer.apple.com/documentation/coregraphics/cgpathelement)

# CGPathElement (Swift)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A data structure that provides information about a path element.

## Declaration

```swift
struct CGPathElement
```

## Topics

### Initializers

- [init(type:points:)](cgpathelement/init%28type_points_%29.md)

### Instance Properties

- [points](cgpathelement/points.md): An array of one or more points that serve as arguments.
- [type](cgpathelement/type.md): An element type (or operation).

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Applying a Function to the Elements of a Path

- [apply(info:function:)](cgpath/apply%28info_function_%29.md): For each element in a graphics path, calls a custom applier function.
- [CGPathApplierFunction](cgpathapplierfunction.md): Defines a callback function that can view an element in a graphics path.
- [CGPathElementType](cgpathelementtype.md): The type of element found in a path.

# CGPathElement (Objective-C)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A data structure that provides information about a path element.

## Declaration

```objectivec
struct CGPathElement;
```

## Topics

### Instance Properties

- [points](cgpathelement/points.md): An array of one or more points that serve as arguments.
- [type](cgpathelement/type.md): An element type (or operation).

## See Also

### Applying a Function to the Elements of a Path

- [CGPathApply](cgpath/apply%28info_function_%29.md): For each element in a graphics path, calls a custom applier function.
- [CGPathApplierFunction](cgpathapplierfunction.md): Defines a callback function that can view an element in a graphics path.
- [CGPathElementType](cgpathelementtype.md): The type of element found in a path.
