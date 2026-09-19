> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musicunderstanding/musicunderstandingsession/cancel()

# cancel()

**Framework:** Music Understanding  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Cancels any ongoing analysis.

## Declaration

```swift
func cancel() async
```

<a id="Discussion"></a>

## Discussion

After you cancel a session, it can’t be re-used.
