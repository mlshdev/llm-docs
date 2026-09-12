> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/audioconvertingtransformer](https://developer.apple.com/documentation/createmlcomponents/audioconvertingtransformer)

# AudioConvertingTransformer

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A transformer for audio conversion.

## Declaration

```swift
struct AudioConvertingTransformer
```

## Topics

### Creating the transformer

- [init(targetFormat:)](audioconvertingtransformer/init%28targetformat_%29.md): Creates an audio conversion transformer to convert the format of the buffers.

### Getting the properties

- [targetFormat](audioconvertingtransformer/targetformat.md): The target audio format for the output buffers. It must have an AVAudioPCMFormat as its common format type.

### Applying the transformer

- [applied(to:eventHandler:)](audioconvertingtransformer/applied%28to_eventhandler_%29.md): Performs conversion of the input audio buffer.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transformer](transformer.md)

## See Also

### Audio components

- [AudioReader](audioreader.md): An audio file reader.
- [AudioFeaturePrint](audiofeatureprint.md): A stream transformer that extracts audio features from audio buffers.
