> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccamerafile/groupuuid](https://developer.apple.com/documentation/imagecapturecore/iccamerafile/groupuuid)

# groupUUID (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The group `UUID` of the file.

## Declaration

```swift
var groupUUID: String? { get }
```

## See Also

### Inspecting a File’s Identity

- [relatedUUID](relateduuid.md): A related UUID correlating several images from an Apple device.
- [originatingAssetID](originatingassetid.md): The originating asset ID of an `HEIF` or `HVEC` file.

# groupUUID (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The group `UUID` of the file.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * groupUUID;
```

## See Also

### Inspecting a File’s Identity

- [relatedUUID](relateduuid.md): A related UUID correlating several images from an Apple device.
- [originatingAssetID](originatingassetid.md): The originating asset ID of an `HEIF` or `HVEC` file.
