> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcapturedescriptor/outputurl](https://developer.apple.com/documentation/metal/mtlcapturedescriptor/outputurl)

# outputURL (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A URL for a file to write the capture data into.

## Declaration

```swift
var outputURL: URL? { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `nil`. If you set [destination](destination.md) to [MTLCaptureDestination.gpuTraceDocument](../mtlcapturedestination/gputracedocument.md), you need to set this property to where you want the file to be written to.

## See Also

### Setting capture parameters

- [captureObject](captureobject.md): The instance whose contents should be captured.
- [destination](destination.md): The destination for any captured command data.

# outputURL (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A URL for a file to write the capture data into.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSURL * outputURL;
```

<a id="discussion"></a>

## Discussion

The default value is `nil`. If you set [destination](destination.md) to [MTLCaptureDestinationGPUTraceDocument](../mtlcapturedestination/gputracedocument.md), you need to set this property to where you want the file to be written to.

## See Also

### Setting capture parameters

- [captureObject](captureobject.md): The instance whose contents should be captured.
- [destination](destination.md): The destination for any captured command data.
