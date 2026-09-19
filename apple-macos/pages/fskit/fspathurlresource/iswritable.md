> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fspathurlresource/iswritable

# isWritable (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

A Boolean value that indicates whether the file system supports writing to the contents of the path URL.

## Declaration

```swift
var isWritable: Bool { get }
```

## See Also

### Accessing resource properties

- [url](url.md): The URL represented by the resource.

# writable (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

A Boolean value that indicates whether the file system supports writing to the contents of the path URL.

## Declaration

```objectivec
@property (readonly, getter=isWritable) BOOL writable;
```

## See Also

### Accessing resource properties

- [url](url.md): The URL represented by the resource.
