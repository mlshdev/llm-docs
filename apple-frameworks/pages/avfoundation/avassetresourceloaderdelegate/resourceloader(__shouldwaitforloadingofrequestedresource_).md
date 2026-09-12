> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloaderdelegate/resourceloader(_:shouldwaitforloadingofrequestedresource:)](https://developer.apple.com/documentation/avfoundation/avassetresourceloaderdelegate/resourceloader(_:shouldwaitforloadingofrequestedresource:))

# resourceLoader(\_:shouldWaitForLoadingOfRequestedResource:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate if it wants to load the requested resource.

## Declaration

```swift
optional func resourceLoader(_ resourceLoader: AVAssetResourceLoader, shouldWaitForLoadingOfRequestedResource loadingRequest: AVAssetResourceLoadingRequest) -> Bool
```

## Parameters

- `resourceLoader`: The resource loader object that is making the request.
- `loadingRequest`: The loading request object that contains information about the requested resource.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if your delegate can load the resource specified by the `loadingRequest` parameter or [false](https://developer.apple.com/documentation/swift/false) if it cannot.

<a id="Discussion"></a>

## Discussion

The resource loader object calls this method when assistance is required of your code to load the specified resource. For example, the resource loader might call this method to load decryption keys that have been specified using a custom URL scheme.

Returning [true](https://developer.apple.com/documentation/swift/true) from this method, implies only that the receiver will load, or at least attempt to load, the resource. In some implementations, the actual work of loading the resource might be initiated on another thread, running asynchronously to the resource loading delegate; whether the work begins immediately or merely soon is an implementation detail of the client application.

You can load the resource synchronously or asynchronously. In both cases, you must indicate success or failure of the operation by calling the [finishLoading(with:data:redirect:)](../avassetresourceloadingrequest/finishloading%28with_data_redirect_%29.md) or [finishLoading(with:)](../avassetresourceloadingrequest/finishloading%28with_%29.md) method of the request object when you finish. If you load the resource asynchronously, you must also store a strong reference to the object in the `loadingRequest` parameter before returning from this method.

If you return [false](https://developer.apple.com/documentation/swift/false) from this method, the resource loader treats the loading of the resource as having failed.

## See Also

### Processing resource requests

- [resourceLoader(\_:shouldWaitForRenewalOfRequestedResource:)](resourceloader%28__shouldwaitforrenewalofrequestedresource_%29.md): Tells the delegate when assistance is required of the application to renew a resource.
- [resourceLoader(\_:didCancel:)](resourceloader%28__didcancel_%29-3nl51.md): Informs the delegate that a prior loading request has been cancelled.

# resourceLoader:shouldWaitForLoadingOfRequestedResource: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate if it wants to load the requested resource.

## Declaration

```objectivec
- (BOOL) resourceLoader:(AVAssetResourceLoader *) resourceLoader shouldWaitForLoadingOfRequestedResource:(AVAssetResourceLoadingRequest *) loadingRequest;
```

## Parameters

- `resourceLoader`: The resource loader object that is making the request.
- `loadingRequest`: The loading request object that contains information about the requested resource.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if your delegate can load the resource specified by the `loadingRequest` parameter or [false](https://developer.apple.com/documentation/swift/false) if it cannot.

<a id="Discussion"></a>

## Discussion

The resource loader object calls this method when assistance is required of your code to load the specified resource. For example, the resource loader might call this method to load decryption keys that have been specified using a custom URL scheme.

Returning [true](https://developer.apple.com/documentation/swift/true) from this method, implies only that the receiver will load, or at least attempt to load, the resource. In some implementations, the actual work of loading the resource might be initiated on another thread, running asynchronously to the resource loading delegate; whether the work begins immediately or merely soon is an implementation detail of the client application.

You can load the resource synchronously or asynchronously. In both cases, you must indicate success or failure of the operation by calling the [finishLoadingWithResponse:data:redirect:](../avassetresourceloadingrequest/finishloading%28with_data_redirect_%29.md) or [finishLoadingWithError:](../avassetresourceloadingrequest/finishloading%28with_%29.md) method of the request object when you finish. If you load the resource asynchronously, you must also store a strong reference to the object in the `loadingRequest` parameter before returning from this method.

If you return [false](https://developer.apple.com/documentation/swift/false) from this method, the resource loader treats the loading of the resource as having failed.

## See Also

### Processing resource requests

- [resourceLoader:shouldWaitForRenewalOfRequestedResource:](resourceloader%28__shouldwaitforrenewalofrequestedresource_%29.md): Tells the delegate when assistance is required of the application to renew a resource.
- [resourceLoader:didCancelLoadingRequest:](resourceloader%28__didcancel_%29-3nl51.md): Informs the delegate that a prior loading request has been cancelled.
