> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingrequest/iscancelled](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/iscancelled)

# isCancelled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the request has been cancelled.

## Declaration

```swift
var isCancelled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) when the resource loader cancels the loading of a request, just prior to sending the message [resourceLoader(\_:didCancel:)](../avassetresourceloaderdelegate/resourceloader%28__didcancel_%29-3nl51.md) to the delegate.

## See Also

### Reporting the result of the request

- [response](response.md): The URL response for the loading request.
- [finishLoading()](finishloading%28%29.md): Causes the receiver to treat the processing of the request as complete.
- [finishLoading(with:)](finishloading%28with_%29.md): Causes the receiver to handle the failure to load a resource for which a resource loader’s delegate took responsibility.
- [isFinished](isfinished.md): A Boolean value that indicates whether loading of the resource has finished.
- [finishLoading(with:data:redirect:)](finishloading%28with_data_redirect_%29.md): Deprecated. Causes the receiver to finish loading a resource for which a resource loader’s delegate took responsibility .

# cancelled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the request has been cancelled.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCancelled) BOOL cancelled;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) when the resource loader cancels the loading of a request, just prior to sending the message [resourceLoader:didCancelLoadingRequest:](../avassetresourceloaderdelegate/resourceloader%28__didcancel_%29-3nl51.md) to the delegate.

## See Also

### Reporting the result of the request

- [response](response.md): The URL response for the loading request.
- [finishLoading](finishloading%28%29.md): Causes the receiver to treat the processing of the request as complete.
- [finishLoadingWithError:](finishloading%28with_%29.md): Causes the receiver to handle the failure to load a resource for which a resource loader’s delegate took responsibility.
- [finished](isfinished.md): A Boolean value that indicates whether loading of the resource has finished.
- [finishLoadingWithResponse:data:redirect:](finishloading%28with_data_redirect_%29.md): Deprecated. Causes the receiver to finish loading a resource for which a resource loader’s delegate took responsibility .
