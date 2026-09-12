> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloader/delegate](https://developer.apple.com/documentation/avfoundation/avassetresourceloader/delegate)

# delegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The delegate object to use when handling resource requests.

## Declaration

```swift
weak var delegate: (any AVAssetResourceLoaderDelegate)? { get }
```

<a id="Discussion"></a>

## Discussion

The delegate object is responsible for indicating whether or not it is able to handle a resource request. And for those requests it does handle, the delegate object must initiate the loading of the requested resource.

## See Also

### Accessing the delegate

- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Sets the delegate and dispatch queue to use with the resource loader.
- [AVAssetResourceLoaderDelegate](../avassetresourceloaderdelegate.md): Methods you can implement to handle resource-loading requests coming from a URL asset.
- [delegateQueue](delegatequeue.md): The dispatch queue to use when handling resource requests.

# delegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The delegate object to use when handling resource requests.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<AVAssetResourceLoaderDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate object is responsible for indicating whether or not it is able to handle a resource request. And for those requests it does handle, the delegate object must initiate the loading of the requested resource.

## See Also

### Accessing the delegate

- [setDelegate:queue:](setdelegate%28__queue_%29.md): Sets the delegate and dispatch queue to use with the resource loader.
- [AVAssetResourceLoaderDelegate](../avassetresourceloaderdelegate.md): Methods you can implement to handle resource-loading requests coming from a URL asset.
- [delegateQueue](delegatequeue.md): The dispatch queue to use when handling resource requests.
