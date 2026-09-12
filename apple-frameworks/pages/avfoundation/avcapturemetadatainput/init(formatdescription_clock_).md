> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemetadatainput/init(formatdescription:clock:)](https://developer.apple.com/documentation/avfoundation/avcapturemetadatainput/init(formatdescription:clock:))

# init(formatDescription:clock:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Creates capture metadata input to provide timed groups to a capture session.

## Declaration

```swift
init(formatDescription desc: CMMetadataFormatDescription, clock: CMClock)
```

## Parameters

- `desc`: A [CMFormatDescription](../../coremedia/cmformatdescription.md) that defines the metadata to be supplied by the client. Throws [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) if `NULL` is passed.
- `clock`: A [CMClock](../../coremedia/cmclock.md) that provides the timebase for the supplied samples. Throws [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) if `NULL` is passed.

# initWithFormatDescription:clock: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Creates capture metadata input to provide timed groups to a capture session.

## Declaration

```objectivec
- (instancetype) initWithFormatDescription:(CMMetadataFormatDescriptionRef) desc clock:(CMClockRef) clock;
```

## Parameters

- `desc`: A [CMFormatDescriptionRef](../../coremedia/cmformatdescription.md) that defines the metadata to be supplied by the client. Throws [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) if `NULL` is passed.
- `clock`: A [CMClockRef](../../coremedia/cmclock.md) that provides the timebase for the supplied samples. Throws [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) if `NULL` is passed.

## See Also

### Creating metadata input

- [metadataInputWithFormatDescription:clock:](metadatainputwithformatdescription_clock_.md): Returns a metadata input instance that allows clients to provide timed metadata groups to a capture session.
