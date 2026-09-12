> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary](https://developer.apple.com/documentation/photos/phphotolibrary)

# PHPhotoLibrary (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

An object that manages access and changes to a person’s photo library.

## Declaration

```swift
class PHPhotoLibrary
```

## Mentioned In

- [Editing Asset Content](../photokit/editing-asset-content.md)
- [Delivering an Enhanced Privacy Experience in Your Photos App](../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md)
- [Fetching Assets](../photokit/fetching-assets.md)
- [Fetching Objects and Requesting Changes](../photokit/fetching-objects-and-requesting-changes.md)
- [Observing Changes in the Photo Library](../photokit/observing-changes-in-the-photo-library.md)

<a id="overview"></a>

## Overview

The object represents the entire set of assets and collections that the Photos app manages, including assets stored on the local device and those stored in iCloud Photos. Use this object for the following tasks:

- Retrieving or verifying the user’s permission for your app to access Photos content
- Making changes to assets and collections; for example, editing asset metadata or content, inserting new assets, or rearranging the members of a collection
- Determining which records change since a previous state of the Photos library
- Registering for update messages the system sends when the library changes

## Topics

### Verifying Authorization

- [authorizationStatus(for:)](phphotolibrary/authorizationstatus%28for_%29.md): Returns the app’s authorization to access the user’s photo library for the specified access level.
- [requestAuthorization(for:handler:)](phphotolibrary/requestauthorization%28for_handler_%29.md): Prompts the user to grant the app permission to access the photo library.
- [PHAccessLevel](phaccesslevel.md): The app’s level of access to the user’s photo library.
- [PHAuthorizationStatus](phauthorizationstatus.md): Information about your app’s authorization to access the user’s photo library.
- [authorizationStatus()](phphotolibrary/authorizationstatus%28%29.md): Deprecated. Returns information about your app’s authorization to access the user’s photo library.
- [requestAuthorization(\_:)](phphotolibrary/requestauthorization%28__%29.md): Deprecated. Requests the user’s permission, if needed, to access the photo library.

### Accessing the Shared Library

- [shared()](phphotolibrary/shared%28%29.md): Retrieves the shared photo library object.

### Presenting the Limited Library Picker

- [presentLimitedLibraryPicker(from:)](phphotolibrary/presentlimitedlibrarypicker%28from_%29.md): Prompts the user to update their limited library selection.
- [presentLimitedLibraryPicker(from:completionHandler:)](phphotolibrary/presentlimitedlibrarypicker%28from_completionhandler_%29.md): Prompts the user to update their limited library selection with a callback providing newly selected identifiers.

### Updating the Library

- [Requesting Changes to the Photo Library](../photokit/requesting-changes-to-the-photo-library.md): Create, delete, or modify assets and collections in a photo library by making change requests.
- [performChanges(\_:completionHandler:)](phphotolibrary/performchanges%28__completionhandler_%29.md): Asynchronously runs a block that requests changes to the photo library.
- [performChangesAndWait(\_:)](phphotolibrary/performchangesandwait%28__%29.md): Synchronously runs a block that requests changes to be performed in the photo library.
- [PHChangeRequest](phchangerequest.md): The abstract base class of the framework’s photo library change requests.
- [PHAssetChangeRequest](phassetchangerequest.md): A request to create, delete, change metadata for, or edit the content of a Photos asset, for use in a photo library change block.
- [PHAssetCollectionChangeRequest](phassetcollectionchangerequest.md): A request to create, delete, or modify a Photos asset collection, for use in a photo library change block.
- [PHCollectionListChangeRequest](phcollectionlistchangerequest.md): A request to create, delete, or modify a Photos collection list, for use in a photo library change block.
- [PHObjectPlaceholder](phobjectplaceholder.md): A read-only proxy object that represents a Photos asset or collection to create.

### Fetching Change History

- [fetchPersistentChanges(since:)](phphotolibrary/fetchpersistentchanges%28since_%29.md): Retrieves the Photos library changes since the token you specify.
- [PHPersistentChangeFetchResult](phpersistentchangefetchresult.md): An object that represents a fetch result and allows you to enumerate a very large set of change records.
- [currentChangeToken](phphotolibrary/currentchangetoken.md): The opaque token that represents the current state of the Photos library.
- [PHPersistentChangeToken](phpersistentchangetoken.md): An opaque object that tracks the state of the Photos library between runs, and that you can copy and serialize for future use.

### Observing Library Changes

- [Observing Changes in the Photo Library](../photokit/observing-changes-in-the-photo-library.md): Register an observer to be notified of changes to the photo library.
- [register(\_:)](phphotolibrary/register%28__%29-6y3b9.md): Registers an object to receive messages when objects in the photo library change.
- [unregisterChangeObserver(\_:)](phphotolibrary/unregisterchangeobserver%28__%29.md): Unregisters an object so that it no longer receives change messages.
- [PHPhotoLibraryChangeObserver](phphotolibrarychangeobserver.md): A protocol to adopt to have the system notify your app of changes to the photo library.
- [PHChange](phchange.md): A description of a change that occurred in the photo library.
- [PHObjectChangeDetails](phobjectchangedetails.md): A description of changes that occurred in an asset or collection object.
- [PHFetchResultChangeDetails](phfetchresultchangedetails.md): A description of changes that occurred in the set of asset or collection objects listed in a fetch result.

### Observing Library Availability

- [register(\_:)](phphotolibrary/register%28__%29-gm0a.md): Registers an object to observe changes to the photo library’s availability.
- [unregisterAvailabilityObserver(\_:)](phphotolibrary/unregisteravailabilityobserver%28__%29.md): Unregisters an object from observing changes to the photo library’s availability.
- [PHPhotoLibraryAvailabilityObserver](phphotolibraryavailabilityobserver.md): A protocol to adopt to have the system notify your app when the availability of a photo library changes.
- [unavailabilityReason](phphotolibrary/unavailabilityreason.md): An error that describes the reason the photo library isn’t available.

### Converting Between Local and iCloud Identifiers

- [cloudIdentifierMappings(forLocalIdentifiers:)](phphotolibrary/cloudidentifiermappings%28forlocalidentifiers_%29.md): Retrieves the cloud identifier mappings for the list of local identifiers.
- [localIdentifierMappings(for:)](phphotolibrary/localidentifiermappings%28for_%29.md): Retrieves the local identifier mappings for the list of cloud identifiers.
- [PHCloudIdentifier](phcloudidentifier.md): An object that identifies an asset or collection that syncs through iCloud Photos.
- [cloudIdentifiers(forLocalIdentifiers:)](phphotolibrary/cloudidentifiers%28forlocalidentifiers_%29.md): Deprecated. Retrieves the equivalent iCloud identifiers for the list of local identifiers.
- [localIdentifiers(for:)](phphotolibrary/localidentifiers%28for_%29.md): Deprecated. Retrieves the equivalent local identifiers for the list of iCloud identifiers.
- [PHLocalIdentifierNotFound](phlocalidentifiernotfound.md): Deprecated. A constant value that indicates that the system can’t resolve a local object from a global identifier.

### Enabling an Upload Job Extension

- [uploadJobExtensionEnabled](phphotolibrary/uploadjobextensionenabled.md): A Boolean value that indicates whether background asset resource uploading is enabled.
- [setUploadJobExtensionEnabled(\_:)](phphotolibrary/setuploadjobextensionenabled%28__%29.md): Deprecated. Enables or disables the background asset resource upload job feature.

### Instance Properties

- [uploadJobExtensionOptions](phphotolibrary/uploadjobextensionoptions.md): The options for the calling app’s background asset resource upload job configuration.

### Instance Methods

- [disableUploadJobExtension()](phphotolibrary/disableuploadjobextension%28%29.md): Disables the background asset resource upload job feature.
- [enableUploadJobExtension(with:)](phphotolibrary/enableuploadjobextension%28with_%29.md): Enables the background asset resource upload job feature with the given options, atomically.
- [localIdentifierMappings(forSynced:)](phphotolibrary/localidentifiermappings%28forsynced_%29.md)
- [register(\_:)](phphotolibrary/register%28__%29-7lhue.md): Registers an observer to be notified when persistent changes occur in the photo library.
- [setUploadJobExtensionOptions(\_:)](phphotolibrary/setuploadjobextensionoptions%28__%29.md): Sets the options for the calling app’s background asset resource upload job configuration.
- [unregisterPersistentChangesObserver(\_:)](phphotolibrary/unregisterpersistentchangesobserver%28__%29.md): Unregisters a previously registered persistent changes observer.

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

# PHPhotoLibrary (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

An object that manages access and changes to a person’s photo library.

## Declaration

```objectivec
@interface PHPhotoLibrary : NSObject
```

## Mentioned In

- [Editing Asset Content](../photokit/editing-asset-content.md)
- [Delivering an Enhanced Privacy Experience in Your Photos App](../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md)
- [Fetching Assets](../photokit/fetching-assets.md)
- [Fetching Objects and Requesting Changes](../photokit/fetching-objects-and-requesting-changes.md)
- [Observing Changes in the Photo Library](../photokit/observing-changes-in-the-photo-library.md)

<a id="overview"></a>

## Overview

The object represents the entire set of assets and collections that the Photos app manages, including assets stored on the local device and those stored in iCloud Photos. Use this object for the following tasks:

- Retrieving or verifying the user’s permission for your app to access Photos content
- Making changes to assets and collections; for example, editing asset metadata or content, inserting new assets, or rearranging the members of a collection
- Determining which records change since a previous state of the Photos library
- Registering for update messages the system sends when the library changes

## Topics

### Verifying Authorization

- [authorizationStatusForAccessLevel:](phphotolibrary/authorizationstatus%28for_%29.md): Returns the app’s authorization to access the user’s photo library for the specified access level.
- [requestAuthorizationForAccessLevel:handler:](phphotolibrary/requestauthorization%28for_handler_%29.md): Prompts the user to grant the app permission to access the photo library.
- [PHAccessLevel](phaccesslevel.md): The app’s level of access to the user’s photo library.
- [PHAuthorizationStatus](phauthorizationstatus.md): Information about your app’s authorization to access the user’s photo library.
- [authorizationStatus](phphotolibrary/authorizationstatus%28%29.md): Deprecated. Returns information about your app’s authorization to access the user’s photo library.
- [requestAuthorization:](phphotolibrary/requestauthorization%28__%29.md): Deprecated. Requests the user’s permission, if needed, to access the photo library.

### Accessing the Shared Library

- [sharedPhotoLibrary](phphotolibrary/shared%28%29.md): Retrieves the shared photo library object.

### Presenting the Limited Library Picker

- [presentLimitedLibraryPickerFromViewController:](phphotolibrary/presentlimitedlibrarypicker%28from_%29.md): Prompts the user to update their limited library selection.
- [presentLimitedLibraryPickerFromViewController:completionHandler:](phphotolibrary/presentlimitedlibrarypicker%28from_completionhandler_%29.md): Prompts the user to update their limited library selection with a callback providing newly selected identifiers.

### Updating the Library

- [Requesting Changes to the Photo Library](../photokit/requesting-changes-to-the-photo-library.md): Create, delete, or modify assets and collections in a photo library by making change requests.
- [performChanges:completionHandler:](phphotolibrary/performchanges%28__completionhandler_%29.md): Asynchronously runs a block that requests changes to the photo library.
- [performChangesAndWait:error:](phphotolibrary/performchangesandwait%28__%29.md): Synchronously runs a block that requests changes to be performed in the photo library.
- [PHChangeRequest](phchangerequest.md): The abstract base class of the framework’s photo library change requests.
- [PHAssetChangeRequest](phassetchangerequest.md): A request to create, delete, change metadata for, or edit the content of a Photos asset, for use in a photo library change block.
- [PHAssetCollectionChangeRequest](phassetcollectionchangerequest.md): A request to create, delete, or modify a Photos asset collection, for use in a photo library change block.
- [PHCollectionListChangeRequest](phcollectionlistchangerequest.md): A request to create, delete, or modify a Photos collection list, for use in a photo library change block.
- [PHObjectPlaceholder](phobjectplaceholder.md): A read-only proxy object that represents a Photos asset or collection to create.

### Fetching Change History

- [fetchPersistentChangesSinceToken:error:](phphotolibrary/fetchpersistentchanges%28since_%29.md): Retrieves the Photos library changes since the token you specify.
- [PHPersistentChangeFetchResult](phpersistentchangefetchresult.md): An object that represents a fetch result and allows you to enumerate a very large set of change records.
- [currentChangeToken](phphotolibrary/currentchangetoken.md): The opaque token that represents the current state of the Photos library.
- [PHPersistentChangeToken](phpersistentchangetoken.md): An opaque object that tracks the state of the Photos library between runs, and that you can copy and serialize for future use.

### Observing Library Changes

- [Observing Changes in the Photo Library](../photokit/observing-changes-in-the-photo-library.md): Register an observer to be notified of changes to the photo library.
- [registerChangeObserver:](phphotolibrary/register%28__%29-6y3b9.md): Registers an object to receive messages when objects in the photo library change.
- [unregisterChangeObserver:](phphotolibrary/unregisterchangeobserver%28__%29.md): Unregisters an object so that it no longer receives change messages.
- [PHPhotoLibraryChangeObserver](phphotolibrarychangeobserver.md): A protocol to adopt to have the system notify your app of changes to the photo library.
- [PHChange](phchange.md): A description of a change that occurred in the photo library.
- [PHObjectChangeDetails](phobjectchangedetails.md): A description of changes that occurred in an asset or collection object.
- [PHFetchResultChangeDetails](phfetchresultchangedetails.md): A description of changes that occurred in the set of asset or collection objects listed in a fetch result.

### Observing Library Availability

- [registerAvailabilityObserver:](phphotolibrary/register%28__%29-gm0a.md): Registers an object to observe changes to the photo library’s availability.
- [unregisterAvailabilityObserver:](phphotolibrary/unregisteravailabilityobserver%28__%29.md): Unregisters an object from observing changes to the photo library’s availability.
- [PHPhotoLibraryAvailabilityObserver](phphotolibraryavailabilityobserver.md): A protocol to adopt to have the system notify your app when the availability of a photo library changes.
- [unavailabilityReason](phphotolibrary/unavailabilityreason.md): An error that describes the reason the photo library isn’t available.

### Converting Between Local and iCloud Identifiers

- [cloudIdentifierMappingsForLocalIdentifiers:](https://developer.apple.com/documentation/photos/phphotolibrary/cloudidentifiermappingsforlocalidentifiers:): Retrieves the cloud identifier mappings for the list of local identifiers.
- [localIdentifierMappingsForCloudIdentifiers:](https://developer.apple.com/documentation/photos/phphotolibrary/localidentifiermappingsforcloudidentifiers:): Retrieves the local identifier mappings for the list of cloud identifiers.
- [PHCloudIdentifier](phcloudidentifier.md): An object that identifies an asset or collection that syncs through iCloud Photos.
- [PHCloudIdentifierMapping](https://developer.apple.com/documentation/photos/phcloudidentifiermapping): An object that contains the cloud identifier result from looking up a local identifier, or an error indicating why the lookup failed.
- [PHLocalIdentifierMapping](https://developer.apple.com/documentation/photos/phlocalidentifiermapping): An object that contains the local identifier result from looking up a cloud identifier, or an error indicating why the lookup failed.
- [cloudIdentifiersForLocalIdentifiers:](phphotolibrary/cloudidentifiers%28forlocalidentifiers_%29.md): Deprecated. Retrieves the equivalent iCloud identifiers for the list of local identifiers.
- [localIdentifiersForCloudIdentifiers:](phphotolibrary/localidentifiers%28for_%29.md): Deprecated. Retrieves the equivalent local identifiers for the list of iCloud identifiers.
- [PHLocalIdentifierNotFound](phlocalidentifiernotfound.md): Deprecated. A constant value that indicates that the system can’t resolve a local object from a global identifier.

### Enabling an Upload Job Extension

- [uploadJobExtensionEnabled](phphotolibrary/uploadjobextensionenabled.md): A Boolean value that indicates whether background asset resource uploading is enabled.
- [setUploadJobExtensionEnabled:error:](phphotolibrary/setuploadjobextensionenabled%28__%29.md): Deprecated. Enables or disables the background asset resource upload job feature.

### Instance Properties

- [uploadJobExtensionOptions](phphotolibrary/uploadjobextensionoptions.md): The options for the calling app’s background asset resource upload job configuration.

### Instance Methods

- [disableUploadJobExtensionWithError:](phphotolibrary/disableuploadjobextension%28%29.md): Disables the background asset resource upload job feature.
- [enableUploadJobExtensionWithOptions:error:](phphotolibrary/enableuploadjobextension%28with_%29.md): Enables the background asset resource upload job feature with the given options, atomically.
- [localIdentifierMappingsForSyncedCloudIdentifiers:](https://developer.apple.com/documentation/photos/phphotolibrary/localidentifiermappingsforsyncedcloudidentifiers:): Returns a dictionary that maps each cloud identifier from the provided array to a `PHLocalIdentifierMapping` result containing the local identifier found for that cloud identifier if that cloud identifier is a known synced identifier.
- [registerPersistentChangesObserver:](phphotolibrary/register%28__%29-7lhue.md): Registers an observer to be notified when persistent changes occur in the photo library.
- [setUploadJobExtensionOptions:error:](phphotolibrary/setuploadjobextensionoptions%28__%29.md): Sets the options for the calling app’s background asset resource upload job configuration.
- [unregisterPersistentChangesObserver:](phphotolibrary/unregisterpersistentchangesobserver%28__%29.md): Unregisters a previously registered persistent changes observer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
