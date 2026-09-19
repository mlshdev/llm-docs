> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsfilename/init(cstring:)

# init(cString:)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 15.4+

## Declaration

```swift
convenience init(cString name: UnsafeBufferPointer<CChar>)
```

## See Also

### Creating a filename

- [init(bytes:)](init%28bytes_%29.md)
- [init(data:)](init%28data_%29.md): Creates a filename by copying a character sequence data object.
- [init(string:)](init%28string_%29.md): Creates a filename by copying a character sequence from a string instance.
