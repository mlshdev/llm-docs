> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmsampleattachmentkey_notsync](https://developer.apple.com/documentation/coremedia/kcmsampleattachmentkey_notsync)

# kCMSampleAttachmentKey_NotSync (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Indicates whether the sample is a sync sample (type `CFBoolean`, default false).

## Declaration

```swift
let kCMSampleAttachmentKey_NotSync: CFString
```

<a id="Discussion"></a>

## Discussion

A sync sample, also known as a key frame or IDR (Instantaneous Decoding Refresh), can be decoded without requiring any previous samples to have been decoded. Samples following a sync sample also do not require samples prior to the sync sample to have been decoded. Samples are assumed to be sync samples by default — set the value for this key to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for samples which should not be treated as sync samples.

This attachment is read from and written to media files.

## See Also

### Sample Keys

- [kCMSampleAttachmentKey_PartialSync](kcmsampleattachmentkey_partialsync.md): Indicates whether the sample is a partial sync sample (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_DependsOnOthers](kcmsampleattachmentkey_dependsonothers.md): Indicates whether the sample depends on other samples for decoding (type `CFBoolean`).
- [kCMSampleAttachmentKey_IsDependedOnByOthers](kcmsampleattachmentkey_isdependedonbyothers.md): Indicates whether other samples depend on this sample for decoding (type `CFBoolean`).
- [kCMSampleAttachmentKey_DisplayImmediately](kcmsampleattachmentkey_displayimmediately.md): Indicates whether the sample should be displayed immediately (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_DoNotDisplay](kcmsampleattachmentkey_donotdisplay.md): Indicates whether the sample should be decoded but not displayed (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_EarlierDisplayTimesAllowed](kcmsampleattachmentkey_earlierdisplaytimesallowed.md): Indicates whether later samples may have earlier display times (type `CFBoolean`).
- [kCMSampleAttachmentKey_HasRedundantCoding](kcmsampleattachmentkey_hasredundantcoding.md): Indicates whether the sample has redundant coding (type `CFBoolean`).
- [kCMSampleAttachmentKey_PostDecodeProcessingMetadata](kcmsampleattachmentkey_postdecodeprocessingmetadata.md)

# kCMSampleAttachmentKey_NotSync (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Indicates whether the sample is a sync sample (type `CFBoolean`, default false).

## Declaration

```objectivec
extern CFStringRef const kCMSampleAttachmentKey_NotSync;
```

<a id="Discussion"></a>

## Discussion

A sync sample, also known as a key frame or IDR (Instantaneous Decoding Refresh), can be decoded without requiring any previous samples to have been decoded. Samples following a sync sample also do not require samples prior to the sync sample to have been decoded. Samples are assumed to be sync samples by default — set the value for this key to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for samples which should not be treated as sync samples.

This attachment is read from and written to media files.

## See Also

### Sample Keys

- [kCMSampleAttachmentKey_PartialSync](kcmsampleattachmentkey_partialsync.md): Indicates whether the sample is a partial sync sample (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_DependsOnOthers](kcmsampleattachmentkey_dependsonothers.md): Indicates whether the sample depends on other samples for decoding (type `CFBoolean`).
- [kCMSampleAttachmentKey_IsDependedOnByOthers](kcmsampleattachmentkey_isdependedonbyothers.md): Indicates whether other samples depend on this sample for decoding (type `CFBoolean`).
- [kCMSampleAttachmentKey_DisplayImmediately](kcmsampleattachmentkey_displayimmediately.md): Indicates whether the sample should be displayed immediately (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_DoNotDisplay](kcmsampleattachmentkey_donotdisplay.md): Indicates whether the sample should be decoded but not displayed (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_EarlierDisplayTimesAllowed](kcmsampleattachmentkey_earlierdisplaytimesallowed.md): Indicates whether later samples may have earlier display times (type `CFBoolean`).
- [kCMSampleAttachmentKey_HasRedundantCoding](kcmsampleattachmentkey_hasredundantcoding.md): Indicates whether the sample has redundant coding (type `CFBoolean`).
- [kCMSampleAttachmentKey_PostDecodeProcessingMetadata](kcmsampleattachmentkey_postdecodeprocessingmetadata.md)
