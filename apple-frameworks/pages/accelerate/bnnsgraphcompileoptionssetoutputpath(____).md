> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphcompileoptionssetoutputpath(_:_:)](https://developer.apple.com/documentation/accelerate/bnnsgraphcompileoptionssetoutputpath(_:_:))

# BNNSGraphCompileOptionsSetOutputPath(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the option for graph compilation to generate the graph object directly to the specified file.

## Declaration

```swift
func BNNSGraphCompileOptionsSetOutputPath(_ options: bnns_graph_compile_options_t, _ path: UnsafePointer<CChar>?)
```

## Parameters

- `options`: The compilation options object.
- `path`: The destination file path. Pass `nil` to reset to the default behavior of strictly in-memory graph generation.

<a id="Discussion"></a>

## Discussion

Use this option to specify that the graph [BNNSGraphCompileFromFile(\_:\_:\_:)](bnnsgraphcompilefromfile%28______%29.md) returns is a read-only memory-mapped file.

The option reduces the memory that compilation requires because BNNS doesn’t require the full set of graph weights to be memory resident.

The generated file has 0600 permissions (read and write by the user only).

Note that the [BNNSGraphCompileOptionsSetOutputFD(\_:\_:)](bnnsgraphcompileoptionssetoutputfd%28____%29.md) function overrides this option.

## See Also

### Specifying and querying compilation options

- [bnns_graph_compile_options_t](bnns_graph_compile_options_t.md): The compilation options that BNNS uses when compiling a source mlmodelc file to a graph object.
- [BNNSGraphCompileOptionsMakeDefault()](bnnsgraphcompileoptionsmakedefault%28%29.md): Returns an allocated compilation options object with default values.
- [BNNSGraphCompileOptionsDestroy(\_:)](bnnsgraphcompileoptionsdestroy%28__%29.md): Destroys the specified compilation options object.
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
- [BNNSTargetSystemGeneric](bnnstargetsystemgeneric.md)

# BNNSGraphCompileOptionsSetOutputPath (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the option for graph compilation to generate the graph object directly to the specified file.

## Declaration

```objectivec
void BNNSGraphCompileOptionsSetOutputPath(bnns_graph_compile_options_t options, const char *path);
```

## Parameters

- `options`: The compilation options object.
- `path`: The destination file path. Pass `nil` to reset to the default behavior of strictly in-memory graph generation.

<a id="Discussion"></a>

## Discussion

Use this option to specify that the graph [BNNSGraphCompileFromFile](bnnsgraphcompilefromfile%28______%29.md) returns is a read-only memory-mapped file.

The option reduces the memory that compilation requires because BNNS doesn’t require the full set of graph weights to be memory resident.

The generated file has 0600 permissions (read and write by the user only).

Note that the [BNNSGraphCompileOptionsSetOutputFD](bnnsgraphcompileoptionssetoutputfd%28____%29.md) function overrides this option.

## See Also

### Specifying and querying compilation options

- [bnns_graph_compile_options_t](bnns_graph_compile_options_t.md): The compilation options that BNNS uses when compiling a source mlmodelc file to a graph object.
- [BNNSGraphCompileOptionsMakeDefault](bnnsgraphcompileoptionsmakedefault%28%29.md): Returns an allocated compilation options object with default values.
- [BNNSGraphCompileOptionsDestroy](bnnsgraphcompileoptionsdestroy%28__%29.md): Destroys the specified compilation options object.
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
- [BNNSTargetSystemGeneric](bnnstargetsystemgeneric.md)
