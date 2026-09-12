> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicecheck/dcdevice](https://developer.apple.com/documentation/devicecheck/dcdevice)

# DCDevice (Swift)

**Framework:** DeviceCheck  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

A representation of a device that provides a unique, authenticated token.

## Declaration

```swift
class DCDevice
```

## Mentioned In

- [Accessing and modifying per-device data](accessing-and-modifying-per-device-data.md)

<a id="overview"></a>

## Overview

Use the shared instance of the `DCDevice` class to generate a token that identifies a device. Call the [generateToken(completionHandler:)](dcdevice/generatetoken%28completionhandler_%29.md) method to get the token, and then send it to your server:

```swift
if DCDevice.current.isSupported { // Always test for availability.
    DCDevice.current.generateToken { token, error in
        guard error == nil else { /* Handle the error. */ }

        // Send the token to your server.
    }
}
```

On your server, combine the token with an authentication key that you obtain from Apple, and use the result to request access to two per-device binary digits (bits). After authenticating the device, Apple passes the current values of the bits, along with the date they were last modified, to your server. Your server applies its business logic to this information and communicates the results to your app. For more information about server-side procedures, see [Accessing and modifying per-device data](accessing-and-modifying-per-device-data.md).

> **Note**

> To use the `DCDevice` class, your app must have an app ID that you register on the [Apple Developer](https://developer.apple.com/account/) website.

Apple records the bits for you, and reports the bits back to you, but you’re responsible for keeping track of what the bits mean. You’re also responsible for determining when to reset the bits for a given device; for example, when a user sells the device to someone else.

## Topics

### Getting the current device

- [current](dcdevice/current.md): A representation of the device for which you want to query the two bits of data.

### Determining API support

- [isSupported](dcdevice/issupported.md): A Boolean value that indicates whether the device supports the DeviceCheck API.

### Getting a device token

- [generateToken(completionHandler:)](dcdevice/generatetoken%28completionhandler_%29.md): Generates a token that identifies the current device.

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

### Device identification

- [Accessing and modifying per-device data](accessing-and-modifying-per-device-data.md): Use a token from your app to query and modify two per-device binary digits stored on an Apple server.

# DCDevice (Objective-C)

**Framework:** DeviceCheck  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

A representation of a device that provides a unique, authenticated token.

## Declaration

```objectivec
@interface DCDevice : NSObject
```

## Mentioned In

- [Accessing and modifying per-device data](accessing-and-modifying-per-device-data.md)

<a id="overview"></a>

## Overview

Use the shared instance of the `DCDevice` class to generate a token that identifies a device. Call the [generateTokenWithCompletionHandler:](dcdevice/generatetoken%28completionhandler_%29.md) method to get the token, and then send it to your server:

```swift
if DCDevice.current.isSupported { // Always test for availability.
    DCDevice.current.generateToken { token, error in
        guard error == nil else { /* Handle the error. */ }

        // Send the token to your server.
    }
}
```

On your server, combine the token with an authentication key that you obtain from Apple, and use the result to request access to two per-device binary digits (bits). After authenticating the device, Apple passes the current values of the bits, along with the date they were last modified, to your server. Your server applies its business logic to this information and communicates the results to your app. For more information about server-side procedures, see [Accessing and modifying per-device data](accessing-and-modifying-per-device-data.md).

> **Note**

> To use the `DCDevice` class, your app must have an app ID that you register on the [Apple Developer](https://developer.apple.com/account/) website.

Apple records the bits for you, and reports the bits back to you, but you’re responsible for keeping track of what the bits mean. You’re also responsible for determining when to reset the bits for a given device; for example, when a user sells the device to someone else.

## Topics

### Getting the current device

- [currentDevice](dcdevice/current.md): A representation of the device for which you want to query the two bits of data.

### Determining API support

- [supported](dcdevice/issupported.md): A Boolean value that indicates whether the device supports the DeviceCheck API.

### Getting a device token

- [generateTokenWithCompletionHandler:](dcdevice/generatetoken%28completionhandler_%29.md): Generates a token that identifies the current device.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Device identification

- [Accessing and modifying per-device data](accessing-and-modifying-per-device-data.md): Use a token from your app to query and modify two per-device binary digits stored on an Apple server.
