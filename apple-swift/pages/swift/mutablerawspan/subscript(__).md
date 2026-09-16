> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/mutablerawspan/subscript(_:)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Accesses the byte at the specified offset in the span.

## Declaration

```swift
subscript(byteOffset: Int) -> UInt8 { get set }
```

## Parameters

- `byteOffset`: The offset of the byte to access. `byteOffset` must be greater than or equal to zero, and less than `byteCount`.
