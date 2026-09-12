> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/context/functioncount](https://developer.apple.com/documentation/accelerate/bnnsgraph/context/functioncount)

# functionCount

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

The number of input arguments for the given function argument.

## Declaration

```swift
var functionCount: Int { get }
```

## See Also

### Related Documentation

- [BNNSGraphGetFunctionCount(\_:)](../../bnnsgraphgetfunctioncount%28__%29.md): Returns the number of callable functions in the specified graph.

### Specifying and querying a graph context’s properties

- [setDynamicShapes(\_:forFunction:)](setdynamicshapes%28__forfunction_%29.md): Specifies the dynamic shapes for a graph and, if possible, infers the output shapes.
- [BNNSGraph.Shape](../shape.md): The specification of the shape of an argument.
- [argumentCount(forFunction:)](argumentcount%28forfunction_%29.md): Returns the number of arguments for the given function argument.
- [argumentNames(forFunction:)](argumentnames%28forfunction_%29.md): Returns the names of arguments for the given function argument.
- [argumentPosition(forFunction:argument:)](argumentposition%28forfunction_argument_%29.md): Returns the index into the arguments array for the given function argument.
- [functionNames](functionnames.md): Returns the names of callable functions in the graph.
- [checkForNaNsAndInfinities](checkfornansandinfinities.md): A Boolean value that specifies that the context checks intermediate tensors for NaNs and infinities.
