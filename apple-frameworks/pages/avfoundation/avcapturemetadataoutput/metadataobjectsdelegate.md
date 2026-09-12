> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemetadataoutput/metadataobjectsdelegate](https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutput/metadataobjectsdelegate)

# metadataObjectsDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · tvOS 17.0+

The delegate of the capture metadata output object.

## Declaration

```swift
var metadataObjectsDelegate: (any AVCaptureMetadataOutputObjectsDelegate)? { get }
```

<a id="Discussion"></a>

## Discussion

The delegate object must conform to the [AVCaptureMetadataOutputObjectsDelegate](../avcapturemetadataoutputobjectsdelegate.md) protocol. The object in this property is used to process all metadata objects captured from the capture metadata output object’s connection.

To set the delegate object, you must use the [setMetadataObjectsDelegate(\_:queue:)](setmetadataobjectsdelegate%28__queue_%29.md) method.

## See Also

### Receiving captured metadata objects

- [setMetadataObjectsDelegate(\_:queue:)](setmetadataobjectsdelegate%28__queue_%29.md): Sets the delegate and dispatch queue to use handle callbacks.
- [metadataObjectsCallbackQueue](metadataobjectscallbackqueue.md): The dispatch queue on which to execute the delegate’s methods.
- [AVCaptureMetadataOutputObjectsDelegate](../avcapturemetadataoutputobjectsdelegate.md): Methods for receiving metadata produced by a metadata capture output.

# metadataObjectsDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · tvOS 17.0+

The delegate of the capture metadata output object.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<AVCaptureMetadataOutputObjectsDelegate> metadataObjectsDelegate;
```

<a id="Discussion"></a>

## Discussion

The delegate object must conform to the [AVCaptureMetadataOutputObjectsDelegate](../avcapturemetadataoutputobjectsdelegate.md) protocol. The object in this property is used to process all metadata objects captured from the capture metadata output object’s connection.

To set the delegate object, you must use the [setMetadataObjectsDelegate:queue:](setmetadataobjectsdelegate%28__queue_%29.md) method.

## See Also

### Receiving captured metadata objects

- [setMetadataObjectsDelegate:queue:](setmetadataobjectsdelegate%28__queue_%29.md): Sets the delegate and dispatch queue to use handle callbacks.
- [metadataObjectsCallbackQueue](metadataobjectscallbackqueue.md): The dispatch queue on which to execute the delegate’s methods.
- [AVCaptureMetadataOutputObjectsDelegate](../avcapturemetadataoutputobjectsdelegate.md): Methods for receiving metadata produced by a metadata capture output.
