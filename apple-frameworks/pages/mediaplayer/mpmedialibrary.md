> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmedialibrary](https://developer.apple.com/documentation/mediaplayer/mpmedialibrary)

# MPMediaLibrary (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that represents the state of synced media items on a device.

## Declaration

```swift
class MPMediaLibrary
```

<a id="overview"></a>

## Overview

A user may sync their device, changing the contents on the device, while your app is running. You can use the notification provided by this class to ensure that your app’s cache of the user’s library is up-to-date.

To retrieve media items from the media library, build a custom query as described in [MPMediaPropertyPredicate](mpmediapropertypredicate.md) and [MPMediaQuery](mpmediaquery.md).

## Topics

### Getting the default media library

- [requestAuthorization(\_:)](mpmedialibrary/requestauthorization%28__%29.md): Displays a user interface so that the user can authorize whether your app may view the media library’s contents.
- [authorizationStatus()](mpmedialibrary/authorizationstatus%28%29.md): Returns whether the app can access the user’s media library.
- [MPMediaLibraryAuthorizationStatus](mpmedialibraryauthorizationstatus.md): The list of possible states for authorization to access to the user’s media library.
- [default()](mpmedialibrary/default%28%29.md): Returns an instance of the default media library.

### Receiving notifications when the user’s library changes

- [beginGeneratingLibraryChangeNotifications()](mpmedialibrary/begingeneratinglibrarychangenotifications%28%29.md): Asks the media library to turn on notifications for whenever the library changes.
- [endGeneratingLibraryChangeNotifications()](mpmedialibrary/endgeneratinglibrarychangenotifications%28%29.md): Asks the media library to turn off notifications for whenever the library changes.
- [lastModifiedDate](mpmedialibrary/lastmodifieddate.md): The calendar date on which the media library was last modified.

### Retrieving a playlist from the media library

- [getPlaylist(with:creationMetadata:completionHandler:)](mpmedialibrary/getplaylist%28with_creationmetadata_completionhandler_%29.md): Retrieves an app maintained existing playlist or creates a new playlist when no playlist exists.

### Adding an item to the media library

- [addItem(withProductID:completionHandler:)](mpmedialibrary/additem%28withproductid_completionhandler_%29.md): Adds the designated item to the user’s music library.

### Initializers

- [init(coder:)](mpmedialibrary/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

# MPMediaLibrary (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object that represents the state of synced media items on a device.

## Declaration

```objectivec
@interface MPMediaLibrary : NSObject
```

<a id="overview"></a>

## Overview

A user may sync their device, changing the contents on the device, while your app is running. You can use the notification provided by this class to ensure that your app’s cache of the user’s library is up-to-date.

To retrieve media items from the media library, build a custom query as described in [MPMediaPropertyPredicate](mpmediapropertypredicate.md) and [MPMediaQuery](mpmediaquery.md).

## Topics

### Getting the default media library

- [requestAuthorization:](mpmedialibrary/requestauthorization%28__%29.md): Displays a user interface so that the user can authorize whether your app may view the media library’s contents.
- [authorizationStatus](mpmedialibrary/authorizationstatus%28%29.md): Returns whether the app can access the user’s media library.
- [MPMediaLibraryAuthorizationStatus](mpmedialibraryauthorizationstatus.md): The list of possible states for authorization to access to the user’s media library.
- [defaultMediaLibrary](mpmedialibrary/default%28%29.md): Returns an instance of the default media library.

### Receiving notifications when the user’s library changes

- [beginGeneratingLibraryChangeNotifications](mpmedialibrary/begingeneratinglibrarychangenotifications%28%29.md): Asks the media library to turn on notifications for whenever the library changes.
- [endGeneratingLibraryChangeNotifications](mpmedialibrary/endgeneratinglibrarychangenotifications%28%29.md): Asks the media library to turn off notifications for whenever the library changes.
- [MPMediaLibraryDidChangeNotification](mpmedialibrarydidchangenotification.md): Indicates the media library has changed.
- [lastModifiedDate](mpmedialibrary/lastmodifieddate.md): The calendar date on which the media library was last modified.

### Retrieving a playlist from the media library

- [getPlaylistWithUUID:creationMetadata:completionHandler:](mpmedialibrary/getplaylist%28with_creationmetadata_completionhandler_%29.md): Retrieves an app maintained existing playlist or creates a new playlist when no playlist exists.

### Adding an item to the media library

- [addItemWithProductID:completionHandler:](mpmedialibrary/additem%28withproductid_completionhandler_%29.md): Adds the designated item to the user’s music library.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)
