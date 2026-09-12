> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemversion/metadataversion](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemversion/metadataversion)

# metadataVersion (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

An opaque object used to track versions of the item’s metadata.

## Declaration

```swift
var metadataVersion: Data { get }
```

<a id="Discussion"></a>

## Discussion

When the [metadataVersion](metadataversion.md) changes, system updates the dataless representation of the item on disk, but it doesn’t attempt to download the content.

The version data object must be no longer than 128 bytes.

## See Also

### Accessing Version Data

- [beforeFirstSyncComponent](beforefirstsynccomponent.md): A Boolean value indicating that this version predates the version returned by the file provider extension.
- [contentVersion](contentversion.md): An opaque object used to track versions of the item’s content.

# metadataVersion (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

An opaque object used to track versions of the item’s metadata.

## Declaration

```objectivec
@property (nonatomic, readonly) NSData * metadataVersion;
```

<a id="Discussion"></a>

## Discussion

When the [metadataVersion](metadataversion.md) changes, system updates the dataless representation of the item on disk, but it doesn’t attempt to download the content.

The version data object must be no longer than 128 bytes.

## See Also

### Accessing Version Data

- [beforeFirstSyncComponent](beforefirstsynccomponent.md): A Boolean value indicating that this version predates the version returned by the file provider extension.
- [contentVersion](contentversion.md): An opaque object used to track versions of the item’s content.
