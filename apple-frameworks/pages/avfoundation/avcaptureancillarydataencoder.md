> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureancillarydataencoder](https://developer.apple.com/documentation/avfoundation/avcaptureancillarydataencoder)

# AVCaptureAncillaryDataEncoder (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

## Declaration

```swift
class AVCaptureAncillaryDataEncoder
```

<a id="inspecting-the-user-defined-data"></a>

### Inspecting the user defined data

- [currentUserDefinedAncillaryData](avcaptureancillarydataencoder/currentuserdefinedancillarydata.md)

## Topics

### Instance Properties

- [currentUserDefinedAncillaryData](avcaptureancillarydataencoder/currentuserdefinedancillarydata.md): This is a representation of the user defined anacillary data.
- [isEnabled](avcaptureancillarydataencoder/isenabled.md): Indicates whether ancillary data should be encoded and transmitted.
- [userDefinedAncillaryDataSizeRemaining](avcaptureancillarydataencoder/userdefinedancillarydatasizeremaining.md): Allows users to track how much data in bytes can be added to the userDefinedAncillaryData.

### Instance Methods

- [removeRDD18AncillaryData(forTag:)](avcaptureancillarydataencoder/removerdd18ancillarydata%28fortag_%29.md): Allows the user to remove the ancillary data associated with the tag.
- [setRDD18AncillaryData(\_:forTag:)](avcaptureancillarydataencoder/setrdd18ancillarydata%28__fortag_%29.md): Allows the user to add their own data to be encoded and transmitted using SMPTE RDD 18 standards.
- [setRDD18AncillaryDataString(\_:forTag:)](avcaptureancillarydataencoder/setrdd18ancillarydatastring%28__fortag_%29.md): Allows the user to add their own string to be encoded as data and transmitted using SMPTE RDD 18 standards.
- [setUserInstanceUID(\_:forUserUDAMVersion:)](avcaptureancillarydataencoder/setuserinstanceuid%28__foruserudamversion_%29.md): Set the UID and Version number for the user data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Related Documentation

- [AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md): [AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md) is a subclass of [AVCaptureOutput](avcaptureoutput.md) that delivers broadcast-quality video and ancillary data through the device’s DisplayPort hardware interface (USB-C DP Alt Mode)

### Broadcast video output

- [AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md): [AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md) is a subclass of [AVCaptureOutput](avcaptureoutput.md) that delivers broadcast-quality video and ancillary data through the device’s DisplayPort hardware interface (USB-C DP Alt Mode)
- [AVCaptureBroadcastVideoOutputDelegate](avcapturebroadcastvideooutputdelegate.md): Protocol for receiving broadcast video output events and data.
- [AVCaptureAncillaryDataUserKey](avcaptureancillarydatauserkey.md): Clients may use an AVCaptureAncillaryDataUserKey to inspect the [currentUserDefinedAncillaryData](avcaptureancillarydataencoder/currentuserdefinedancillarydata.md).

# AVCaptureAncillaryDataEncoder (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

## Declaration

```objectivec
@interface AVCaptureAncillaryDataEncoder : NSObject
```

<a id="inspecting-the-user-defined-data"></a>

### Inspecting the user defined data

- [currentUserDefinedAncillaryData](avcaptureancillarydataencoder/currentuserdefinedancillarydata.md)

## Topics

### Instance Properties

- [currentUserDefinedAncillaryData](avcaptureancillarydataencoder/currentuserdefinedancillarydata.md): This is a representation of the user defined anacillary data.
- [enabled](avcaptureancillarydataencoder/isenabled.md): Indicates whether ancillary data should be encoded and transmitted.
- [userDefinedAncillaryDataSizeRemaining](avcaptureancillarydataencoder/userdefinedancillarydatasizeremaining.md): Allows users to track how much data in bytes can be added to the userDefinedAncillaryData.

### Instance Methods

- [removeRDD18AncillaryDataForTag:](avcaptureancillarydataencoder/removerdd18ancillarydata%28fortag_%29.md): Allows the user to remove the ancillary data associated with the tag.
- [setRDD18AncillaryData:forTag:error:](avcaptureancillarydataencoder/setrdd18ancillarydata%28__fortag_%29.md): Allows the user to add their own data to be encoded and transmitted using SMPTE RDD 18 standards.
- [setRDD18AncillaryDataString:forTag:error:](avcaptureancillarydataencoder/setrdd18ancillarydatastring%28__fortag_%29.md): Allows the user to add their own string to be encoded as data and transmitted using SMPTE RDD 18 standards.
- [setUserInstanceUID:forUserUDAMVersion:](avcaptureancillarydataencoder/setuserinstanceuid%28__foruserudamversion_%29.md): Set the UID and Version number for the user data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Related Documentation

- [AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md): [AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md) is a subclass of [AVCaptureOutput](avcaptureoutput.md) that delivers broadcast-quality video and ancillary data through the device’s DisplayPort hardware interface (USB-C DP Alt Mode)

### Broadcast video output

- [AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md): [AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md) is a subclass of [AVCaptureOutput](avcaptureoutput.md) that delivers broadcast-quality video and ancillary data through the device’s DisplayPort hardware interface (USB-C DP Alt Mode)
- [AVCaptureBroadcastVideoOutputDelegate](avcapturebroadcastvideooutputdelegate.md): Protocol for receiving broadcast video output events and data.
- [AVCaptureAncillaryDataUserKey](avcaptureancillarydatauserkey.md): Clients may use an AVCaptureAncillaryDataUserKey to inspect the [currentUserDefinedAncillaryData](avcaptureancillarydataencoder/currentuserdefinedancillarydata.md).
