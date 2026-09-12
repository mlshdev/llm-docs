> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(opensintent:dialog:)-64q5v](https://developer.apple.com/documentation/appintents/intentresult/result(opensintent:dialog:)-64q5v)

# result(opensIntent:dialog:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Indicates the `AppIntent` finished performing

## Declaration

```swift
static func result(opensIntent: some AppIntent, dialog: IntentDialog) -> Self where Self == IntentResultContainer<Never, Never, Never, IntentDialog>
```

## Parameters

- `opensIntent`: An `AppIntent` to shows the result of current intent
- `dialog`: A custom success dialog
