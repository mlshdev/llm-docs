> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloader/setdelegate(_:queue:)](https://developer.apple.com/documentation/avfoundation/avassetresourceloader/setdelegate(_:queue:))

# setDelegate(\_:queue:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Sets the delegate and dispatch queue to use with the resource loader.

## Declaration

```swift
func setDelegate(_ delegate: (any AVAssetResourceLoaderDelegate)?, queue delegateQueue: dispatch_queue_t?)
```

## Parameters

- `delegate`: The delegate object to query when handling resource requests. You may specify `nil` if you want to clear the delegate object. The resource loader does not store a strong reference to the delegate object.
- `delegateQueue`: The dispatch queue on which to execute resource requests. If the `delegate` parameter is not `nil`, this parameter must also not be `nil` and must contain a valid dispatch queue. However, if `delegate` is `nil`, this parameter may also be `nil`.

  The resource loader maintains a strong reference to the dispatch queue you specify.

<a id="Discussion"></a>

## Discussion

You use this method to specify the object to use when handling resource requests and the dispatch queue on which to process those requests. Resource requests are processed synchronously on the dispatch queue you provide.

## See Also

### Accessing the delegate

- [delegate](delegate.md): The delegate object to use when handling resource requests.
- [AVAssetResourceLoaderDelegate](../avassetresourceloaderdelegate.md): Methods you can implement to handle resource-loading requests coming from a URL asset.
- [delegateQueue](delegatequeue.md): The dispatch queue to use when handling resource requests.

# setDelegate:queue: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Sets the delegate and dispatch queue to use with the resource loader.

## Declaration

```objectivec
- (void) setDelegate:(id<AVAssetResourceLoaderDelegate>) delegate queue:(dispatch_queue_t) delegateQueue;
```

## Parameters

- `delegate`: The delegate object to query when handling resource requests. You may specify `nil` if you want to clear the delegate object. The resource loader does not store a strong reference to the delegate object.
- `delegateQueue`: The dispatch queue on which to execute resource requests. If the `delegate` parameter is not `nil`, this parameter must also not be `nil` and must contain a valid dispatch queue. However, if `delegate` is `nil`, this parameter may also be `nil`.

  The resource loader maintains a strong reference to the dispatch queue you specify.

<a id="Discussion"></a>

## Discussion

You use this method to specify the object to use when handling resource requests and the dispatch queue on which to process those requests. Resource requests are processed synchronously on the dispatch queue you provide.

## See Also

### Accessing the delegate

- [delegate](delegate.md): The delegate object to use when handling resource requests.
- [AVAssetResourceLoaderDelegate](../avassetresourceloaderdelegate.md): Methods you can implement to handle resource-loading requests coming from a URL asset.
- [delegateQueue](delegatequeue.md): The dispatch queue to use when handling resource requests.
