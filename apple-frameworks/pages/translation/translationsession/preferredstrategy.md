> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/translation/translationsession/preferredstrategy

# preferredStrategy

**Framework:** Translation  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.0+ · macOS 26.4+

The preferred translation strategy configured for the session.

## Declaration

```swift
var preferredStrategy: TranslationSession.Strategy { get }
```

## See Also

### Accessing the session properties

- [canRequestDownloads](canrequestdownloads.md): A boolean value that indicates whether a translation session can request language downloads.
- [isReady](isready.md): A boolean value that indicates whether the system has installed the source and target languages of the session and is ready to begin translation.
