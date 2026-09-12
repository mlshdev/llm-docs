> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechanalyzer/init(inputaudiofile:modules:options:analysiscontext:finishafterfile:volatilerangechangedhandler:)](https://developer.apple.com/documentation/speech/speechanalyzer/init(inputaudiofile:modules:options:analysiscontext:finishafterfile:volatilerangechangedhandler:))

# init(inputAudioFile:modules:options:analysisContext:finishAfterFile:volatileRangeChangedHandler:)

**Framework:** Speech  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates an analyzer and begins analysis on an audio file.

## Declaration

```swift
convenience init(inputAudioFile: AVAudioFile, modules: [any SpeechModule], options: SpeechAnalyzer.Options? = nil, analysisContext: AnalysisContext = .init(), finishAfterFile: Bool = false, volatileRangeChangedHandler: sending ((CMTimeRange, Bool, Bool) -> Void)? = nil) async throws
```

## Parameters

- `inputAudioFile`: An audio file opened for reading.
- `modules`: An initial list of modules that will analyze the audio.
- `options`: A structure specifying analysis options.
- `analysisContext`: An object containing contextual information to improve or inform the analysis.
- `finishAfterFile`: If `true`, the analysis will automatically finish after the audio file has been fully processed. Equivalent to calling [finalizeAndFinishThroughEndOfInput()](finalizeandfinishthroughendofinput%28%29.md).
- `volatileRangeChangedHandler`: A closure called to report the analysis’ progress. The closure takes the following parameters:

  - **range**: The current volatile range.
  - **changedStart**: If `true`, the volatile range contains an updated start time. This indicates that prior results have been finalized.
  - **changedEnd**: If `true`, the volatile range contains an update end time. This indicates that analysis of that time has started.

## See Also

### Creating an analyzer

- [init(modules:options:)](init%28modules_options_%29.md): Creates an analyzer.
- [init(inputSequence:modules:options:analysisContext:volatileRangeChangedHandler:)](init%28inputsequence_modules_options_analysiscontext_volatilerangechangedhandler_%29.md): Creates an analyzer and begins analysis.
- [SpeechAnalyzer.Options](options.md): Analysis processing options.
