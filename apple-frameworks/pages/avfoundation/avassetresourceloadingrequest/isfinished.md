> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingrequest/isfinished](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/isfinished)

# isFinished (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether loading of the resource has finished.

## Declaration

```swift
var isFinished: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [false](https://developer.apple.com/documentation/swift/false) initially. The value changes to [true](https://developer.apple.com/documentation/swift/true) when the delegate object handling the request calls the [finishLoading(with:data:redirect:)](finishloading%28with_data_redirect_%29.md) or [finishLoading(with:)](finishloading%28with_%29.md) method.

## See Also

### Reporting the result of the request

- [response](response.md): The URL response for the loading request.
- [finishLoading()](finishloading%28%29.md): Causes the receiver to treat the processing of the request as complete.
- [isCancelled](iscancelled.md): A Boolean value that indicates whether the request has been cancelled.
- [finishLoading(with:)](finishloading%28with_%29.md): Causes the receiver to handle the failure to load a resource for which a resource loader’s delegate took responsibility.
- [finishLoading(with:data:redirect:)](finishloading%28with_data_redirect_%29.md): Deprecated. Causes the receiver to finish loading a resource for which a resource loader’s delegate took responsibility .

# finished (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether loading of the resource has finished.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isFinished) BOOL finished;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [false](https://developer.apple.com/documentation/swift/false) initially. The value changes to [true](https://developer.apple.com/documentation/swift/true) when the delegate object handling the request calls the [finishLoadingWithResponse:data:redirect:](finishloading%28with_data_redirect_%29.md) or [finishLoadingWithError:](finishloading%28with_%29.md) method.

## See Also

### Reporting the result of the request

- [response](response.md): The URL response for the loading request.
- [finishLoading](finishloading%28%29.md): Causes the receiver to treat the processing of the request as complete.
- [cancelled](iscancelled.md): A Boolean value that indicates whether the request has been cancelled.
- [finishLoadingWithError:](finishloading%28with_%29.md): Causes the receiver to handle the failure to load a resource for which a resource loader’s delegate took responsibility.
- [finishLoadingWithResponse:data:redirect:](finishloading%28with_data_redirect_%29.md): Deprecated. Causes the receiver to finish loading a resource for which a resource loader’s delegate took responsibility .
