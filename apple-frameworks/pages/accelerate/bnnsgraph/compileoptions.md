> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/compileoptions](https://developer.apple.com/documentation/accelerate/bnnsgraph/compileoptions)

# BNNSGraph.CompileOptions

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

The compilation options that BNNS uses when compiling a source mlmodelc file to a graph object.

## Declaration

```swift
struct CompileOptions
```

<a id="overview"></a>

## Overview

Call `/Accelerate/BNNSGraph/Context/init(compileFromPath:functionName:options:)` to create a default options structure and then set properties such as [optimizationPreference](compileoptions/optimizationpreference-swift.property.md) to specify individual options.

## Topics

### Creating a compilation options structure

- [init()](compileoptions/init%28%29.md): Creates an allocated compilation-options object with default values.
- [init(useSingleThread:generateDebugInfo:optimizationPreference:)](compileoptions/init%28usesinglethread_generatedebuginfo_optimizationpreference_%29.md): Creates an allocated compilation-options object with the specified values.

### Specifying and querying compilation options

- [useSingleThread](compileoptions/usesinglethread.md): A Boolean value that specifies whether the graph executes on one thread.
- [generateDebugInfo](compileoptions/generatedebuginfo.md): A Boolean value that specifies whether the generated graph includes debug info.
- [optimizationPreference](compileoptions/optimizationpreference-swift.property.md): A constant that specifies the graph compilation-optimization preferences.

### Specifying the optimization preference

- [BNNSGraph.CompileOptions.OptimizationPreference](compileoptions/optimizationpreference-swift.struct.md): Constants that describe the compilation-optimization preference.
