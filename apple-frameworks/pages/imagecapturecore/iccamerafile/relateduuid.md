> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccamerafile/relateduuid](https://developer.apple.com/documentation/imagecapturecore/iccamerafile/relateduuid)

# relatedUUID (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A related UUID correlating several images from an Apple device.

## Declaration

```swift
var relatedUUID: String? { get }
```

<a id="Discussion"></a>

## Discussion

This value is the same for both the image and video of a LivePhoto.

## See Also

### Inspecting a File’s Identity

- [groupUUID](groupuuid.md): The group `UUID` of the file.
- [originatingAssetID](originatingassetid.md): The originating asset ID of an `HEIF` or `HVEC` file.

# relatedUUID (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A related UUID correlating several images from an Apple device.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * relatedUUID;
```

<a id="Discussion"></a>

## Discussion

This value is the same for both the image and video of a LivePhoto.

## See Also

### Inspecting a File’s Identity

- [groupUUID](groupuuid.md): The group `UUID` of the file.
- [originatingAssetID](originatingassetid.md): The originating asset ID of an `HEIF` or `HVEC` file.
