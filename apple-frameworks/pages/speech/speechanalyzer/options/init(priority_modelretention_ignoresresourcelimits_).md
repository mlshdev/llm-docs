> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechanalyzer/options/init(priority:modelretention:ignoresresourcelimits:)](https://developer.apple.com/documentation/speech/speechanalyzer/options/init(priority:modelretention:ignoresresourcelimits:))

# init(priority:modelRetention:ignoresResourceLimits:)

**Framework:** Speech  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a structure containing analysis processing options.

## Declaration

```swift
init(priority: TaskPriority, modelRetention: SpeechAnalyzer.Options.ModelRetention, ignoresResourceLimits: Bool)
```

## Parameters

- `priority`: A priority to apply to processing work.
- `modelRetention`: A model caching strategy.
- `ignoresResourceLimits`: If `true`, the analyzer and its modules’ resources will not be counted against the predefined system resource limits.

<a id="discussion"></a>

## Discussion

> **Warning**

> When setting `ignoresResourceLimits` to `true`, test your app on a variety of devices under a variety of scenarios to experimentally determine how many analyzers you can reliably create and expect to function. Consider how to recover in the event one or more analyzers fail.

## See Also

### Creating an options object

- [init(priority:modelRetention:)](init%28priority_modelretention_%29.md): Creates a structure containing analysis processing options.
- [SpeechAnalyzer.Options.ModelRetention](modelretention-swift.enum.md): A model caching strategy.
