> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(opensintent:)-8t8q8](https://developer.apple.com/documentation/appintents/intentresult/result(opensintent:)-8t8q8)

# result(opensIntent:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Indicates the `AppIntent` finished performing

## Declaration

```swift
static func result(opensIntent: some AppIntent) -> Self where Self == IntentResultContainer<Never, Never, Never, Never>
```

## Parameters

- `opensIntent`: An `AppIntent` to shows the result of current intent
