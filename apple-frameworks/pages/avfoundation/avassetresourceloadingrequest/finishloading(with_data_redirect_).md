> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingrequest/finishloading(with:data:redirect:)](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/finishloading(with:data:redirect:))

# finishLoading(with:data:redirect:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 9.0)

Causes the receiver to finish loading a resource for which a resource loader’s delegate took responsibility .

> This method is deprecated. Use the following methods and properties instead: the [response](response.md) property to provide the response object, the [redirect](redirect.md) property when redirecting a request, invoking the [dataRequest](datarequest.md) instance’s[respond(with:)](../avassetresourceloadingdatarequest/respond%28with_%29.md) method to provide data, and the [finishLoading()](finishloading%28%29.md) method to indicate that loading is finished.

## Declaration

```swift
func finishLoading(with response: URLResponse?, data: Data?, redirect: URLRequest?)
```

## Parameters

- `response`: The response object for the requested resource. Use the request object in the receiver’s [request](request.md) property to get information about the requested resource.
- `data`: The data of the resource. If no data is available, specify `nil`.
- `redirect`: When redirecting a resource request, use this parameter to specify the corresponding [NSURLRequest](../../foundation/nsurlrequest.md) object. If you are handling the request and not redirecting it, specify `nil`.

<a id="Discussion"></a>

## Discussion

When a resource loader’s delegate takes responsibility for loading a resource, it calls this method to indicate that the resource was loaded successfully. This method marks the loading request as finished and returns the provided data back to the resource loader object for processing.

## See Also

### Reporting the result of the request

- [response](response.md): The URL response for the loading request.
- [finishLoading()](finishloading%28%29.md): Causes the receiver to treat the processing of the request as complete.
- [isCancelled](iscancelled.md): A Boolean value that indicates whether the request has been cancelled.
- [finishLoading(with:)](finishloading%28with_%29.md): Causes the receiver to handle the failure to load a resource for which a resource loader’s delegate took responsibility.
- [isFinished](isfinished.md): A Boolean value that indicates whether loading of the resource has finished.

# finishLoadingWithResponse:data:redirect: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 9.0)

Causes the receiver to finish loading a resource for which a resource loader’s delegate took responsibility .

> This method is deprecated. Use the following methods and properties instead: the [response](response.md) property to provide the response object, the [redirect](redirect.md) property when redirecting a request, invoking the [dataRequest](datarequest.md) instance’s[respondWithData:](../avassetresourceloadingdatarequest/respond%28with_%29.md) method to provide data, and the [finishLoading](finishloading%28%29.md) method to indicate that loading is finished.

## Declaration

```objectivec
- (void) finishLoadingWithResponse:(NSURLResponse *) response data:(NSData *) data redirect:(NSURLRequest *) redirect;
```

## Parameters

- `response`: The response object for the requested resource. Use the request object in the receiver’s [request](request.md) property to get information about the requested resource.
- `data`: The data of the resource. If no data is available, specify `nil`.
- `redirect`: When redirecting a resource request, use this parameter to specify the corresponding [NSURLRequest](../../foundation/nsurlrequest.md) object. If you are handling the request and not redirecting it, specify `nil`.

<a id="Discussion"></a>

## Discussion

When a resource loader’s delegate takes responsibility for loading a resource, it calls this method to indicate that the resource was loaded successfully. This method marks the loading request as finished and returns the provided data back to the resource loader object for processing.

## See Also

### Reporting the result of the request

- [response](response.md): The URL response for the loading request.
- [finishLoading](finishloading%28%29.md): Causes the receiver to treat the processing of the request as complete.
- [cancelled](iscancelled.md): A Boolean value that indicates whether the request has been cancelled.
- [finishLoadingWithError:](finishloading%28with_%29.md): Causes the receiver to handle the failure to load a resource for which a resource loader’s delegate took responsibility.
- [finished](isfinished.md): A Boolean value that indicates whether loading of the resource has finished.
