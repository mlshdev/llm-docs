> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountapplicationprovider](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountapplicationprovider)

# VSAccountApplicationProvider (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Class  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · Mac Catalyst 14.2+ · macOS · tvOS 14.2+ · visionOS 1.0+

An object to display app-specific providers in your app.

## Declaration

```swift
class VSAccountApplicationProvider
```

<a id="overview"></a>

## Overview

The `VSAccountApplicationProvider` object represents an app account provider to be added to the list of already available system TV providers in your app.

## Topics

### Creating an application provider

- [init(localizedDisplayName:identifier:)](vsaccountapplicationprovider/init%28localizeddisplayname_identifier_%29.md): Returns an application provider using a given display name and identifier.

### Application provider details

- [identifier](vsaccountapplicationprovider/identifier.md): A string that identifies a provider.
- [localizedDisplayName](vsaccountapplicationprovider/localizeddisplayname.md): The display name of the provider as it will appear in the list of providers.

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

## See Also

### TV app integration

- [VSAppleSubscription](vsapplesubscription-swift.struct.md): An Apple streaming service customer and their subscriptions.
- [VSSubscriptionRegistrationCenter](vssubscriptionregistrationcenter.md): Deprecated. An object that stores subscription information that the system provides to the Apple TV app.

# VSAccountApplicationProvider (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Class  
**Availability:** iOS 14.2+ · iPadOS 14.2+ · macOS · tvOS 14.2+ · visionOS 1.0+

An object to display app-specific providers in your app.

## Declaration

```objectivec
@interface VSAccountApplicationProvider : NSObject
```

<a id="overview"></a>

## Overview

The `VSAccountApplicationProvider` object represents an app account provider to be added to the list of already available system TV providers in your app.

## Topics

### Creating an application provider

- [initWithLocalizedDisplayName:identifier:](vsaccountapplicationprovider/init%28localizeddisplayname_identifier_%29.md): Returns an application provider using a given display name and identifier.

### Application provider details

- [identifier](vsaccountapplicationprovider/identifier.md): A string that identifies a provider.
- [localizedDisplayName](vsaccountapplicationprovider/localizeddisplayname.md): The display name of the provider as it will appear in the list of providers.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### TV app integration

- [VSAppleSubscription](vsapplesubscription-c.class.md): An Apple streaming service customer and their subscriptions.
- [VSSubscriptionRegistrationCenter](vssubscriptionregistrationcenter.md): Deprecated. An object that stores subscription information that the system provides to the Apple TV app.
