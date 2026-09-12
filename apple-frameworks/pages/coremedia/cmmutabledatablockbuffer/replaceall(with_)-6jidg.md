> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmutabledatablockbuffer/replaceall(with:)-6jidg](https://developer.apple.com/documentation/coremedia/cmmutabledatablockbuffer/replaceall(with:)-6jidg)

# replaceAll(with:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Replace all data in the buffer with new bytes.

## Declaration

```swift
mutating func replaceAll(with bytes: some DataProtocol)
```

## Parameters

- `bytes`: The replacement data. This must have the same `count` as the block buffer.
