> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmnetworkconfigurationprofile](https://developer.apple.com/documentation/homekit/hmnetworkconfigurationprofile)

# HMNetworkConfigurationProfile (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A profile that provides information about network protection for an accessory.

## Declaration

```swift
class HMNetworkConfigurationProfile
```

<a id="overview"></a>

## Overview

To increase security, HomeKit can restrict network access for specific accessories, including access to other accessories in the home, and to the internet. However, an accessory your app controls might need network access to carry out certain functions, like downloading new firmware.

Check the [isNetworkAccessRestricted](hmnetworkconfigurationprofile/isnetworkaccessrestricted.md) property of an accessory’s network configuration profile to find out if an accessory has restricted access. You can use this information to ask the user to relax network restrictions in the Home app.

## Topics

### Restricting network access

- [isNetworkAccessRestricted](hmnetworkconfigurationprofile/isnetworkaccessrestricted.md): An indication of whether the accessory’s access to the network is restricted.

### Listening for access changes

- [delegate](hmnetworkconfigurationprofile/delegate.md): A delegate that HomeKit tells about changes in the state of network access.
- [HMNetworkConfigurationProfileDelegate](hmnetworkconfigurationprofiledelegate.md): An interface that your app adopts to receive notifications about changes in the state of network access.

## Relationships

### Inherits From

- [HMAccessoryProfile](hmaccessoryprofile.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing accessory profiles

- [profiles](hmaccessory/profiles.md): An array of profiles implemented by the accessory.
- [HMAccessoryProfile](hmaccessoryprofile.md): A profile that certain accessories implement.
- [HMCameraProfile](hmcameraprofile.md): A camera profile that interacts with an accessory’s camera.

# HMNetworkConfigurationProfile (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A profile that provides information about network protection for an accessory.

## Declaration

```objectivec
@interface HMNetworkConfigurationProfile : HMAccessoryProfile
```

<a id="overview"></a>

## Overview

To increase security, HomeKit can restrict network access for specific accessories, including access to other accessories in the home, and to the internet. However, an accessory your app controls might need network access to carry out certain functions, like downloading new firmware.

Check the [networkAccessRestricted](hmnetworkconfigurationprofile/isnetworkaccessrestricted.md) property of an accessory’s network configuration profile to find out if an accessory has restricted access. You can use this information to ask the user to relax network restrictions in the Home app.

## Topics

### Restricting network access

- [networkAccessRestricted](hmnetworkconfigurationprofile/isnetworkaccessrestricted.md): An indication of whether the accessory’s access to the network is restricted.

### Listening for access changes

- [delegate](hmnetworkconfigurationprofile/delegate.md): A delegate that HomeKit tells about changes in the state of network access.
- [HMNetworkConfigurationProfileDelegate](hmnetworkconfigurationprofiledelegate.md): An interface that your app adopts to receive notifications about changes in the state of network access.

## Relationships

### Inherits From

- [HMAccessoryProfile](hmaccessoryprofile.md)

## See Also

### Managing accessory profiles

- [profiles](hmaccessory/profiles.md): An array of profiles implemented by the accessory.
- [HMAccessoryProfile](hmaccessoryprofile.md): A profile that certain accessories implement.
- [HMCameraProfile](hmcameraprofile.md): A camera profile that interacts with an accessory’s camera.
