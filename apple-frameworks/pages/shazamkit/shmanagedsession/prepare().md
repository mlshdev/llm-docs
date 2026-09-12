> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmanagedsession/prepare()](https://developer.apple.com/documentation/shazamkit/shmanagedsession/prepare())

# prepare()

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Preallocates the resources needed for a match, which increases the responsiveness of matches.

## Declaration

```swift
final func prepare() async
```

## See Also

### Returning queries

- [result()](result%28%29.md): Performs an asynchronous match with a single signature.
- [results](results.md): The results as an asynchronous sequence of matches.
- [cancel()](cancel%28%29.md): Cancels the currently running match attempt.
