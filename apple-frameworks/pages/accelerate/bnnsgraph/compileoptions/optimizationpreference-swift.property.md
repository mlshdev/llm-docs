> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/compileoptions/optimizationpreference-swift.property](https://developer.apple.com/documentation/accelerate/bnnsgraph/compileoptions/optimizationpreference-swift.property)

# optimizationPreference

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

A constant that specifies the graph compilation-optimization preferences.

## Declaration

```swift
var optimizationPreference: BNNSGraph.CompileOptions.OptimizationPreference { get set }
```

## See Also

### Specifying and querying compilation options

- [useSingleThread](usesinglethread.md): A Boolean value that specifies whether the graph executes on one thread.
- [generateDebugInfo](generatedebuginfo.md): A Boolean value that specifies whether the generated graph includes debug info.
