> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmsampleattachmentkey_displayimmediately](https://developer.apple.com/documentation/coremedia/kcmsampleattachmentkey_displayimmediately)

# kCMSampleAttachmentKey_DisplayImmediately (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Indicates whether the sample should be displayed immediately (type `CFBoolean`, default false).

## Declaration

```swift
let kCMSampleAttachmentKey_DisplayImmediately: CFString
```

<a id="Discussion"></a>

## Discussion

If this key is present, the sample should be displayed as soon as possible rather than according to its presentation timestamp. Use this attachment at run time to request this behavior from a display pipeline such as the [AVSampleBufferDisplayLayer](../avfoundation/avsamplebufferdisplaylayer.md) class.

This attachment is not written to media files.

## See Also

### Sample Keys

- [kCMSampleAttachmentKey_NotSync](kcmsampleattachmentkey_notsync.md): Indicates whether the sample is a sync sample (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_PartialSync](kcmsampleattachmentkey_partialsync.md): Indicates whether the sample is a partial sync sample (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_DependsOnOthers](kcmsampleattachmentkey_dependsonothers.md): Indicates whether the sample depends on other samples for decoding (type `CFBoolean`).
- [kCMSampleAttachmentKey_IsDependedOnByOthers](kcmsampleattachmentkey_isdependedonbyothers.md): Indicates whether other samples depend on this sample for decoding (type `CFBoolean`).
- [kCMSampleAttachmentKey_DoNotDisplay](kcmsampleattachmentkey_donotdisplay.md): Indicates whether the sample should be decoded but not displayed (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_EarlierDisplayTimesAllowed](kcmsampleattachmentkey_earlierdisplaytimesallowed.md): Indicates whether later samples may have earlier display times (type `CFBoolean`).
- [kCMSampleAttachmentKey_HasRedundantCoding](kcmsampleattachmentkey_hasredundantcoding.md): Indicates whether the sample has redundant coding (type `CFBoolean`).
- [kCMSampleAttachmentKey_PostDecodeProcessingMetadata](kcmsampleattachmentkey_postdecodeprocessingmetadata.md)

# kCMSampleAttachmentKey_DisplayImmediately (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Indicates whether the sample should be displayed immediately (type `CFBoolean`, default false).

## Declaration

```objectivec
extern CFStringRef const kCMSampleAttachmentKey_DisplayImmediately;
```

<a id="Discussion"></a>

## Discussion

If this key is present, the sample should be displayed as soon as possible rather than according to its presentation timestamp. Use this attachment at run time to request this behavior from a display pipeline such as the [AVSampleBufferDisplayLayer](../avfoundation/avsamplebufferdisplaylayer.md) class.

This attachment is not written to media files.

## See Also

### Sample Keys

- [kCMSampleAttachmentKey_NotSync](kcmsampleattachmentkey_notsync.md): Indicates whether the sample is a sync sample (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_PartialSync](kcmsampleattachmentkey_partialsync.md): Indicates whether the sample is a partial sync sample (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_DependsOnOthers](kcmsampleattachmentkey_dependsonothers.md): Indicates whether the sample depends on other samples for decoding (type `CFBoolean`).
- [kCMSampleAttachmentKey_IsDependedOnByOthers](kcmsampleattachmentkey_isdependedonbyothers.md): Indicates whether other samples depend on this sample for decoding (type `CFBoolean`).
- [kCMSampleAttachmentKey_DoNotDisplay](kcmsampleattachmentkey_donotdisplay.md): Indicates whether the sample should be decoded but not displayed (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_EarlierDisplayTimesAllowed](kcmsampleattachmentkey_earlierdisplaytimesallowed.md): Indicates whether later samples may have earlier display times (type `CFBoolean`).
- [kCMSampleAttachmentKey_HasRedundantCoding](kcmsampleattachmentkey_hasredundantcoding.md): Indicates whether the sample has redundant coding (type `CFBoolean`).
- [kCMSampleAttachmentKey_PostDecodeProcessingMetadata](kcmsampleattachmentkey_postdecodeprocessingmetadata.md)
