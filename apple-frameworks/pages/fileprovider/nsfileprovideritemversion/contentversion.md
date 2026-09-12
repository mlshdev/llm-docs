> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemversion/contentversion](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemversion/contentversion)

# contentVersion (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

An opaque object used to track versions of the item’s content.

## Declaration

```swift
var contentVersion: Data { get }
```

<a id="Discussion"></a>

## Discussion

If the system stores a local copy of an item’s content, it downloads a new copy when the [contentVersion](contentversion.md) changes. The content version also invalidates the system’s thumbnail cache.

The system considers the file’s resource fork part of the file’s content. The version changes when either the data fork or the resource fork changes.

The version data object must be no longer than 128 bytes.

## See Also

### Accessing Version Data

- [beforeFirstSyncComponent](beforefirstsynccomponent.md): A Boolean value indicating that this version predates the version returned by the file provider extension.
- [metadataVersion](metadataversion.md): An opaque object used to track versions of the item’s metadata.

# contentVersion (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

An opaque object used to track versions of the item’s content.

## Declaration

```objectivec
@property (nonatomic, readonly) NSData * contentVersion;
```

<a id="Discussion"></a>

## Discussion

If the system stores a local copy of an item’s content, it downloads a new copy when the [contentVersion](contentversion.md) changes. The content version also invalidates the system’s thumbnail cache.

The system considers the file’s resource fork part of the file’s content. The version changes when either the data fork or the resource fork changes.

The version data object must be no longer than 128 bytes.

## See Also

### Accessing Version Data

- [beforeFirstSyncComponent](beforefirstsynccomponent.md): A Boolean value indicating that this version predates the version returned by the file provider extension.
- [metadataVersion](metadataversion.md): An opaque object used to track versions of the item’s metadata.
