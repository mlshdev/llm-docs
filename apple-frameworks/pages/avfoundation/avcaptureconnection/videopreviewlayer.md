> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/videopreviewlayer](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/videopreviewlayer)

# videoPreviewLayer (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The video preview layer associated with the connection.

## Declaration

```swift
var videoPreviewLayer: AVCaptureVideoPreviewLayer? { get }
```

<a id="Discussion"></a>

## Discussion

The connection sets the property in its [init(inputPort:videoPreviewLayer:)](init%28inputport_videopreviewlayer_%29.md) initializer.

## See Also

### Inspecting a connection

- [inputPorts](inputports.md): An array of the connection’s input ports.
- [output](output.md): The connection’s output port, if applicable.
- [audioChannels](audiochannels.md): An array of audio channels that the connection provides.

# videoPreviewLayer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The video preview layer associated with the connection.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVCaptureVideoPreviewLayer * videoPreviewLayer;
```

<a id="Discussion"></a>

## Discussion

The connection sets the property in its [initWithInputPort:videoPreviewLayer:](init%28inputport_videopreviewlayer_%29.md) initializer.

## See Also

### Inspecting a connection

- [inputPorts](inputports.md): An array of the connection’s input ports.
- [output](output.md): The connection’s output port, if applicable.
- [audioChannels](audiochannels.md): An array of audio channels that the connection provides.
