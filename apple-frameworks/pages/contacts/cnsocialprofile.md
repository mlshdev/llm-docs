> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnsocialprofile](https://developer.apple.com/documentation/contacts/cnsocialprofile)

# CNSocialProfile (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An immutable object that represents one of the user’s social profiles.

## Declaration

```swift
class CNSocialProfile
```

<a id="overview"></a>

## Overview

Some social profile services, such as Facebook and Twitter, are predefined in this class. You can also specify your own social profile service with the [init(urlString:username:userIdentifier:service:)](cnsocialprofile/init%28urlstring_username_useridentifier_service_%29.md) method.

`CNSocialProfile` objects are thread-safe, and you may access their properties from any thread of your app.

## Topics

### Creating a Social Profile Object

- [init(urlString:username:userIdentifier:service:)](cnsocialprofile/init%28urlstring_username_useridentifier_service_%29.md): Initializes a new social profile object with the specified URL.

### Getting Social Profile Information

- [username](cnsocialprofile/username.md): The user name for the social profile.
- [service](cnsocialprofile/service.md): The social profile’s service name.
- [urlString](cnsocialprofile/urlstring.md): The URL associated with the social profile.
- [userIdentifier](cnsocialprofile/useridentifier.md): The service’s user identifier associated with the social profile.

### Getting Localized User Profile Information

- [localizedString(forKey:)](cnsocialprofile/localizedstring%28forkey_%29.md): Returns the localized name of the property for the specified key.
- [CNSocialProfileUsernameKey](cnsocialprofileusernamekey.md): The social profile user name.
- [CNSocialProfileServiceKey](cnsocialprofileservicekey.md): The social profile service.
- [CNSocialProfileURLStringKey](cnsocialprofileurlstringkey.md): The social profile URL.
- [CNSocialProfileUserIdentifierKey](cnsocialprofileuseridentifierkey.md): The social profile user identifier.

### Getting Localized Service Names

- [localizedString(forService:)](cnsocialprofile/localizedstring%28forservice_%29.md): Returns the localized name of the specified service.
- [CNSocialProfileServiceFacebook](cnsocialprofileservicefacebook.md): The Facebook social profile service.
- [CNSocialProfileServiceFlickr](cnsocialprofileserviceflickr.md): The Flickr social profile service.
- [CNSocialProfileServiceGameCenter](cnsocialprofileservicegamecenter.md): The Game Center social profile service.
- [CNSocialProfileServiceLinkedIn](cnsocialprofileservicelinkedin.md): The LinkedIn social profile service.
- [CNSocialProfileServiceMySpace](cnsocialprofileservicemyspace.md): The MySpace social profile service.
- [CNSocialProfileServiceSinaWeibo](cnsocialprofileservicesinaweibo.md): The Sina Weibo social profile service.
- [CNSocialProfileServiceTencentWeibo](cnsocialprofileservicetencentweibo.md): The Tencent Weibo social profile service.
- [CNSocialProfileServiceTwitter](cnsocialprofileservicetwitter.md): The Twitter social profile service.
- [CNSocialProfileServiceYelp](cnsocialprofileserviceyelp.md): The Yelp social profile service.

### Initializers

- [init(coder:)](cnsocialprofile/init%28coder_%29.md)

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

# CNSocialProfile (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An immutable object that represents one of the user’s social profiles.

## Declaration

```objectivec
@interface CNSocialProfile : NSObject
```

<a id="overview"></a>

## Overview

Some social profile services, such as Facebook and Twitter, are predefined in this class. You can also specify your own social profile service with the [initWithUrlString:username:userIdentifier:service:](cnsocialprofile/init%28urlstring_username_useridentifier_service_%29.md) method.

`CNSocialProfile` objects are thread-safe, and you may access their properties from any thread of your app.

## Topics

### Creating a Social Profile Object

- [initWithUrlString:username:userIdentifier:service:](cnsocialprofile/init%28urlstring_username_useridentifier_service_%29.md): Initializes a new social profile object with the specified URL.

### Getting Social Profile Information

- [username](cnsocialprofile/username.md): The user name for the social profile.
- [service](cnsocialprofile/service.md): The social profile’s service name.
- [urlString](cnsocialprofile/urlstring.md): The URL associated with the social profile.
- [userIdentifier](cnsocialprofile/useridentifier.md): The service’s user identifier associated with the social profile.

### Getting Localized User Profile Information

- [localizedStringForKey:](cnsocialprofile/localizedstring%28forkey_%29.md): Returns the localized name of the property for the specified key.
- [CNSocialProfileUsernameKey](cnsocialprofileusernamekey.md): The social profile user name.
- [CNSocialProfileServiceKey](cnsocialprofileservicekey.md): The social profile service.
- [CNSocialProfileURLStringKey](cnsocialprofileurlstringkey.md): The social profile URL.
- [CNSocialProfileUserIdentifierKey](cnsocialprofileuseridentifierkey.md): The social profile user identifier.

### Getting Localized Service Names

- [localizedStringForService:](cnsocialprofile/localizedstring%28forservice_%29.md): Returns the localized name of the specified service.
- [CNSocialProfileServiceFacebook](cnsocialprofileservicefacebook.md): The Facebook social profile service.
- [CNSocialProfileServiceFlickr](cnsocialprofileserviceflickr.md): The Flickr social profile service.
- [CNSocialProfileServiceGameCenter](cnsocialprofileservicegamecenter.md): The Game Center social profile service.
- [CNSocialProfileServiceLinkedIn](cnsocialprofileservicelinkedin.md): The LinkedIn social profile service.
- [CNSocialProfileServiceMySpace](cnsocialprofileservicemyspace.md): The MySpace social profile service.
- [CNSocialProfileServiceSinaWeibo](cnsocialprofileservicesinaweibo.md): The Sina Weibo social profile service.
- [CNSocialProfileServiceTencentWeibo](cnsocialprofileservicetencentweibo.md): The Tencent Weibo social profile service.
- [CNSocialProfileServiceTwitter](cnsocialprofileservicetwitter.md): The Twitter social profile service.
- [CNSocialProfileServiceYelp](cnsocialprofileserviceyelp.md): The Yelp social profile service.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
