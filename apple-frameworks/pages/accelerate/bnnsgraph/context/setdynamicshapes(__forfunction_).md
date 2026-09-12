> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/context/setdynamicshapes(_:forfunction:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/context/setdynamicshapes(_:forfunction:))

# setDynamicShapes(\_:forFunction:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

Specifies the dynamic shapes for a graph and, if possible, infers the output shapes.

## Declaration

```swift
func setDynamicShapes(_ shapes: [BNNSGraph.Shape], forFunction function: String? = nil) async throws -> [BNNSGraph.Shape]
```

## Parameters

- `shapes`: An array of input shapes in the same order as you pass to [BNNSGraphContextExecute(\_:\_:\_:\_:\_:\_:)](../../bnnsgraphcontextexecute%28____________%29.md).

  This function reads input shapes with a nonzero rank, and uses the constant or default value from the source model for input shapes with a zero rank. The function generates an error for shapes with a nonzero value that doesn’t match the source model.
- `function`: The function. Specify as `nil` if the graph only contains one function.

## See Also

### Related Documentation

- [BNNSGraphContextSetDynamicShapes(\_:\_:\_:\_:)](../../bnnsgraphcontextsetdynamicshapes%28________%29.md): Specifies the dynamic shapes for a graph and, if possible, infers, the output shapes.

### Specifying and querying a graph context’s properties

- [BNNSGraph.Shape](../shape.md): The specification of the shape of an argument.
- [argumentCount(forFunction:)](argumentcount%28forfunction_%29.md): Returns the number of arguments for the given function argument.
- [argumentNames(forFunction:)](argumentnames%28forfunction_%29.md): Returns the names of arguments for the given function argument.
- [argumentPosition(forFunction:argument:)](argumentposition%28forfunction_argument_%29.md): Returns the index into the arguments array for the given function argument.
- [functionCount](functioncount.md): The number of input arguments for the given function argument.
- [functionNames](functionnames.md): Returns the names of callable functions in the graph.
- [checkForNaNsAndInfinities](checkfornansandinfinities.md): A Boolean value that specifies that the context checks intermediate tensors for NaNs and infinities.
