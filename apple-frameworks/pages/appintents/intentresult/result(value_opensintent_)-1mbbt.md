> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(value:opensintent:)-1mbbt](https://developer.apple.com/documentation/appintents/intentresult/result(value:opensintent:)-1mbbt)

# result(value:opensIntent:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Indicates the `AppIntent` finished performing

## Declaration

```swift
static func result<Value, OpensAppIntent>(value: Value, opensIntent: OpensAppIntent) -> Self where Self == IntentResultContainer<Value, OpensAppIntent, Never, Never>, Value : _IntentValue, OpensAppIntent : AppIntent
```

## Parameters

- `value`: The value produced by the `AppIntent`
- `opensIntent`: An `AppIntent` to shows the result of current intent
