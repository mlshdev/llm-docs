> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/url(forpublishingubiquitousitemat:expiration:)](https://developer.apple.com/documentation/foundation/filemanager/url(forpublishingubiquitousitemat:expiration:))

# url(forPublishingUbiquitousItemAt:expiration:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a URL that can be emailed to users to allow them to download a copy of a flat file item from iCloud.

## Declaration

```swift
func url(forPublishingUbiquitousItemAt url: URL, expiration outDate: AutoreleasingUnsafeMutablePointer<NSDate?>?) throws -> URL
```

## Parameters

- `url`: The URL of the item in the cloud that you want to share. The URL must be prefixed with the base URL returned from the [url(forUbiquityContainerIdentifier:)](url%28forubiquitycontaineridentifier_%29.md) method that corresponds to the item’s location. The file must be a flat file, not a bundle. The file at the specified URL must already be uploaded to iCloud when you call this method.
- `outDate`: On input, a pointer to a variable for a date object. On output, this parameter contains the date after which the item is no longer available at the returned URL. You may specify `nil` for this parameter if you are not interested in the date.

<a id="return-value"></a>

## Return Value

A URL with which users can download a copy of the item at `url`. In Objective-C, returns `nil` if the URL could not be created for any reason.

<a id="Discussion"></a>

## Discussion

This method creates a snapshot of the specified flat file and places that copy in a temporary iCloud location where it can be accessed by other users using the returned URL. The snapshot reflects the contents of the file at the time the URL was generated and is not updated when subsequent changes are made to the original file in the user’s iCloud storage. The snapshot file remains available at the specified URL until the date specified in the `outDate` parameter, after which it is automatically deleted. Explicitly deleting the item by calling the [removeItem(at:)](removeitem%28at_%29.md) or [removeItem(atPath:)](removeitem%28atpath_%29.md) method also deletes all old versions of the item, invalidating URLs to those versions returned by this method.

Your app must have access to the network for this call to succeed. If the specified file is in the process of being uploaded to iCloud, you must not call this method until the upload has finished.

> **Important**

>  As of iOS 8.0 and macOS 10.10 The `url` must specify a flat file, not a bundle. Bundles have a folder as the root item.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing iCloud-based items

- [ubiquityIdentityToken](ubiquityidentitytoken.md): An opaque token that represents the current user’s iCloud Drive Documents identity.
- [url(forUbiquityContainerIdentifier:)](url%28forubiquitycontaineridentifier_%29.md): Returns the URL for the iCloud container associated with the specified identifier and establishes access to that container.
- [isUbiquitousItem(at:)](isubiquitousitem%28at_%29.md): Returns a Boolean indicating whether the item is targeted for storage in iCloud.
- [setUbiquitous(\_:itemAt:destinationURL:)](setubiquitous%28__itemat_destinationurl_%29.md): Indicates whether the item at the specified URL should be stored in iCloud.
- [startDownloadingUbiquitousItem(at:)](startdownloadingubiquitousitem%28at_%29.md): Starts downloading (if necessary) the specified item to the local system.
- [evictUbiquitousItem(at:)](evictubiquitousitem%28at_%29.md): Removes the local copy of the specified item that’s stored in iCloud.

# URLForPublishingUbiquitousItemAtURL:expirationDate:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a URL that can be emailed to users to allow them to download a copy of a flat file item from iCloud.

## Declaration

```objectivec
- (NSURL *) URLForPublishingUbiquitousItemAtURL:(NSURL *) url expirationDate:(NSDate **) outDate error:(NSError **) error;
```

## Parameters

- `url`: The URL of the item in the cloud that you want to share. The URL must be prefixed with the base URL returned from the [URLForUbiquityContainerIdentifier:](url%28forubiquitycontaineridentifier_%29.md) method that corresponds to the item’s location. The file must be a flat file, not a bundle. The file at the specified URL must already be uploaded to iCloud when you call this method.
- `outDate`: On input, a pointer to a variable for a date object. On output, this parameter contains the date after which the item is no longer available at the returned URL. You may specify `nil` for this parameter if you are not interested in the date.
- `error`: On input, a pointer to variable for an [NSError](../nserror.md) object. If an error occurs, this pointer is set to an [NSError](../nserror.md) object containing information about the error. You may specify `nil` for this parameter if you do not want the error information.

<a id="return-value"></a>

## Return Value

A URL with which users can download a copy of the item at `url`. In Objective-C, returns `nil` if the URL could not be created for any reason.

<a id="Discussion"></a>

## Discussion

This method creates a snapshot of the specified flat file and places that copy in a temporary iCloud location where it can be accessed by other users using the returned URL. The snapshot reflects the contents of the file at the time the URL was generated and is not updated when subsequent changes are made to the original file in the user’s iCloud storage. The snapshot file remains available at the specified URL until the date specified in the `outDate` parameter, after which it is automatically deleted. Explicitly deleting the item by calling the [removeItemAtURL:error:](removeitem%28at_%29.md) or [removeItemAtPath:error:](removeitem%28atpath_%29.md) method also deletes all old versions of the item, invalidating URLs to those versions returned by this method.

Your app must have access to the network for this call to succeed. If the specified file is in the process of being uploaded to iCloud, you must not call this method until the upload has finished.

> **Important**

>  As of iOS 8.0 and macOS 10.10 The `url` must specify a flat file, not a bundle. Bundles have a folder as the root item.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing iCloud-based items

- [ubiquityIdentityToken](ubiquityidentitytoken.md): An opaque token that represents the current user’s iCloud Drive Documents identity.
- [URLForUbiquityContainerIdentifier:](url%28forubiquitycontaineridentifier_%29.md): Returns the URL for the iCloud container associated with the specified identifier and establishes access to that container.
- [isUbiquitousItemAtURL:](isubiquitousitem%28at_%29.md): Returns a Boolean indicating whether the item is targeted for storage in iCloud.
- [setUbiquitous:itemAtURL:destinationURL:error:](setubiquitous%28__itemat_destinationurl_%29.md): Indicates whether the item at the specified URL should be stored in iCloud.
- [startDownloadingUbiquitousItemAtURL:error:](startdownloadingubiquitousitem%28at_%29.md): Starts downloading (if necessary) the specified item to the local system.
- [evictUbiquitousItemAtURL:error:](evictubiquitousitem%28at_%29.md): Removes the local copy of the specified item that’s stored in iCloud.
