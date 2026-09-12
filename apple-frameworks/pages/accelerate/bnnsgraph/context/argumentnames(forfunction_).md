> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/context/argumentnames(forfunction:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/context/argumentnames(forfunction:))

# argumentNames(forFunction:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

Returns the names of arguments for the given function argument.

## Declaration

```swift
func argumentNames(forFunction function: String? = nil) -> [String]
```

## Parameters

- `function`: The function. Specify as `nil` if the graph only contains one function.

## See Also

### Related Documentation

- [BNNSGraphGetArgumentNames(\_:\_:\_:\_:)](../../bnnsgraphgetargumentnames%28________%29.md): Extracts the names of arguments for the given function argument.

### Specifying and querying a graph context’s properties

- [setDynamicShapes(\_:forFunction:)](setdynamicshapes%28__forfunction_%29.md): Specifies the dynamic shapes for a graph and, if possible, infers the output shapes.
- [BNNSGraph.Shape](../shape.md): The specification of the shape of an argument.
- [argumentCount(forFunction:)](argumentcount%28forfunction_%29.md): Returns the number of arguments for the given function argument.
- [argumentPosition(forFunction:argument:)](argumentposition%28forfunction_argument_%29.md): Returns the index into the arguments array for the given function argument.
- [functionCount](functioncount.md): The number of input arguments for the given function argument.
- [functionNames](functionnames.md): Returns the names of callable functions in the graph.
- [checkForNaNsAndInfinities](checkfornansandinfinities.md): A Boolean value that specifies that the context checks intermediate tensors for NaNs and infinities.
