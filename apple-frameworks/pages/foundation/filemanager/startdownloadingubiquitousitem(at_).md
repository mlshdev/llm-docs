> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/startdownloadingubiquitousitem(at:)](https://developer.apple.com/documentation/foundation/filemanager/startdownloadingubiquitousitem(at:))

# startDownloadingUbiquitousItem(at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Starts downloading (if necessary) the specified item to the local system.

## Declaration

```swift
func startDownloadingUbiquitousItem(at url: URL) throws
```

## Parameters

- `url`: The URL for the file or directory in the cloud that you want to download.

<a id="Discussion"></a>

## Discussion

If a cloud-based file or directory has not been downloaded yet, calling this method starts the download process. If the item exists locally, calling this method synchronizes the local copy with the version in the cloud.

For a given URL, you can determine if a file is downloaded by getting the value of the [NSMetadataUbiquitousItemDownloadingStatusKey](../nsmetadataubiquitousitemdownloadingstatuskey.md) key. You can also use related keys to determine the current progress in downloading the file.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing iCloud-based items

- [ubiquityIdentityToken](ubiquityidentitytoken.md): An opaque token that represents the current user’s iCloud Drive Documents identity.
- [url(forUbiquityContainerIdentifier:)](url%28forubiquitycontaineridentifier_%29.md): Returns the URL for the iCloud container associated with the specified identifier and establishes access to that container.
- [isUbiquitousItem(at:)](isubiquitousitem%28at_%29.md): Returns a Boolean indicating whether the item is targeted for storage in iCloud.
- [setUbiquitous(\_:itemAt:destinationURL:)](setubiquitous%28__itemat_destinationurl_%29.md): Indicates whether the item at the specified URL should be stored in iCloud.
- [evictUbiquitousItem(at:)](evictubiquitousitem%28at_%29.md): Removes the local copy of the specified item that’s stored in iCloud.
- [url(forPublishingUbiquitousItemAt:expiration:)](url%28forpublishingubiquitousitemat_expiration_%29.md): Returns a URL that can be emailed to users to allow them to download a copy of a flat file item from iCloud.

# startDownloadingUbiquitousItemAtURL:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Starts downloading (if necessary) the specified item to the local system.

## Declaration

```objectivec
- (BOOL) startDownloadingUbiquitousItemAtURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: The URL for the file or directory in the cloud that you want to download.
- `error`: On input, a pointer to variable for an [NSError](../nserror.md) object. If an error occurs, this pointer is set to an [NSError](../nserror.md) object containing information about the error. You may specify `nil` to ignore the error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the download started successfully or was not necessary, otherwise [false](https://developer.apple.com/documentation/swift/false). If [false](https://developer.apple.com/documentation/swift/false) is returned and `errorOut` is not `nil`, an [NSError](../nserror.md) object describing the error is returned in that parameter.

<a id="Discussion"></a>

## Discussion

If a cloud-based file or directory has not been downloaded yet, calling this method starts the download process. If the item exists locally, calling this method synchronizes the local copy with the version in the cloud.

For a given URL, you can determine if a file is downloaded by getting the value of the [NSMetadataUbiquitousItemDownloadingStatusKey](../nsmetadataubiquitousitemdownloadingstatuskey.md) key. You can also use related keys to determine the current progress in downloading the file.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing iCloud-based items

- [ubiquityIdentityToken](ubiquityidentitytoken.md): An opaque token that represents the current user’s iCloud Drive Documents identity.
- [URLForUbiquityContainerIdentifier:](url%28forubiquitycontaineridentifier_%29.md): Returns the URL for the iCloud container associated with the specified identifier and establishes access to that container.
- [isUbiquitousItemAtURL:](isubiquitousitem%28at_%29.md): Returns a Boolean indicating whether the item is targeted for storage in iCloud.
- [setUbiquitous:itemAtURL:destinationURL:error:](setubiquitous%28__itemat_destinationurl_%29.md): Indicates whether the item at the specified URL should be stored in iCloud.
- [evictUbiquitousItemAtURL:error:](evictubiquitousitem%28at_%29.md): Removes the local copy of the specified item that’s stored in iCloud.
- [URLForPublishingUbiquitousItemAtURL:expirationDate:error:](url%28forpublishingubiquitousitemat_expiration_%29.md): Returns a URL that can be emailed to users to allow them to download a copy of a flat file item from iCloud.
