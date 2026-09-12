> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechanalyzer/init(modules:options:)](https://developer.apple.com/documentation/speech/speechanalyzer/init(modules:options:))

# init(modules:options:)

**Framework:** Speech  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates an analyzer.

## Declaration

```swift
convenience init(modules: [any SpeechModule], options: SpeechAnalyzer.Options? = nil)
```

## Parameters

- `modules`: An initial list of modules to add to the analyzer. The list can be empty; modules can be added or removed later.
- `options`: A structure specifying analysis options.

## See Also

### Creating an analyzer

- [init(inputSequence:modules:options:analysisContext:volatileRangeChangedHandler:)](init%28inputsequence_modules_options_analysiscontext_volatilerangechangedhandler_%29.md): Creates an analyzer and begins analysis.
- [init(inputAudioFile:modules:options:analysisContext:finishAfterFile:volatileRangeChangedHandler:)](init%28inputaudiofile_modules_options_analysiscontext_finishafterfile_volatilerangechangedhandler_%29.md): Creates an analyzer and begins analysis on an audio file.
- [SpeechAnalyzer.Options](options.md): Analysis processing options.
