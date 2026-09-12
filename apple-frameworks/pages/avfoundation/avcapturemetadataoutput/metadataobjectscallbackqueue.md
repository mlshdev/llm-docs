> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemetadataoutput/metadataobjectscallbackqueue](https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutput/metadataobjectscallbackqueue)

# metadataObjectsCallbackQueue (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · tvOS 17.0+

The dispatch queue on which to execute the delegate’s methods.

## Declaration

```swift
var metadataObjectsCallbackQueue: dispatch_queue_t? { get }
```

<a id="Discussion"></a>

## Discussion

To set the dispatch queue, you must use the [setMetadataObjectsDelegate(\_:queue:)](setmetadataobjectsdelegate%28__queue_%29.md) method.

## See Also

### Receiving captured metadata objects

- [setMetadataObjectsDelegate(\_:queue:)](setmetadataobjectsdelegate%28__queue_%29.md): Sets the delegate and dispatch queue to use handle callbacks.
- [metadataObjectsDelegate](metadataobjectsdelegate.md): The delegate of the capture metadata output object.
- [AVCaptureMetadataOutputObjectsDelegate](../avcapturemetadataoutputobjectsdelegate.md): Methods for receiving metadata produced by a metadata capture output.

# metadataObjectsCallbackQueue (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · tvOS 17.0+

The dispatch queue on which to execute the delegate’s methods.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) dispatch_queue_t metadataObjectsCallbackQueue;
```

<a id="Discussion"></a>

## Discussion

To set the dispatch queue, you must use the [setMetadataObjectsDelegate:queue:](setmetadataobjectsdelegate%28__queue_%29.md) method.

## See Also

### Receiving captured metadata objects

- [setMetadataObjectsDelegate:queue:](setmetadataobjectsdelegate%28__queue_%29.md): Sets the delegate and dispatch queue to use handle callbacks.
- [metadataObjectsDelegate](metadataobjectsdelegate.md): The delegate of the capture metadata output object.
- [AVCaptureMetadataOutputObjectsDelegate](../avcapturemetadataoutputobjectsdelegate.md): Methods for receiving metadata produced by a metadata capture output.
