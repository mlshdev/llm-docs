> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct/hdr10plusperframedata](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct/hdr10plusperframedata)

# hdr10PlusPerFrameData

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

HDR10+ per frame metadata.

## Declaration

```swift
var hdr10PlusPerFrameData: Data? { get set }
```

<a id="discussion"></a>

## Discussion

The value should contain HDR10+ metadata within an User Data Registered ITU-T T-35 SEI message (see ISO/IEC 23008-2-2020 section D.3.6) as little endian in the Data. This attachment will override any HDR10+ metadata stored within the compressed data. The data should start with the field `itu_t_t35_country_code` with the value `0xb5`.
