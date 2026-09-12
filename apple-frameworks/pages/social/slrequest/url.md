> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slrequest/url](https://developer.apple.com/documentation/social/slrequest/url)

# url (Swift)

**Framework:** Social  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+

The destination URL for this request.

## Declaration

```swift
var url: URL! { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to look up the URL of the HTTP request that was set in [init(forServiceType:requestMethod:url:parameters:)](init%28forservicetype_requestmethod_url_parameters_%29-2cnf1.md). Possible values are dependent on the target service and are documented by the service provider. For links to documentation for the supported services, see Table 1 in [SLRequest](../slrequest.md).

## See Also

### Getting the Request Details

- [preparedURLRequest()](preparedurlrequest%28%29.md): Returns an authorized URL request that can be sent using an [NSURLConnection](../../foundation/nsurlconnection.md) object.
- [requestMethod](requestmethod.md): The method to use for this request.
- [SLRequestMethod](../slrequestmethod.md): Indicates the request method used in the request.
- [parameters](parameters.md): The parameters for this request.

# URL (Objective-C)

**Framework:** Social  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+

The destination URL for this request.

## Declaration

```objectivec
@property (nonatomic, readonly) NSURL * URL;
```

<a id="Discussion"></a>

## Discussion

Use this property to look up the URL of the HTTP request that was set in [requestForServiceType:requestMethod:URL:parameters:](init%28forservicetype_requestmethod_url_parameters_%29-2cnf1.md). Possible values are dependent on the target service and are documented by the service provider. For links to documentation for the supported services, see Table 1 in [SLRequest](../slrequest.md).

## See Also

### Getting the Request Details

- [preparedURLRequest](preparedurlrequest%28%29.md): Returns an authorized URL request that can be sent using an [NSURLConnection](../../foundation/nsurlconnection.md) object.
- [requestMethod](requestmethod.md): The method to use for this request.
- [SLRequestMethod](../slrequestmethod.md): Indicates the request method used in the request.
- [parameters](parameters.md): The parameters for this request.
