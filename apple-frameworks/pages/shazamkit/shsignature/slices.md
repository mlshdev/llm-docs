> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shsignature/slices](https://developer.apple.com/documentation/shazamkit/shsignature/slices)

# SHSignature.Slices

**Framework:** ShazamKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A sequence of signature segments.

## Declaration

```swift
struct Slices
```

## Topics

### Supporting types

- [SHSignature.Slices.Iterator](slices/iterator.md): An iterator for asynchronously accessing signature slices.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Slicing signature segments

- [slices(from:duration:stride:)](slices%28from_duration_stride_%29.md): Returns a sequence of signatures of the specified duration from a starting value, stepping by the stride.
