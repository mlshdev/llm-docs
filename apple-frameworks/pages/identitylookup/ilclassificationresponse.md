> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilclassificationresponse](https://developer.apple.com/documentation/identitylookup/ilclassificationresponse)

# ILClassificationResponse (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A response object that tells the system how to handle the reported communications.

## Declaration

```swift
class ILClassificationResponse
```

<a id="overview"></a>

## Overview

To work in areas where Wi-Fi connections and cellular data may be unreliable, the extension sends the response using an SMS message. As long as the action isn’t [ILClassificationAction.none](ilclassificationaction/none.md), the extension creates an SMS message to the number provided by the `ILClassificationExtensionSMSReportDestination` key in the extension’s `info.plist` file.

The message’s body contains a JSON string with both the classification action and the contents of the user info dictionary. For more information, see [JSONSerialization](../foundation/jsonserialization.md).

## Topics

### Creating Responses

- [init(action:)](ilclassificationresponse/init%28action_%29.md): Creates a new response using the provided classification.

### Accessing Data

- [action](ilclassificationresponse/action.md): A classification that determines what action the system takes.
- [userInfo](ilclassificationresponse/userinfo.md): JSON data included in a response sent over the network.
- [userString](ilclassificationresponse/userstring.md): Text included in a response sent over SMS.

### Initializers

- [init(classificationAction:)](ilclassificationresponse/init%28classificationaction_%29.md)
- [init(coder:)](ilclassificationresponse/init%28coder_%29.md)

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
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Responses

- [ILClassificationAction](ilclassificationaction.md): The actions the system can take in response to the reported communication.

# ILClassificationResponse (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A response object that tells the system how to handle the reported communications.

## Declaration

```objectivec
@interface ILClassificationResponse : NSObject
```

<a id="overview"></a>

## Overview

To work in areas where Wi-Fi connections and cellular data may be unreliable, the extension sends the response using an SMS message. As long as the action isn’t [ILClassificationActionNone](ilclassificationaction/none.md), the extension creates an SMS message to the number provided by the `ILClassificationExtensionSMSReportDestination` key in the extension’s `info.plist` file.

The message’s body contains a JSON string with both the classification action and the contents of the user info dictionary. For more information, see [NSJSONSerialization](../foundation/jsonserialization.md).

## Topics

### Creating Responses

- [initWithClassificationAction:](ilclassificationresponse/init%28action_%29.md): Creates a new response using the provided classification.

### Accessing Data

- [action](ilclassificationresponse/action.md): A classification that determines what action the system takes.
- [userInfo](ilclassificationresponse/userinfo.md): JSON data included in a response sent over the network.
- [userString](ilclassificationresponse/userstring.md): Text included in a response sent over SMS.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Responses

- [ILClassificationAction](ilclassificationaction.md): The actions the system can take in response to the reported communication.
