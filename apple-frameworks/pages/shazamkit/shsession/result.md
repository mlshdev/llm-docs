> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/shazamkit/shsession/result

# SHSession.Result

**Framework:** ShazamKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Identifies the result from an asynchronous sequence result.

## Declaration

```swift
@frozen enum Result
```

## Topics

### Constants

- [SHSession.Result.match(\_:)](result/match%28__%29.md): A type that indicates a session match.
- [SHSession.Result.noMatch(\_:)](result/nomatch%28__%29.md): A type that indicates there’s no match for the signature.
- [SHSession.Result.error(\_:\_:)](result/error%28____%29.md): A type that indicates a session error.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Returning queries

- [result(from:)](result%28from_%29.md): Performs an asynchronous match with a signature you specify.
