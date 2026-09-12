> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult/result(value:opensintent:dialog:content:)-4iwem](https://developer.apple.com/documentation/appintents/intentresult/result(value:opensintent:dialog:content:)-4iwem)

# result(value:opensIntent:dialog:content:)

**Framework:** AppIntents  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
static func result<Value, OpensAppIntent, Content>(value: Value, opensIntent: OpensAppIntent, dialog: IntentDialog, @ViewBuilder content: () -> Content) -> Self where Self == IntentResultContainer<Value, OpensAppIntent, _SnippetViewContainer, IntentDialog>, Value : _IntentValue, OpensAppIntent : AppIntent, Content : View
```
