> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/configuration/invalidate()](https://developer.apple.com/documentation/translation/translationsession/configuration/invalidate())

# invalidate()

**Framework:** Translation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

Invalidate the current translation session and re-run it with new content.

## Declaration

```swift
mutating func invalidate()
```

<a id="discussion"></a>

## Discussion

Call this method when you want to translate new content using the same source and target languages. When you do, it causes the [translationTask(\_:action:)](https://developer.apple.com/documentation/swiftui/view/translationtask%28_:action:%29) function to call its `action` closure and translate the content again.
