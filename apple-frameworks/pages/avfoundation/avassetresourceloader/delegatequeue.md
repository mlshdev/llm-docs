> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloader/delegatequeue](https://developer.apple.com/documentation/avfoundation/avassetresourceloader/delegatequeue)

# delegateQueue (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The dispatch queue to use when handling resource requests.

## Declaration

```swift
var delegateQueue: dispatch_queue_t? { get }
```

<a id="Discussion"></a>

## Discussion

Resource requests are processed synchronously on the specified dispatch queue.

## See Also

### Accessing the delegate

- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Sets the delegate and dispatch queue to use with the resource loader.
- [delegate](delegate.md): The delegate object to use when handling resource requests.
- [AVAssetResourceLoaderDelegate](../avassetresourceloaderdelegate.md): Methods you can implement to handle resource-loading requests coming from a URL asset.

# delegateQueue (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The dispatch queue to use when handling resource requests.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) dispatch_queue_t delegateQueue;
```

<a id="Discussion"></a>

## Discussion

Resource requests are processed synchronously on the specified dispatch queue.

## See Also

### Accessing the delegate

- [setDelegate:queue:](setdelegate%28__queue_%29.md): Sets the delegate and dispatch queue to use with the resource loader.
- [delegate](delegate.md): The delegate object to use when handling resource requests.
- [AVAssetResourceLoaderDelegate](../avassetresourceloaderdelegate.md): Methods you can implement to handle resource-loading requests coming from a URL asset.
