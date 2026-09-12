> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingrequest/finishloading()](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/finishloading())

# finishLoading() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Causes the receiver to treat the processing of the request as complete.

## Declaration

```swift
func finishLoading()
```

<a id="Discussion"></a>

## Discussion

If a [dataRequest](datarequest.md) is present and the resource does not contain the full extent of the data that has been requested according to the values of the [requestedOffset](../avassetresourceloadingdatarequest/requestedoffset.md) and [requestedLength](../avassetresourceloadingdatarequest/requestedlength.md) properties of the request, invoke `finishLoading` after providing as much of the requested data as the resource contains.

## See Also

### Reporting the result of the request

- [response](response.md): The URL response for the loading request.
- [isCancelled](iscancelled.md): A Boolean value that indicates whether the request has been cancelled.
- [finishLoading(with:)](finishloading%28with_%29.md): Causes the receiver to handle the failure to load a resource for which a resource loader’s delegate took responsibility.
- [isFinished](isfinished.md): A Boolean value that indicates whether loading of the resource has finished.
- [finishLoading(with:data:redirect:)](finishloading%28with_data_redirect_%29.md): Deprecated. Causes the receiver to finish loading a resource for which a resource loader’s delegate took responsibility .

# finishLoading (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Causes the receiver to treat the processing of the request as complete.

## Declaration

```objectivec
- (void) finishLoading;
```

<a id="Discussion"></a>

## Discussion

If a [dataRequest](datarequest.md) is present and the resource does not contain the full extent of the data that has been requested according to the values of the [requestedOffset](../avassetresourceloadingdatarequest/requestedoffset.md) and [requestedLength](../avassetresourceloadingdatarequest/requestedlength.md) properties of the request, invoke `finishLoading` after providing as much of the requested data as the resource contains.

## See Also

### Reporting the result of the request

- [response](response.md): The URL response for the loading request.
- [cancelled](iscancelled.md): A Boolean value that indicates whether the request has been cancelled.
- [finishLoadingWithError:](finishloading%28with_%29.md): Causes the receiver to handle the failure to load a resource for which a resource loader’s delegate took responsibility.
- [finished](isfinished.md): A Boolean value that indicates whether loading of the resource has finished.
- [finishLoadingWithResponse:data:redirect:](finishloading%28with_data_redirect_%29.md): Deprecated. Causes the receiver to finish loading a resource for which a resource loader’s delegate took responsibility .
