> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmanagedsession/cancel()](https://developer.apple.com/documentation/shazamkit/shmanagedsession/cancel())

# cancel()

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Cancels the currently running match attempt.

## Declaration

```swift
final func cancel()
```

## See Also

### Returning queries

- [result()](result%28%29.md): Performs an asynchronous match with a single signature.
- [results](results.md): The results as an asynchronous sequence of matches.
- [prepare()](prepare%28%29.md): Preallocates the resources needed for a match, which increases the responsiveness of matches.
