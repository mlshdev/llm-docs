> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(value:opensintent:dialog:)-2j58s](https://developer.apple.com/documentation/appintents/intentresult/result(value:opensintent:dialog:)-2j58s)

# result(value:opensIntent:dialog:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Indicates the `AppIntent` finished performing

## Declaration

```swift
static func result<Value, OpensAppIntent>(value: Value, opensIntent: OpensAppIntent, dialog: IntentDialog) -> Self where Self == IntentResultContainer<Value, OpensAppIntent, Never, IntentDialog>, Value : _IntentValue, OpensAppIntent : AppIntent
```

## Parameters

- `value`: The value produced by the `AppIntent`
- `opensIntent`: An `AppIntent` to shows the result of current intent
- `dialog`: A custom success dialog
