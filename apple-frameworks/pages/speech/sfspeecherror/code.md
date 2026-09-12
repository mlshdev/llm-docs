> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeecherror/code](https://developer.apple.com/documentation/speech/sfspeecherror/code)

# SFSpeechError.Code (Swift)

**Framework:** Speech  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 18.0+ · visionOS 1.0+

Error codes that can be thrown under the Speech framework’s error domain.

## Declaration

```swift
enum Code
```

## Topics

### Audio input errors

- [audioDisordered](code/audiodisordered.md): The audio input time-code overlaps or precedes prior audio input.
- [SFSpeechError.Code.audioReadFailed](code/audioreadfailed.md): The audio source could not be read.

### Audio format errors

- [incompatibleAudioFormats](code/incompatibleaudioformats.md): The selected modules do not have an audio format in common or do not support an audio format.
- [unexpectedAudioFormat](code/unexpectedaudioformat.md): The audio input is in unexpected format.

### Asset errors

- [assetLocaleNotAllocated](code/assetlocalenotallocated.md): The asset locale has not been allocated, but module requires it.
- [cannotAllocateUnsupportedLocale](code/cannotallocateunsupportedlocale.md): The asset locale being requested is not supported by SpeechFramework.
- [noModel](code/nomodel.md): The selected locale/options does not have an appropriate model available or downloadable.
- [SFSpeechError.Code.timeout](code/timeout.md): The operation timed out.
- [tooManyAssetLocalesAllocated](code/toomanyassetlocalesallocated.md): The application has allocated too many locales.

### Custom language model errors

- [SFSpeechError.Code.malformedSupplementalModel](code/malformedsupplementalmodel.md): The custom language model file was malformed.
- [SFSpeechError.Code.missingParameter](code/missingparameter.md): A required parameter is missing/nil.
- [SFSpeechError.Code.undefinedTemplateClassName](code/undefinedtemplateclassname.md): The custom language model templates were malformed.

### Other errors

- [insufficientResources](code/insufficientresources.md): There are not sufficient resources available on-device to process the incoming transcription request.
- [SFSpeechError.Code.internalServiceError](code/internalserviceerror.md): There was an internal error.
- [moduleOutputFailed](code/moduleoutputfailed.md): The module’s result task failed.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

### Type Properties

- [cannotConfigureAudioSystem](code/cannotconfigureaudiosystem.md): The audio source could not be configured.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [SFSpeechErrorDomain](../sfspeecherrordomain.md)
- [SFSpeechError](../sfspeecherror.md)

# SFSpeechErrorCode (Objective-C)

**Framework:** Speech  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 18.0+ · visionOS 1.0+

Error codes that can be thrown under the Speech framework’s error domain.

## Declaration

```objectivec
enum SFSpeechErrorCode : NSInteger;
```

## Topics

### Audio input errors

- [SFSpeechErrorCodeAudioReadFailed](code/audioreadfailed.md): The audio source could not be read.

### Asset errors

- [SFSpeechErrorCodeTimeout](code/timeout.md): The operation timed out.

### Custom language model errors

- [SFSpeechErrorCodeMalformedSupplementalModel](code/malformedsupplementalmodel.md): The custom language model file was malformed.
- [SFSpeechErrorCodeMissingParameter](code/missingparameter.md): A required parameter is missing/nil.
- [SFSpeechErrorCodeUndefinedTemplateClassName](code/undefinedtemplateclassname.md): The custom language model templates were malformed.

### Other errors

- [SFSpeechErrorCodeInternalServiceError](code/internalserviceerror.md): There was an internal error.

## See Also

### Errors

- [SFSpeechErrorDomain](../sfspeecherrordomain.md)
