> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsfilename/init(bytes:)

# init(bytes:)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 15.4+

## Declaration

```swift
convenience init(bytes name: UnsafeBufferPointer<CChar>)
```

## See Also

### Creating a filename

- [init(cString:)](init%28cstring_%29.md)
- [init(data:)](init%28data_%29.md): Creates a filename by copying a character sequence data object.
- [init(string:)](init%28string_%29.md): Creates a filename by copying a character sequence from a string instance.
