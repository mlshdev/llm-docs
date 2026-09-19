> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmmutabledatablockbuffer/extend(by:)

# extend(by:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Extend block buffer by appending a memory block of count bytes.

## Declaration

```swift
mutating func extend(by count: Int)
```

## Parameters

- `count`: Number of bytes to add to the block buffer. Must be greater than 0.
