> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilnetworkresponse](https://developer.apple.com/documentation/identitylookup/ilnetworkresponse)

# ILNetworkResponse (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A response to an HTTPS network request performed on behalf of a Message Filter app extension.

## Declaration

```swift
class ILNetworkResponse
```

<a id="overview"></a>

## Overview

To preserve user privacy, a Message Filter app extension can’t contact the server itself. Instead, it tells the system to contact the server and pass back the server’s response.

## Topics

### Getting the Response

- [urlResponse](ilnetworkresponse/urlresponse.md): Encapsulation of an HTTPS URL response.

### Getting Data from the Response

- [data](ilnetworkresponse/data.md): The data returned in the HTTPS response.

### Initializers

- [init(coder:)](ilnetworkresponse/init%28coder_%29.md)

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

- [ILMessageFilterQueryResponse](ilmessagefilterqueryresponse.md): A response to a message filter query request.
- [ILMessageFilterAction](ilmessagefilteraction.md): Responds to a received message with a filter action.

# ILNetworkResponse (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A response to an HTTPS network request performed on behalf of a Message Filter app extension.

## Declaration

```objectivec
@interface ILNetworkResponse : NSObject
```

<a id="overview"></a>

## Overview

To preserve user privacy, a Message Filter app extension can’t contact the server itself. Instead, it tells the system to contact the server and pass back the server’s response.

## Topics

### Getting the Response

- [urlResponse](ilnetworkresponse/urlresponse.md): Encapsulation of an HTTPS URL response.

### Getting Data from the Response

- [data](ilnetworkresponse/data.md): The data returned in the HTTPS response.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Responses

- [ILMessageFilterQueryResponse](ilmessagefilterqueryresponse.md): A response to a message filter query request.
- [ILMessageFilterAction](ilmessagefilteraction.md): Responds to a received message with a filter action.
