> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/javascriptconfirmresult](https://developer.apple.com/documentation/webkit/webpage/javascriptconfirmresult)

# WebPage.JavaScriptConfirmResult

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The result of handling a JavaScript confirm invocation.

## Declaration

```swift
enum JavaScriptConfirmResult
```

## Topics

### Enumeration Cases

- [WebPage.JavaScriptConfirmResult.cancel](javascriptconfirmresult/cancel.md): Signals a negative action was produced by the invocation.
- [WebPage.JavaScriptConfirmResult.ok](javascriptconfirmresult/ok.md): Signals an affirmative action was produced by the invocation.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing JavaScript dialogs

- [WebPage.DialogPresenting](dialogpresenting.md): Allows providing custom behavior to handle JavaScript actions and provide a response.
- [WebPage.FileInputPromptResult](fileinputpromptresult.md): The result of handling a JavaScript open invocation.
- [WebPage.JavaScriptPromptResult](javascriptpromptresult.md): The result of handling a JavaScript confirm invocation.
