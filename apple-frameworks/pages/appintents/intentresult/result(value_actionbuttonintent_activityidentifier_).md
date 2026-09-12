> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(value:actionbuttonintent:activityidentifier:)](https://developer.apple.com/documentation/appintents/intentresult/result(value:actionbuttonintent:activityidentifier:))

# result(value:actionButtonIntent:activityIdentifier:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS · watchOS 10.2+

Creates a result container with a value, a follow-on intent, and an identifier.

## Declaration

```swift
static func result<Value, Intent>(value: Value, actionButtonIntent: Intent, activityIdentifier: String) -> Self where Self == IntentResultContainer<Value, Never, Never, Never>, Value : _IntentValue, Intent : AppIntent
```

## Parameters

- `value`: The value produced by the `AppIntent`
- `actionButtonIntent`: A follow-on intent that can run next.
- `activityIdentifier`: An identifier for the follow-on intent.
