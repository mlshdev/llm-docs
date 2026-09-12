> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemprotocol/itemversion](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/itemversion)

# itemVersion (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

A version object that tracks changes to an item.

## Declaration

```swift
optional var itemVersion: NSFileProviderItemVersion { get }
```

<a id="Discussion"></a>

## Discussion

The version object lets you track changes to an item’s content and metadata separately. Updating the version also invalidates the thumbnail cache. For more information, see [NSFileProviderItemVersion](../nsfileprovideritemversion.md).

## See Also

### Tracking Versions

- [versionIdentifier](versionidentifier.md): A data value used to determine when the item changes.
- [isMostRecentVersionDownloaded](ismostrecentversiondownloaded.md): A Boolean value that indicates whether the item is the most recent version downloaded from the server.

# itemVersion (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

A version object that tracks changes to an item.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSFileProviderItemVersion * itemVersion;
```

<a id="Discussion"></a>

## Discussion

The version object lets you track changes to an item’s content and metadata separately. Updating the version also invalidates the thumbnail cache. For more information, see [NSFileProviderItemVersion](../nsfileprovideritemversion.md).

## See Also

### Tracking Versions

- [versionIdentifier](versionidentifier.md): A data value used to determine when the item changes.
- [mostRecentVersionDownloaded](ismostrecentversiondownloaded.md): A Boolean value that indicates whether the item is the most recent version downloaded from the server.
