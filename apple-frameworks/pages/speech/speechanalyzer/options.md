> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechanalyzer/options](https://developer.apple.com/documentation/speech/speechanalyzer/options)

# SpeechAnalyzer.Options

**Framework:** Speech  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Analysis processing options.

## Declaration

```swift
struct Options
```

## Topics

### Creating an options object

- [init(priority:modelRetention:)](options/init%28priority_modelretention_%29.md): Creates a structure containing analysis processing options.
- [init(priority:modelRetention:ignoresResourceLimits:)](options/init%28priority_modelretention_ignoresresourcelimits_%29.md): Creates a structure containing analysis processing options.
- [SpeechAnalyzer.Options.ModelRetention](options/modelretention-swift.enum.md): A model caching strategy.

### Inspecting options

- [ignoresResourceLimits](options/ignoresresourcelimits.md): A Boolean value that indicates whether this analyzer ignores predefined system resource limits.
- [modelRetention](options/modelretention-swift.property.md): The analyzer’s model caching strategy.
- [priority](options/priority.md): The priority of analysis processing work.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating an analyzer

- [init(modules:options:)](init%28modules_options_%29.md): Creates an analyzer.
- [init(inputSequence:modules:options:analysisContext:volatileRangeChangedHandler:)](init%28inputsequence_modules_options_analysiscontext_volatilerangechangedhandler_%29.md): Creates an analyzer and begins analysis.
- [init(inputAudioFile:modules:options:analysisContext:finishAfterFile:volatileRangeChangedHandler:)](init%28inputaudiofile_modules_options_analysiscontext_finishafterfile_volatilerangechangedhandler_%29.md): Creates an analyzer and begins analysis on an audio file.
