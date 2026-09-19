> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsmutablefiledatabuffer/withunsafemutablebytes(_:)

# withUnsafeMutableBytes(\_:)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Performs the given closure with an unsafe pointer to the underlying bytes of the data buffer.

## Declaration

```swift
func withUnsafeMutableBytes<R, E>(_ body: (UnsafeMutableRawBufferPointer) throws(E) -> R) throws(E) -> R where E : Error
```

## Parameters

- `body`: The closure to perform with the pointer.

## See Also

### Accessing buffer properties

- [length](length.md): The data length of the buffer.
