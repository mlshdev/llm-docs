> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessoryprofile](https://developer.apple.com/documentation/homekit/hmaccessoryprofile)

# HMAccessoryProfile (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A profile that certain accessories implement.

## Declaration

```swift
class HMAccessoryProfile
```

<a id="overview"></a>

## Overview

This is an abstract superclass for classes such as [HMCameraProfile](hmcameraprofile.md) and [HMNetworkConfigurationProfile](hmnetworkconfigurationprofile.md). Each profile subclass controls specific features for a specific set of accessories.

## Topics

### Getting information about a profile

- [accessory](hmaccessoryprofile/accessory.md): The accessory that implements this profile.
- [services](hmaccessoryprofile/services.md): An array of services that represents this profile.
- [uniqueIdentifier](hmaccessoryprofile/uniqueidentifier.md): A unique identifier for the profile.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HMCameraProfile](hmcameraprofile.md)
- [HMMediaSourceDisplayOrderProfile](hmmediasourcedisplayorderprofile.md)
- [HMNetworkConfigurationProfile](hmnetworkconfigurationprofile.md)

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
- [HMNetworkConfigurationProfile](hmnetworkconfigurationprofile.md): A profile that provides information about network protection for an accessory.
- [HMCameraProfile](hmcameraprofile.md): A camera profile that interacts with an accessory’s camera.

# HMAccessoryProfile (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A profile that certain accessories implement.

## Declaration

```objectivec
@interface HMAccessoryProfile : NSObject
```

<a id="overview"></a>

## Overview

This is an abstract superclass for classes such as [HMCameraProfile](hmcameraprofile.md) and [HMNetworkConfigurationProfile](hmnetworkconfigurationprofile.md). Each profile subclass controls specific features for a specific set of accessories.

## Topics

### Getting information about a profile

- [accessory](hmaccessoryprofile/accessory.md): The accessory that implements this profile.
- [services](hmaccessoryprofile/services.md): An array of services that represents this profile.
- [uniqueIdentifier](hmaccessoryprofile/uniqueidentifier.md): A unique identifier for the profile.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [HMCameraProfile](hmcameraprofile.md)
- [HMNetworkConfigurationProfile](hmnetworkconfigurationprofile.md)

## See Also

### Managing accessory profiles

- [profiles](hmaccessory/profiles.md): An array of profiles implemented by the accessory.
- [HMNetworkConfigurationProfile](hmnetworkconfigurationprofile.md): A profile that provides information about network protection for an accessory.
- [HMCameraProfile](hmcameraprofile.md): A camera profile that interacts with an accessory’s camera.
