> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertydngcfaplanecolor](https://developer.apple.com/documentation/imageio/kcgimagepropertydngcfaplanecolor)

# kCGImagePropertyDNGCFAPlaneColor (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A mapping between the values in the CFA pattern tag and the plane numbers in linear raw space.

## Declaration

```swift
let kCGImagePropertyDNGCFAPlaneColor: CFString
```

## See Also

### RAW Data

- [kCGImagePropertyDNGOriginalRawFileName](kcgimagepropertydngoriginalrawfilename.md): The file name of the original raw file.
- [kCGImagePropertyDNGOriginalRawFileData](kcgimagepropertydngoriginalrawfiledata.md): The compressed contents of the original raw file.
- [kCGImagePropertyDNGNoiseReductionApplied](kcgimagepropertydngnoisereductionapplied.md): The amount of noise reduction applied to the raw data on a scale of 0.0 to 1.0.
- [kCGImagePropertyDNGNewRawImageDigest](kcgimagepropertydngnewrawimagedigest.md): An MD5 digest of the raw image data.
- [kCGImagePropertyDNGOriginalRawFileDigest](kcgimagepropertydngoriginalrawfiledigest.md): An MD5 digest of the data stored for the original raw file data.
- [kCGImagePropertyDNGRawImageDigest](kcgimagepropertydngrawimagedigest.md): A modified MD5 digest of the raw image data.
- [kCGImagePropertyDNGOriginalDefaultFinalSize](kcgimagepropertydngoriginaldefaultfinalsize.md): THe default final size of the larger original file that was the source of this proxy.
- [kCGImagePropertyDNGOriginalBestQualityFinalSize](kcgimagepropertydngoriginalbestqualityfinalsize.md): The best-quality final size of the larger original file that was the source of this proxy.
- [kCGImagePropertyDNGOriginalDefaultCropSize](kcgimagepropertydngoriginaldefaultcropsize.md): The default crop size of the larger original file that was the source of this proxy.
- [kCGImagePropertyDNGRawToPreviewGain](kcgimagepropertydngrawtopreviewgain.md): The gain between the main raw IFD and the preview IFD that contains this tag.
- [kCGImagePropertyDNGNoiseProfile](kcgimagepropertydngnoiseprofile.md): The amount of noise in the raw image.
- [kCGImagePropertyDNGCFALayout](kcgimagepropertydngcfalayout.md): The spatial layout of the CFA.
- [kCGImagePropertyDNGOpcodeList1](kcgimagepropertydngopcodelist1.md): The list of opcodes to apply to the raw image, as read directly from the file.
- [kCGImagePropertyDNGOpcodeList2](kcgimagepropertydngopcodelist2.md): THe list of opcodes to apply to the raw image, after mapping it to linear reference values.
- [kCGImagePropertyDNGOpcodeList3](kcgimagepropertydngopcodelist3.md): The list of opcodes to apply to the raw image, after demosaicing it.

# kCGImagePropertyDNGCFAPlaneColor (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A mapping between the values in the CFA pattern tag and the plane numbers in linear raw space.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyDNGCFAPlaneColor;
```

## See Also

### RAW Data

- [kCGImagePropertyDNGOriginalRawFileName](kcgimagepropertydngoriginalrawfilename.md): The file name of the original raw file.
- [kCGImagePropertyDNGOriginalRawFileData](kcgimagepropertydngoriginalrawfiledata.md): The compressed contents of the original raw file.
- [kCGImagePropertyDNGNoiseReductionApplied](kcgimagepropertydngnoisereductionapplied.md): The amount of noise reduction applied to the raw data on a scale of 0.0 to 1.0.
- [kCGImagePropertyDNGNewRawImageDigest](kcgimagepropertydngnewrawimagedigest.md): An MD5 digest of the raw image data.
- [kCGImagePropertyDNGOriginalRawFileDigest](kcgimagepropertydngoriginalrawfiledigest.md): An MD5 digest of the data stored for the original raw file data.
- [kCGImagePropertyDNGRawImageDigest](kcgimagepropertydngrawimagedigest.md): A modified MD5 digest of the raw image data.
- [kCGImagePropertyDNGOriginalDefaultFinalSize](kcgimagepropertydngoriginaldefaultfinalsize.md): THe default final size of the larger original file that was the source of this proxy.
- [kCGImagePropertyDNGOriginalBestQualityFinalSize](kcgimagepropertydngoriginalbestqualityfinalsize.md): The best-quality final size of the larger original file that was the source of this proxy.
- [kCGImagePropertyDNGOriginalDefaultCropSize](kcgimagepropertydngoriginaldefaultcropsize.md): The default crop size of the larger original file that was the source of this proxy.
- [kCGImagePropertyDNGRawToPreviewGain](kcgimagepropertydngrawtopreviewgain.md): The gain between the main raw IFD and the preview IFD that contains this tag.
- [kCGImagePropertyDNGNoiseProfile](kcgimagepropertydngnoiseprofile.md): The amount of noise in the raw image.
- [kCGImagePropertyDNGCFALayout](kcgimagepropertydngcfalayout.md): The spatial layout of the CFA.
- [kCGImagePropertyDNGOpcodeList1](kcgimagepropertydngopcodelist1.md): The list of opcodes to apply to the raw image, as read directly from the file.
- [kCGImagePropertyDNGOpcodeList2](kcgimagepropertydngopcodelist2.md): THe list of opcodes to apply to the raw image, after mapping it to linear reference values.
- [kCGImagePropertyDNGOpcodeList3](kcgimagepropertydngopcodelist3.md): The list of opcodes to apply to the raw image, after demosaicing it.
