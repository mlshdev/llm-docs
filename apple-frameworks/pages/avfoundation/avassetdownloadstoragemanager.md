> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadstoragemanager](https://developer.apple.com/documentation/avfoundation/avassetdownloadstoragemanager)

# AVAssetDownloadStorageManager (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An object that manages policies to automatically purge downloaded assets.

## Declaration

```swift
class AVAssetDownloadStorageManager
```

## Topics

### Accessing the shared manager

- [shared()](avassetdownloadstoragemanager/shared%28%29.md): Returns the shared storage manager instance.

### Setting the storage policy

- [storageManagementPolicy(for:)](avassetdownloadstoragemanager/storagemanagementpolicy%28for_%29.md): Returns the storage management policy for a downloaded asset.
- [setStorageManagementPolicy(\_:for:)](avassetdownloadstoragemanager/setstoragemanagementpolicy%28__for_%29.md): Sets a storage policy for the downloaded asset.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Offline storage management

- [AVAssetDownloadStorageManagementPolicy](avassetdownloadstoragemanagementpolicy.md): An object that defines a policy to automatically manage the storage of downloaded assets.
- [AVMutableAssetDownloadStorageManagementPolicy](avmutableassetdownloadstoragemanagementpolicy.md): A mutable object that you use to create a new storage management policy.

# AVAssetDownloadStorageManager (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An object that manages policies to automatically purge downloaded assets.

## Declaration

```objectivec
@interface AVAssetDownloadStorageManager : NSObject
```

## Topics

### Accessing the shared manager

- [sharedDownloadStorageManager](avassetdownloadstoragemanager/shared%28%29.md): Returns the shared storage manager instance.

### Setting the storage policy

- [storageManagementPolicyForURL:](avassetdownloadstoragemanager/storagemanagementpolicy%28for_%29.md): Returns the storage management policy for a downloaded asset.
- [setStorageManagementPolicy:forURL:](avassetdownloadstoragemanager/setstoragemanagementpolicy%28__for_%29.md): Sets a storage policy for the downloaded asset.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Offline storage management

- [AVAssetDownloadStorageManagementPolicy](avassetdownloadstoragemanagementpolicy.md): An object that defines a policy to automatically manage the storage of downloaded assets.
- [AVMutableAssetDownloadStorageManagementPolicy](avmutableassetdownloadstoragemanagementpolicy.md): A mutable object that you use to create a new storage management policy.
