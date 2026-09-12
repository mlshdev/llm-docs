> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/init(inputport:videopreviewlayer:)](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/init(inputport:videopreviewlayer:))

# init(inputPort:videoPreviewLayer:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Creates a capture connection that represents a connection between an input port and a video preview layer.

## Declaration

```swift
init(inputPort port: AVCaptureInput.Port, videoPreviewLayer layer: AVCaptureVideoPreviewLayer)
```

## Parameters

- `port`: An [AVCaptureInput.Port](../avcaptureinput/port.md) instance that relates to an [AVCaptureInput](../avcaptureinput.md) instance.
- `layer`: An [AVCaptureVideoPreviewLayer](../avcapturevideopreviewlayer.md) instance.

<a id="return-value"></a>

## Return Value

A capture connection that represents a connection between `port` and `layer`.

<a id="Discussion"></a>

## Discussion

You can add the connection this method returns to an [AVCaptureSession](../avcapturesession.md) instance with the [addConnection(\_:)](../avcapturesession/addconnection%28__%29.md) method.

The [addInput(\_:)](../avcapturesession/addinput%28__%29.md): or [addOutput(\_:)](../avcapturesession/addoutput%28__%29.md) methods automatically form connections between all compatible inputs and outputs. You don’t need to manually create and add connections to the session unless you use the primitive [addInputWithNoConnections(\_:)](../avcapturesession/addinputwithnoconnections%28__%29.md) and [addOutputWithNoConnections(\_:)](../avcapturesession/addoutputwithnoconnections%28__%29.md) methods.

## See Also

### Creating a connection

- [init(inputPorts:output:)](init%28inputports_output_%29.md): Creates a capture connection that represents a connection between multiple input ports and an output.

# initWithInputPort:videoPreviewLayer: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Creates a capture connection that represents a connection between an input port and a video preview layer.

## Declaration

```objectivec
- (instancetype) initWithInputPort:(AVCaptureInputPort *) port videoPreviewLayer:(AVCaptureVideoPreviewLayer *) layer;
```

## Parameters

- `port`: An [AVCaptureInputPort](../avcaptureinput/port.md) instance that relates to an [AVCaptureInput](../avcaptureinput.md) instance.
- `layer`: An [AVCaptureVideoPreviewLayer](../avcapturevideopreviewlayer.md) instance.

<a id="return-value"></a>

## Return Value

A capture connection that represents a connection between `port` and `layer`.

<a id="Discussion"></a>

## Discussion

You can add the connection this method returns to an [AVCaptureSession](../avcapturesession.md) instance with the [addConnection:](../avcapturesession/addconnection%28__%29.md) method.

The [addInput:](../avcapturesession/addinput%28__%29.md): or [addOutput:](../avcapturesession/addoutput%28__%29.md) methods automatically form connections between all compatible inputs and outputs. You don’t need to manually create and add connections to the session unless you use the primitive [addInputWithNoConnections:](../avcapturesession/addinputwithnoconnections%28__%29.md) and [addOutputWithNoConnections:](../avcapturesession/addoutputwithnoconnections%28__%29.md) methods.

## See Also

### Creating a connection

- [initWithInputPorts:output:](init%28inputports_output_%29.md): Creates a capture connection that represents a connection between multiple input ports and an output.
- [connectionWithInputPorts:output:](connectionwithinputports_output_.md): Returns a capture connection that represents a connection between multiple input ports and an output.
- [connectionWithInputPort:videoPreviewLayer:](connectionwithinputport_videopreviewlayer_.md): Returns a capture connection that represents a connection between an input port and a video preview layer.
