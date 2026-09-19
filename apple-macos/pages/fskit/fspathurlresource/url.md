> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fspathurlresource/url

# url (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The URL represented by the resource.

## Declaration

```swift
var url: URL { get }
```

## See Also

### Accessing resource properties

- [isWritable](iswritable.md): A Boolean value that indicates whether the file system supports writing to the contents of the path URL.

# url (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The URL represented by the resource.

## Declaration

```objectivec
@property (copy, readonly) NSURL * url;
```

## See Also

### Accessing resource properties

- [writable](iswritable.md): A Boolean value that indicates whether the file system supports writing to the contents of the path URL.
