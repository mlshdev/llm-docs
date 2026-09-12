> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/response/clientidentifier](https://developer.apple.com/documentation/translation/translationsession/response/clientidentifier)

# clientIdentifier

**Framework:** Translation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

The unique identifier matching the client identifier set in the translation request.

## Declaration

```swift
let clientIdentifier: String?
```

<a id="discussion"></a>

## Discussion

Use this identifier to associate a translation request with its response. If you set a client identifier in the translation request, that same identifier returns in the response. If the request contained no identifier, this value is `nil`.

## See Also

### Getting translation details

- [sourceLanguage](sourcelanguage.md): The language that the framework translated the text from.
- [targetLanguage](targetlanguage.md): The language that the framework translated the text into.
