> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slrequest/requestmethod](https://developer.apple.com/documentation/social/slrequest/requestmethod)

# requestMethod (Swift)

**Framework:** Social  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+

The method to use for this request.

## Declaration

```swift
var requestMethod: SLRequestMethod { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to look up the method of the HTTP request that was set in [init(forServiceType:requestMethod:url:parameters:)](init%28forservicetype_requestmethod_url_parameters_%29-2cnf1.md). Possible values are described in [SLRequestMethod](../slrequestmethod.md).

## See Also

### Getting the Request Details

- [preparedURLRequest()](preparedurlrequest%28%29.md): Returns an authorized URL request that can be sent using an [NSURLConnection](../../foundation/nsurlconnection.md) object.
- [SLRequestMethod](../slrequestmethod.md): Indicates the request method used in the request.
- [url](url.md): The destination URL for this request.
- [parameters](parameters.md): The parameters for this request.

# requestMethod (Objective-C)

**Framework:** Social  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+

The method to use for this request.

## Declaration

```objectivec
@property (nonatomic, readonly) SLRequestMethod requestMethod;
```

<a id="Discussion"></a>

## Discussion

Use this property to look up the method of the HTTP request that was set in [requestForServiceType:requestMethod:URL:parameters:](init%28forservicetype_requestmethod_url_parameters_%29-2cnf1.md). Possible values are described in [SLRequestMethod](../slrequestmethod.md).

## See Also

### Getting the Request Details

- [preparedURLRequest](preparedurlrequest%28%29.md): Returns an authorized URL request that can be sent using an [NSURLConnection](../../foundation/nsurlconnection.md) object.
- [SLRequestMethod](../slrequestmethod.md): Indicates the request method used in the request.
- [URL](url.md): The destination URL for this request.
- [parameters](parameters.md): The parameters for this request.
