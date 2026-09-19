> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelsession/generationerror/refusal/init(transcriptentries:)

# init(transcriptEntries:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a refusal for the transcript entries the model declined to respond to.

## Declaration

```swift
init(transcriptEntries: [Transcript.Entry])
```

## Parameters

- `transcriptEntries`: The entries leading up to the refusal, which the framework uses to produce the refusal’s explanation.
