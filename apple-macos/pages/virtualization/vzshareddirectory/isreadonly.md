> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzshareddirectory/isreadonly](https://developer.apple.com/documentation/virtualization/vzshareddirectory/isreadonly)

# isReadOnly (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean value that indicates whether the directory is read-only to the guest.

## Declaration

```swift
var isReadOnly: Bool { get }
```

## See Also

### Accessing Directory Properties

- [url](url.md): A file URL to a directory on the host system to expose to the guest.

# readOnly (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean value that indicates whether the directory is read-only to the guest.

## Declaration

```objectivec
@property (readonly, getter=isReadOnly) BOOL readOnly;
```

## See Also

### Accessing Directory Properties

- [URL](url.md): A file URL to a directory on the host system to expose to the guest.
