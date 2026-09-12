> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/businessinformationrequest](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/businessinformationrequest)

# RCSService.BusinessInformationRequest

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure representing a request to retrieve information about a business.

## Declaration

```swift
struct BusinessInformationRequest
```

<a id="overview"></a>

## Overview

To create an instance of this type, use the [CellularServiceID](../cellularserviceid.md) and [RCSHandle](../rcshandle.md) from an [RCSMessage](../rcsmessage.md) you receive in the RCS service’s [incomingMessageNotifications](incomingmessagenotifications.md). Then call [businessInformation(for:)](businessinformation%28for_%29.md) on the RCS service, which returns an instance of the [RCSService.Business](business.md) type.

## Topics

### Creating a business information request

- [init(cellularServiceID:handle:cachePolicy:)](businessinformationrequest/init%28cellularserviceid_handle_cachepolicy_%29.md)

### Accessing request properties

- [cellularServiceID](businessinformationrequest/cellularserviceid.md): Service identifier to use for this request.
- [handle](businessinformationrequest/handle.md): URI handle of the target.
- [cachePolicy](businessinformationrequest/cachepolicy-swift.property.md): Cache policy to use for request.
- [RCSService.BusinessInformationRequest.CachePolicy](businessinformationrequest/cachepolicy-swift.enum.md): \`

### Structures

- [RCSService.BusinessInformationRequest.WelcomeMessageInformation](businessinformationrequest/welcomemessageinformation-swift.struct.md)

### Instance Properties

- [welcomeMessageInformation](businessinformationrequest/welcomemessageinformation-swift.property.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving business information

- [businessInformation(for:)](businessinformation%28for_%29.md): Requests business information for a specified handle.
- [RCSService.Business](business.md): Structure containing details about a business.
