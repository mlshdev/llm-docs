> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shsession/result/error(_:_:)](https://developer.apple.com/documentation/shazamkit/shsession/result/error(_:_:))

# SHSession.Result.error(\_:\_:)

**Framework:** ShazamKit  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that indicates a session error.

## Declaration

```swift
case error(any Error, SHSignature)
```

## See Also

### Constants

- [SHSession.Result.match(\_:)](match%28__%29.md): A type that indicates a session match.
- [SHSession.Result.noMatch(\_:)](nomatch%28__%29.md): A type that indicates there’s no match for the signature.
