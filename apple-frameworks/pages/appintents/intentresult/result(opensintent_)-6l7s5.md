> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(opensintent:)-6l7s5](https://developer.apple.com/documentation/appintents/intentresult/result(opensintent:)-6l7s5)

# result(opensIntent:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Indicates the `AppIntent` finished performing

## Declaration

```swift
static func result<OpensAppIntent>(opensIntent: OpensAppIntent) -> Self where Self == IntentResultContainer<Never, OpensAppIntent, Never, Never>, OpensAppIntent : AppIntent
```

## Parameters

- `opensIntent`: An `AppIntent` to shows the result of current intent
