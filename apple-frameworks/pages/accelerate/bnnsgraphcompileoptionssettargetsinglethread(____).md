> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphcompileoptionssettargetsinglethread(_:_:)](https://developer.apple.com/documentation/accelerate/bnnsgraphcompileoptionssettargetsinglethread(_:_:))

# BNNSGraphCompileOptionsSetTargetSingleThread(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the option for the compiled graph to execute on a single thread.

## Declaration

```swift
func BNNSGraphCompileOptionsSetTargetSingleThread(_ options: bnns_graph_compile_options_t, _ value: Bool)
```

## Parameters

- `options`: The compilation options object.
- `value`: If `true`, the options specify single-threaded execution; otherwise, the options specify multi-threaded execution.

<a id="Discussion"></a>

## Discussion

The default option is execution on multiple threads.

## See Also

### Specifying and querying compilation options

- [bnns_graph_compile_options_t](bnns_graph_compile_options_t.md): The compilation options that BNNS uses when compiling a source mlmodelc file to a graph object.
- [BNNSGraphCompileOptionsMakeDefault()](bnnsgraphcompileoptionsmakedefault%28%29.md): Returns an allocated compilation options object with default values.
- [BNNSGraphCompileOptionsDestroy(\_:)](bnnsgraphcompileoptionsdestroy%28__%29.md): Destroys the specified compilation options object.
- [BNNSGraphCompileOptionsSetOutputPath(\_:\_:)](bnnsgraphcompileoptionssetoutputpath%28____%29.md): Sets the option for graph compilation to generate the graph object directly to the specified file.
- [BNNSGraphCompileOptionsGetOutputPath(\_:)](bnnsgraphcompileoptionsgetoutputpath%28__%29.md): Returns the option for the compiled graph’s output path.
- [BNNSGraphCompileOptionsSetOutputFD(\_:\_:)](bnnsgraphcompileoptionssetoutputfd%28____%29.md): Sets the option for graph compilation to generate the graph object directly to the specified file descriptor.
- [BNNSGraphCompileOptionsGetOutputFD(\_:)](bnnsgraphcompileoptionsgetoutputfd%28__%29.md): Returns the option for the compiled graph’s output file descriptor.
- [BNNSGraphCompileOptionsGetTargetSingleThread(\_:)](bnnsgraphcompileoptionsgettargetsinglethread%28__%29.md): Returns the option for the compiled graph to execute on a single thread.
- [BNNSGraphCompileOptionsSetOptimizationPreference(\_:\_:)](bnnsgraphcompileoptionssetoptimizationpreference%28____%29.md): Sets the option for the compiled graph to optimize for either size or performance.
- [BNNSGraphCompileOptionsGetOptimizationPreference(\_:)](bnnsgraphcompileoptionsgetoptimizationpreference%28__%29.md): Returns the option for the compiled graph to optimize for either size or performance.
- [BNNSGraphOptimizationPreference](bnnsgraphoptimizationpreference.md): Constants that describe the compilation optimization preference.
- [BNNSGraphCompileOptionsSetGenerateDebugInfo(\_:\_:)](bnnsgraphcompileoptionssetgeneratedebuginfo%28____%29.md): Sets the option for the compiled graph to include debugging information.
- [BNNSGraphCompileOptionsGetGenerateDebugInfo(\_:)](bnnsgraphcompileoptionsgetgeneratedebuginfo%28__%29.md): Returns the option for the compiled graph to include debugging information.
- [BNNSTargetSystemGeneric](bnnstargetsystemgeneric.md)

# BNNSGraphCompileOptionsSetTargetSingleThread (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the option for the compiled graph to execute on a single thread.

## Declaration

```objectivec
void BNNSGraphCompileOptionsSetTargetSingleThread(bnns_graph_compile_options_t options, bool value);
```

## Parameters

- `options`: The compilation options object.
- `value`: If `true`, the options specify single-threaded execution; otherwise, the options specify multi-threaded execution.

<a id="Discussion"></a>

## Discussion

The default option is execution on multiple threads.

## See Also

### Specifying and querying compilation options

- [bnns_graph_compile_options_t](bnns_graph_compile_options_t.md): The compilation options that BNNS uses when compiling a source mlmodelc file to a graph object.
- [BNNSGraphCompileOptionsMakeDefault](bnnsgraphcompileoptionsmakedefault%28%29.md): Returns an allocated compilation options object with default values.
- [BNNSGraphCompileOptionsDestroy](bnnsgraphcompileoptionsdestroy%28__%29.md): Destroys the specified compilation options object.
- [BNNSGraphCompileOptionsSetOutputPath](bnnsgraphcompileoptionssetoutputpath%28____%29.md): Sets the option for graph compilation to generate the graph object directly to the specified file.
- [BNNSGraphCompileOptionsGetOutputPath](bnnsgraphcompileoptionsgetoutputpath%28__%29.md): Returns the option for the compiled graph’s output path.
- [BNNSGraphCompileOptionsSetOutputFD](bnnsgraphcompileoptionssetoutputfd%28____%29.md): Sets the option for graph compilation to generate the graph object directly to the specified file descriptor.
- [BNNSGraphCompileOptionsGetOutputFD](bnnsgraphcompileoptionsgetoutputfd%28__%29.md): Returns the option for the compiled graph’s output file descriptor.
- [BNNSGraphCompileOptionsGetTargetSingleThread](bnnsgraphcompileoptionsgettargetsinglethread%28__%29.md): Returns the option for the compiled graph to execute on a single thread.
- [BNNSGraphCompileOptionsSetOptimizationPreference](bnnsgraphcompileoptionssetoptimizationpreference%28____%29.md): Sets the option for the compiled graph to optimize for either size or performance.
- [BNNSGraphCompileOptionsGetOptimizationPreference](bnnsgraphcompileoptionsgetoptimizationpreference%28__%29.md): Returns the option for the compiled graph to optimize for either size or performance.
- [BNNSGraphOptimizationPreference](bnnsgraphoptimizationpreference.md): Constants that describe the compilation optimization preference.
- [BNNSGraphCompileOptionsSetGenerateDebugInfo](bnnsgraphcompileoptionssetgeneratedebuginfo%28____%29.md): Sets the option for the compiled graph to include debugging information.
- [BNNSGraphCompileOptionsGetGenerateDebugInfo](bnnsgraphcompileoptionsgetgeneratedebuginfo%28__%29.md): Returns the option for the compiled graph to include debugging information.
- [BNNSTargetSystemGeneric](bnnstargetsystemgeneric.md)
