> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechanalyzer/options/modelretention-swift.enum/lingering](https://developer.apple.com/documentation/speech/speechanalyzer/options/modelretention-swift.enum/lingering)

# SpeechAnalyzer.Options.ModelRetention.lingering

**Framework:** Speech  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Keeps the models in memory for a time so that they can be reused by another compatible analyzer session.

## Declaration

```swift
case lingering
```

## See Also

### Retention options

- [SpeechAnalyzer.Options.ModelRetention.processLifetime](processlifetime.md): Keeps the models in memory until this process exits.
- [SpeechAnalyzer.Options.ModelRetention.whileInUse](whileinuse.md): Releases the models when the analyzer is deallocated.
