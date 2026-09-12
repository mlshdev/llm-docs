> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutableassetdownloadstoragemanagementpolicy](https://developer.apple.com/documentation/avfoundation/avmutableassetdownloadstoragemanagementpolicy)

# AVMutableAssetDownloadStorageManagementPolicy (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A mutable object that you use to create a new storage management policy.

## Declaration

```swift
class AVMutableAssetDownloadStorageManagementPolicy
```

## Topics

### Managing storage

- [expirationDate](avmutableassetdownloadstoragemanagementpolicy/expirationdate.md): The expiration date for an asset.
- [priority](avmutableassetdownloadstoragemanagementpolicy/priority.md): The eviction priority for a downloaded asset.
- [AVAssetDownloadedAssetEvictionPriority](avassetdownloadedassetevictionpriority.md): Constants that define eviction priorities for a storage management policy.

## Relationships

### Inherits From

- [AVAssetDownloadStorageManagementPolicy](avassetdownloadstoragemanagementpolicy.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Offline storage management

- [AVAssetDownloadStorageManager](avassetdownloadstoragemanager.md): An object that manages policies to automatically purge downloaded assets.
- [AVAssetDownloadStorageManagementPolicy](avassetdownloadstoragemanagementpolicy.md): An object that defines a policy to automatically manage the storage of downloaded assets.

# AVMutableAssetDownloadStorageManagementPolicy (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A mutable object that you use to create a new storage management policy.

## Declaration

```objectivec
@interface AVMutableAssetDownloadStorageManagementPolicy : AVAssetDownloadStorageManagementPolicy
```

## Topics

### Managing storage

- [expirationDate](avmutableassetdownloadstoragemanagementpolicy/expirationdate.md): The expiration date for an asset.
- [priority](avmutableassetdownloadstoragemanagementpolicy/priority.md): The eviction priority for a downloaded asset.
- [AVAssetDownloadedAssetEvictionPriority](avassetdownloadedassetevictionpriority.md): Constants that define eviction priorities for a storage management policy.

## Relationships

### Inherits From

- [AVAssetDownloadStorageManagementPolicy](avassetdownloadstoragemanagementpolicy.md)

## See Also

### Offline storage management

- [AVAssetDownloadStorageManager](avassetdownloadstoragemanager.md): An object that manages policies to automatically purge downloaded assets.
- [AVAssetDownloadStorageManagementPolicy](avassetdownloadstoragemanagementpolicy.md): An object that defines a policy to automatically manage the storage of downloaded assets.
