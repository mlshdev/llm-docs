> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(opensintent:dialog:)-925mk](https://developer.apple.com/documentation/appintents/intentresult/result(opensintent:dialog:)-925mk)

# result(opensIntent:dialog:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS · watchOS 9.4+

Indicates the `AppIntent` finished performing

## Declaration

```swift
static func result<OpensAppIntent>(opensIntent: OpensAppIntent, dialog: IntentDialog) -> Self where Self == IntentResultContainer<Never, OpensAppIntent, Never, IntentDialog>, OpensAppIntent : AppIntent
```

## Parameters

- `opensIntent`: An `AppIntent` to shows the result of current intent
- `dialog`: A custom success dialog
