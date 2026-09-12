> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemetadatainput/metadatainputwithformatdescription:clock:](https://developer.apple.com/documentation/avfoundation/avcapturemetadatainput/metadatainputwithformatdescription:clock:)

# metadataInputWithFormatDescription:clock:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Returns a metadata input instance that allows clients to provide timed metadata groups to a capture session.

## Declaration

```objectivec
+ (instancetype) metadataInputWithFormatDescription:(CMMetadataFormatDescriptionRef) desc clock:(CMClockRef) clock;
```

## Parameters

- `desc`: A [CMFormatDescriptionRef](../../coremedia/cmformatdescription.md) that defines the metadata to be supplied by the client. Throws [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) if `NULL` is passed.
- `clock`: A [CMClockRef](../../coremedia/cmclock.md) that provides the timebase for the supplied samples. Throws [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) if `NULL` is passed.

## See Also

### Creating metadata input

- [initWithFormatDescription:clock:](init%28formatdescription_clock_%29.md): Creates capture metadata input to provide timed groups to a capture session.
