> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelbuffer/replaceunsafemutablebytes(_:)

# replaceUnsafeMutableBytes(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Replace the buffer’s contents synchronously on the CPU.

## Declaration

```swift
final func replaceUnsafeMutableBytes(_ callback: (UnsafeMutableRawBufferPointer) -> Void)
```

<a id="discussion"></a>

## Discussion

The buffer’s contents are unspecified, and it is the caller’s responsibility to populate the buffer with valid data. The buffer provided is only valid for the lifetime of the callback.
