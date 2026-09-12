> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(actionbuttonintent:activityidentifier:dialog:)](https://developer.apple.com/documentation/appintents/intentresult/result(actionbuttonintent:activityidentifier:dialog:))

# result(actionButtonIntent:activityIdentifier:dialog:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS · watchOS 10.2+

Creates a result container with a follow-on intent, an identifier, and a dialog.

## Declaration

```swift
static func result<Intent>(actionButtonIntent: Intent, activityIdentifier: String, dialog: IntentDialog) -> Self where Self == IntentResultContainer<Never, Never, Never, IntentDialog>, Intent : AppIntent
```

## Parameters

- `actionButtonIntent`: A follow-on intent that can run next.
- `activityIdentifier`: An identifier for the follow-on intent.
- `dialog`: A custom success dialog.
