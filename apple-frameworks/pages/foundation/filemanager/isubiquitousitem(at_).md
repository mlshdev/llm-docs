> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/isubiquitousitem(at:)](https://developer.apple.com/documentation/foundation/filemanager/isubiquitousitem(at:))

# isUbiquitousItem(at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean indicating whether the item is targeted for storage in iCloud.

## Declaration

```swift
func isUbiquitousItem(at url: URL) -> Bool
```

## Parameters

- `url`: Specify the URL for the file or directory whose status you want to check.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item is targeted for iCloud storage or [false](https://developer.apple.com/documentation/swift/false) if it is not. This method also returns [false](https://developer.apple.com/documentation/swift/false) if no item exists at `url`.

<a id="Discussion"></a>

## Discussion

This method reflects only whether the item should be stored in iCloud because a call was made to the  [setUbiquitous(\_:itemAt:destinationURL:)](setubiquitous%28__itemat_destinationurl_%29.md) method with a value of [true](https://developer.apple.com/documentation/swift/true) for its `flag` parameter. This method does not reflect whether the file has actually been uploaded to any iCloud servers. To determine a file’s upload status, check the `NSURLUbiquitousItemIsUploadedKey` attribute of the corresponding [NSURL](../nsurl.md) object.

## See Also

### Managing iCloud-based items

- [ubiquityIdentityToken](ubiquityidentitytoken.md): An opaque token that represents the current user’s iCloud Drive Documents identity.
- [url(forUbiquityContainerIdentifier:)](url%28forubiquitycontaineridentifier_%29.md): Returns the URL for the iCloud container associated with the specified identifier and establishes access to that container.
- [setUbiquitous(\_:itemAt:destinationURL:)](setubiquitous%28__itemat_destinationurl_%29.md): Indicates whether the item at the specified URL should be stored in iCloud.
- [startDownloadingUbiquitousItem(at:)](startdownloadingubiquitousitem%28at_%29.md): Starts downloading (if necessary) the specified item to the local system.
- [evictUbiquitousItem(at:)](evictubiquitousitem%28at_%29.md): Removes the local copy of the specified item that’s stored in iCloud.
- [url(forPublishingUbiquitousItemAt:expiration:)](url%28forpublishingubiquitousitemat_expiration_%29.md): Returns a URL that can be emailed to users to allow them to download a copy of a flat file item from iCloud.

# isUbiquitousItemAtURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean indicating whether the item is targeted for storage in iCloud.

## Declaration

```objectivec
- (BOOL) isUbiquitousItemAtURL:(NSURL *) url;
```

## Parameters

- `url`: Specify the URL for the file or directory whose status you want to check.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item is targeted for iCloud storage or [false](https://developer.apple.com/documentation/swift/false) if it is not. This method also returns [false](https://developer.apple.com/documentation/swift/false) if no item exists at `url`.

<a id="Discussion"></a>

## Discussion

This method reflects only whether the item should be stored in iCloud because a call was made to the  [setUbiquitous:itemAtURL:destinationURL:error:](setubiquitous%28__itemat_destinationurl_%29.md) method with a value of [true](https://developer.apple.com/documentation/swift/true) for its `flag` parameter. This method does not reflect whether the file has actually been uploaded to any iCloud servers. To determine a file’s upload status, check the `NSURLUbiquitousItemIsUploadedKey` attribute of the corresponding [NSURL](../nsurl.md) object.

## See Also

### Managing iCloud-based items

- [ubiquityIdentityToken](ubiquityidentitytoken.md): An opaque token that represents the current user’s iCloud Drive Documents identity.
- [URLForUbiquityContainerIdentifier:](url%28forubiquitycontaineridentifier_%29.md): Returns the URL for the iCloud container associated with the specified identifier and establishes access to that container.
- [setUbiquitous:itemAtURL:destinationURL:error:](setubiquitous%28__itemat_destinationurl_%29.md): Indicates whether the item at the specified URL should be stored in iCloud.
- [startDownloadingUbiquitousItemAtURL:error:](startdownloadingubiquitousitem%28at_%29.md): Starts downloading (if necessary) the specified item to the local system.
- [evictUbiquitousItemAtURL:error:](evictubiquitousitem%28at_%29.md): Removes the local copy of the specified item that’s stored in iCloud.
- [URLForPublishingUbiquitousItemAtURL:expirationDate:error:](url%28forpublishingubiquitousitemat_expiration_%29.md): Returns a URL that can be emailed to users to allow them to download a copy of a flat file item from iCloud.
