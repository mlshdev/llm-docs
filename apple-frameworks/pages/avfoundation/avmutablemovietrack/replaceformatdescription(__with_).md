> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/replaceformatdescription(_:with:)](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/replaceformatdescription(_:with:))

# replaceFormatDescription(\_:with:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 6.0+

Replaces the track’s format description with a new format description.

## Declaration

```swift
func replaceFormatDescription(_ formatDescription: CMFormatDescription, with newFormatDescription: CMFormatDescription)
```

## Parameters

- `formatDescription`: The [CMFormatDescription](../../coremedia/cmformatdescription.md) object to be replaced.
- `newFormatDescription`: The [CMFormatDescription](../../coremedia/cmformatdescription.md) object to replacing the specified format description.

<a id="Discussion"></a>

## Discussion

Use this method to change a track’s format descriptions, such as adding format description extensions to a format description or changing the audio channel layout of an audio track. Format description can have extensions of type [kCMFormatDescriptionExtension_VerbatimSampleDescription](../../coremedia/kcmformatdescriptionextension_verbatimsampledescription.md) and [kCMFormatDescriptionExtension_VerbatimISOSampleEntry](../../coremedia/kcmformatdescriptionextension_verbatimisosampleentry.md). If you modify a copy of a format description, delete those extensions from the copy or your changes might be ignored.

## See Also

### Changing format descriptions

- [formatDescriptions](formatdescriptions.md): The format descriptions of the media samples that a track references.

# replaceFormatDescription:withFormatDescription: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 6.0+

Replaces the track’s format description with a new format description.

## Declaration

```objectivec
- (void) replaceFormatDescription:(CMFormatDescriptionRef) formatDescription withFormatDescription:(CMFormatDescriptionRef) newFormatDescription;
```

## Parameters

- `formatDescription`: The [CMFormatDescriptionRef](../../coremedia/cmformatdescription.md) object to be replaced.
- `newFormatDescription`: The [CMFormatDescriptionRef](../../coremedia/cmformatdescription.md) object to replacing the specified format description.

<a id="Discussion"></a>

## Discussion

Use this method to change a track’s format descriptions, such as adding format description extensions to a format description or changing the audio channel layout of an audio track. Format description can have extensions of type [kCMFormatDescriptionExtension_VerbatimSampleDescription](../../coremedia/kcmformatdescriptionextension_verbatimsampledescription.md) and [kCMFormatDescriptionExtension_VerbatimISOSampleEntry](../../coremedia/kcmformatdescriptionextension_verbatimisosampleentry.md). If you modify a copy of a format description, delete those extensions from the copy or your changes might be ignored.
