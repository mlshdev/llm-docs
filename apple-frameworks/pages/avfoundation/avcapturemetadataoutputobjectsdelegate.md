> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemetadataoutputobjectsdelegate](https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutputobjectsdelegate)

# AVCaptureMetadataOutputObjectsDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · tvOS 17.0+

Methods for receiving metadata produced by a metadata capture output.

## Declaration

```swift
protocol AVCaptureMetadataOutputObjectsDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The `AVCaptureMetadataOutputObjectsDelegate` protocol must be adopted by the delegate of an [AVCaptureMetadataOutput](avcapturemetadataoutput.md) object. The single method in this protocol is optional. The method allows a delegate to respond when a capture metadata output object receives relevant metadata objects through its connection.

The [AVCaptureMetadataOutput](avcapturemetadataoutput.md) object calls the methods of the delegate object on the dispatch queue associated with its [metadataObjectsCallbackQueue](avcapturemetadataoutput/metadataobjectscallbackqueue.md) property.

## Topics

### Processing emitted metadata objects

- [metadataOutput(\_:didOutput:from:)](avcapturemetadataoutputobjectsdelegate/metadataoutput%28__didoutput_from_%29.md): Informs the delegate that the capture output object emitted new metadata objects.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Receiving captured metadata objects

- [setMetadataObjectsDelegate(\_:queue:)](avcapturemetadataoutput/setmetadataobjectsdelegate%28__queue_%29.md): Sets the delegate and dispatch queue to use handle callbacks.
- [metadataObjectsDelegate](avcapturemetadataoutput/metadataobjectsdelegate.md): The delegate of the capture metadata output object.
- [metadataObjectsCallbackQueue](avcapturemetadataoutput/metadataobjectscallbackqueue.md): The dispatch queue on which to execute the delegate’s methods.

# AVCaptureMetadataOutputObjectsDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · tvOS 17.0+

Methods for receiving metadata produced by a metadata capture output.

## Declaration

```objectivec
@protocol AVCaptureMetadataOutputObjectsDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The `AVCaptureMetadataOutputObjectsDelegate` protocol must be adopted by the delegate of an [AVCaptureMetadataOutput](avcapturemetadataoutput.md) object. The single method in this protocol is optional. The method allows a delegate to respond when a capture metadata output object receives relevant metadata objects through its connection.

The [AVCaptureMetadataOutput](avcapturemetadataoutput.md) object calls the methods of the delegate object on the dispatch queue associated with its [metadataObjectsCallbackQueue](avcapturemetadataoutput/metadataobjectscallbackqueue.md) property.

## Topics

### Processing emitted metadata objects

- [captureOutput:didOutputMetadataObjects:fromConnection:](avcapturemetadataoutputobjectsdelegate/metadataoutput%28__didoutput_from_%29.md): Informs the delegate that the capture output object emitted new metadata objects.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Receiving captured metadata objects

- [setMetadataObjectsDelegate:queue:](avcapturemetadataoutput/setmetadataobjectsdelegate%28__queue_%29.md): Sets the delegate and dispatch queue to use handle callbacks.
- [metadataObjectsDelegate](avcapturemetadataoutput/metadataobjectsdelegate.md): The delegate of the capture metadata output object.
- [metadataObjectsCallbackQueue](avcapturemetadataoutput/metadataobjectscallbackqueue.md): The dispatch queue on which to execute the delegate’s methods.
