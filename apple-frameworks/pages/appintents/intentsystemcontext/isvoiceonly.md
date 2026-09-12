> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentsystemcontext/isvoiceonly](https://developer.apple.com/documentation/appintents/intentsystemcontext/isvoiceonly)

# isVoiceOnly

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A Boolean value that indicates whether the system performs the app intent in a voice-only context.

## Declaration

```swift
var isVoiceOnly: Bool { get }
```

<a id="discussion"></a>

## Discussion

If [isVoiceOnly](isvoiceonly.md) is `true`, adjust the intent’s result to include a more speakable summary, and make sure a person can understand responses and dialog without visuals such as tables, graphics, or other user-interface elements.

Generally, return an [IntentDialog](../intentdialog.md) from your intent. The system can choose the best information from the dialog to present for a person’s context. Consult [isVoiceOnly](isvoiceonly.md) when your app intent returns dynamic, free-form output, such as generated recommendations, summarized search results, or natural-language responses you generate on the fly.
