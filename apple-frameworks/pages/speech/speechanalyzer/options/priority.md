> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/speechanalyzer/options/priority

# priority

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The priority of analysis processing work.

## Declaration

```swift
let priority: TaskPriority
```

<a id="discussion"></a>

## Discussion

This property determines the priority of most, but not all, processing work. You should also call the methods of `SpeechAnalyzer` and other classes from a `Task` or thread with the desired priority.

## See Also

### Inspecting options

- [ignoresResourceLimits](ignoresresourcelimits.md): A Boolean value that indicates whether this analyzer ignores predefined system resource limits.
- [modelRetention](modelretention-swift.property.md): The analyzer’s model caching strategy.
