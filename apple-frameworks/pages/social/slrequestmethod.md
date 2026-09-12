> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slrequestmethod](https://developer.apple.com/documentation/social/slrequestmethod)

# SLRequestMethod (Swift)

**Framework:** Social  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+

Indicates the request method used in the request.

## Declaration

```swift
enum SLRequestMethod
```

<a id="overview"></a>

## Overview

Use this constant to set the [requestMethod](slrequest/requestmethod.md) property. The type of request to use depends on the target service. For links to documentation for the supported services, see Table 1 in [SLRequest](slrequest.md).

## Topics

### Constants

- [SLRequestMethod.GET](slrequestmethod/get.md): Requests information from the specified resource.
- [SLRequestMethod.POST](slrequestmethod/post.md): Submits data to be processed.
- [SLRequestMethod.DELETE](slrequestmethod/delete.md): Deletes the specified resource.
- [SLRequestMethod.PUT](slrequestmethod/put.md): Uses a PUT request to submit the data.

### Initializers

- [init(rawValue:)](slrequestmethod/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Request Details

- [preparedURLRequest()](slrequest/preparedurlrequest%28%29.md): Returns an authorized URL request that can be sent using an [NSURLConnection](../foundation/nsurlconnection.md) object.
- [requestMethod](slrequest/requestmethod.md): The method to use for this request.
- [url](slrequest/url.md): The destination URL for this request.
- [parameters](slrequest/parameters.md): The parameters for this request.

# SLRequestMethod (Objective-C)

**Framework:** Social  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+

Indicates the request method used in the request.

## Declaration

```objectivec
enum SLRequestMethod : NSInteger;
```

<a id="overview"></a>

## Overview

Use this constant to set the [requestMethod](slrequest/requestmethod.md) property. The type of request to use depends on the target service. For links to documentation for the supported services, see Table 1 in [SLRequest](slrequest.md).

## Topics

### Constants

- [SLRequestMethodGET](slrequestmethod/get.md): Requests information from the specified resource.
- [SLRequestMethodPOST](slrequestmethod/post.md): Submits data to be processed.
- [SLRequestMethodDELETE](slrequestmethod/delete.md): Deletes the specified resource.
- [SLRequestMethodPUT](slrequestmethod/put.md): Uses a PUT request to submit the data.

## See Also

### Getting the Request Details

- [preparedURLRequest](slrequest/preparedurlrequest%28%29.md): Returns an authorized URL request that can be sent using an [NSURLConnection](../foundation/nsurlconnection.md) object.
- [requestMethod](slrequest/requestmethod.md): The method to use for this request.
- [URL](slrequest/url.md): The destination URL for this request.
- [parameters](slrequest/parameters.md): The parameters for this request.
