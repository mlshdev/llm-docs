> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechanalyzer/init(inputsequence:modules:options:analysiscontext:volatilerangechangedhandler:)](https://developer.apple.com/documentation/speech/speechanalyzer/init(inputsequence:modules:options:analysiscontext:volatilerangechangedhandler:))

# init(inputSequence:modules:options:analysisContext:volatileRangeChangedHandler:)

**Framework:** Speech  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates an analyzer and begins analysis.

## Declaration

```swift
convenience init<InputSequence>(inputSequence: InputSequence, modules: [any SpeechModule], options: SpeechAnalyzer.Options? = nil, analysisContext: AnalysisContext = .init(), volatileRangeChangedHandler: sending ((CMTimeRange, Bool, Bool) -> Void)? = nil) where InputSequence : Sendable, InputSequence : AsyncSequence, InputSequence.Element == AnalyzerInput
```

## Parameters

- `inputSequence`: An asynchronous sequence of audio inputs to analyze. Analysis will begin when the first audio input is added to the sequence.
- `modules`: An initial list of modules that will analyze the audio.
- `options`: A structure specifying analysis options.
- `analysisContext`: An object containing contextual information to improve or inform the analysis.
- `volatileRangeChangedHandler`: A closure called to report the analysis’ progress. The closure takes the following parameters:

  - **range**: The current volatile range.
  - **changedStart**: If `true`, the volatile range contains an updated start time. This indicates that prior results have been finalized.
  - **changedEnd**: If `true`, the volatile range contains an update end time. This indicates that analysis of that time has started.

## See Also

### Creating an analyzer

- [init(modules:options:)](init%28modules_options_%29.md): Creates an analyzer.
- [init(inputAudioFile:modules:options:analysisContext:finishAfterFile:volatileRangeChangedHandler:)](init%28inputaudiofile_modules_options_analysiscontext_finishafterfile_volatilerangechangedhandler_%29.md): Creates an analyzer and begins analysis on an audio file.
- [SpeechAnalyzer.Options](options.md): Analysis processing options.
