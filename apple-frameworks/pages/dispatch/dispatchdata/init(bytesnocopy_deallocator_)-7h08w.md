> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatchdata/init(bytesnocopy:deallocator:)-7h08w

# init(bytesNoCopy:deallocator:)

**Framework:** Dispatch  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift  (deprecated in 4.0)

Initialize a data object without copying the bytes.

## Declaration

```swift
init(bytesNoCopy bytes: UnsafeBufferPointer<UInt8>, deallocator: DispatchData.Deallocator = .free)
```

## Parameters

- `bytes`: A pointer to the bytes.
- `deallocator`: Specifies the mechanism to free the indicated buffer.

## See Also

### Deprecated

- [init(bytes:)](init%28bytes_%29-mkbp.md): Deprecated. Initialize a data object with copied memory content.
- [append(\_:count:)](append%28__count_%29.md): Deprecated.
- [copyBytes(to:count:)](copybytes%28to_count_%29-4ffyj.md): Deprecated.
- [copyBytes(to:from:)](copybytes%28to_from_%29-6ztcb.md): Deprecated.
