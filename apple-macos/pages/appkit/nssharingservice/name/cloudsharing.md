> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservice/name/cloudsharing](https://developer.apple.com/documentation/appkit/nssharingservice/name/cloudsharing)

# cloudSharing (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.12+

A service that shares an item provider’s contents with other iCloud users.

## Declaration

```swift
static let cloudSharing: NSSharingService.Name
```

<a id="Discussion"></a>

## Discussion

The behavior of the cloud-sharing service is different from other services. It creates a persistent sharing session between two or more iCloud users, and provides access to the original items, rather than sending copies. For more information about CloudKit Sharing, see [Shared Records](https://developer.apple.com/documentation/cloudkit/shared-records).

## See Also

### Sharing Service Names

- [addToAperture](addtoaperture.md): A service that shares an item provider’s contents with Aperture.
- [addToIPhoto](addtoiphoto.md): A service that shares an item provider’s contents with iPhoto.
- [addToSafariReadingList](addtosafarireadinglist.md): A service that shares an item provider’s contents with Safari’s Reading List.
- [composeEmail](composeemail.md): A service that uses an item provider’s contents to compose an email.
- [composeMessage](composemessage.md): A service that uses an item provider’s contents to compose a message.
- [sendViaAirDrop](sendviaairdrop.md): A service that sends an item provider’s contents to another device using AirDrop.
- [useAsDesktopPicture](useasdesktoppicture.md): A service that sets the item provider’s contents as the current user’s desktop picture.

# NSSharingServiceNameCloudSharing (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.12+

A service that shares an item provider’s contents with other iCloud users.

## Declaration

```objectivec
extern NSSharingServiceName const NSSharingServiceNameCloudSharing;
```

<a id="Discussion"></a>

## Discussion

The behavior of the cloud-sharing service is different from other services. It creates a persistent sharing session between two or more iCloud users, and provides access to the original items, rather than sending copies. For more information about CloudKit Sharing, see [Shared Records](https://developer.apple.com/documentation/cloudkit/shared-records).

## See Also

### Sharing Service Names

- [NSSharingServiceNameAddToAperture](addtoaperture.md): A service that shares an item provider’s contents with Aperture.
- [NSSharingServiceNameAddToIPhoto](addtoiphoto.md): A service that shares an item provider’s contents with iPhoto.
- [NSSharingServiceNameAddToSafariReadingList](addtosafarireadinglist.md): A service that shares an item provider’s contents with Safari’s Reading List.
- [NSSharingServiceNameComposeEmail](composeemail.md): A service that uses an item provider’s contents to compose an email.
- [NSSharingServiceNameComposeMessage](composemessage.md): A service that uses an item provider’s contents to compose a message.
- [NSSharingServiceNameSendViaAirDrop](sendviaairdrop.md): A service that sends an item provider’s contents to another device using AirDrop.
- [NSSharingServiceNameUseAsDesktopPicture](useasdesktoppicture.md): A service that sets the item provider’s contents as the current user’s desktop picture.
