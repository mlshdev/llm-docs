> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingrequest/finishloading(with:)](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/finishloading(with:))

# finishLoading(with:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Causes the receiver to handle the failure to load a resource for which a resource loader’s delegate took responsibility.

## Declaration

```swift
func finishLoading(with error: (any Error)?)
```

## Parameters

- `error`: An error object indicating the reason for the failure.

<a id="Discussion"></a>

## Discussion

When a resource loader’s delegate takes responsibility for loading a resource, it calls this method when a failure occurred when loading the resource. This method marks the loading request as finished and notifies the resource loader object that the resource could not be loaded.

## See Also

### Reporting the result of the request

- [response](response.md): The URL response for the loading request.
- [finishLoading()](finishloading%28%29.md): Causes the receiver to treat the processing of the request as complete.
- [isCancelled](iscancelled.md): A Boolean value that indicates whether the request has been cancelled.
- [isFinished](isfinished.md): A Boolean value that indicates whether loading of the resource has finished.
- [finishLoading(with:data:redirect:)](finishloading%28with_data_redirect_%29.md): Deprecated. Causes the receiver to finish loading a resource for which a resource loader’s delegate took responsibility .

# finishLoadingWithError: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Causes the receiver to handle the failure to load a resource for which a resource loader’s delegate took responsibility.

## Declaration

```objectivec
- (void) finishLoadingWithError:(NSError *) error;
```

## Parameters

- `error`: An error object indicating the reason for the failure.

<a id="Discussion"></a>

## Discussion

When a resource loader’s delegate takes responsibility for loading a resource, it calls this method when a failure occurred when loading the resource. This method marks the loading request as finished and notifies the resource loader object that the resource could not be loaded.

## See Also

### Reporting the result of the request

- [response](response.md): The URL response for the loading request.
- [finishLoading](finishloading%28%29.md): Causes the receiver to treat the processing of the request as complete.
- [cancelled](iscancelled.md): A Boolean value that indicates whether the request has been cancelled.
- [finished](isfinished.md): A Boolean value that indicates whether loading of the resource has finished.
- [finishLoadingWithResponse:data:redirect:](finishloading%28with_data_redirect_%29.md): Deprecated. Causes the receiver to finish loading a resource for which a resource loader’s delegate took responsibility .
