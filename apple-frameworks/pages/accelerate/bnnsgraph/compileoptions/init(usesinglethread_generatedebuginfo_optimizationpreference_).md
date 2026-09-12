> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/compileoptions/init(usesinglethread:generatedebuginfo:optimizationpreference:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/compileoptions/init(usesinglethread:generatedebuginfo:optimizationpreference:))

# init(useSingleThread:generateDebugInfo:optimizationPreference:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

Creates an allocated compilation-options object with the specified values.

## Declaration

```swift
init(useSingleThread: Bool = false, generateDebugInfo: Bool = false, optimizationPreference: BNNSGraph.CompileOptions.OptimizationPreference = .performance)
```

## Parameters

- `useSingleThread`: A Boolean value that specifies whether the graph executes on one thread.
- `generateDebugInfo`: A Boolean value that specifies whether the generated graph includes debug info.
- `optimizationPreference`: A constant that specifies the graph compilation-optimization preferences.

## See Also

### Creating a compilation options structure

- [init()](init%28%29.md): Creates an allocated compilation-options object with default values.
