> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphcompileoptionssetoutputfd(_:_:)](https://developer.apple.com/documentation/accelerate/bnnsgraphcompileoptionssetoutputfd(_:_:))

# BNNSGraphCompileOptionsSetOutputFD(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the option for graph compilation to generate the graph object directly to the specified file descriptor.

## Declaration

```swift
func BNNSGraphCompileOptionsSetOutputFD(_ options: bnns_graph_compile_options_t, _ fd: Int32)
```

## Parameters

- `options`: The compilation options object.
- `fd`: The destination file descriptor. Pass `-1` to reset to the default behavior of strictly in-memory graph generation or the path that [BNNSGraphCompileOptionsSetOutputPath(\_:\_:)](bnnsgraphcompileoptionssetoutputpath%28____%29.md) specifies.

  The file that the descriptor indicates must be open for writing. Graph compilation truncates and completely overwrites the file.

<a id="Discussion"></a>

## Discussion

Use this option to specify that the graph [BNNSGraphCompileFromFile(\_:\_:\_:)](bnnsgraphcompilefromfile%28______%29.md) returns is a read-only memory-mapped file.

The option reduces the memory that compilation requires because BNNS doesn’t require the full set of graph weights to be memory resident.

Note that this option overrides the path that [BNNSGraphCompileOptionsSetOutputPath(\_:\_:)](bnnsgraphcompileoptionssetoutputpath%28____%29.md) sets.

## See Also

### Specifying and querying compilation options

- [bnns_graph_compile_options_t](bnns_graph_compile_options_t.md): The compilation options that BNNS uses when compiling a source mlmodelc file to a graph object.
- [BNNSGraphCompileOptionsMakeDefault()](bnnsgraphcompileoptionsmakedefault%28%29.md): Returns an allocated compilation options object with default values.
- [BNNSGraphCompileOptionsDestroy(\_:)](bnnsgraphcompileoptionsdestroy%28__%29.md): Destroys the specified compilation options object.
- [BNNSGraphCompileOptionsSetOutputPath(\_:\_:)](bnnsgraphcompileoptionssetoutputpath%28____%29.md): Sets the option for graph compilation to generate the graph object directly to the specified file.
- [BNNSGraphCompileOptionsGetOutputPath(\_:)](bnnsgraphcompileoptionsgetoutputpath%28__%29.md): Returns the option for the compiled graph’s output path.
- [BNNSGraphCompileOptionsGetOutputFD(\_:)](bnnsgraphcompileoptionsgetoutputfd%28__%29.md): Returns the option for the compiled graph’s output file descriptor.
- [BNNSGraphCompileOptionsSetTargetSingleThread(\_:\_:)](bnnsgraphcompileoptionssettargetsinglethread%28____%29.md): Sets the option for the compiled graph to execute on a single thread.
- [BNNSGraphCompileOptionsGetTargetSingleThread(\_:)](bnnsgraphcompileoptionsgettargetsinglethread%28__%29.md): Returns the option for the compiled graph to execute on a single thread.
- [BNNSGraphCompileOptionsSetOptimizationPreference(\_:\_:)](bnnsgraphcompileoptionssetoptimizationpreference%28____%29.md): Sets the option for the compiled graph to optimize for either size or performance.
- [BNNSGraphCompileOptionsGetOptimizationPreference(\_:)](bnnsgraphcompileoptionsgetoptimizationpreference%28__%29.md): Returns the option for the compiled graph to optimize for either size or performance.
- [BNNSGraphOptimizationPreference](bnnsgraphoptimizationpreference.md): Constants that describe the compilation optimization preference.
- [BNNSGraphCompileOptionsSetGenerateDebugInfo(\_:\_:)](bnnsgraphcompileoptionssetgeneratedebuginfo%28____%29.md): Sets the option for the compiled graph to include debugging information.
- [BNNSGraphCompileOptionsGetGenerateDebugInfo(\_:)](bnnsgraphcompileoptionsgetgeneratedebuginfo%28__%29.md): Returns the option for the compiled graph to include debugging information.
- [BNNSTargetSystemGeneric](bnnstargetsystemgeneric.md)

# BNNSGraphCompileOptionsSetOutputFD (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the option for graph compilation to generate the graph object directly to the specified file descriptor.

## Declaration

```objectivec
void BNNSGraphCompileOptionsSetOutputFD(bnns_graph_compile_options_t options, int fd);
```

## Parameters

- `options`: The compilation options object.
- `fd`: The destination file descriptor. Pass `-1` to reset to the default behavior of strictly in-memory graph generation or the path that [BNNSGraphCompileOptionsSetOutputPath](bnnsgraphcompileoptionssetoutputpath%28____%29.md) specifies.

  The file that the descriptor indicates must be open for writing. Graph compilation truncates and completely overwrites the file.

<a id="Discussion"></a>

## Discussion

Use this option to specify that the graph [BNNSGraphCompileFromFile](bnnsgraphcompilefromfile%28______%29.md) returns is a read-only memory-mapped file.

The option reduces the memory that compilation requires because BNNS doesn’t require the full set of graph weights to be memory resident.

Note that this option overrides the path that [BNNSGraphCompileOptionsSetOutputPath](bnnsgraphcompileoptionssetoutputpath%28____%29.md) sets.

## See Also

### Specifying and querying compilation options

- [bnns_graph_compile_options_t](bnns_graph_compile_options_t.md): The compilation options that BNNS uses when compiling a source mlmodelc file to a graph object.
- [BNNSGraphCompileOptionsMakeDefault](bnnsgraphcompileoptionsmakedefault%28%29.md): Returns an allocated compilation options object with default values.
- [BNNSGraphCompileOptionsDestroy](bnnsgraphcompileoptionsdestroy%28__%29.md): Destroys the specified compilation options object.
- [BNNSGraphCompileOptionsSetOutputPath](bnnsgraphcompileoptionssetoutputpath%28____%29.md): Sets the option for graph compilation to generate the graph object directly to the specified file.
- [BNNSGraphCompileOptionsGetOutputPath](bnnsgraphcompileoptionsgetoutputpath%28__%29.md): Returns the option for the compiled graph’s output path.
- [BNNSGraphCompileOptionsGetOutputFD](bnnsgraphcompileoptionsgetoutputfd%28__%29.md): Returns the option for the compiled graph’s output file descriptor.
- [BNNSGraphCompileOptionsSetTargetSingleThread](bnnsgraphcompileoptionssettargetsinglethread%28____%29.md): Sets the option for the compiled graph to execute on a single thread.
- [BNNSGraphCompileOptionsGetTargetSingleThread](bnnsgraphcompileoptionsgettargetsinglethread%28__%29.md): Returns the option for the compiled graph to execute on a single thread.
- [BNNSGraphCompileOptionsSetOptimizationPreference](bnnsgraphcompileoptionssetoptimizationpreference%28____%29.md): Sets the option for the compiled graph to optimize for either size or performance.
- [BNNSGraphCompileOptionsGetOptimizationPreference](bnnsgraphcompileoptionsgetoptimizationpreference%28__%29.md): Returns the option for the compiled graph to optimize for either size or performance.
- [BNNSGraphOptimizationPreference](bnnsgraphoptimizationpreference.md): Constants that describe the compilation optimization preference.
- [BNNSGraphCompileOptionsSetGenerateDebugInfo](bnnsgraphcompileoptionssetgeneratedebuginfo%28____%29.md): Sets the option for the compiled graph to include debugging information.
- [BNNSGraphCompileOptionsGetGenerateDebugInfo](bnnsgraphcompileoptionsgetgeneratedebuginfo%28__%29.md): Returns the option for the compiled graph to include debugging information.
- [BNNSTargetSystemGeneric](bnnstargetsystemgeneric.md)
