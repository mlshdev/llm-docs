> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/translation/translationsession/cancel()

# cancel()

**Framework:** Translation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Attempts to stop all ongoing work for the translation session.

## Declaration

```swift
func cancel()
```

<a id="discussion"></a>

## Discussion

Future requests will throw an error that the session is already cancelled.
