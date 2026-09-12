> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/context/executefunction(_:arguments:)-52eh3](https://developer.apple.com/documentation/accelerate/bnnsgraph/context/executefunction(_:arguments:)-52eh3)

# executeFunction(\_:arguments:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Synchronously executes the specified function with the provided context.

## Declaration

```swift
func executeFunction(_ function: String? = nil, arguments: inout [BNNSTensor]) throws
```

## Parameters

- `function`: The specific function to execute. You may set this to `nil` if there is only one function.
- `arguments`: The output and input arguments.

<a id="discussion"></a>

## Discussion

If the underlying model contains dynamic shaped inputs or outputs, these must be set prior to calling this routine through a call to either `setDynamicShapes(_:forFunction:)` or `setBatchSize(_:forFunction:)`. Don’t modify the shapes again until this routine has returned.

The same context must only be used by a single thread at a time.

> **See Also**

> `BNNSGraphContextExecute`
