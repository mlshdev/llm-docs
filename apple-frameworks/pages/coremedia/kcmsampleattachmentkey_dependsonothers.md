> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmsampleattachmentkey_dependsonothers](https://developer.apple.com/documentation/coremedia/kcmsampleattachmentkey_dependsonothers)

# kCMSampleAttachmentKey_DependsOnOthers (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Indicates whether the sample depends on other samples for decoding (type `CFBoolean`).

## Declaration

```swift
let kCMSampleAttachmentKey_DependsOnOthers: CFString
```

<a id="Discussion"></a>

## Discussion

This key has no default value. If this key is not present, dependency information for the sample is unknown. A value of [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) indicates that the sample does not depend on other samples (for example, an I frame).  A value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) indicates that the sample does depend on other samples (for example, a P or B frame).

This attachment is read from and written to media files.

## See Also

### Sample Keys

- [kCMSampleAttachmentKey_NotSync](kcmsampleattachmentkey_notsync.md): Indicates whether the sample is a sync sample (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_PartialSync](kcmsampleattachmentkey_partialsync.md): Indicates whether the sample is a partial sync sample (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_IsDependedOnByOthers](kcmsampleattachmentkey_isdependedonbyothers.md): Indicates whether other samples depend on this sample for decoding (type `CFBoolean`).
- [kCMSampleAttachmentKey_DisplayImmediately](kcmsampleattachmentkey_displayimmediately.md): Indicates whether the sample should be displayed immediately (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_DoNotDisplay](kcmsampleattachmentkey_donotdisplay.md): Indicates whether the sample should be decoded but not displayed (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_EarlierDisplayTimesAllowed](kcmsampleattachmentkey_earlierdisplaytimesallowed.md): Indicates whether later samples may have earlier display times (type `CFBoolean`).
- [kCMSampleAttachmentKey_HasRedundantCoding](kcmsampleattachmentkey_hasredundantcoding.md): Indicates whether the sample has redundant coding (type `CFBoolean`).
- [kCMSampleAttachmentKey_PostDecodeProcessingMetadata](kcmsampleattachmentkey_postdecodeprocessingmetadata.md)

# kCMSampleAttachmentKey_DependsOnOthers (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Indicates whether the sample depends on other samples for decoding (type `CFBoolean`).

## Declaration

```objectivec
extern CFStringRef const kCMSampleAttachmentKey_DependsOnOthers;
```

<a id="Discussion"></a>

## Discussion

This key has no default value. If this key is not present, dependency information for the sample is unknown. A value of [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) indicates that the sample does not depend on other samples (for example, an I frame).  A value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) indicates that the sample does depend on other samples (for example, a P or B frame).

This attachment is read from and written to media files.

## See Also

### Sample Keys

- [kCMSampleAttachmentKey_NotSync](kcmsampleattachmentkey_notsync.md): Indicates whether the sample is a sync sample (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_PartialSync](kcmsampleattachmentkey_partialsync.md): Indicates whether the sample is a partial sync sample (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_IsDependedOnByOthers](kcmsampleattachmentkey_isdependedonbyothers.md): Indicates whether other samples depend on this sample for decoding (type `CFBoolean`).
- [kCMSampleAttachmentKey_DisplayImmediately](kcmsampleattachmentkey_displayimmediately.md): Indicates whether the sample should be displayed immediately (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_DoNotDisplay](kcmsampleattachmentkey_donotdisplay.md): Indicates whether the sample should be decoded but not displayed (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_EarlierDisplayTimesAllowed](kcmsampleattachmentkey_earlierdisplaytimesallowed.md): Indicates whether later samples may have earlier display times (type `CFBoolean`).
- [kCMSampleAttachmentKey_HasRedundantCoding](kcmsampleattachmentkey_hasredundantcoding.md): Indicates whether the sample has redundant coding (type `CFBoolean`).
- [kCMSampleAttachmentKey_PostDecodeProcessingMetadata](kcmsampleattachmentkey_postdecodeprocessingmetadata.md)
