> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/pipelinesdescriptor/init(assembly:)](https://developer.apple.com/documentation/computegraph/computenodegraph/pipelinesdescriptor/init(assembly:))

# init(assembly:)

**Framework:** Compute Graph  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Creates a descriptor configured for the given graph assembly.

## Declaration

```swift
init(assembly: ComputeNodeGraph.Assembly)
```

## Parameters

- `assembly`: The assembled compute graph to compile pipelines for.

<a id="discussion"></a>

## Discussion

`options` defaults to [init()](../pipelines/options-swift.struct/init%28%29.md) and `libraries` is empty. Add shader libraries with [addLibrary(\_:bundle:)](addlibrary%28__bundle_%29.md) before compiling.
