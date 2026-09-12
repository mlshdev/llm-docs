> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedataoutputsynchronizer/dataoutputs](https://developer.apple.com/documentation/avfoundation/avcapturedataoutputsynchronizer/dataoutputs)

# dataOutputs (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The list of data outputs governed by this data output synchronizer.

## Declaration

```swift
var dataOutputs: [AVCaptureOutput] { get }
```

<a id="Discussion"></a>

## Discussion

This array is read-only. You configure the list of data outputs to synchronize only when you create an [AVCaptureDataOutputSynchronizer](../avcapturedataoutputsynchronizer.md) object.

> **Note**

>  The [AVCaptureDataOutputSynchronizer](../avcapturedataoutputsynchronizer.md) class overrides the delegate (and delegate dispatch queue) settings of all of its data outputs, but video and depth data outputs still honor their [alwaysDiscardsLateVideoFrames](../avcapturevideodataoutput/alwaysdiscardslatevideoframes.md) and [alwaysDiscardsLateDepthData](../avcapturedepthdataoutput/alwaysdiscardslatedepthdata.md) properties.

## See Also

### Configuring synchronized capture

- [init(dataOutputs:)](init%28dataoutputs_%29.md): Creates a capture output synchronizer for the specified capture outputs.

# dataOutputs (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The list of data outputs governed by this data output synchronizer.

## Declaration

```objectivec
@property (retain, readonly) NSArray<AVCaptureOutput *> * dataOutputs;
```

<a id="Discussion"></a>

## Discussion

This array is read-only. You configure the list of data outputs to synchronize only when you create an [AVCaptureDataOutputSynchronizer](../avcapturedataoutputsynchronizer.md) object.

> **Note**

>  The [AVCaptureDataOutputSynchronizer](../avcapturedataoutputsynchronizer.md) class overrides the delegate (and delegate dispatch queue) settings of all of its data outputs, but video and depth data outputs still honor their [alwaysDiscardsLateVideoFrames](../avcapturevideodataoutput/alwaysdiscardslatevideoframes.md) and [alwaysDiscardsLateDepthData](../avcapturedepthdataoutput/alwaysdiscardslatedepthdata.md) properties.

## See Also

### Configuring synchronized capture

- [initWithDataOutputs:](init%28dataoutputs_%29.md): Creates a capture output synchronizer for the specified capture outputs.
