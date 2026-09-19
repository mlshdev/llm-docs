> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit

# VideoDriverKit

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Namespace  
**Availability:** DriverKit 27.0+ beta

A namespace that holds supporting types used by VideoDriverKit functions.

## Declaration

```objectivec
namespace VideoDriverKit;
```

## Topics

### Working with class identifiers

- [IOUserVideoClassID](videodriverkit/iouservideoclassid.md): Beta. Video class identifiers of an video object.

### Working with object identifiers

- [IOUserVideoObjectID](videodriverkit/iouservideoobjectid.md): Beta. A handle for a a specific video object.
- [kIOUserVideoObjectIDDriver](videodriverkit/kiouservideoobjectiddriver.md): Beta. The video object identifier of the driver.

### Working with object properties

- [IOUserVideoObjectPropertyElement](videodriverkit/iouservideoobjectpropertyelement.md): Beta. An integer that identifies, along with the property selector and scope, a specific piece of information about a video object.
- [IOUserVideoObjectPropertyElementMain](videodriverkit/iouservideoobjectpropertyelementmain.md): Beta. The value for properties that apply to the main element or to the entire scope.
- [IOUserVideoObjectPropertyScope](videodriverkit/iouservideoobjectpropertyscope.md): Beta. A four character code which, along with the selector and element, identifies a specific piece of information about a video object.
- [IOUserVideoObjectPropertySelector](videodriverkit/iouservideoobjectpropertyselector.md): Beta. A four character code which, along with the scope and element, specifies a specific piece of information about a video object.

### Working with video streams

- [IOUserVideoStreamBasicDescription](videodriverkit/iouservideostreambasicdescription.md): Beta. A structure that encapsulates all the information for describing the basic format properties of a stream of audio data.
- [IOUserVideoFormatID](videodriverkit/iouservideoformatid.md): Beta. Identifiers used for formats of audio data.
- [IOUserVideoFormatFlags](videodriverkit/iouservideoformatflags.md): Beta. Standard format flags for a basic description.
- [IOUserVideoStreamDirection](videodriverkit/iouservideostreamdirection.md): Beta. The direction of a video stream.
- [IOUserVideoStreamTerminalType](videodriverkit/iouservideostreamterminaltype.md): Beta. The terminal type of video stream.

### Working with I/O operations

- [IOUserVideoIOOperation](videodriverkit/iouservideoiooperation.md): Beta. The IO operation being called on the operation handler block.
- [IOUserVideoIOOperationBeginRead](videodriverkit/iouservideoiooperationbeginread.md): Beta. This operation is called just prior to reading data from the device’s stream buffers.
- [IOUserVideoIOOperationWriteEnd](videodriverkit/iouservideoiooperationwriteend.md): Beta. This operation is called just after writing data to the device’s stream buffers.
- [IOOperationHandler](videodriverkit/iooperationhandler.md): Beta. A block that tells the device to perform an IOUserVideoIOOperation.
- [IOUserVideoStartStopFlags](videodriverkit/iouservideostartstopflags.md): Beta. Flags used to indicate how I/O is starting or stopping.

### Working with custom properties

- [IOUserVideoCustomPropertyInfo](videodriverkit/iouservideocustompropertyinfo.md): Beta. A description of a a custom property that allow the Host to marshal the data between the Host and its clients.
- [IOUserVideoObjectPropertyAddress](videodriverkit/iouservideoobjectpropertyaddress.md): Beta. A data structure that contains all the three parts to identify a specific property, for easy transmission.
- [IOUserVideoCustomPropertyDataType](videodriverkit/iouservideocustompropertydatatype.md): Beta. Data qualifier types used for custom properties.

### Working with clock device behavior

- [IOUserVideoClockAlgorithm](videodriverkit/iouservideoclockalgorithm.md): Beta. Clock smoothing algorithm selectors.

### Working with channel layouts

- [IOUserVideoChannelLabel](videodriverkit/iouservideochannellabel.md): Beta. These constants are to set the preferred channel layout on video device.

### Working with transport types

- [IOUserVideoTransportType](videodriverkit/iouservideotransporttype.md): Beta. The transport type of a video stream.

### Working with transport states

- [IOUserVideoDeviceTransportState](videodriverkit/iouservideodevicetransportstate.md): Beta. The current transport state of the device.

### Working with configuration changes

- [IOUserVideoReservedConfigChangeAction](videodriverkit/iouservideoreservedconfigchangeaction.md): Beta. Reserved configuration change identifiers when changing object state that requires a configuration change.
