> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservice/name](https://developer.apple.com/documentation/appkit/nssharingservice/name)

# NSSharingService.Name (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that describe the sharing services that macOS supports.

## Declaration

```swift
struct Name
```

## Topics

### Creating a Sharing Service Name

- [init(\_:)](name/init%28__%29.md): Creates a sharing service name using the provided string.
- [init(rawValue:)](name/init%28rawvalue_%29.md): Creates a sharing service name using the specified raw value.

### Sharing Service Names

- [addToAperture](name/addtoaperture.md): A service that shares an item provider’s contents with Aperture.
- [addToIPhoto](name/addtoiphoto.md): A service that shares an item provider’s contents with iPhoto.
- [addToSafariReadingList](name/addtosafarireadinglist.md): A service that shares an item provider’s contents with Safari’s Reading List.
- [cloudSharing](name/cloudsharing.md): A service that shares an item provider’s contents with other iCloud users.
- [composeEmail](name/composeemail.md): A service that uses an item provider’s contents to compose an email.
- [composeMessage](name/composemessage.md): A service that uses an item provider’s contents to compose a message.
- [sendViaAirDrop](name/sendviaairdrop.md): A service that sends an item provider’s contents to another device using AirDrop.
- [useAsDesktopPicture](name/useasdesktoppicture.md): A service that sets the item provider’s contents as the current user’s desktop picture.

### Deprecated

- [Deprecated Symbols](../name-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Sharing Service

- [init(named:)](init%28named_%29.md): Returns a sharing service instance representing the specified service name.
- [init(title:image:alternateImage:handler:)](init%28title_image_alternateimage_handler_%29.md): Creates a custom sharing service object.

# NSSharingServiceName (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants that describe the sharing services that macOS supports.

## Declaration

```objectivec
typedef NSString * NSSharingServiceName;
```

## Topics

### Sharing Service Names

- [NSSharingServiceNameAddToAperture](name/addtoaperture.md): A service that shares an item provider’s contents with Aperture.
- [NSSharingServiceNameAddToIPhoto](name/addtoiphoto.md): A service that shares an item provider’s contents with iPhoto.
- [NSSharingServiceNameAddToSafariReadingList](name/addtosafarireadinglist.md): A service that shares an item provider’s contents with Safari’s Reading List.
- [NSSharingServiceNameCloudSharing](name/cloudsharing.md): A service that shares an item provider’s contents with other iCloud users.
- [NSSharingServiceNameComposeEmail](name/composeemail.md): A service that uses an item provider’s contents to compose an email.
- [NSSharingServiceNameComposeMessage](name/composemessage.md): A service that uses an item provider’s contents to compose a message.
- [NSSharingServiceNameSendViaAirDrop](name/sendviaairdrop.md): A service that sends an item provider’s contents to another device using AirDrop.
- [NSSharingServiceNameUseAsDesktopPicture](name/useasdesktoppicture.md): A service that sets the item provider’s contents as the current user’s desktop picture.

### Deprecated

- [Deprecated Symbols](../name-deprecated-symbols.md): Review unsupported symbols and their replacements.

## See Also

### Creating a Sharing Service

- [sharingServiceNamed:](init%28named_%29.md): Returns a sharing service instance representing the specified service name.
- [initWithTitle:image:alternateImage:handler:](init%28title_image_alternateimage_handler_%29.md): Creates a custom sharing service object.
