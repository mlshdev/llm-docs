> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcaptureconnection/audiochannels

# audioChannels (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

An array of audio channels that the connection provides.

## Declaration

```swift
var audioChannels: [AVCaptureAudioChannel] { get }
```

<a id="Discussion"></a>

## Discussion

The property only applies to a video connection.

## See Also

### Inspecting a connection

- [inputPorts](inputports.md): An array of the connection’s input ports.
- [output](output.md): The connection’s output port, if applicable.
- [videoPreviewLayer](videopreviewlayer.md): The video preview layer associated with the connection.

# audioChannels (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

An array of audio channels that the connection provides.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVCaptureAudioChannel *> * audioChannels;
```

<a id="Discussion"></a>

## Discussion

The property only applies to a video connection.

## See Also

### Inspecting a connection

- [inputPorts](inputports.md): An array of the connection’s input ports.
- [output](output.md): The connection’s output port, if applicable.
- [videoPreviewLayer](videopreviewlayer.md): The video preview layer associated with the connection.
