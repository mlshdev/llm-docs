> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cninstantmessageaddress](https://developer.apple.com/documentation/contacts/cninstantmessageaddress)

# CNInstantMessageAddress (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An immutable object representing an instant message address for the contact.

## Declaration

```swift
class CNInstantMessageAddress
```

<a id="overview"></a>

## Overview

Use the methods and properties of `CNInstantMessageAddress` to identify instant messaging addresses. Some instant message services, such as Facebook and Skype are predefined in this class. You can also specify your own instant message service using the [init(username:service:)](cninstantmessageaddress/init%28username_service_%29.md) method.

`CNInstantMessageAddress` objects are thread-safe, and you may access their properties from any thread of your app.

## Topics

### Creating an Instant Message Address

- [init(username:service:)](cninstantmessageaddress/init%28username_service_%29.md): Returns a [CNInstantMessageAddress](cninstantmessageaddress.md) object initialized with the specified user name and service.

### Getting the Address Information

- [service](cninstantmessageaddress/service.md): The name of the instant message address service.
- [username](cninstantmessageaddress/username.md): The user name for instant message service address.

### Getting Localized Address Information

- [localizedString(forKey:)](cninstantmessageaddress/localizedstring%28forkey_%29.md): Returns a string containing the localized property name.
- [CNInstantMessageAddressUsernameKey](cninstantmessageaddressusernamekey.md): Instant message address username key.
- [CNInstantMessageAddressServiceKey](cninstantmessageaddressservicekey.md): Instant message address service key.

### Getting Localized Service Names

- [localizedString(forService:)](cninstantmessageaddress/localizedstring%28forservice_%29.md): Returns a string containing the localized name of the specified service.
- [CNInstantMessageServiceAIM](cninstantmessageserviceaim.md): Instant message service for AIM.
- [CNInstantMessageServiceFacebook](cninstantmessageservicefacebook.md): Instant message service for Facebook.
- [CNInstantMessageServiceGaduGadu](cninstantmessageservicegadugadu.md): Instant message service for Gadu Gadu.
- [CNInstantMessageServiceGoogleTalk](cninstantmessageservicegoogletalk.md): Instant message service for Google Talk.
- [CNInstantMessageServiceICQ](cninstantmessageserviceicq.md): Instant message service for ICQ.
- [CNInstantMessageServiceJabber](cninstantmessageservicejabber.md): Instant message service for Jabber.
- [CNInstantMessageServiceMSN](cninstantmessageservicemsn.md): Instant message service for MSN.
- [CNInstantMessageServiceQQ](cninstantmessageserviceqq.md): Instant message service for QQ.
- [CNInstantMessageServiceSkype](cninstantmessageserviceskype.md): Instant message service for Skype.
- [CNInstantMessageServiceYahoo](cninstantmessageserviceyahoo.md): Instant message service for Yahoo.

### Initializers

- [init(coder:)](cninstantmessageaddress/init%28coder_%29.md)

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
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Addresses

- [CNPostalAddress](cnpostaladdress.md): An immutable representation of the postal address for a contact.
- [CNMutablePostalAddress](cnmutablepostaladdress.md): A mutable representation of the postal address for a contact.

# CNInstantMessageAddress (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An immutable object representing an instant message address for the contact.

## Declaration

```objectivec
@interface CNInstantMessageAddress : NSObject
```

<a id="overview"></a>

## Overview

Use the methods and properties of `CNInstantMessageAddress` to identify instant messaging addresses. Some instant message services, such as Facebook and Skype are predefined in this class. You can also specify your own instant message service using the [initWithUsername:service:](cninstantmessageaddress/init%28username_service_%29.md) method.

`CNInstantMessageAddress` objects are thread-safe, and you may access their properties from any thread of your app.

## Topics

### Creating an Instant Message Address

- [initWithUsername:service:](cninstantmessageaddress/init%28username_service_%29.md): Returns a [CNInstantMessageAddress](cninstantmessageaddress.md) object initialized with the specified user name and service.

### Getting the Address Information

- [service](cninstantmessageaddress/service.md): The name of the instant message address service.
- [username](cninstantmessageaddress/username.md): The user name for instant message service address.

### Getting Localized Address Information

- [localizedStringForKey:](cninstantmessageaddress/localizedstring%28forkey_%29.md): Returns a string containing the localized property name.
- [CNInstantMessageAddressUsernameKey](cninstantmessageaddressusernamekey.md): Instant message address username key.
- [CNInstantMessageAddressServiceKey](cninstantmessageaddressservicekey.md): Instant message address service key.

### Getting Localized Service Names

- [localizedStringForService:](cninstantmessageaddress/localizedstring%28forservice_%29.md): Returns a string containing the localized name of the specified service.
- [CNInstantMessageServiceAIM](cninstantmessageserviceaim.md): Instant message service for AIM.
- [CNInstantMessageServiceFacebook](cninstantmessageservicefacebook.md): Instant message service for Facebook.
- [CNInstantMessageServiceGaduGadu](cninstantmessageservicegadugadu.md): Instant message service for Gadu Gadu.
- [CNInstantMessageServiceGoogleTalk](cninstantmessageservicegoogletalk.md): Instant message service for Google Talk.
- [CNInstantMessageServiceICQ](cninstantmessageserviceicq.md): Instant message service for ICQ.
- [CNInstantMessageServiceJabber](cninstantmessageservicejabber.md): Instant message service for Jabber.
- [CNInstantMessageServiceMSN](cninstantmessageservicemsn.md): Instant message service for MSN.
- [CNInstantMessageServiceQQ](cninstantmessageserviceqq.md): Instant message service for QQ.
- [CNInstantMessageServiceSkype](cninstantmessageserviceskype.md): Instant message service for Skype.
- [CNInstantMessageServiceYahoo](cninstantmessageserviceyahoo.md): Instant message service for Yahoo.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Addresses

- [CNPostalAddress](cnpostaladdress.md): An immutable representation of the postal address for a contact.
- [CNMutablePostalAddress](cnmutablepostaladdress.md): A mutable representation of the postal address for a contact.
