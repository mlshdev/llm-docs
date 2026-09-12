> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemetadataoutputobjectsdelegate/metadataoutput(_:didoutput:from:)](https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutputobjectsdelegate/metadataoutput(_:didoutput:from:))

# metadataOutput(\_:didOutput:from:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · tvOS 17.0+

Informs the delegate that the capture output object emitted new metadata objects.

## Declaration

```swift
optional func metadataOutput(_ output: AVCaptureMetadataOutput, didOutput metadataObjects: [AVMetadataObject], from connection: AVCaptureConnection)
```

## Parameters

- `output`: The [AVCaptureMetadataOutput](../avcapturemetadataoutput.md) object that captured and emitted the metadata objects.
- `metadataObjects`: An array of [AVMetadataObject](../avmetadataobject.md) instances representing the newly emitted metadata. Because [AVMetadataObject](../avmetadataobject.md) is an abstract class, the objects in this array are always instances of a concrete subclass.
- `connection`: The capture connection through which the objects were emitted.

<a id="Discussion"></a>

## Discussion

The [AVCaptureMetadataOutput](../avcapturemetadataoutput.md) object emits only metadata objects whose types are included in its [metadataObjectTypes](../avcapturemetadataoutput/metadataobjecttypes.md) property. The delegate implements this method to perform additional processing on metadata objects as they become available. If you plan to use metadata objects outside the scope of this method, you must store strong references to them and remove those references when the objects are no longer required.

This method is executed on the dispatch queue specified by the [metadataObjectsCallbackQueue](../avcapturemetadataoutput/metadataobjectscallbackqueue.md) property of the capture metadata output object. Because this method may be called frequently, your implementation should be efficient to prevent capture performance problems, including dropped metadata objects.

# captureOutput:didOutputMetadataObjects:fromConnection: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · tvOS 17.0+

Informs the delegate that the capture output object emitted new metadata objects.

## Declaration

```objectivec
- (void) captureOutput:(AVCaptureOutput *) output didOutputMetadataObjects:(NSArray<__kindof AVMetadataObject *> *) metadataObjects fromConnection:(AVCaptureConnection *) connection;
```

## Parameters

- `output`: The [AVCaptureMetadataOutput](../avcapturemetadataoutput.md) object that captured and emitted the metadata objects.
- `metadataObjects`: An array of [AVMetadataObject](../avmetadataobject.md) instances representing the newly emitted metadata. Because [AVMetadataObject](../avmetadataobject.md) is an abstract class, the objects in this array are always instances of a concrete subclass.
- `connection`: The capture connection through which the objects were emitted.

<a id="Discussion"></a>

## Discussion

The [AVCaptureMetadataOutput](../avcapturemetadataoutput.md) object emits only metadata objects whose types are included in its [metadataObjectTypes](../avcapturemetadataoutput/metadataobjecttypes.md) property. The delegate implements this method to perform additional processing on metadata objects as they become available. If you plan to use metadata objects outside the scope of this method, you must store strong references to them and remove those references when the objects are no longer required.

This method is executed on the dispatch queue specified by the [metadataObjectsCallbackQueue](../avcapturemetadataoutput/metadataobjectscallbackqueue.md) property of the capture metadata output object. Because this method may be called frequently, your implementation should be efficient to prevent capture performance problems, including dropped metadata objects.
