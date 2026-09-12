> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiprotectedresource](https://developer.apple.com/documentation/xcuiautomation/xcuiprotectedresource)

# XCUIProtectedResource (Swift)

**Framework:** XCUIAutomation  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 13.4+ · visionOS 1.0+ · watchOS 6.2+ · Xcode 16.3+

A system resource that requires user authorization to access.

## Declaration

```swift
enum XCUIProtectedResource
```

## Topics

### Protected resources

- [XCUIProtectedResource.location](xcuiprotectedresource/location.md): The protected resource case for Location Services.
- [XCUIProtectedResource.userTracking](xcuiprotectedresource/usertracking.md): The protected resource case for access to tracking data.
- [XCUIProtectedResource.contacts](xcuiprotectedresource/contacts.md): The protected resource case for access to Contacts.
- [XCUIProtectedResource.calendar](xcuiprotectedresource/calendar.md): The protected resource case for acces to Calendar data.
- [XCUIProtectedResource.reminders](xcuiprotectedresource/reminders.md): The protected resource case for access to Reminders data.
- [XCUIProtectedResource.photos](xcuiprotectedresource/photos.md): The protected resource case for access to Photos.
- [XCUIProtectedResource.bluetooth](xcuiprotectedresource/bluetooth.md): The protected resource case for Bluetooth utilization.
- [XCUIProtectedResource.localNetwork](xcuiprotectedresource/localnetwork.md): The protected resource case for finding and communicating with devices on the local network.
- [XCUIProtectedResource.microphone](xcuiprotectedresource/microphone.md): The protected resource case for access to the microphone.
- [XCUIProtectedResource.camera](xcuiprotectedresource/camera.md): The protected resource case for access to the camera.
- [XCUIProtectedResource.health](xcuiprotectedresource/health.md): The protected resource case for access to Health data.
- [XCUIProtectedResource.homeKit](xcuiprotectedresource/homekit.md): The protected resource case for access to Home data.
- [XCUIProtectedResource.mediaLibrary](xcuiprotectedresource/medialibrary.md): The protected resource case for access to the media library.
- [XCUIProtectedResource.keyboardNetwork](xcuiprotectedresource/keyboardnetwork.md): The protected resource case for access to the keyboard network.
- [XCUIProtectedResource.systemRootDirectory](xcuiprotectedresource/systemrootdirectory.md): The protected resource case for access to the system root directory.
- [XCUIProtectedResource.userDesktopDirectory](xcuiprotectedresource/userdesktopdirectory.md): The protected resource case for access to the Desktop directory.
- [XCUIProtectedResource.userDocumentsDirectory](xcuiprotectedresource/userdocumentsdirectory.md): The protected resource case for access to the Documents directory.
- [XCUIProtectedResource.userDownloadsDirectory](xcuiprotectedresource/userdownloadsdirectory.md): The protected resource case for access to the Downloads directory.
- [XCUIProtectedResource.focus](xcuiprotectedresource/focus.md): The protected resource case to see and share Focus status.
- [XCUIProtectedResource.removableVolumes](xcuiprotectedresource/removablevolumes.md): The protected resource case for access to removable volumes.
- [XCUIProtectedResource.networkVolumes](xcuiprotectedresource/networkvolumes.md): The protected resource case for access to network volumes.
- [XCUIProtectedResource.appleEvents](xcuiprotectedresource/appleevents.md): The protected resource case for the use of Apple Events.

### Initializers

- [init(rawValue:)](xcuiprotectedresource/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Resetting authorization status

- [resetAuthorizationStatus(for:)](xcuiapplication/resetauthorizationstatus%28for_%29.md): Resets the authorization status for a protected resource.

# XCUIProtectedResource (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A system resource that requires user authorization to access.

## Declaration

```objectivec
enum XCUIProtectedResource : NSInteger;
```

## Topics

### Protected resources

- [XCUIProtectedResourceLocation](xcuiprotectedresource/location.md): The protected resource case for Location Services.
- [XCUIProtectedResourceUserTracking](xcuiprotectedresource/usertracking.md): The protected resource case for access to tracking data.
- [XCUIProtectedResourceContacts](xcuiprotectedresource/contacts.md): The protected resource case for access to Contacts.
- [XCUIProtectedResourceCalendar](xcuiprotectedresource/calendar.md): The protected resource case for acces to Calendar data.
- [XCUIProtectedResourceReminders](xcuiprotectedresource/reminders.md): The protected resource case for access to Reminders data.
- [XCUIProtectedResourcePhotos](xcuiprotectedresource/photos.md): The protected resource case for access to Photos.
- [XCUIProtectedResourceBluetooth](xcuiprotectedresource/bluetooth.md): The protected resource case for Bluetooth utilization.
- [XCUIProtectedResourceLocalNetwork](xcuiprotectedresource/localnetwork.md): The protected resource case for finding and communicating with devices on the local network.
- [XCUIProtectedResourceMicrophone](xcuiprotectedresource/microphone.md): The protected resource case for access to the microphone.
- [XCUIProtectedResourceCamera](xcuiprotectedresource/camera.md): The protected resource case for access to the camera.
- [XCUIProtectedResourceHealth](xcuiprotectedresource/health.md): The protected resource case for access to Health data.
- [XCUIProtectedResourceHomeKit](xcuiprotectedresource/homekit.md): The protected resource case for access to Home data.
- [XCUIProtectedResourceMediaLibrary](xcuiprotectedresource/medialibrary.md): The protected resource case for access to the media library.
- [XCUIProtectedResourceKeyboardNetwork](xcuiprotectedresource/keyboardnetwork.md): The protected resource case for access to the keyboard network.
- [XCUIProtectedResourceSystemRootDirectory](xcuiprotectedresource/systemrootdirectory.md): The protected resource case for access to the system root directory.
- [XCUIProtectedResourceUserDesktopDirectory](xcuiprotectedresource/userdesktopdirectory.md): The protected resource case for access to the Desktop directory.
- [XCUIProtectedResourceUserDocumentsDirectory](xcuiprotectedresource/userdocumentsdirectory.md): The protected resource case for access to the Documents directory.
- [XCUIProtectedResourceUserDownloadsDirectory](xcuiprotectedresource/userdownloadsdirectory.md): The protected resource case for access to the Downloads directory.
- [XCUIProtectedResourceFocus](xcuiprotectedresource/focus.md): The protected resource case to see and share Focus status.
- [XCUIProtectedResourceRemovableVolumes](xcuiprotectedresource/removablevolumes.md): The protected resource case for access to removable volumes.
- [XCUIProtectedResourceNetworkVolumes](xcuiprotectedresource/networkvolumes.md): The protected resource case for access to network volumes.
- [XCUIProtectedResourceAppleEvents](xcuiprotectedresource/appleevents.md): The protected resource case for the use of Apple Events.

## See Also

### Resetting authorization status

- [resetAuthorizationStatusForResource:](xcuiapplication/resetauthorizationstatus%28for_%29.md): Resets the authorization status for a protected resource.
