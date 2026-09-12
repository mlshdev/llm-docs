> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccamerafile/originatingassetid](https://developer.apple.com/documentation/imagecapturecore/iccamerafile/originatingassetid)

# originatingAssetID (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The originating asset ID of an `HEIF` or `HVEC` file.

## Declaration

```swift
var originatingAssetID: String? { get }
```

## See Also

### Inspecting a File’s Identity

- [groupUUID](groupuuid.md): The group `UUID` of the file.
- [relatedUUID](relateduuid.md): A related UUID correlating several images from an Apple device.

# originatingAssetID (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The originating asset ID of an `HEIF` or `HVEC` file.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * originatingAssetID;
```

## See Also

### Inspecting a File’s Identity

- [groupUUID](groupuuid.md): The group `UUID` of the file.
- [relatedUUID](relateduuid.md): A related UUID correlating several images from an Apple device.
