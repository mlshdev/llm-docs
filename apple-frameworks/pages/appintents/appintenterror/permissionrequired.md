> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintenterror/permissionrequired](https://developer.apple.com/documentation/appintents/appintenterror/permissionrequired)

# AppIntentError.PermissionRequired

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Errors that indicate the app doesn’t have the required permission to perform an action.

## Declaration

```swift
enum PermissionRequired
```

<a id="overview"></a>

## Overview

Use these permission errors to inform people that the app requires specific permissions and that they need to grant permission to successfully complete the action.

## Topics

### Type Properties

- [bluetooth](permissionrequired/bluetooth.md): The person needs to allow the app to access to Bluetooth.
- [contacts](permissionrequired/contacts.md): The person needs to allow the app to access contacts.
- [localNetwork](permissionrequired/localnetwork.md): The person needs to allow the app to access the local network.
- [photos](permissionrequired/photos.md): The person needs to allow the app to access to the photo library.
- [siri](permissionrequired/siri.md): The person needs to allow the app to access Siri.

### Type Methods

- [location(precise:)](permissionrequired/location%28precise_%29.md): The person needs to allow the app to access their location.
