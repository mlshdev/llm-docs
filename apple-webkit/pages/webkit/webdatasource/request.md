> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdatasource/request](https://developer.apple.com/documentation/webkit/webdatasource/request)

# request (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The request that was used to create the data source.

## Declaration

```swift
var request: NSMutableURLRequest! { get }
```

<a id="Discussion"></a>

## Discussion

This URL may be different from the original request from [initialRequest](initialrequest.md).

A web view’s resource load delegate may modify requests by implementing the webView:resource:willSendRequest:redirectResponse:fromDataSource: method.

## See Also

### Getting the request and response

- [initialRequest](initialrequest.md): Deprecated. A reference to the original request that was used to load the web content.
- [response](response.md): Deprecated. The response for this data source.

# request (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The request that was used to create the data source.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSMutableURLRequest * request;
```

<a id="Discussion"></a>

## Discussion

This URL may be different from the original request from [initialRequest](initialrequest.md).

A web view’s resource load delegate may modify requests by implementing the webView:resource:willSendRequest:redirectResponse:fromDataSource: method.

## See Also

### Getting the request and response

- [initialRequest](initialrequest.md): Deprecated. A reference to the original request that was used to load the web content.
- [response](response.md): Deprecated. The response for this data source.
