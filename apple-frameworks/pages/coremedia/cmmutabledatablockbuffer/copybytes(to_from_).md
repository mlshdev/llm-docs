> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmmutabledatablockbuffer/copybytes(to:from:)

# copyBytes(to:from:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Copy the bytes from the given range to the destination buffer.

## Declaration

```swift
func copyBytes<R>(to destination: UnsafeMutableRawBufferPointer, from range: R) where R : RangeExpression, R.Bound == Int
```
