> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetdownloadstoragemanager/storagemanagementpolicy(for:)](https://developer.apple.com/documentation/avfoundation/avassetdownloadstoragemanager/storagemanagementpolicy(for:))

# storageManagementPolicy(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns the storage management policy for a downloaded asset.

## Declaration

```swift
func storageManagementPolicy(for downloadStorageURL: URL) -> AVAssetDownloadStorageManagementPolicy?
```

## Parameters

- `downloadStorageURL`: The location of the downloaded asset.

<a id="return-value"></a>

## Return Value

The storage management policy for the asset, or `nil` if one isn’t set.

## See Also

### Setting the storage policy

- [setStorageManagementPolicy(\_:for:)](setstoragemanagementpolicy%28__for_%29.md): Sets a storage policy for the downloaded asset.

# storageManagementPolicyForURL: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns the storage management policy for a downloaded asset.

## Declaration

```objectivec
- (AVAssetDownloadStorageManagementPolicy *) storageManagementPolicyForURL:(NSURL *) downloadStorageURL;
```

## Parameters

- `downloadStorageURL`: The location of the downloaded asset.

<a id="return-value"></a>

## Return Value

The storage management policy for the asset, or `nil` if one isn’t set.

## See Also

### Setting the storage policy

- [setStorageManagementPolicy:forURL:](setstoragemanagementpolicy%28__for_%29.md): Sets a storage policy for the downloaded asset.
