> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(content:)](https://developer.apple.com/documentation/appintents/intentresult/result(content:))

# result(content:)

**Framework:** AppIntents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Indicates the `AppIntent` finished performing

## Declaration

```swift
static func result<Content>(@ViewBuilder content: () -> Content) -> Self where Self == IntentResultContainer<Never, Never, _SnippetViewContainer, Never>, Content : View
```

## Parameters

- `content`: A custom View to display the result
