> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/shazamkit/shmanagedsession/result()

# result()

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Performs an asynchronous match with a single signature.

## Declaration

```swift
final func result() async -> SHSession.Result
```

<a id="return-value"></a>

## Return Value

A [SHSession.Result](../shsession/result.md) enumeration that indicates the result.

## See Also

### Returning queries

- [results](results.md): The results as an asynchronous sequence of matches.
- [cancel()](cancel%28%29.md): Cancels the currently running match attempt.
- [prepare()](prepare%28%29.md): Preallocates the resources needed for a match, which increases the responsiveness of matches.
