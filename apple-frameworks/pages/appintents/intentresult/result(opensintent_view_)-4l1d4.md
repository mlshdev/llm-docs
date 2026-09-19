> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentresult/result(opensintent:view:)-4l1d4

# result(opensIntent:view:)

**Framework:** AppIntents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
static func result<OpensAppIntent, Content>(opensIntent: OpensAppIntent, view: Content = EmptyView()) -> Self where Self == IntentResultContainer<Never, OpensAppIntent, _SnippetViewContainer, Never>, OpensAppIntent : AppIntent, Content : View
```
