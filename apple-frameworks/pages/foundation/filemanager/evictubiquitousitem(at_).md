> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/evictubiquitousitem(at:)](https://developer.apple.com/documentation/foundation/filemanager/evictubiquitousitem(at:))

# evictUbiquitousItem(at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the local copy of the specified item that’s stored in iCloud.

## Declaration

```swift
func evictUbiquitousItem(at url: URL) throws
```

## Parameters

- `url`: The URL to a file or directory in iCloud storage.

<a id="Discussion"></a>

## Discussion

Don’t use a coordinated write to perform this operation. In macOS 10.7 or earlier, the framework takes a coordinated write in its implementation of this method, so taking one in your app causes a deadlock. In macOS 10.8 and later, the framework detects coordination done by your app on the same thread as the call to this method, to avoid deadlocking.

This method doesn’t remove the item from iCloud. It removes only the local version. You can then use [startDownloadingUbiquitousItem(at:)](startdownloadingubiquitousitem%28at_%29.md) to force iCloud to download a new version of the file or directory from the server.

To delete a file permanently from the user’s iCloud storage, use the regular [FileManager](../filemanager.md) routines for deleting files and directories. Remember that deleting items from iCloud can’t be undone. Once deleted, the item is gone forever.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [removeItem(at:)](removeitem%28at_%29.md): Removes the file or directory at the specified URL.

### Managing iCloud-based items

- [ubiquityIdentityToken](ubiquityidentitytoken.md): An opaque token that represents the current user’s iCloud Drive Documents identity.
- [url(forUbiquityContainerIdentifier:)](url%28forubiquitycontaineridentifier_%29.md): Returns the URL for the iCloud container associated with the specified identifier and establishes access to that container.
- [isUbiquitousItem(at:)](isubiquitousitem%28at_%29.md): Returns a Boolean indicating whether the item is targeted for storage in iCloud.
- [setUbiquitous(\_:itemAt:destinationURL:)](setubiquitous%28__itemat_destinationurl_%29.md): Indicates whether the item at the specified URL should be stored in iCloud.
- [startDownloadingUbiquitousItem(at:)](startdownloadingubiquitousitem%28at_%29.md): Starts downloading (if necessary) the specified item to the local system.
- [url(forPublishingUbiquitousItemAt:expiration:)](url%28forpublishingubiquitousitemat_expiration_%29.md): Returns a URL that can be emailed to users to allow them to download a copy of a flat file item from iCloud.

# evictUbiquitousItemAtURL:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the local copy of the specified item that’s stored in iCloud.

## Declaration

```objectivec
- (BOOL) evictUbiquitousItemAtURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: The URL to a file or directory in iCloud storage.
- `error`: On input, a pointer to variable for an [NSError](../nserror.md) object. If an error occurs, this pointer is set to an [NSError](../nserror.md) object containing information about the error. You may specify `nil` to ignore the error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the local item was removed successfully or [false](https://developer.apple.com/documentation/swift/false) if it was not. If [false](https://developer.apple.com/documentation/swift/false) is returned and `error` is not `nil`, an [NSError](../nserror.md) object describing the error is returned in that parameter.

<a id="Discussion"></a>

## Discussion

Don’t use a coordinated write to perform this operation. In macOS 10.7 or earlier, the framework takes a coordinated write in its implementation of this method, so taking one in your app causes a deadlock. In macOS 10.8 and later, the framework detects coordination done by your app on the same thread as the call to this method, to avoid deadlocking.

This method doesn’t remove the item from iCloud. It removes only the local version. You can then use [startDownloadingUbiquitousItemAtURL:error:](startdownloadingubiquitousitem%28at_%29.md) to force iCloud to download a new version of the file or directory from the server.

To delete a file permanently from the user’s iCloud storage, use the regular [NSFileManager](../filemanager.md) routines for deleting files and directories. Remember that deleting items from iCloud can’t be undone. Once deleted, the item is gone forever.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [removeItemAtURL:error:](removeitem%28at_%29.md): Removes the file or directory at the specified URL.

### Managing iCloud-based items

- [ubiquityIdentityToken](ubiquityidentitytoken.md): An opaque token that represents the current user’s iCloud Drive Documents identity.
- [URLForUbiquityContainerIdentifier:](url%28forubiquitycontaineridentifier_%29.md): Returns the URL for the iCloud container associated with the specified identifier and establishes access to that container.
- [isUbiquitousItemAtURL:](isubiquitousitem%28at_%29.md): Returns a Boolean indicating whether the item is targeted for storage in iCloud.
- [setUbiquitous:itemAtURL:destinationURL:error:](setubiquitous%28__itemat_destinationurl_%29.md): Indicates whether the item at the specified URL should be stored in iCloud.
- [startDownloadingUbiquitousItemAtURL:error:](startdownloadingubiquitousitem%28at_%29.md): Starts downloading (if necessary) the specified item to the local system.
- [URLForPublishingUbiquitousItemAtURL:expirationDate:error:](url%28forpublishingubiquitousitemat_expiration_%29.md): Returns a URL that can be emailed to users to allow them to download a copy of a flat file item from iCloud.
