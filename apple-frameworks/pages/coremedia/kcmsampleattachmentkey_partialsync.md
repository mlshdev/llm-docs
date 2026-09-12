> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmsampleattachmentkey_partialsync](https://developer.apple.com/documentation/coremedia/kcmsampleattachmentkey_partialsync)

# kCMSampleAttachmentKey_PartialSync (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Indicates whether the sample is a partial sync sample (type `CFBoolean`, default false).

## Declaration

```swift
let kCMSampleAttachmentKey_PartialSync: CFString
```

<a id="Discussion"></a>

## Discussion

A partial sync sample can be decoded without requiring any previous samples to have been decoded. Samples following two consecutive partial sync samples also do not require samples prior to the pair to have been decoded. To treat a sample as a partial sync sample, set a value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for both this key and the [kCMSampleAttachmentKey_NotSync](kcmsampleattachmentkey_notsync.md) key.

This attachment is read from and written to media files.

## See Also

### Sample Keys

- [kCMSampleAttachmentKey_NotSync](kcmsampleattachmentkey_notsync.md): Indicates whether the sample is a sync sample (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_DependsOnOthers](kcmsampleattachmentkey_dependsonothers.md): Indicates whether the sample depends on other samples for decoding (type `CFBoolean`).
- [kCMSampleAttachmentKey_IsDependedOnByOthers](kcmsampleattachmentkey_isdependedonbyothers.md): Indicates whether other samples depend on this sample for decoding (type `CFBoolean`).
- [kCMSampleAttachmentKey_DisplayImmediately](kcmsampleattachmentkey_displayimmediately.md): Indicates whether the sample should be displayed immediately (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_DoNotDisplay](kcmsampleattachmentkey_donotdisplay.md): Indicates whether the sample should be decoded but not displayed (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_EarlierDisplayTimesAllowed](kcmsampleattachmentkey_earlierdisplaytimesallowed.md): Indicates whether later samples may have earlier display times (type `CFBoolean`).
- [kCMSampleAttachmentKey_HasRedundantCoding](kcmsampleattachmentkey_hasredundantcoding.md): Indicates whether the sample has redundant coding (type `CFBoolean`).
- [kCMSampleAttachmentKey_PostDecodeProcessingMetadata](kcmsampleattachmentkey_postdecodeprocessingmetadata.md)

# kCMSampleAttachmentKey_PartialSync (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Indicates whether the sample is a partial sync sample (type `CFBoolean`, default false).

## Declaration

```objectivec
extern CFStringRef const kCMSampleAttachmentKey_PartialSync;
```

<a id="Discussion"></a>

## Discussion

A partial sync sample can be decoded without requiring any previous samples to have been decoded. Samples following two consecutive partial sync samples also do not require samples prior to the pair to have been decoded. To treat a sample as a partial sync sample, set a value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) for both this key and the [kCMSampleAttachmentKey_NotSync](kcmsampleattachmentkey_notsync.md) key.

This attachment is read from and written to media files.

## See Also

### Sample Keys

- [kCMSampleAttachmentKey_NotSync](kcmsampleattachmentkey_notsync.md): Indicates whether the sample is a sync sample (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_DependsOnOthers](kcmsampleattachmentkey_dependsonothers.md): Indicates whether the sample depends on other samples for decoding (type `CFBoolean`).
- [kCMSampleAttachmentKey_IsDependedOnByOthers](kcmsampleattachmentkey_isdependedonbyothers.md): Indicates whether other samples depend on this sample for decoding (type `CFBoolean`).
- [kCMSampleAttachmentKey_DisplayImmediately](kcmsampleattachmentkey_displayimmediately.md): Indicates whether the sample should be displayed immediately (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_DoNotDisplay](kcmsampleattachmentkey_donotdisplay.md): Indicates whether the sample should be decoded but not displayed (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_EarlierDisplayTimesAllowed](kcmsampleattachmentkey_earlierdisplaytimesallowed.md): Indicates whether later samples may have earlier display times (type `CFBoolean`).
- [kCMSampleAttachmentKey_HasRedundantCoding](kcmsampleattachmentkey_hasredundantcoding.md): Indicates whether the sample has redundant coding (type `CFBoolean`).
- [kCMSampleAttachmentKey_PostDecodeProcessingMetadata](kcmsampleattachmentkey_postdecodeprocessingmetadata.md)
