> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(actionbuttonintent:)](https://developer.apple.com/documentation/appintents/intentresult/result(actionbuttonintent:))

# result(actionButtonIntent:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Indicates the Intent finished performing with an `AppIntent` to continue with

## Declaration

```swift
static func result<Intent>(actionButtonIntent: Intent) -> Self where Self == IntentResultContainer<Never, Never, Never, Never>, Intent : AppIntent
```

## Parameters

- `actionButtonIntent`: The `AppIntent` used perform next

## Mentioned In

- [Responding to the Action button on Apple Watch Ultra](../actionbuttonarticle.md)
