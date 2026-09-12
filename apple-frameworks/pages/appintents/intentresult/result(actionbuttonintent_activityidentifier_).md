> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(actionbuttonintent:activityidentifier:)](https://developer.apple.com/documentation/appintents/intentresult/result(actionbuttonintent:activityidentifier:))

# result(actionButtonIntent:activityIdentifier:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS · watchOS 10.2+

Indicates the Intent finished performing with an `AppIntent` to continue with

## Declaration

```swift
static func result<Intent>(actionButtonIntent: Intent, activityIdentifier: String) -> Self where Self == IntentResultContainer<Never, Never, Never, Never>, Intent : AppIntent
```

## Parameters

- `actionButtonIntent`: The `AppIntent` used perform next
- `activityIdentifier`: The identifier for the activity.
