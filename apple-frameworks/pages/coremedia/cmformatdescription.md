> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescription](https://developer.apple.com/documentation/coremedia/cmformatdescription)

# CMFormatDescription (Swift)

**Framework:** Core Media  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

An object that describes a media format descriptor.

## Declaration

```swift
class CMFormatDescription
```

<a id="overview"></a>

## Overview

A `CMFormatDescription` object is an object that describes media types (audio, video, muxed, and so on).

## Topics

### Inspecting Format Descriptions

- [audioFormatList](cmformatdescription/audioformatlist.md): The audio format list items that describe the audio formats.
- [audioStreamBasicDescription](cmformatdescription/audiostreambasicdescription.md): The audio stream description.
- [audioChannelLayout](cmformatdescription/audiochannellayout.md): The audio channel layout.
- [dimensions](cmformatdescription/dimensions.md): The encoded pixels not including the pixel aspect ratio or clean aperture tags.
- [extensions](cmformatdescription/extensions-swift.property.md): A dictionary that contains all of the extensions.
- [frameDuration](cmformatdescription/frameduration.md): The duration of each frame.
- [frameQuanta](cmformatdescription/framequanta.md): The frames per second for the time code, or the frame per tick for counter mode.
- [identifiers](cmformatdescription/identifiers.md): An array of metadata identifiers.
- [magicCookie](cmformatdescription/magiccookie.md): A copy of the magic cookie, if any.
- [mediaSubType](cmformatdescription/mediasubtype-swift.property.md): The media subtype.
- [mediaType](cmformatdescription/mediatype-swift.property.md): The media type.
- [mostCompatibleFormat](cmformatdescription/mostcompatibleformat.md): The most compatible audio format list item.
- [nalUnitHeaderLength](cmformatdescription/nalunitheaderlength.md): The size, in bytes, of the unit length field in an AVC or HEVC video sample or parameter set sample.
- [parameterSets](cmformatdescription/parametersets.md): The parameter sets that an H.264 or HEVC format contains.
- [richestDecodableFormat](cmformatdescription/richestdecodableformat.md): The audio format list item the system validates.
- [timeCodeFlags](cmformatdescription/timecodeflags.md): The flags for the available time codes.
- [tagCollections](cmformatdescription/tagcollections.md): The tag collections associated with this media.
- [matchesTaggedBufferGroup(\_:)](cmformatdescription/matchestaggedbuffergroup%28__%29.md): Whether the format description matches a set of tagged buffers.

### Working with Audio Descriptions

- [withMagicCookie(\_:)](cmformatdescription/withmagiccookie%28__%29.md): Returns the magic cookie.

### Working with Video Descriptions

- [cleanAperture(originIsAtTopLeft:)](cmformatdescription/cleanaperture%28originisattopleft_%29.md): Returns the clean aperture.
- [matchesImageBuffer(\_:)](cmformatdescription/matchesimagebuffer%28__%29.md): Returns a Boolean value that indicates whether the format description matches an image buffer.
- [presentationDimensions(usePixelAspectRatio:useCleanAperture:)](cmformatdescription/presentationdimensions%28usepixelaspectratio_usecleanaperture_%29.md): Returns the dimensions to take the pixel aspect ratio or clean aperture into account.

### Working with Metadata Descriptions

- [keyWithLocalID(\_:)](cmformatdescription/keywithlocalid%28__%29.md): Returns the metadata for the local identifier you specify.

### Working with Text Descriptions

- [defaultStyle()](cmformatdescription/defaultstyle%28%29.md): Returns the default text style.
- [defaultTextBox(originIsAtTopLeft:heightOfTextTrack:)](cmformatdescription/defaulttextbox%28originisattopleft_heightoftexttrack_%29.md): Returns the default text box.
- [displayFlags()](cmformatdescription/displayflags%28%29.md): Returns the display mode flags for the text media.
- [fontName(localFontID:)](cmformatdescription/fontname%28localfontid_%29.md): Returns the font name for the local font identifier.
- [justification()](cmformatdescription/justification%28%29.md): Returns the horizontal and vertical justification.

### Comparing Format Descriptions

- [==(\_:\_:)](cmformatdescription/==%28____%29.md): Equality is derived from
- [equalTo(\_:equalityMask:)](cmformatdescription/equalto%28__equalitymask_%29.md): Evaluates equality for the parts of two audio format descriptions.
- [equalTo(\_:extensionKeysToIgnore:sampleDescriptionExtensionAtomKeysToIgnore:)](cmformatdescription/equalto%28__extensionkeystoignore_sampledescriptionextensionatomkeystoignore_%29.md): Evaluates equality for the parts of two audio format descriptions, ignoring the extensions you specify.

### Errors

- [CMFormatDescription.Error](cmformatdescription/error.md): A type that describes format description errors.

### Constants

- [extensionKeysCommonWithImageBuffers](cmformatdescription/extensionkeyscommonwithimagebuffers.md): A constant that represents keys you use with video format description extensions and image buffers.
- [typeID](cmformatdescription/typeid.md): A type identifier that corresponds to a description object.
- [CMFormatDescription.MediaType](cmformatdescription/mediatype-swift.struct.md): A type that describes format description media.
- [CMFormatDescription.MediaSubType](cmformatdescription/mediasubtype-swift.struct.md): A type that describes format description media subtypes.
- [CMFormatDescription.TimeCode](cmformatdescription/timecode.md): A type that describes format description time codes.
- [CMFormatDescription.EqualityMask](cmformatdescription/equalitymask.md): A type that describes format description equality masks.
- [CMFormatDescription.Extensions](cmformatdescription/extensions-swift.struct.md): A type that describes format description extensions.
- [CMFormatDescription.ParameterSetCollection](cmformatdescription/parametersetcollection.md): Collection of parameter sets in a video format description.

### Initializers

- [init(referencing:)](cmformatdescription/init%28referencing_%29.md)

### Type Aliases

- [CMFormatDescription.T](cmformatdescription/t.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Format Description Types

- [CMAudioFormatDescription](cmaudioformatdescription.md): A type you use to interact with audio format descriptions.
- [CMClosedCaptionFormatDescription](cmclosedcaptionformatdescription.md): A type you use to interact with closed caption format descriptions.
- [CMMetadataFormatDescription](cmmetadataformatdescription.md): A type you use to interact with metadata format descriptions.
- [CMMuxedFormatDescription](cmmuxedformatdescription.md): A type you use to interact with muxed format descriptions.
- [CMTextFormatDescription](cmtextformatdescription.md): A type you use to interact with text format descriptions.
- [CMTimeCodeFormatDescription](cmtimecodeformatdescription.md): A type you use to interact with time code format descriptions.
- [CMVideoFormatDescription](cmvideoformatdescription.md): A type you use to interact with video format descriptions.

# CMFormatDescriptionRef (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

An object that describes a media format descriptor.

## Declaration

```objectivec
typedef const struct opaqueCMFormatDescription * CMFormatDescriptionRef;
```

<a id="overview"></a>

## Overview

A `CMFormatDescription` object is an object that describes media types (audio, video, muxed, and so on).

## Topics

### Errors

- [kCMFormatDescriptionError_InvalidParameter](kcmformatdescriptionerror_invalidparameter.md): An error that indicates that the function recieves an empty value for a parameter it requires.
- [kCMFormatDescriptionError_AllocationFailed](kcmformatdescriptionerror_allocationfailed.md): An error that indicates when an allocation fails.
- [kCMFormatDescriptionError_ValueNotAvailable](kcmformatdescriptionerror_valuenotavailable.md): An error that indicates the format description doesn’t contain the value you request.

## See Also

### Format Description Types

- [CMAudioFormatDescriptionRef](cmaudioformatdescription.md): A type you use to interact with audio format descriptions.
- [CMClosedCaptionFormatDescriptionRef](cmclosedcaptionformatdescription.md): A type you use to interact with closed caption format descriptions.
- [CMMetadataFormatDescriptionRef](cmmetadataformatdescription.md): A type you use to interact with metadata format descriptions.
- [CMMuxedFormatDescriptionRef](cmmuxedformatdescription.md): A type you use to interact with muxed format descriptions.
- [CMTextFormatDescriptionRef](cmtextformatdescription.md): A type you use to interact with text format descriptions.
- [CMTimeCodeFormatDescriptionRef](cmtimecodeformatdescription.md): A type you use to interact with time code format descriptions.
- [CMVideoFormatDescriptionRef](cmvideoformatdescription.md): A type you use to interact with video format descriptions.
