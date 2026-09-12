> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocol/init(request:cachedresponse:client:)](https://developer.apple.com/documentation/foundation/urlprotocol/init(request:cachedresponse:client:))

# init(request:cachedResponse:client:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a URL protocol instance to handle the request.

## Declaration

```swift
init(request: URLRequest, cachedResponse: CachedURLResponse?, client: (any URLProtocolClient)?)
```

## Parameters

- `request`: The URL request for the URL protocol object. This request is retained.
- `cachedResponse`: A cached response for the request; it may be `nil` if there is no existing cached response for the request.
- `client`: An object that provides an implementation of the [URLProtocolClient](../urlprotocolclient.md) protocol that this instance uses to communicate with the URL Loading System. This client object is retained.

<a id="return-value"></a>

## Return Value

The initialized protocol object.

<a id="Discussion"></a>

## Discussion

Subclasses should override this method to do any custom initialization. Don’t call this method explicitly. When you register your custom protocol class, the system will initialize instances of your protocol as needed.

This is the designated initializer for [URLProtocol](../urlprotocol.md).

## See Also

### Creating protocol objects

- [init(task:cachedResponse:client:)](init%28task_cachedresponse_client_%29.md): Creates a URL protocol instance to handle the task.

# initWithRequest:cachedResponse:client: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a URL protocol instance to handle the request.

## Declaration

```objectivec
- (instancetype) initWithRequest:(NSURLRequest *) request cachedResponse:(NSCachedURLResponse *) cachedResponse client:(id<NSURLProtocolClient>) client;
```

## Parameters

- `request`: The URL request for the URL protocol object. This request is retained.
- `cachedResponse`: A cached response for the request; it may be `nil` if there is no existing cached response for the request.
- `client`: An object that provides an implementation of the [NSURLProtocolClient](../urlprotocolclient.md) protocol that this instance uses to communicate with the URL Loading System. This client object is retained.

<a id="return-value"></a>

## Return Value

The initialized protocol object.

<a id="Discussion"></a>

## Discussion

Subclasses should override this method to do any custom initialization. Don’t call this method explicitly. When you register your custom protocol class, the system will initialize instances of your protocol as needed.

This is the designated initializer for [NSURLProtocol](../urlprotocol.md).

## See Also

### Creating protocol objects

- [initWithTask:cachedResponse:client:](init%28task_cachedresponse_client_%29.md): Creates a URL protocol instance to handle the task.
