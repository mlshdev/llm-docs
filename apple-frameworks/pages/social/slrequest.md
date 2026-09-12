> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slrequest](https://developer.apple.com/documentation/social/slrequest)

# SLRequest (Swift)

**Framework:** Social  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+

An object that you use to assemble an HTTP request for communicating with a social media service.

## Declaration

```swift
class SLRequest
```

<a id="overview"></a>

## Overview

The SLRequest object encapsulates the properties of an HTTP request, providing a convenient template for you to make requests. You send a request to a social networking service to perform some operation on behalf of the user or to retrieve user information.

HTTP requests have these common components: an HTTP request method (GET, POST, PUT, or DELETE), a URL identifying the operation to perform, a set of query parameters, and an optional multipart POST body that contains additional data. The values for these properties depend on the request you are sending and the target service provider. Refer to each supported social networking site’s documentation for possible values. Links to documentation are provided in Table 1.

Use the [init(forServiceType:requestMethod:url:parameters:)](slrequest/init%28forservicetype_requestmethod_url_parameters_%29-2cnf1.md) method to initialize a newly created `SLRequest` object passing the required property values. Use the [addMultipartData(\_:withName:type:)](slrequest/addmultipartdata%28__withname_type_%29.md) to optionally specify a multipart POST body. After you create your request, use the [perform(handler:)](slrequest/perform%28handler_%29.md) method to send the request, specifying the handler to call when the request is done.

If you already have a sending mechanism, you can use the [preparedURLRequest()](slrequest/preparedurlrequest%28%29.md) method to create the request that you send using an [NSURLConnection](../foundation/nsurlconnection.md) object. If the request requires user authorization, set the [account](slrequest/account.md) property to an [ACAccount](../accounts/acaccount.md) object.

Table 1  Social Services Individual Documentation Sites

| Facebook | [https://developers.facebook.com/docs/](https://developers.facebook.com/docs/) |
| --- | --- |
| Sina Weibo | [http://open.weibo.com/wiki/](http://open.weibo.com/wiki/) |
| Twitter | [https://dev.twitter.com/docs](https://dev.twitter.com/docs) |
| LinkedIn | [https://developer.linkedin.com/rest](https://developer.linkedin.com/rest) |

> **Important**

>  For Sina Weibo integration, users must have the Chinese keyboard enabled. Users can enable this keyboard in Settings \> General \> Keyboard. If a Chinese keyboard is not enabled, users won’t be prompted to sign in to their Sina Weibo account.

## Topics

### Initializing Requests

- [init(forServiceType:requestMethod:url:parameters:)](slrequest/init%28forservicetype_requestmethod_url_parameters_%29-2cnf1.md): Initializes a newly created request object with the specified properties.
- [SLServiceTypeFacebook](slservicetypefacebook.md): Deprecated.
- [SLServiceTypeTwitter](slservicetypetwitter.md): Deprecated.
- [SLServiceTypeSinaWeibo](slservicetypesinaweibo.md): Deprecated.
- [SLServiceTypeLinkedIn](slservicetypelinkedin.md): Deprecated.
- [SLServiceTypeTencentWeibo](slservicetypetencentweibo.md): Deprecated.

### Sending a Request

- [perform(handler:)](slrequest/perform%28handler_%29.md): Performs an asynchronous request and calls the specified handler when done.
- [SLRequestHandler](slrequesthandler.md): The callback handler for a request.

### Providing User Credentials

- [account](slrequest/account.md): Account information used to authenticate the request.

### Getting the Request Details

- [preparedURLRequest()](slrequest/preparedurlrequest%28%29.md): Returns an authorized URL request that can be sent using an [NSURLConnection](../foundation/nsurlconnection.md) object.
- [requestMethod](slrequest/requestmethod.md): The method to use for this request.
- [SLRequestMethod](slrequestmethod.md): Indicates the request method used in the request.
- [url](slrequest/url.md): The destination URL for this request.
- [parameters](slrequest/parameters.md): The parameters for this request.

### Adding Data to the Request

- [addMultipartData(\_:withName:type:filename:)](slrequest/addmultipartdata%28__withname_type_filename_%29.md): Specifies a named multipart POST body for this request.
- [addMultipartData(\_:withName:type:)](slrequest/addmultipartdata%28__withname_type_%29.md): Deprecated. Specifies a named multipart POST body for this request.

### Initializers

- [init(forServiceType:requestMethod:URL:parameters:)](slrequest/init%28forservicetype_requestmethod_url_parameters_%29-92b1d.md)

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

# SLRequest (Objective-C)

**Framework:** Social  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+

An object that you use to assemble an HTTP request for communicating with a social media service.

## Declaration

```objectivec
@interface SLRequest : NSObject
```

<a id="overview"></a>

## Overview

The SLRequest object encapsulates the properties of an HTTP request, providing a convenient template for you to make requests. You send a request to a social networking service to perform some operation on behalf of the user or to retrieve user information.

HTTP requests have these common components: an HTTP request method (GET, POST, PUT, or DELETE), a URL identifying the operation to perform, a set of query parameters, and an optional multipart POST body that contains additional data. The values for these properties depend on the request you are sending and the target service provider. Refer to each supported social networking site’s documentation for possible values. Links to documentation are provided in Table 1.

Use the [requestForServiceType:requestMethod:URL:parameters:](slrequest/init%28forservicetype_requestmethod_url_parameters_%29-2cnf1.md) method to initialize a newly created `SLRequest` object passing the required property values. Use the [addMultipartData:withName:type:](slrequest/addmultipartdata%28__withname_type_%29.md) to optionally specify a multipart POST body. After you create your request, use the [performRequestWithHandler:](slrequest/perform%28handler_%29.md) method to send the request, specifying the handler to call when the request is done.

If you already have a sending mechanism, you can use the [preparedURLRequest](slrequest/preparedurlrequest%28%29.md) method to create the request that you send using an [NSURLConnection](../foundation/nsurlconnection.md) object. If the request requires user authorization, set the [account](slrequest/account.md) property to an [ACAccount](../accounts/acaccount.md) object.

Table 1  Social Services Individual Documentation Sites

| Facebook | [https://developers.facebook.com/docs/](https://developers.facebook.com/docs/) |
| --- | --- |
| Sina Weibo | [http://open.weibo.com/wiki/](http://open.weibo.com/wiki/) |
| Twitter | [https://dev.twitter.com/docs](https://dev.twitter.com/docs) |
| LinkedIn | [https://developer.linkedin.com/rest](https://developer.linkedin.com/rest) |

> **Important**

>  For Sina Weibo integration, users must have the Chinese keyboard enabled. Users can enable this keyboard in Settings \> General \> Keyboard. If a Chinese keyboard is not enabled, users won’t be prompted to sign in to their Sina Weibo account.

## Topics

### Initializing Requests

- [requestForServiceType:requestMethod:URL:parameters:](slrequest/init%28forservicetype_requestmethod_url_parameters_%29-2cnf1.md): Initializes a newly created request object with the specified properties.
- [SLServiceTypeFacebook](slservicetypefacebook.md): Deprecated.
- [SLServiceTypeTwitter](slservicetypetwitter.md): Deprecated.
- [SLServiceTypeSinaWeibo](slservicetypesinaweibo.md): Deprecated.
- [SLServiceTypeLinkedIn](slservicetypelinkedin.md): Deprecated.
- [SLServiceTypeTencentWeibo](slservicetypetencentweibo.md): Deprecated.

### Sending a Request

- [performRequestWithHandler:](slrequest/perform%28handler_%29.md): Performs an asynchronous request and calls the specified handler when done.
- [SLRequestHandler](slrequesthandler.md): The callback handler for a request.

### Providing User Credentials

- [account](slrequest/account.md): Account information used to authenticate the request.

### Getting the Request Details

- [preparedURLRequest](slrequest/preparedurlrequest%28%29.md): Returns an authorized URL request that can be sent using an [NSURLConnection](../foundation/nsurlconnection.md) object.
- [requestMethod](slrequest/requestmethod.md): The method to use for this request.
- [SLRequestMethod](slrequestmethod.md): Indicates the request method used in the request.
- [URL](slrequest/url.md): The destination URL for this request.
- [parameters](slrequest/parameters.md): The parameters for this request.

### Adding Data to the Request

- [addMultipartData:withName:type:filename:](slrequest/addmultipartdata%28__withname_type_filename_%29.md): Specifies a named multipart POST body for this request.
- [addMultipartData:withName:type:](slrequest/addmultipartdata%28__withname_type_%29.md): Deprecated. Specifies a named multipart POST body for this request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
