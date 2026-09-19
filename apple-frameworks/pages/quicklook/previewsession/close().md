> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicklook/previewsession/close()

# close()

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Closes the preview session.

## Declaration

```swift
func close() async throws
```

<a id="discussion"></a>

## Discussion

If the existing session is still open, this method closes it. The session’s events stream receives a `.didClose` event upon success.

> **Throws**

> An `Error` if it is not possible to close the PreviewSession.
