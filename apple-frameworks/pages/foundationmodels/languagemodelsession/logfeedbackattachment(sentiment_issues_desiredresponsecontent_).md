> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelsession/logfeedbackattachment(sentiment:issues:desiredresponsecontent:)

# logFeedbackAttachment(sentiment:issues:desiredResponseContent:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Logs and serializes a feedback attachment that includes the content you expected.

## Declaration

```swift
@backDeployed(before: iOS 26.1, macOS 26.1, visionOS 26.1)
@discardableResult final func logFeedbackAttachment(sentiment: LanguageModelFeedback.Sentiment?, issues: [LanguageModelFeedback.Issue] = [], desiredResponseContent: (any ConvertibleToGeneratedContent)?) -> Data
```

## Parameters

- `sentiment`: An optional sentiment rating about the model’s output.
- `issues`: An array of specific issues identified with the model’s response. Defaults to an empty array.
- `desiredResponseContent`: The content the model should’ve produced.

<a id="return-value"></a>

## Return Value

A `Data` object containing the JSON-encoded feedback attachment that can be submitted to Feedback Assistant.

## Mentioned In

- [Inspecting session transcripts and reporting model feedback](../inspecting-session-transcripts-and-reporting-model-feedback.md)

## See Also

### Generating feedback

- [logFeedbackAttachment(sentiment:issues:desiredOutput:)](logfeedbackattachment%28sentiment_issues_desiredoutput_%29.md): Logs and serializes a feedback attachment that can be submitted to Apple.
- [logFeedbackAttachment(sentiment:issues:desiredResponseText:)](logfeedbackattachment%28sentiment_issues_desiredresponsetext_%29.md): Logs and serializes a feedback attachment that includes the response text you expected.
- [LanguageModelFeedback](../languagemodelfeedback.md): Feedback appropriate for logging or attaching to Feedback Assistant.
