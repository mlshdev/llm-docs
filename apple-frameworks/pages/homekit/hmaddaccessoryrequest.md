> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaddaccessoryrequest](https://developer.apple.com/documentation/homekit/hmaddaccessoryrequest)

# HMAddAccessoryRequest (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

A request to add an accessory to a particular home.

## Declaration

```swift
class HMAddAccessoryRequest
```

<a id="overview"></a>

## Overview

An [HMAddAccessoryRequest](hmaddaccessoryrequest.md) instance describes an accessory that your app should add to a home. HomeKit calls your home manager delegate’s [homeManager(\_:didReceiveAddAccessoryRequest:)](hmhomemanagerdelegate/homemanager%28__didreceiveaddaccessoryrequest_%29.md) method with a request.

Use the request’s [accessoryName](hmaddaccessoryrequest/accessoryname.md) and [accessoryCategory](hmaddaccessoryrequest/accessorycategory.md) properties to obtain a token by negotiating with the accessory outside of HomeKit. If the [requiresSetupPayloadURL](hmaddaccessoryrequest/requiressetuppayloadurl.md) property is `true`, also prepare a setup payload URL. Then create a setup payload with either the [makePayload(url:ownershipToken:)](hmaddaccessoryrequest/makepayload%28url_ownershiptoken_%29.md) or [makePayload(ownershipToken:)](hmaddaccessoryrequest/makepayload%28ownershiptoken_%29.md) method. Complete the request by calling the [addAndSetupAccessories(with:completionHandler:)](hmhome/addandsetupaccessories%28with_completionhandler_%29.md) method on the request’s [home](hmaddaccessoryrequest/home.md) property.

## Topics

### Characterizing the Request

- [home](hmaddaccessoryrequest/home.md): The home to which to add the accessory.
- [accessoryCategory](hmaddaccessoryrequest/accessorycategory.md): The category of the accessory to add.
- [accessoryName](hmaddaccessoryrequest/accessoryname.md): The name of the accessory to add.
- [requiresOwnershipToken](hmaddaccessoryrequest/requiresownershiptoken.md): Deprecated. An indication of whether the add operation requires an ownership token.
- [requiresSetupPayloadURL](hmaddaccessoryrequest/requiressetuppayloadurl.md): An indication of whether the add operation requires a setup payload URL.

### Creating a Payload

- [makePayload(ownershipToken:)](hmaddaccessoryrequest/makepayload%28ownershiptoken_%29.md): Builds an accessory setup payload with the given ownership token.
- [makePayload(url:ownershipToken:)](hmaddaccessoryrequest/makepayload%28url_ownershiptoken_%29.md): Builds an accessory setup payload with the given setup payload URL and ownership token.

### Initializers

- [init()](hmaddaccessoryrequest/init%28%29.md): Deprecated.

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

### Adding accessories

- [homeManager(\_:didReceiveAddAccessoryRequest:)](hmhomemanagerdelegate/homemanager%28__didreceiveaddaccessoryrequest_%29.md): Tells the delegate to add an accessory to a home by using a setup payload.

# HMAddAccessoryRequest (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

A request to add an accessory to a particular home.

## Declaration

```objectivec
@interface HMAddAccessoryRequest : NSObject
```

<a id="overview"></a>

## Overview

An [HMAddAccessoryRequest](hmaddaccessoryrequest.md) instance describes an accessory that your app should add to a home. HomeKit calls your home manager delegate’s [homeManager:didReceiveAddAccessoryRequest:](hmhomemanagerdelegate/homemanager%28__didreceiveaddaccessoryrequest_%29.md) method with a request.

Use the request’s [accessoryName](hmaddaccessoryrequest/accessoryname.md) and [accessoryCategory](hmaddaccessoryrequest/accessorycategory.md) properties to obtain a token by negotiating with the accessory outside of HomeKit. If the [requiresSetupPayloadURL](hmaddaccessoryrequest/requiressetuppayloadurl.md) property is `true`, also prepare a setup payload URL. Then create a setup payload with either the [payloadWithURL:ownershipToken:](hmaddaccessoryrequest/makepayload%28url_ownershiptoken_%29.md) or [payloadWithOwnershipToken:](hmaddaccessoryrequest/makepayload%28ownershiptoken_%29.md) method. Complete the request by calling the [addAndSetupAccessoriesWithPayload:completionHandler:](hmhome/addandsetupaccessories%28with_completionhandler_%29.md) method on the request’s [home](hmaddaccessoryrequest/home.md) property.

## Topics

### Characterizing the Request

- [home](hmaddaccessoryrequest/home.md): The home to which to add the accessory.
- [accessoryCategory](hmaddaccessoryrequest/accessorycategory.md): The category of the accessory to add.
- [accessoryName](hmaddaccessoryrequest/accessoryname.md): The name of the accessory to add.
- [requiresOwnershipToken](hmaddaccessoryrequest/requiresownershiptoken.md): Deprecated. An indication of whether the add operation requires an ownership token.
- [requiresSetupPayloadURL](hmaddaccessoryrequest/requiressetuppayloadurl.md): An indication of whether the add operation requires a setup payload URL.

### Creating a Payload

- [payloadWithOwnershipToken:](hmaddaccessoryrequest/makepayload%28ownershiptoken_%29.md): Builds an accessory setup payload with the given ownership token.
- [payloadWithURL:ownershipToken:](hmaddaccessoryrequest/makepayload%28url_ownershiptoken_%29.md): Builds an accessory setup payload with the given setup payload URL and ownership token.

### Instance Methods

- [init](hmaddaccessoryrequest/init%28%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Adding accessories

- [homeManager:didReceiveAddAccessoryRequest:](hmhomemanagerdelegate/homemanager%28__didreceiveaddaccessoryrequest_%29.md): Tells the delegate to add an accessory to a home by using a setup payload.
