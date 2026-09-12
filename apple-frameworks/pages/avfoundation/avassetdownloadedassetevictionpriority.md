> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadedassetevictionpriority](https://developer.apple.com/documentation/avfoundation/avassetdownloadedassetevictionpriority)

# AVAssetDownloadedAssetEvictionPriority (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Constants that define eviction priorities for a storage management policy.

## Declaration

```swift
struct AVAssetDownloadedAssetEvictionPriority
```

## Topics

### Eviction priorities

- [default](avassetdownloadedassetevictionpriority/default.md): The default eviction priority.
- [important](avassetdownloadedassetevictionpriority/important.md): An eviction priority that indicates that this asset is important and the system should evict lower-priority assets first.

### Initializers

- [init(rawValue:)](avassetdownloadedassetevictionpriority/init%28rawvalue_%29.md): Creates an eviction priority with a string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing storage

- [expirationDate](avmutableassetdownloadstoragemanagementpolicy/expirationdate.md): The expiration date for an asset.
- [priority](avmutableassetdownloadstoragemanagementpolicy/priority.md): The eviction priority for a downloaded asset.

# AVAssetDownloadedAssetEvictionPriority (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Constants that define eviction priorities for a storage management policy.

## Declaration

```objectivec
typedef NSString * AVAssetDownloadedAssetEvictionPriority;
```

## Topics

### Eviction priorities

- [AVAssetDownloadedAssetEvictionPriorityDefault](avassetdownloadedassetevictionpriority/default.md): The default eviction priority.
- [AVAssetDownloadedAssetEvictionPriorityImportant](avassetdownloadedassetevictionpriority/important.md): An eviction priority that indicates that this asset is important and the system should evict lower-priority assets first.

## See Also

### Managing storage

- [expirationDate](avmutableassetdownloadstoragemanagementpolicy/expirationdate.md): The expiration date for an asset.
- [priority](avmutableassetdownloadstoragemanagementpolicy/priority.md): The eviction priority for a downloaded asset.
