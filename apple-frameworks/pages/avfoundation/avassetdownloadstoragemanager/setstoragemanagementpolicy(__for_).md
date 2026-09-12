> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadstoragemanager/setstoragemanagementpolicy(_:for:)](https://developer.apple.com/documentation/avfoundation/avassetdownloadstoragemanager/setstoragemanagementpolicy(_:for:))

# setStorageManagementPolicy(\_:for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Sets a storage policy for the downloaded asset.

## Declaration

```swift
func setStorageManagementPolicy(_ storageManagementPolicy: AVAssetDownloadStorageManagementPolicy, for downloadStorageURL: URL)
```

## Parameters

- `storageManagementPolicy`: The policy to set for the downloaded asset.
- `downloadStorageURL`: The location of the downloaded asset.

## See Also

### Setting the storage policy

- [storageManagementPolicy(for:)](storagemanagementpolicy%28for_%29.md): Returns the storage management policy for a downloaded asset.

# setStorageManagementPolicy:forURL: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Sets a storage policy for the downloaded asset.

## Declaration

```objectivec
- (void) setStorageManagementPolicy:(AVAssetDownloadStorageManagementPolicy *) storageManagementPolicy forURL:(NSURL *) downloadStorageURL;
```

## Parameters

- `storageManagementPolicy`: The policy to set for the downloaded asset.
- `downloadStorageURL`: The location of the downloaded asset.

## See Also

### Setting the storage policy

- [storageManagementPolicyForURL:](storagemanagementpolicy%28for_%29.md): Returns the storage management policy for a downloaded asset.
