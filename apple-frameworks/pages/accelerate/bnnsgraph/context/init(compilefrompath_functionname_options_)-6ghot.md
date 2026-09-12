> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/context/init(compilefrompath:functionname:options:)-6ghot](https://developer.apple.com/documentation/accelerate/bnnsgraph/context/init(compilefrompath:functionname:options:)-6ghot)

# init(compileFromPath:functionName:options:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Synchronously returns a new context that wraps a graph object which represents the compiled `.mlmodelc` file.

## Declaration

```swift
init(compileFromPath path: String, functionName: String? = nil, options: BNNSGraph.CompileOptions = CompileOptions()) throws
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
