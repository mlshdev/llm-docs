> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnstargetsystemgeneric](https://developer.apple.com/documentation/accelerate/bnnstargetsystemgeneric)

# BNNSTargetSystemGeneric (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
var BNNSTargetSystemGeneric: BNNSTargetSystem { get }
```

## See Also

### Specifying and querying compilation options

- [bnns_graph_compile_options_t](bnns_graph_compile_options_t.md): The compilation options that BNNS uses when compiling a source mlmodelc file to a graph object.
- [BNNSGraphCompileOptionsMakeDefault()](bnnsgraphcompileoptionsmakedefault%28%29.md): Returns an allocated compilation options object with default values.
- [BNNSGraphCompileOptionsDestroy(\_:)](bnnsgraphcompileoptionsdestroy%28__%29.md): Destroys the specified compilation options object.
- [BNNSGraphCompileOptionsSetOutputPath(\_:\_:)](bnnsgraphcompileoptionssetoutputpath%28____%29.md): Sets the option for graph compilation to generate the graph object directly to the specified file.
- [BNNSGraphCompileOptionsGetOutputPath(\_:)](bnnsgraphcompileoptionsgetoutputpath%28__%29.md): Returns the option for the compiled graph’s output path.
- [BNNSGraphCompileOptionsSetOutputFD(\_:\_:)](bnnsgraphcompileoptionssetoutputfd%28____%29.md): Sets the option for graph compilation to generate the graph object directly to the specified file descriptor.
- [BNNSGraphCompileOptionsGetOutputFD(\_:)](bnnsgraphcompileoptionsgetoutputfd%28__%29.md): Returns the option for the compiled graph’s output file descriptor.
- [BNNSGraphCompileOptionsSetTargetSingleThread(\_:\_:)](bnnsgraphcompileoptionssettargetsinglethread%28____%29.md): Sets the option for the compiled graph to execute on a single thread.
- [BNNSGraphCompileOptionsGetTargetSingleThread(\_:)](bnnsgraphcompileoptionsgettargetsinglethread%28__%29.md): Returns the option for the compiled graph to execute on a single thread.
- [BNNSGraphCompileOptionsSetOptimizationPreference(\_:\_:)](bnnsgraphcompileoptionssetoptimizationpreference%28____%29.md): Sets the option for the compiled graph to optimize for either size or performance.
- [BNNSGraphCompileOptionsGetOptimizationPreference(\_:)](bnnsgraphcompileoptionsgetoptimizationpreference%28__%29.md): Returns the option for the compiled graph to optimize for either size or performance.
- [BNNSGraphOptimizationPreference](bnnsgraphoptimizationpreference.md): Constants that describe the compilation optimization preference.
- [BNNSGraphCompileOptionsSetGenerateDebugInfo(\_:\_:)](bnnsgraphcompileoptionssetgeneratedebuginfo%28____%29.md): Sets the option for the compiled graph to include debugging information.
- [BNNSGraphCompileOptionsGetGenerateDebugInfo(\_:)](bnnsgraphcompileoptionsgetgeneratedebuginfo%28__%29.md): Returns the option for the compiled graph to include debugging information.

# BNNSTargetSystemGeneric (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
BNNSTargetSystemGeneric
```

## See Also

### Specifying and querying compilation options

- [bnns_graph_compile_options_t](bnns_graph_compile_options_t.md): The compilation options that BNNS uses when compiling a source mlmodelc file to a graph object.
- [BNNSGraphCompileOptionsMakeDefault](bnnsgraphcompileoptionsmakedefault%28%29.md): Returns an allocated compilation options object with default values.
- [BNNSGraphCompileOptionsDestroy](bnnsgraphcompileoptionsdestroy%28__%29.md): Destroys the specified compilation options object.
- [BNNSGraphCompileOptionsSetOutputPath](bnnsgraphcompileoptionssetoutputpath%28____%29.md): Sets the option for graph compilation to generate the graph object directly to the specified file.
- [BNNSGraphCompileOptionsGetOutputPath](bnnsgraphcompileoptionsgetoutputpath%28__%29.md): Returns the option for the compiled graph’s output path.
- [BNNSGraphCompileOptionsSetOutputFD](bnnsgraphcompileoptionssetoutputfd%28____%29.md): Sets the option for graph compilation to generate the graph object directly to the specified file descriptor.
- [BNNSGraphCompileOptionsGetOutputFD](bnnsgraphcompileoptionsgetoutputfd%28__%29.md): Returns the option for the compiled graph’s output file descriptor.
- [BNNSGraphCompileOptionsSetTargetSingleThread](bnnsgraphcompileoptionssettargetsinglethread%28____%29.md): Sets the option for the compiled graph to execute on a single thread.
- [BNNSGraphCompileOptionsGetTargetSingleThread](bnnsgraphcompileoptionsgettargetsinglethread%28__%29.md): Returns the option for the compiled graph to execute on a single thread.
- [BNNSGraphCompileOptionsSetOptimizationPreference](bnnsgraphcompileoptionssetoptimizationpreference%28____%29.md): Sets the option for the compiled graph to optimize for either size or performance.
- [BNNSGraphCompileOptionsGetOptimizationPreference](bnnsgraphcompileoptionsgetoptimizationpreference%28__%29.md): Returns the option for the compiled graph to optimize for either size or performance.
- [BNNSGraphOptimizationPreference](bnnsgraphoptimizationpreference.md): Constants that describe the compilation optimization preference.
- [BNNSGraphCompileOptionsSetGenerateDebugInfo](bnnsgraphcompileoptionssetgeneratedebuginfo%28____%29.md): Sets the option for the compiled graph to include debugging information.
- [BNNSGraphCompileOptionsGetGenerateDebugInfo](bnnsgraphcompileoptionsgetgeneratedebuginfo%28__%29.md): Returns the option for the compiled graph to include debugging information.
