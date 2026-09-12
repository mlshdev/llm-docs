> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzshareddirectory/url](https://developer.apple.com/documentation/virtualization/vzshareddirectory/url)

# url (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A file URL to a directory on the host system to expose to the guest.

## Declaration

```swift
var url: URL { get }
```

<a id="Discussion"></a>

## Discussion

The URL must point to an existing directory path in the host file system.

## See Also

### Accessing Directory Properties

- [isReadOnly](isreadonly.md): A Boolean value that indicates whether the directory is read-only to the guest.

# URL (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A file URL to a directory on the host system to expose to the guest.

## Declaration

```objectivec
@property (copy, readonly) NSURL * URL;
```

<a id="Discussion"></a>

## Discussion

The URL must point to an existing directory path in the host file system.

## See Also

### Accessing Directory Properties

- [readOnly](isreadonly.md): A Boolean value that indicates whether the directory is read-only to the guest.
