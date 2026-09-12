> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemprotocol/versionidentifier](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/versionidentifier)

# versionIdentifier (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

A data value used to determine when the item changes.

## Declaration

```swift
optional var versionIdentifier: Data? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a data object that can uniquely identify each version of the item; for example, the hash of a document’s contents.

Version identifiers are limited to 1000 bytes.

## See Also

### Tracking Versions

- [itemVersion](itemversion.md): A version object that tracks changes to an item.
- [isMostRecentVersionDownloaded](ismostrecentversiondownloaded.md): A Boolean value that indicates whether the item is the most recent version downloaded from the server.

# versionIdentifier (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

A data value used to determine when the item changes.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSData * versionIdentifier;
```

<a id="Discussion"></a>

## Discussion

This property contains a data object that can uniquely identify each version of the item; for example, the hash of a document’s contents.

Version identifiers are limited to 1000 bytes.

## See Also

### Tracking Versions

- [itemVersion](itemversion.md): A version object that tracks changes to an item.
- [mostRecentVersionDownloaded](ismostrecentversiondownloaded.md): A Boolean value that indicates whether the item is the most recent version downloaded from the server.
