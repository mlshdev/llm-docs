> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorysetuppayload](https://developer.apple.com/documentation/homekit/hmaccessorysetuppayload)

# HMAccessorySetupPayload (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 27.0+ · visionOS 1.0+

A payload for authenticating a HomeKit accessory.

## Declaration

```swift
class HMAccessorySetupPayload
```

<a id="overview"></a>

## Overview

The setup payload provides a URL to authenticate an accessory. Typically, the URL comes from scanning a QR code on the accessory. Use a setup payload to authenticate devices that are already deployed, for which scanning a QR code would be difficult, or if you need to provide an optional ownership token that you negotiate with the accessory outside of HomeKit.

For details about the payload’s content, please join the [MFi Program](https://developer.apple.com/programs/mfi/).

## Topics

### Creating a Payload

- [init(url:)](hmaccessorysetuppayload/init%28url_%29-7ytm5.md): Creates an accessory setup payload.
- [init(url:ownershipToken:)](hmaccessorysetuppayload/init%28url_ownershiptoken_%29-32mrj.md): Creates an accessory setup payload instance that includes an ownership token.
- [HMAccessoryOwnershipToken](hmaccessoryownershiptoken.md): Authentication data that your app provides when adding an accessory to a home.

### Initializers

- [init(URL:)](hmaccessorysetuppayload/init%28url_%29-j8tu.md)
- [init(URL:ownershipToken:)](hmaccessorysetuppayload/init%28url_ownershiptoken_%29-24qin.md)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# HMAccessorySetupPayload (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 27.0+ · visionOS 1.0+

A payload for authenticating a HomeKit accessory.

## Declaration

```objectivec
@interface HMAccessorySetupPayload : NSObject
```

<a id="overview"></a>

## Overview

The setup payload provides a URL to authenticate an accessory. Typically, the URL comes from scanning a QR code on the accessory. Use a setup payload to authenticate devices that are already deployed, for which scanning a QR code would be difficult, or if you need to provide an optional ownership token that you negotiate with the accessory outside of HomeKit.

For details about the payload’s content, please join the [MFi Program](https://developer.apple.com/programs/mfi/).

## Topics

### Creating a Payload

- [initWithURL:](hmaccessorysetuppayload/init%28url_%29-7ytm5.md): Creates an accessory setup payload.
- [initWithURL:ownershipToken:](hmaccessorysetuppayload/init%28url_ownershiptoken_%29-32mrj.md): Creates an accessory setup payload instance that includes an ownership token.
- [HMAccessoryOwnershipToken](hmaccessoryownershiptoken.md): Authentication data that your app provides when adding an accessory to a home.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
