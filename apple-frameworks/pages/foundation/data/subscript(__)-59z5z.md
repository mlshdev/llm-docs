> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/data/subscript(_:)-59z5z

# subscript(\_:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the bytes at the specified range of indexes.

## Declaration

```swift
subscript<R>(rangeExpression: R) -> Data where R : RangeExpression, R.Bound : FixedWidthInteger { get set }
```
