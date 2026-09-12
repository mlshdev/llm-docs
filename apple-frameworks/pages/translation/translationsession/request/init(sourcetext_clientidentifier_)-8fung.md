> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/request/init(sourcetext:clientidentifier:)-8fung](https://developer.apple.com/documentation/translation/translationsession/request/init(sourcetext:clientidentifier:)-8fung)

# init(sourceText:clientIdentifier:)

**Framework:** Translation  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+

Creates a request for translating a single attributed string.

## Declaration

```swift
init(sourceText: AttributedString, clientIdentifier: String? = nil)
```

<a id="discussion"></a>

## Discussion

The plain text is automatically extracted and stored in [sourceText](sourcetext.md).

## See Also

### Initializing a translation request

- [init(sourceText:clientIdentifier:)](init%28sourcetext_clientidentifier_%29-ruyz.md): Creates a request for translating a single string of text.
