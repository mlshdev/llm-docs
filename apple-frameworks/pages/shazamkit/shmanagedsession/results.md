> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmanagedsession/results](https://developer.apple.com/documentation/shazamkit/shmanagedsession/results)

# results

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The results as an asynchronous sequence of matches.

## Declaration

```swift
final var results: SHSession.Results { get }
```

<a id="Discussion"></a>

## Discussion

This session continues to return results until the sequence is exhausted or the app calls [cancel()](cancel%28%29.md).

## See Also

### Returning queries

- [result()](result%28%29.md): Performs an asynchronous match with a single signature.
- [cancel()](cancel%28%29.md): Cancels the currently running match attempt.
- [prepare()](prepare%28%29.md): Preallocates the resources needed for a match, which increases the responsiveness of matches.
