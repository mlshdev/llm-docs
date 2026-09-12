> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/shape](https://developer.apple.com/documentation/accelerate/bnnsgraph/shape)

# BNNSGraph.Shape

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

The specification of the shape of an argument.

## Declaration

```swift
struct Shape
```

<a id="overview"></a>

## Overview

The [setDynamicShapes(\_:forFunction:)](context/setdynamicshapes%28__forfunction_%29.md) function uses arrays of [BNNSGraph.Shape](shape.md) structures as its input and output. This structure wraps the C API [bnns_graph_shape_t](../bnns_graph_shape_t.md) type and derives its rank from the number of elements in the [dimensions](shape/dimensions.md) array.

## Topics

### Creating a shape structure

- [init(arrayLiteral:)](shape/init%28arrayliteral_%29.md): Creates a shape structure from the given array literal.
- [init(\_:)](shape/init%28__%29.md): Creates a shape structure from the given array elements.

### Querying a shape structure’s properties

- [dimensions](shape/dimensions.md): An array that contains the dimensions of the shape structure.

### Type Aliases

- [BNNSGraph.Shape.ArrayLiteralElement](shape/arrayliteralelement.md): The type of the elements of an array literal.

## Relationships

### Conforms To

- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)

## See Also

### Specifying and querying a graph context’s properties

- [setDynamicShapes(\_:forFunction:)](context/setdynamicshapes%28__forfunction_%29.md): Specifies the dynamic shapes for a graph and, if possible, infers the output shapes.
- [argumentCount(forFunction:)](context/argumentcount%28forfunction_%29.md): Returns the number of arguments for the given function argument.
- [argumentNames(forFunction:)](context/argumentnames%28forfunction_%29.md): Returns the names of arguments for the given function argument.
- [argumentPosition(forFunction:argument:)](context/argumentposition%28forfunction_argument_%29.md): Returns the index into the arguments array for the given function argument.
- [functionCount](context/functioncount.md): The number of input arguments for the given function argument.
- [functionNames](context/functionnames.md): Returns the names of callable functions in the graph.
- [checkForNaNsAndInfinities](context/checkfornansandinfinities.md): A Boolean value that specifies that the context checks intermediate tensors for NaNs and infinities.
