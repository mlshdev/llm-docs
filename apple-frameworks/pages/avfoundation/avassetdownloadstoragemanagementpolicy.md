> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadstoragemanagementpolicy](https://developer.apple.com/documentation/avfoundation/avassetdownloadstoragemanagementpolicy)

# AVAssetDownloadStorageManagementPolicy (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An object that defines a policy to automatically manage the storage of downloaded assets.

## Declaration

```swift
class AVAssetDownloadStorageManagementPolicy
```

## Topics

### Inspecting a policy

- [expirationDate](avassetdownloadstoragemanagementpolicy/expirationdate.md): The expiration date for an asset.
- [priority](avassetdownloadstoragemanagementpolicy/priority.md): The eviction priority for an asset.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVMutableAssetDownloadStorageManagementPolicy](avmutableassetdownloadstoragemanagementpolicy.md)

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
- [AVMutableAssetDownloadStorageManagementPolicy](avmutableassetdownloadstoragemanagementpolicy.md): A mutable object that you use to create a new storage management policy.

# AVAssetDownloadStorageManagementPolicy (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

An object that defines a policy to automatically manage the storage of downloaded assets.

## Declaration

```objectivec
@interface AVAssetDownloadStorageManagementPolicy : NSObject
```

## Topics

### Inspecting a policy

- [expirationDate](avassetdownloadstoragemanagementpolicy/expirationdate.md): The expiration date for an asset.
- [priority](avassetdownloadstoragemanagementpolicy/priority.md): The eviction priority for an asset.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVMutableAssetDownloadStorageManagementPolicy](avmutableassetdownloadstoragemanagementpolicy.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)

## See Also

### Offline storage management

- [AVAssetDownloadStorageManager](avassetdownloadstoragemanager.md): An object that manages policies to automatically purge downloaded assets.
- [AVMutableAssetDownloadStorageManagementPolicy](avmutableassetdownloadstoragemanagementpolicy.md): A mutable object that you use to create a new storage management policy.
