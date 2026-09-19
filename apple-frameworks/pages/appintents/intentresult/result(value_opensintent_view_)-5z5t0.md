> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentresult/result(value:opensintent:view:)-5z5t0

# result(value:opensIntent:view:)

**Framework:** AppIntents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
static func result<Value, OpensAppIntent, Content>(value: Value, opensIntent: OpensAppIntent, view: Content = EmptyView()) -> Self where Self == IntentResultContainer<Value, OpensAppIntent, _SnippetViewContainer, Never>, Value : _IntentValue, OpensAppIntent : AppIntent, Content : View
```
