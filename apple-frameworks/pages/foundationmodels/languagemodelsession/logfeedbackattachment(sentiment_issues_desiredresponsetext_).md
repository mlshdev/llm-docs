> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/logfeedbackattachment(sentiment:issues:desiredresponsetext:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/logfeedbackattachment(sentiment:issues:desiredresponsetext:))

# logFeedbackAttachment(sentiment:issues:desiredResponseText:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

## Declaration

```swift
@backDeployed(before: iOS 26.1, macOS 26.1, visionOS 26.1)
@discardableResult final func logFeedbackAttachment(sentiment: LanguageModelFeedback.Sentiment?, issues: [LanguageModelFeedback.Issue] = [], desiredResponseText: String?) -> Data
```

## Mentioned In

- [Inspecting session transcripts and reporting model feedback](../inspecting-session-transcripts-and-reporting-model-feedback.md)

## See Also

### Generating feedback

- [logFeedbackAttachment(sentiment:issues:desiredOutput:)](logfeedbackattachment%28sentiment_issues_desiredoutput_%29.md): Logs and serializes a feedback attachment that can be submitted to Apple.
- [logFeedbackAttachment(sentiment:issues:desiredResponseContent:)](logfeedbackattachment%28sentiment_issues_desiredresponsecontent_%29.md)
- [LanguageModelFeedback](../languagemodelfeedback.md): Feedback appropriate for logging or attaching to Feedback Assistant.
