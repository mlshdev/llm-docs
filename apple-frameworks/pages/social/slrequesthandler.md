> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slrequesthandler](https://developer.apple.com/documentation/social/slrequesthandler)

# SLRequestHandler (Swift)

**Framework:** Social  
**Kind:** Type Alias  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+

The callback handler for a request.

## Declaration

```swift
typealias SLRequestHandler = (Data?, HTTPURLResponse?, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

The parameters for this handler are:

- **`responseData`**: The data returned by the request. The format of this data is dependent on the target service.
- **`urlResponse`**: The URL response returned by the request that includes the HTTP response codes.
- **`error`**: An error identifier.

Possible values are dependent on the target service and are documented by the service provider. For links to documentation for the supported services, see Table 1 in [SLRequest](slrequest.md).

## See Also

### Sending a Request

- [perform(handler:)](slrequest/perform%28handler_%29.md): Performs an asynchronous request and calls the specified handler when done.

# SLRequestHandler (Objective-C)

**Framework:** Social  
**Kind:** Type Alias  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+

The callback handler for a request.

## Declaration

```objectivec
typedef void (^)(NSData *, NSHTTPURLResponse *, NSError *) SLRequestHandler;
```

<a id="Discussion"></a>

## Discussion

The parameters for this handler are:

- **`responseData`**: The data returned by the request. The format of this data is dependent on the target service.
- **`urlResponse`**: The URL response returned by the request that includes the HTTP response codes.
- **`error`**: An error identifier.

Possible values are dependent on the target service and are documented by the service provider. For links to documentation for the supported services, see Table 1 in [SLRequest](slrequest.md).

## See Also

### Sending a Request

- [performRequestWithHandler:](slrequest/perform%28handler_%29.md): Performs an asynchronous request and calls the specified handler when done.
