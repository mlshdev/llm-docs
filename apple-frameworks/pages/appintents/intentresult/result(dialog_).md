> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(dialog:)](https://developer.apple.com/documentation/appintents/intentresult/result(dialog:))

# result(dialog:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Indicates the `AppIntent` finished performing

## Declaration

```swift
static func result(dialog: IntentDialog) -> Self where Self == IntentResultContainer<Never, Never, Never, IntentDialog>
```

## Parameters

- `dialog`: A custom success dialog
