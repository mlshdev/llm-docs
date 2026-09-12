> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechanalyzer/options/modelretention-swift.enum/whileinuse](https://developer.apple.com/documentation/speech/speechanalyzer/options/modelretention-swift.enum/whileinuse)

# SpeechAnalyzer.Options.ModelRetention.whileInUse

**Framework:** Speech  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Releases the models when the analyzer is deallocated.

## Declaration

```swift
case whileInUse
```

## See Also

### Retention options

- [SpeechAnalyzer.Options.ModelRetention.lingering](lingering.md): Keeps the models in memory for a time so that they can be reused by another compatible analyzer session.
- [SpeechAnalyzer.Options.ModelRetention.processLifetime](processlifetime.md): Keeps the models in memory until this process exits.
