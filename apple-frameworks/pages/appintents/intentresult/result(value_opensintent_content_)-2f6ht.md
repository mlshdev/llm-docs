> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(value:opensintent:content:)-2f6ht](https://developer.apple.com/documentation/appintents/intentresult/result(value:opensintent:content:)-2f6ht)

# result(value:opensIntent:content:)

**Framework:** AppIntents  
**Kind:** Type Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Indicates the `AppIntent` finished performing

## Declaration

```swift
static func result<Value, Content>(value: Value, opensIntent: some AppIntent, @ViewBuilder content: () -> Content) -> Self where Self == IntentResultContainer<Value, Never, _SnippetViewContainer, Never>, Value : _IntentValue, Content : View
```

## Parameters

- `value`: The value produced by the `AppIntent`
- `opensIntent`: An `AppIntent` to shows the result of current intent
- `content`: A custom View to display the result
