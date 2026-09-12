> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(actionbuttonintent:dialog:)](https://developer.apple.com/documentation/appintents/intentresult/result(actionbuttonintent:dialog:))

# result(actionButtonIntent:dialog:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Indicates the Intent finished performing with an `AppIntent` to continue with

## Declaration

```swift
static func result<Intent>(actionButtonIntent: Intent, dialog: IntentDialog) -> Self where Self == IntentResultContainer<Never, Never, Never, IntentDialog>, Intent : AppIntent
```

## Parameters

- `actionButtonIntent`: The `AppIntent` used perform next
- `dialog`: A custom success dialog
