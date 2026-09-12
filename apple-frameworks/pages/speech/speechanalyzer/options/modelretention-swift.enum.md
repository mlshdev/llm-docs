> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechanalyzer/options/modelretention-swift.enum](https://developer.apple.com/documentation/speech/speechanalyzer/options/modelretention-swift.enum)

# SpeechAnalyzer.Options.ModelRetention

**Framework:** Speech  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A model caching strategy.

## Declaration

```swift
enum ModelRetention
```

## Topics

### Retention options

- [SpeechAnalyzer.Options.ModelRetention.lingering](modelretention-swift.enum/lingering.md): Keeps the models in memory for a time so that they can be reused by another compatible analyzer session.
- [SpeechAnalyzer.Options.ModelRetention.processLifetime](modelretention-swift.enum/processlifetime.md): Keeps the models in memory until this process exits.
- [SpeechAnalyzer.Options.ModelRetention.whileInUse](modelretention-swift.enum/whileinuse.md): Releases the models when the analyzer is deallocated.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating an options object

- [init(priority:modelRetention:)](init%28priority_modelretention_%29.md): Creates a structure containing analysis processing options.
- [init(priority:modelRetention:ignoresResourceLimits:)](init%28priority_modelretention_ignoresresourcelimits_%29.md): Creates a structure containing analysis processing options.
