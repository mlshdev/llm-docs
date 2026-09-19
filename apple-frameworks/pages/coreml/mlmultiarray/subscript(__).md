> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlmultiarray/subscript(_:)

# subscript(\_:)

**Framework:** Core ML  
**Kind:** Instance Subscript  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```swift
subscript(idx: Int) -> NSNumber { get set }
```

## See Also

### Accessing a multiarray’s elements

- [pixelBuffer](pixelbuffer.md): A reference to the multiarray’s underlying pixel buffer.
- [dataPointer](datapointer.md): Deprecated. A pointer to the multiarray’s underlying memory.
