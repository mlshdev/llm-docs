> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(opensintent:dialog:content:)-2g81m](https://developer.apple.com/documentation/appintents/intentresult/result(opensintent:dialog:content:)-2g81m)

# result(opensIntent:dialog:content:)

**Framework:** AppIntents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
static func result<OpensAppIntent, Content>(opensIntent: OpensAppIntent, dialog: IntentDialog, @ViewBuilder content: () -> Content) -> Self where Self == IntentResultContainer<Never, OpensAppIntent, _SnippetViewContainer, IntentDialog>, OpensAppIntent : AppIntent, Content : View
```
