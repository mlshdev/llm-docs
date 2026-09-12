> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureancillarydatauserkey](https://developer.apple.com/documentation/avfoundation/avcaptureancillarydatauserkey)

# AVCaptureAncillaryDataUserKey (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Clients may use an AVCaptureAncillaryDataUserKey to inspect the [currentUserDefinedAncillaryData](avcaptureancillarydataencoder/currentuserdefinedancillarydata.md).

## Declaration

```swift
struct AVCaptureAncillaryDataUserKey
```

## Topics

### Creating a user key

- [init(rawValue:)](avcaptureancillarydatauserkey/init%28rawvalue_%29.md)

### Type Properties

- [rdd18InstanceUID](avcaptureancillarydatauserkey/rdd18instanceuid.md): An AVCaptureAncillaryDataEncoder key corresponding with the optional RDD18 user defined metadata Instance UID
- [rdd18UDAMSetVersion](avcaptureancillarydatauserkey/rdd18udamsetversion.md): An AVCaptureAncillaryDataEncoder key corresponding with the optional RDD18 user defined metadata UDAM Set Version
- [rdd18UserItems](avcaptureancillarydatauserkey/rdd18useritems.md): An AVCaptureAncillaryDataEncoder key corresponding with RDD18 user defined metadata

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Broadcast video output

- [AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md): [AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md) is a subclass of [AVCaptureOutput](avcaptureoutput.md) that delivers broadcast-quality video and ancillary data through the device’s DisplayPort hardware interface (USB-C DP Alt Mode)
- [AVCaptureBroadcastVideoOutputDelegate](avcapturebroadcastvideooutputdelegate.md): Protocol for receiving broadcast video output events and data.
- [AVCaptureAncillaryDataEncoder](avcaptureancillarydataencoder.md)

# AVCaptureAncillaryDataUserKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Clients may use an AVCaptureAncillaryDataUserKey to inspect the [currentUserDefinedAncillaryData](avcaptureancillarydataencoder/currentuserdefinedancillarydata.md).

## Declaration

```objectivec
typedef NSString * AVCaptureAncillaryDataUserKey;
```

## See Also

### Broadcast video output

- [AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md): [AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md) is a subclass of [AVCaptureOutput](avcaptureoutput.md) that delivers broadcast-quality video and ancillary data through the device’s DisplayPort hardware interface (USB-C DP Alt Mode)
- [AVCaptureBroadcastVideoOutputDelegate](avcapturebroadcastvideooutputdelegate.md): Protocol for receiving broadcast video output events and data.
- [AVCaptureAncillaryDataEncoder](avcaptureancillarydataencoder.md)
