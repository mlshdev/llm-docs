> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatchdata/enumeratebytes(_:)

# enumerateBytes(\_:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 4.2+

## Declaration

```swift
func enumerateBytes(_ block: (UnsafeBufferPointer<UInt8>, Int, inout Bool) -> Void)
```

## See Also

### Iterating Over the Buffer Contents

- [makeIterator()](makeiterator%28%29.md)
