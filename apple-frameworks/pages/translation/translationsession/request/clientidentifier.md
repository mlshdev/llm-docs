> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/translation/translationsession/request/clientidentifier

# clientIdentifier

**Framework:** Translation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

An optional unique identifier to associate a translation request with its response.

## Declaration

```swift
var clientIdentifier: String?
```

<a id="discussion"></a>

## Discussion

When you set this identifier, it returns the same value in the corresponding [TranslationSession.Response](../response.md).
