> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchdata/init(bytes:)-mkbp](https://developer.apple.com/documentation/dispatch/dispatchdata/init(bytes:)-mkbp)

# init(bytes:)

**Framework:** Dispatch  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift  (deprecated in 4.0)

Initialize a data object with copied memory content.

## Declaration

```swift
init(bytes buffer: UnsafeBufferPointer<UInt8>)
```

## Parameters

- `buffer`: A pointer to the memory. It will be copied.

## See Also

### Deprecated

- [init(bytesNoCopy:deallocator:)](init%28bytesnocopy_deallocator_%29-7h08w.md): Deprecated. Initialize a data object without copying the bytes.
- [append(\_:count:)](append%28__count_%29.md): Deprecated.
- [copyBytes(to:count:)](copybytes%28to_count_%29-4ffyj.md): Deprecated.
- [copyBytes(to:from:)](copybytes%28to_from_%29-6ztcb.md): Deprecated.
