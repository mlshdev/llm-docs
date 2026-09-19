> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/speechanalyzer/options/init(priority:modelretention:)

# init(priority:modelRetention:)

**Framework:** Speech  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a structure containing analysis processing options.

## Declaration

```swift
init(priority: TaskPriority, modelRetention: SpeechAnalyzer.Options.ModelRetention)
```

## Parameters

- `priority`: A priority to apply to processing work.
- `modelRetention`: A model caching strategy.

## See Also

### Creating an options object

- [init(priority:modelRetention:ignoresResourceLimits:)](init%28priority_modelretention_ignoresresourcelimits_%29.md): Creates a structure containing analysis processing options.
- [SpeechAnalyzer.Options.ModelRetention](modelretention-swift.enum.md): A model caching strategy.
