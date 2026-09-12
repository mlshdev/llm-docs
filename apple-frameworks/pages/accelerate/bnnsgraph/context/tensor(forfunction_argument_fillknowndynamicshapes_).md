> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/context/tensor(forfunction:argument:fillknowndynamicshapes:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/context/tensor(forfunction:argument:fillknowndynamicshapes:))

# tensor(forFunction:argument:fillKnownDynamicShapes:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

Returns an unallocated tensor for a given function argument.

## Declaration

```swift
func tensor(forFunction function: String? = nil, argument: String, fillKnownDynamicShapes: Bool) -> BNNSTensor?
```

## Parameters

- `function`: The function. Specify as `nil` if the graph only contains one function.
- `argument`: The name of the input or output argument.
- `fillKnownDynamicShapes`: A Boolean value that specifies whether the function should replace any dynamic shapes for the next execution of the context. BNNS derives these shapes either from the default shapes in the source model, or from preceding calls to [setDynamicShapes(\_:forFunction:)](setdynamicshapes%28__forfunction_%29.md) or `/Accelerate/BNNSGraph/Context/setBatchSize(_:forFunction:)`. If BNNS is unable to derive the shapes, the function sets the dimensions to `-1`.

## See Also

### Related Documentation

- [BNNSGraphContextGetTensor(\_:\_:\_:\_:\_:)](../../bnnsgraphcontextgettensor%28__________%29.md): Sets the properties of a tensor for the specified function argument.
