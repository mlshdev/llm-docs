> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(value:actionbuttonintent:)](https://developer.apple.com/documentation/appintents/intentresult/result(value:actionbuttonintent:))

# result(value:actionButtonIntent:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Indicates the Intent finished performing with an `AppIntent` to continue with

## Declaration

```swift
static func result<Value, Intent>(value: Value, actionButtonIntent: Intent) -> Self where Self == IntentResultContainer<Value, Never, Never, Never>, Value : _IntentValue, Intent : AppIntent
```

## Parameters

- `value`: The value produced by the `AppIntent`
- `actionButtonIntent`: The `AppIntent` used perform next
