> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureancillarydataencoder/currentuserdefinedancillarydata](https://developer.apple.com/documentation/avfoundation/avcaptureancillarydataencoder/currentuserdefinedancillarydata)

# currentUserDefinedAncillaryData (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

This is a representation of the user defined anacillary data.

## Declaration

```swift
var currentUserDefinedAncillaryData: [AVCaptureAncillaryDataUserKey : Any] { get }
```

<a id="discussion"></a>

## Discussion

Using SMPTE 291 and SMPTE RDD 18 standards for user-defined data, this property specifies the user-defined ancillary data to be sent with every frame in [AVCaptureBroadcastVideoOutput](../avcapturebroadcastvideooutput.md).  The dictionary will contain a NSUUID the [rdd18InstanceUID](../avcaptureancillarydatauserkey/rdd18instanceuid.md) key, a uint16_t for the [rdd18UDAMSetVersion](../avcaptureancillarydatauserkey/rdd18udamsetversion.md) key and a dictionary for the [rdd18UserItems](../avcaptureancillarydatauserkey/rdd18useritems.md). The [rdd18UserItems](../avcaptureancillarydatauserkey/rdd18useritems.md) will contain keys of the user tag and with the corresponding values.

To update the data please see the following methods:

- `setUserInstanceUID:userUdamVersion:` will update the [rdd18InstanceUID](../avcaptureancillarydatauserkey/rdd18instanceuid.md) and [rdd18UDAMSetVersion](../avcaptureancillarydatauserkey/rdd18udamsetversion.md) keys
- [setRDD18AncillaryData(\_:forTag:)](setrdd18ancillarydata%28__fortag_%29.md)  will update the [rdd18UserItems](../avcaptureancillarydatauserkey/rdd18useritems.md) key
- [setRDD18AncillaryDataString(\_:forTag:)](setrdd18ancillarydatastring%28__fortag_%29.md) will update the [rdd18UserItems](../avcaptureancillarydatauserkey/rdd18useritems.md) key

# currentUserDefinedAncillaryData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

This is a representation of the user defined anacillary data.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary<NSString *,id> * currentUserDefinedAncillaryData;
```

<a id="discussion"></a>

## Discussion

Using SMPTE 291 and SMPTE RDD 18 standards for user-defined data, this property specifies the user-defined ancillary data to be sent with every frame in [AVCaptureBroadcastVideoOutput](../avcapturebroadcastvideooutput.md).  The dictionary will contain a NSUUID the [AVCaptureAncillaryDataUserKeyRDD18InstanceUID](../avcaptureancillarydatauserkey/rdd18instanceuid.md) key, a uint16_t for the [AVCaptureAncillaryDataUserKeyRDD18UDAMSetVersion](../avcaptureancillarydatauserkey/rdd18udamsetversion.md) key and a dictionary for the [AVCaptureAncillaryDataUserKeyRDD18UserItems](../avcaptureancillarydatauserkey/rdd18useritems.md). The [AVCaptureAncillaryDataUserKeyRDD18UserItems](../avcaptureancillarydatauserkey/rdd18useritems.md) will contain keys of the user tag and with the corresponding values.

To update the data please see the following methods:

- `setUserInstanceUID:userUdamVersion:` will update the [AVCaptureAncillaryDataUserKeyRDD18InstanceUID](../avcaptureancillarydatauserkey/rdd18instanceuid.md) and [AVCaptureAncillaryDataUserKeyRDD18UDAMSetVersion](../avcaptureancillarydatauserkey/rdd18udamsetversion.md) keys
- [setRDD18AncillaryData:forTag:error:](setrdd18ancillarydata%28__fortag_%29.md)  will update the [AVCaptureAncillaryDataUserKeyRDD18UserItems](../avcaptureancillarydatauserkey/rdd18useritems.md) key
- [setRDD18AncillaryDataString:forTag:error:](setrdd18ancillarydatastring%28__fortag_%29.md) will update the [AVCaptureAncillaryDataUserKeyRDD18UserItems](../avcaptureancillarydatauserkey/rdd18useritems.md) key
