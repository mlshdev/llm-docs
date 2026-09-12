> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessoryownershiptoken](https://developer.apple.com/documentation/homekit/hmaccessoryownershiptoken)

# HMAccessoryOwnershipToken (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 27.0+ · visionOS 1.0+

Authentication data that your app provides when adding an accessory to a home.

## Declaration

```swift
class HMAccessoryOwnershipToken
```

<a id="overview"></a>

## Overview

If you manufacture an accessory that requires user authentication to add the accessory to a home, manage the authentication in your app and produce a token that represents the successful outcome of that process. Wrap the token data in an [HMAccessoryOwnershipToken](hmaccessoryownershiptoken.md) instance and call the [init(url:ownershipToken:)](hmaccessorysetuppayload/init%28url_ownershiptoken_%29-32mrj.md) method to create an authenticated [HMAccessorySetupPayload](hmaccessorysetuppayload.md) instance. Then call the [addAndSetupAccessories(with:completionHandler:)](hmhome/addandsetupaccessories%28with_completionhandler_%29.md) method with the payload.

If the user attempts from the Home app to add an accessory that requires a token, the Home app calls the associated app’s [homeManager(\_:didReceiveAddAccessoryRequest:)](hmhomemanagerdelegate/homemanager%28__didreceiveaddaccessoryrequest_%29.md) home manager delegate method to perform the negotiation and provide the token.

## Topics

### Creating a Token

- [init(data:)](hmaccessoryownershiptoken/init%28data_%29.md): Creates an ownership token from data.

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

## See Also

### Creating a Payload

- [init(url:)](hmaccessorysetuppayload/init%28url_%29-7ytm5.md): Creates an accessory setup payload.
- [init(url:ownershipToken:)](hmaccessorysetuppayload/init%28url_ownershiptoken_%29-32mrj.md): Creates an accessory setup payload instance that includes an ownership token.

# HMAccessoryOwnershipToken (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 27.0+ · visionOS 1.0+

Authentication data that your app provides when adding an accessory to a home.

## Declaration

```objectivec
@interface HMAccessoryOwnershipToken : NSObject
```

<a id="overview"></a>

## Overview

If you manufacture an accessory that requires user authentication to add the accessory to a home, manage the authentication in your app and produce a token that represents the successful outcome of that process. Wrap the token data in an [HMAccessoryOwnershipToken](hmaccessoryownershiptoken.md) instance and call the [initWithURL:ownershipToken:](hmaccessorysetuppayload/init%28url_ownershiptoken_%29-32mrj.md) method to create an authenticated [HMAccessorySetupPayload](hmaccessorysetuppayload.md) instance. Then call the [addAndSetupAccessoriesWithPayload:completionHandler:](hmhome/addandsetupaccessories%28with_completionhandler_%29.md) method with the payload.

If the user attempts from the Home app to add an accessory that requires a token, the Home app calls the associated app’s [homeManager:didReceiveAddAccessoryRequest:](hmhomemanagerdelegate/homemanager%28__didreceiveaddaccessoryrequest_%29.md) home manager delegate method to perform the negotiation and provide the token.

## Topics

### Creating a Token

- [initWithData:](hmaccessoryownershiptoken/init%28data_%29.md): Creates an ownership token from data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Creating a Payload

- [initWithURL:](hmaccessorysetuppayload/init%28url_%29-7ytm5.md): Creates an accessory setup payload.
- [initWithURL:ownershipToken:](hmaccessorysetuppayload/init%28url_ownershiptoken_%29-32mrj.md): Creates an accessory setup payload instance that includes an ownership token.
