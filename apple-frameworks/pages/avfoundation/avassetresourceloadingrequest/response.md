> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingrequest/response](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/response)

# response (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The URL response for the loading request.

## Declaration

```swift
@NSCopying var response: URLResponse? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an instance of [URLResponse](../../foundation/urlresponse.md), indicating a response to the loading request. If no response is needed, the value of this property is `nil`.

## See Also

### Reporting the result of the request

- [finishLoading()](finishloading%28%29.md): Causes the receiver to treat the processing of the request as complete.
- [isCancelled](iscancelled.md): A Boolean value that indicates whether the request has been cancelled.
- [finishLoading(with:)](finishloading%28with_%29.md): Causes the receiver to handle the failure to load a resource for which a resource loader’s delegate took responsibility.
- [isFinished](isfinished.md): A Boolean value that indicates whether loading of the resource has finished.
- [finishLoading(with:data:redirect:)](finishloading%28with_data_redirect_%29.md): Deprecated. Causes the receiver to finish loading a resource for which a resource loader’s delegate took responsibility .

# response (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The URL response for the loading request.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSURLResponse * response;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an instance of [NSURLResponse](../../foundation/urlresponse.md), indicating a response to the loading request. If no response is needed, the value of this property is `nil`.

## See Also

### Reporting the result of the request

- [finishLoading](finishloading%28%29.md): Causes the receiver to treat the processing of the request as complete.
- [cancelled](iscancelled.md): A Boolean value that indicates whether the request has been cancelled.
- [finishLoadingWithError:](finishloading%28with_%29.md): Causes the receiver to handle the failure to load a resource for which a resource loader’s delegate took responsibility.
- [finished](isfinished.md): A Boolean value that indicates whether loading of the resource has finished.
- [finishLoadingWithResponse:data:redirect:](finishloading%28with_data_redirect_%29.md): Deprecated. Causes the receiver to finish loading a resource for which a resource loader’s delegate took responsibility .
