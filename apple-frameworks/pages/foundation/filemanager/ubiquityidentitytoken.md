> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/ubiquityidentitytoken](https://developer.apple.com/documentation/foundation/filemanager/ubiquityidentitytoken)

# ubiquityIdentityToken (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An opaque token that represents the current user’s iCloud Drive Documents identity.

## Declaration

```swift
@NSCopying var ubiquityIdentityToken: (any NSCoding & NSCopying & NSObjectProtocol)? { get }
```

<a id="Discussion"></a>

## Discussion

In iCloud Drive Documents, when iCloud is available, this property contains an opaque object representing the identity of the current user. If iCloud is unavailable or there is no logged-in user, the value of this property is `nil`. Accessing the value of this property is relatively fast, so you can check the value at launch time from your app’s main thread.

You can use the token in this property, together with the [NSUbiquityIdentityDidChange](../nsnotification/name-swift.struct/nsubiquityidentitydidchange.md) notification, to detect when the user logs in or out of iCloud and to detect changes to the active iCloud account. When the user logs in with a different iCloud account, the identity token changes, and the system posts the notification. If you stored or archived the previous token, compare that token to the newly obtained one using the [isEqual(\_:)](../../objectivec/nsobjectprotocol/isequal%28__%29.md) method to determine if the users are the same or different.

Accessing the token in this property doesn’t connect your app to its ubiquity containers. To establish access to a ubiquity container, call the [url(forUbiquityContainerIdentifier:)](url%28forubiquitycontaineridentifier_%29.md) method. In macOS, you can instead use an [NSDocument](https://developer.apple.com/documentation/appkit/nsdocument) object, which establishes access automatically.

CloudKit clients should not use this token as a way to identify whether the iCloud account is logged in. Instead, use [accountStatus(completionHandler:)](../../cloudkit/ckcontainer/accountstatus%28completionhandler_%29.md) or [fetchUserRecordID(completionHandler:)](../../cloudkit/ckcontainer/fetchuserrecordid%28completionhandler_%29.md).

## See Also

### Managing iCloud-based items

- [url(forUbiquityContainerIdentifier:)](url%28forubiquitycontaineridentifier_%29.md): Returns the URL for the iCloud container associated with the specified identifier and establishes access to that container.
- [isUbiquitousItem(at:)](isubiquitousitem%28at_%29.md): Returns a Boolean indicating whether the item is targeted for storage in iCloud.
- [setUbiquitous(\_:itemAt:destinationURL:)](setubiquitous%28__itemat_destinationurl_%29.md): Indicates whether the item at the specified URL should be stored in iCloud.
- [startDownloadingUbiquitousItem(at:)](startdownloadingubiquitousitem%28at_%29.md): Starts downloading (if necessary) the specified item to the local system.
- [evictUbiquitousItem(at:)](evictubiquitousitem%28at_%29.md): Removes the local copy of the specified item that’s stored in iCloud.
- [url(forPublishingUbiquitousItemAt:expiration:)](url%28forpublishingubiquitousitemat_expiration_%29.md): Returns a URL that can be emailed to users to allow them to download a copy of a flat file item from iCloud.

# ubiquityIdentityToken (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An opaque token that represents the current user’s iCloud Drive Documents identity.

## Declaration

```objectivec
@property (copy, readonly, nullable) id<NSCoding,NSCopying,NSObject> ubiquityIdentityToken;
```

<a id="Discussion"></a>

## Discussion

In iCloud Drive Documents, when iCloud is available, this property contains an opaque object representing the identity of the current user. If iCloud is unavailable or there is no logged-in user, the value of this property is `nil`. Accessing the value of this property is relatively fast, so you can check the value at launch time from your app’s main thread.

You can use the token in this property, together with the [NSUbiquityIdentityDidChangeNotification](../nsnotification/name-swift.struct/nsubiquityidentitydidchange.md) notification, to detect when the user logs in or out of iCloud and to detect changes to the active iCloud account. When the user logs in with a different iCloud account, the identity token changes, and the system posts the notification. If you stored or archived the previous token, compare that token to the newly obtained one using the [isEqual:](../../objectivec/nsobjectprotocol/isequal%28__%29.md) method to determine if the users are the same or different.

Accessing the token in this property doesn’t connect your app to its ubiquity containers. To establish access to a ubiquity container, call the [URLForUbiquityContainerIdentifier:](url%28forubiquitycontaineridentifier_%29.md) method. In macOS, you can instead use an [NSDocument](https://developer.apple.com/documentation/appkit/nsdocument) object, which establishes access automatically.

CloudKit clients should not use this token as a way to identify whether the iCloud account is logged in. Instead, use [accountStatusWithCompletionHandler:](../../cloudkit/ckcontainer/accountstatus%28completionhandler_%29.md) or [fetchUserRecordIDWithCompletionHandler:](../../cloudkit/ckcontainer/fetchuserrecordid%28completionhandler_%29.md).

## See Also

### Managing iCloud-based items

- [URLForUbiquityContainerIdentifier:](url%28forubiquitycontaineridentifier_%29.md): Returns the URL for the iCloud container associated with the specified identifier and establishes access to that container.
- [isUbiquitousItemAtURL:](isubiquitousitem%28at_%29.md): Returns a Boolean indicating whether the item is targeted for storage in iCloud.
- [setUbiquitous:itemAtURL:destinationURL:error:](setubiquitous%28__itemat_destinationurl_%29.md): Indicates whether the item at the specified URL should be stored in iCloud.
- [startDownloadingUbiquitousItemAtURL:error:](startdownloadingubiquitousitem%28at_%29.md): Starts downloading (if necessary) the specified item to the local system.
- [evictUbiquitousItemAtURL:error:](evictubiquitousitem%28at_%29.md): Removes the local copy of the specified item that’s stored in iCloud.
- [URLForPublishingUbiquitousItemAtURL:expirationDate:error:](url%28forpublishingubiquitousitemat_expiration_%29.md): Returns a URL that can be emailed to users to allow them to download a copy of a flat file item from iCloud.
