> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/context/init(compilefrompath:functionname:options:)-3nn5g](https://developer.apple.com/documentation/accelerate/bnnsgraph/context/init(compilefrompath:functionname:options:)-3nn5g)

# init(compileFromPath:functionName:options:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

Returns a new context that wraps a graph object which represents the compiled `.mlmodelc` file.

## Declaration

```swift
init(compileFromPath path: String, functionName: String? = nil, options: BNNSGraph.CompileOptions = CompileOptions()) async throws
```

## Parameters

- `path`: The path to the `.mlmodelc` program file.
- `functionName`: The name of a specific function to be compiled. Pass `nil` to specify that the function compiles all functions.
- `options`: The compilation options.

<a id="discussion"></a>

## Discussion

> **See Also**

> `BNNSGraphCompileFromFile`

> **See Also**

> `BNNSGraphContextMake`
