> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/previewsession/close()](https://developer.apple.com/documentation/quicklook/previewsession/close())

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
