> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocol/init(task:cachedresponse:client:)](https://developer.apple.com/documentation/foundation/urlprotocol/init(task:cachedresponse:client:))

# init(task:cachedResponse:client:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a URL protocol instance to handle the task.

## Declaration

```swift
convenience init(task: URLSessionTask, cachedResponse: CachedURLResponse?, client: (any URLProtocolClient)?)
```

## Parameters

- `task`: A task containing a URL request to be performed by the protocol.
- `cachedResponse`: A cached response for the task; may be `nil` if there is no existing cached response for the task.
- `client`: An object that provides an implementation of the [URLProtocolClient](../urlprotocolclient.md) protocol that this instance uses to communicate with the URL loading system. This client object is retained.

<a id="return-value"></a>

## Return Value

The initialized protocol object.

<a id="Discussion"></a>

## Discussion

Subclasses should override this method to do any custom initialization. Don’t call this method explicitly. When you register your custom protocol class, the system will initialize instances of your protocol as needed.

This initializer calls through to [init(request:cachedResponse:client:)](init%28request_cachedresponse_client_%29.md).

## See Also

### Creating protocol objects

- [init(request:cachedResponse:client:)](init%28request_cachedresponse_client_%29.md): Creates a URL protocol instance to handle the request.

# initWithTask:cachedResponse:client: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a URL protocol instance to handle the task.

## Declaration

```objectivec
- (instancetype) initWithTask:(NSURLSessionTask *) task cachedResponse:(NSCachedURLResponse *) cachedResponse client:(id<NSURLProtocolClient>) client;
```

## Parameters

- `task`: A task containing a URL request to be performed by the protocol.
- `cachedResponse`: A cached response for the task; may be `nil` if there is no existing cached response for the task.
- `client`: An object that provides an implementation of the [NSURLProtocolClient](../urlprotocolclient.md) protocol that this instance uses to communicate with the URL loading system. This client object is retained.

<a id="return-value"></a>

## Return Value

The initialized protocol object.

<a id="Discussion"></a>

## Discussion

Subclasses should override this method to do any custom initialization. Don’t call this method explicitly. When you register your custom protocol class, the system will initialize instances of your protocol as needed.

This initializer calls through to [initWithRequest:cachedResponse:client:](init%28request_cachedresponse_client_%29.md).

## See Also

### Creating protocol objects

- [initWithRequest:cachedResponse:client:](init%28request_cachedresponse_client_%29.md): Creates a URL protocol instance to handle the request.
