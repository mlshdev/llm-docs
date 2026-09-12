> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/url(forubiquitycontaineridentifier:)](https://developer.apple.com/documentation/foundation/filemanager/url(forubiquitycontaineridentifier:))

# url(forUbiquityContainerIdentifier:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the URL for the iCloud container associated with the specified identifier and establishes access to that container.

## Declaration

```swift
func url(forUbiquityContainerIdentifier containerIdentifier: String?) -> URL?
```

## Parameters

- `containerIdentifier`: The fully-qualified container identifier for an iCloud container directory. The string you specify must not contain wildcards and must be of the form *\<TEAMID\>*`.`*\<CONTAINER\>*, where *\<TEAMID\>* is your development team ID and *\<CONTAINER\>* is the bundle identifier of the container you want to access.

  The container identifiers for your app must be declared in the `com.apple.developer.ubiquity-container-identifiers` array of the `.entitlements` property list file in your Xcode project.

  If you specify `nil` for this parameter, this method returns the first container listed in the `com.apple.developer.ubiquity-container-identifiers` entitlement array.

<a id="return-value"></a>

## Return Value

A URL pointing to the specified ubiquity container, or `nil` if the container could not be located or if iCloud storage is unavailable for the current user or device.

<a id="Discussion"></a>

## Discussion

You use this method to determine the location of your app’s ubiquity container directories and to configure your app’s initial iCloud access. The first time you call this method for a given ubiquity container, the system extends your app’s sandbox to include that container. In iOS, you must call this method at least once before trying to search for cloud-based files in the ubiquity container. If your app accesses multiple ubiquity containers, call this method once for each container. In macOS, you do not need to call this method if you use [NSDocument](https://developer.apple.com/documentation/appkit/nsdocument)-based objects, because the system then calls this method automatically.

You can use the URL returned by this method to build paths to files and directories within your app’s ubiquity container. Each app that syncs documents to the cloud must have at least one associated ubiquity container in which to put those files. This container can be unique to the app or shared by multiple apps.

> **Important**

>  Do not call this method from your app’s main thread. Because this method might take a nontrivial amount of time to set up iCloud and return the requested URL, you should always call it from a secondary thread. To determine if iCloud is available, especially at launch time, check the value of the [ubiquityIdentityToken](ubiquityidentitytoken.md) property instead.

In addition to writing to its own ubiquity container, an app can write to any container directory for which it has the appropriate permission. Each additional ubiquity container should be listed as an additional value in the `com.apple.developer.ubiquity-container-identifiers` entitlement array.

To learn how to view your development team’s unique *\<TEAM_ID\>* value, read To view the team ID in Tools Workflow Guide for Mac.

> **Note**

>  The development team ID that precedes each container ID string is the unique identifier associated with your development team. To learn how to view your development team’s unique *\<TEAM_ID\>* value, read To view the team ID in Tools Workflow Guide for Mac.

## See Also

### Managing iCloud-based items

- [ubiquityIdentityToken](ubiquityidentitytoken.md): An opaque token that represents the current user’s iCloud Drive Documents identity.
- [isUbiquitousItem(at:)](isubiquitousitem%28at_%29.md): Returns a Boolean indicating whether the item is targeted for storage in iCloud.
- [setUbiquitous(\_:itemAt:destinationURL:)](setubiquitous%28__itemat_destinationurl_%29.md): Indicates whether the item at the specified URL should be stored in iCloud.
- [startDownloadingUbiquitousItem(at:)](startdownloadingubiquitousitem%28at_%29.md): Starts downloading (if necessary) the specified item to the local system.
- [evictUbiquitousItem(at:)](evictubiquitousitem%28at_%29.md): Removes the local copy of the specified item that’s stored in iCloud.
- [url(forPublishingUbiquitousItemAt:expiration:)](url%28forpublishingubiquitousitemat_expiration_%29.md): Returns a URL that can be emailed to users to allow them to download a copy of a flat file item from iCloud.

# URLForUbiquityContainerIdentifier: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the URL for the iCloud container associated with the specified identifier and establishes access to that container.

## Declaration

```objectivec
- (NSURL *) URLForUbiquityContainerIdentifier:(NSString *) containerIdentifier;
```

## Parameters

- `containerIdentifier`: The fully-qualified container identifier for an iCloud container directory. The string you specify must not contain wildcards and must be of the form *\<TEAMID\>*`.`*\<CONTAINER\>*, where *\<TEAMID\>* is your development team ID and *\<CONTAINER\>* is the bundle identifier of the container you want to access.

  The container identifiers for your app must be declared in the `com.apple.developer.ubiquity-container-identifiers` array of the `.entitlements` property list file in your Xcode project.

  If you specify `nil` for this parameter, this method returns the first container listed in the `com.apple.developer.ubiquity-container-identifiers` entitlement array.

<a id="return-value"></a>

## Return Value

A URL pointing to the specified ubiquity container, or `nil` if the container could not be located or if iCloud storage is unavailable for the current user or device.

<a id="Discussion"></a>

## Discussion

You use this method to determine the location of your app’s ubiquity container directories and to configure your app’s initial iCloud access. The first time you call this method for a given ubiquity container, the system extends your app’s sandbox to include that container. In iOS, you must call this method at least once before trying to search for cloud-based files in the ubiquity container. If your app accesses multiple ubiquity containers, call this method once for each container. In macOS, you do not need to call this method if you use [NSDocument](https://developer.apple.com/documentation/appkit/nsdocument)-based objects, because the system then calls this method automatically.

You can use the URL returned by this method to build paths to files and directories within your app’s ubiquity container. Each app that syncs documents to the cloud must have at least one associated ubiquity container in which to put those files. This container can be unique to the app or shared by multiple apps.

> **Important**

>  Do not call this method from your app’s main thread. Because this method might take a nontrivial amount of time to set up iCloud and return the requested URL, you should always call it from a secondary thread. To determine if iCloud is available, especially at launch time, check the value of the [ubiquityIdentityToken](ubiquityidentitytoken.md) property instead.

In addition to writing to its own ubiquity container, an app can write to any container directory for which it has the appropriate permission. Each additional ubiquity container should be listed as an additional value in the `com.apple.developer.ubiquity-container-identifiers` entitlement array.

To learn how to view your development team’s unique *\<TEAM_ID\>* value, read To view the team ID in Tools Workflow Guide for Mac.

> **Note**

>  The development team ID that precedes each container ID string is the unique identifier associated with your development team. To learn how to view your development team’s unique *\<TEAM_ID\>* value, read To view the team ID in Tools Workflow Guide for Mac.

## See Also

### Managing iCloud-based items

- [ubiquityIdentityToken](ubiquityidentitytoken.md): An opaque token that represents the current user’s iCloud Drive Documents identity.
- [isUbiquitousItemAtURL:](isubiquitousitem%28at_%29.md): Returns a Boolean indicating whether the item is targeted for storage in iCloud.
- [setUbiquitous:itemAtURL:destinationURL:error:](setubiquitous%28__itemat_destinationurl_%29.md): Indicates whether the item at the specified URL should be stored in iCloud.
- [startDownloadingUbiquitousItemAtURL:error:](startdownloadingubiquitousitem%28at_%29.md): Starts downloading (if necessary) the specified item to the local system.
- [evictUbiquitousItemAtURL:error:](evictubiquitousitem%28at_%29.md): Removes the local copy of the specified item that’s stored in iCloud.
- [URLForPublishingUbiquitousItemAtURL:expirationDate:error:](url%28forpublishingubiquitousitemat_expiration_%29.md): Returns a URL that can be emailed to users to allow them to download a copy of a flat file item from iCloud.
