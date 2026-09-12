> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/pipelinesdescriptor](https://developer.apple.com/documentation/computegraph/computenodegraph/pipelinesdescriptor)

# ComputeNodeGraph.PipelinesDescriptor

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Specifies the configuration used to compile a set of compute pipelines for a compute graph effect.

## Declaration

```swift
struct PipelinesDescriptor
```

<a id="overview"></a>

## Overview

Use a descriptor when you need explicit control over pipeline compilation — for example, to supply Metal libraries from multiple bundles or to enable debug draw. Pass the configured descriptor to `ComputeNodeGraph.Pipelines/init(descriptor:)` to compile.

```swift
var descriptor = ComputeNodeGraph.PipelinesDescriptor(assembly: assembly)
descriptor.addLibrary(myMTLLibrary, bundle: "com.example.MyEffects")
descriptor.options.debugDraw = true
let pipelines = try await ComputeNodeGraph.Pipelines(descriptor: descriptor)
```

## Topics

### Initializers

- [init(assembly:)](pipelinesdescriptor/init%28assembly_%29.md): Creates a descriptor configured for the given graph assembly.

### Instance Properties

- [assembly](pipelinesdescriptor/assembly.md): The assembled compute graph layout that defines the graph’s buffer, uniform, and texture configuration.
- [libraries](pipelinesdescriptor/libraries.md): The Metal libraries that provide shader function implementations for the graph’s nodes.
- [options](pipelinesdescriptor/options.md): Options controlling pipeline compilation, such as whether debug draw is enabled.

### Instance Methods

- [addLibrary(\_:bundle:)](pipelinesdescriptor/addlibrary%28__bundle_%29.md)
- [setLibrary(\_:)](pipelinesdescriptor/setlibrary%28__%29.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
