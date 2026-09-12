> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(opensintent:view:)-5hm2s](https://developer.apple.com/documentation/appintents/intentresult/result(opensintent:view:)-5hm2s)

# result(opensIntent:view:)

**Framework:** AppIntents  
**Kind:** Type Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Indicates the `AppIntent` finished performing

## Declaration

```swift
static func result<Content>(opensIntent: some AppIntent, view: Content = EmptyView()) -> Self where Self == IntentResultContainer<Never, Never, _SnippetViewContainer, Never>, Content : View
```

## Parameters

- `opensIntent`: An `AppIntent` to shows the result of current intent
- `view`: A custom View to display the result
