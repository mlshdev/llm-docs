> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelfeedback](https://developer.apple.com/documentation/foundationmodels/languagemodelfeedback)

# LanguageModelFeedback

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Feedback appropriate for logging or attaching to Feedback Assistant.

## Declaration

```swift
struct LanguageModelFeedback
```

<a id="overview"></a>

## Overview

`LanguageModelFeedback` is a namespace with  structures for describing feedback in a consistent way. [LanguageModelFeedback.Sentiment](languagemodelfeedback/sentiment.md) describes the sentiment of the feedback, while [LanguageModelFeedback.Issue](languagemodelfeedback/issue.md) offers a standard template for issues.

Given a model session, use [logFeedbackAttachment(sentiment:issues:desiredOutput:)](languagemodelsession/logfeedbackattachment%28sentiment_issues_desiredoutput_%29.md) to produce structured feedback.

```swift
let session = LanguageModelSession()
let response = try await session.respond(to: "What is the capital of France?")

// Create feedback for a problematic response.
let feedbackData = session.logFeedbackAttachment(
    sentiment: LanguageModelFeedback.Sentiment.negative,
    issues: [
        LanguageModelFeedback.Issue(
            category: .incorrect,
            explanation: "The model provided outdated information"
        )
    ],
    desiredOutput: Transcript.Entry.response(...)
)
```

## Topics

### Feedback types

- [LanguageModelFeedback.Issue](languagemodelfeedback/issue.md): An issue with the model’s response.
- [LanguageModelFeedback.Sentiment](languagemodelfeedback/sentiment.md): A sentiment regarding the model’s response.

## See Also

### Generating feedback

- [logFeedbackAttachment(sentiment:issues:desiredOutput:)](languagemodelsession/logfeedbackattachment%28sentiment_issues_desiredoutput_%29.md): Logs and serializes a feedback attachment that can be submitted to Apple.
- [logFeedbackAttachment(sentiment:issues:desiredResponseContent:)](languagemodelsession/logfeedbackattachment%28sentiment_issues_desiredresponsecontent_%29.md)
- [logFeedbackAttachment(sentiment:issues:desiredResponseText:)](languagemodelsession/logfeedbackattachment%28sentiment_issues_desiredresponsetext_%29.md)
