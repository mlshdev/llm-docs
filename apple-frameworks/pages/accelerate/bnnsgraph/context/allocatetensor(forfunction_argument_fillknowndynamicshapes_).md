> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/context/allocatetensor(forfunction:argument:fillknowndynamicshapes:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/context/allocatetensor(forfunction:argument:fillknowndynamicshapes:))

# allocateTensor(forFunction:argument:fillKnownDynamicShapes:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns an allocated tensor for a given function argument.

## Declaration

```swift
func allocateTensor(forFunction function: String? = nil, argument: String, fillKnownDynamicShapes: Bool) -> BNNSTensor?
```

## Parameters

- `function`: The specific function to create the tensor for. You may set this to `nil` if there is only one function.
- `argument`: The argument to create the tensor for.
- `fillKnownDynamicShapes`: If `true`, the function replaces any dynamic shapes with shapes that will be used on next execution of `Context`, either drawn from default shapes in the `.mlmodelc` function or supplied by a preceding call to `setDynamicShapes(_:forFunction:)` or `setBatchSize(_:forFunction:)`. Otherwise the function represents dynamically-sized dimensions with a value of `-1` in either shape or stride as appropriate.

<a id="discussion"></a>

## Discussion

> **Note**

> This function supports `Float`, `Float16`, `Bool`, and `Int32` datatypes only and returns `nil` for other types.

> **See Also**

> `BNNSGraphContextGetTensor`
