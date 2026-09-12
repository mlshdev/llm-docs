> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevice/mountpoint](https://developer.apple.com/documentation/imagecapturecore/iccameradevice/mountpoint)

# mountPoint (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

The file system mount point for a camera using the mass storage transport type.

## Declaration

```swift
var mountPoint: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property is set for cameras whose [transportType](../icdevice/transporttype.md) is [transportTypeMassStorage](../icdevicetransport/transporttypemassstorage.md).

# mountPoint (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

The file system mount point for a camera using the mass storage transport type.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * mountPoint;
```

<a id="Discussion"></a>

## Discussion

This property is set for cameras whose [transportType](../icdevice/transporttype.md) is [ICTransportTypeMassStorage](../icdevicetransport/transporttypemassstorage.md).
