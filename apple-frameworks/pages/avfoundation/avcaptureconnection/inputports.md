> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/inputports](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/inputports)

# inputPorts (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

An array of the connection’s input ports.

## Declaration

```swift
var inputPorts: [AVCaptureInput.Port] { get }
```

<a id="Discussion"></a>

## Discussion

Input ports are instances of [AVCaptureInput.Port](../avcaptureinput/port.md).

## See Also

### Inspecting a connection

- [output](output.md): The connection’s output port, if applicable.
- [videoPreviewLayer](videopreviewlayer.md): The video preview layer associated with the connection.
- [audioChannels](audiochannels.md): An array of audio channels that the connection provides.

# inputPorts (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

An array of the connection’s input ports.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVCaptureInputPort *> * inputPorts;
```

<a id="Discussion"></a>

## Discussion

Input ports are instances of [AVCaptureInputPort](../avcaptureinput/port.md).

## See Also

### Inspecting a connection

- [output](output.md): The connection’s output port, if applicable.
- [videoPreviewLayer](videopreviewlayer.md): The video preview layer associated with the connection.
- [audioChannels](audiochannels.md): An array of audio channels that the connection provides.
