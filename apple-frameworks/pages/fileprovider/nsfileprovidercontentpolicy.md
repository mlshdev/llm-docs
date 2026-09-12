> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidercontentpolicy](https://developer.apple.com/documentation/fileprovider/nsfileprovidercontentpolicy)

# NSFileProviderContentPolicy (Swift)

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

## Declaration

```swift
enum NSFileProviderContentPolicy
```

## Topics

### Policies

- [NSFileProviderContentPolicy.downloadEagerlyAndKeepDownloaded](nsfileprovidercontentpolicy/downloadeagerlyandkeepdownloaded.md)
- [NSFileProviderContentPolicy.downloadLazily](nsfileprovidercontentpolicy/downloadlazily.md)
- [NSFileProviderContentPolicy.downloadLazilyAndEvictOnRemoteUpdate](nsfileprovidercontentpolicy/downloadlazilyandevictonremoteupdate.md)
- [NSFileProviderContentPolicy.inherited](nsfileprovidercontentpolicy/inherited.md)

### Initializers

- [init(rawValue:)](nsfileprovidercontentpolicy/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Content

- [childItemCount](nsfileprovideritemprotocol/childitemcount.md): The number of items contained by this item.
- [documentSize](nsfileprovideritemprotocol/documentsize.md): The document’s size, in bytes.
- [contentPolicy](nsfileprovideritemprotocol/contentpolicy.md)

# NSFileProviderContentPolicy (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

## Declaration

```objectivec
enum NSFileProviderContentPolicy : NSInteger;
```

## Topics

### Policies

- [NSFileProviderContentPolicyDownloadEagerlyAndKeepDownloaded](nsfileprovidercontentpolicy/downloadeagerlyandkeepdownloaded.md)
- [NSFileProviderContentPolicyDownloadLazily](nsfileprovidercontentpolicy/downloadlazily.md)
- [NSFileProviderContentPolicyDownloadLazilyAndEvictOnRemoteUpdate](nsfileprovidercontentpolicy/downloadlazilyandevictonremoteupdate.md)
- [NSFileProviderContentPolicyInherited](nsfileprovidercontentpolicy/inherited.md)

## See Also

### Managing Content

- [childItemCount](nsfileprovideritemprotocol/childitemcount.md): The number of items contained by this item.
- [documentSize](nsfileprovideritemprotocol/documentsize.md): The document’s size, in bytes.
- [contentPolicy](nsfileprovideritemprotocol/contentpolicy.md)
