> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/audiofeatureprint](https://developer.apple.com/documentation/createmlcomponents/audiofeatureprint)

# AudioFeaturePrint

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A stream transformer that extracts audio features from audio buffers.

## Declaration

```swift
struct AudioFeaturePrint
```

## Topics

### Creating a transformer

- [init(windowDuration:overlapFactor:)](audiofeatureprint/init%28windowduration_overlapfactor_%29.md): Creates an audio feature print feature extractor.

### Getting the properties

- [overlapFactor](audiofeatureprint/overlapfactor.md): The overlap factor of the extractor.
- [windowDuration](audiofeatureprint/windowduration.md): The window duration of the extractor.

### Performing the transformation

- [applied(to:eventHandler:)](audiofeatureprint/applied%28to_eventhandler_%29.md): Extracts audio features from an a sequence of audio buffers
- [AudioFeaturePrint.FeatureSequence](audiofeatureprint/featuresequence.md): An async sequence of audio buffers.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TemporalTransformer](temporaltransformer.md)

## See Also

### Audio components

- [AudioReader](audioreader.md): An audio file reader.
- [AudioConvertingTransformer](audioconvertingtransformer.md): A transformer for audio conversion.
