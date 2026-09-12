> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemprotocol/ismostrecentversiondownloaded](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/ismostrecentversiondownloaded)

# isMostRecentVersionDownloaded (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the item is the most recent version downloaded from the server.

## Declaration

```swift
optional var isMostRecentVersionDownloaded: Bool { get }
```

## See Also

### Tracking Versions

- [itemVersion](itemversion.md): A version object that tracks changes to an item.
- [versionIdentifier](versionidentifier.md): A data value used to determine when the item changes.

# mostRecentVersionDownloaded (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the item is the most recent version downloaded from the server.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isMostRecentVersionDownloaded) BOOL mostRecentVersionDownloaded;
```

## See Also

### Tracking Versions

- [itemVersion](itemversion.md): A version object that tracks changes to an item.
- [versionIdentifier](versionidentifier.md): A data value used to determine when the item changes.
