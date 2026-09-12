> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/applibrary/exceptionrequest](https://developer.apple.com/documentation/marketplacekit/applibrary/exceptionrequest)

# AppLibrary.ExceptionRequest

**Framework:** MarketplaceKit  
**Kind:** Structure  
**Availability:** iOS 26.1+ · iPadOS 26.1+

A structure that describes an app that a person requests permission to install.

## Declaration

```swift
struct ExceptionRequest
```

<a id="overview"></a>

## Overview

When a person tries to install an app with an age rating beyond the maximum allowed for the device (see [maximumAllowedAgeRating](maximumallowedagerating.md)), the framework tracks the request by adding an instance of this structure to the [currentAgeExceptionRequests()](currentageexceptionrequests%28%29.md) list.

For more information, see [Providing age-rating appropriate content](../providing-age-rating-appropriate-content.md).

## Topics

### Identifying the requested app

- [appleItemID](exceptionrequest/appleitemid.md): An identifier for the app that requires an age-rating exception.

### Inspecting the request status

- [status](exceptionrequest/status-swift.property.md): A status that indicates the parent or guardian’s decision for the request.
- [AppLibrary.ExceptionRequest.Status](exceptionrequest/status-swift.enum.md): The possible statuses of an exception request for an app.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking for age-rating based content restrictions

- [maximumAllowedAgeRating](maximumallowedagerating.md): An age rating that specifies the maximum rating set for content on the device.
- [currentAgeExceptionRequests()](currentageexceptionrequests%28%29.md): Returns a list of requests to install apps that exceed the maximum allowed age rating for the device.
