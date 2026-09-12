> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/init(inputports:output:)](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/init(inputports:output:))

# init(inputPorts:output:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

Creates a capture connection that represents a connection between multiple input ports and an output.

## Declaration

```swift
init(inputPorts ports: [AVCaptureInput.Port], output: AVCaptureOutput)
```

## Parameters

- `ports`: An array of [AVCaptureInput.Port](../avcaptureinput/port.md) instances that relate to [AVCaptureInput](../avcaptureinput.md) instances.
- `output`: An [AVCaptureOutput](../avcaptureoutput.md) instance.

<a id="return-value"></a>

## Return Value

A capture connection that represents a connection between `ports` and `output`.

<a id="Discussion"></a>

## Discussion

You can add the connection this method returns to an [AVCaptureSession](../avcapturesession.md) instance with the [addConnection(\_:)](../avcapturesession/addconnection%28__%29.md) method.

The [addInput(\_:)](../avcapturesession/addinput%28__%29.md): or [addOutput(\_:)](../avcapturesession/addoutput%28__%29.md) methods automatically form connections between all compatible inputs and outputs. You don’t need to manually create and add connections to the session unless you use the primitive [addInputWithNoConnections(\_:)](../avcapturesession/addinputwithnoconnections%28__%29.md) and [addOutputWithNoConnections(\_:)](../avcapturesession/addoutputwithnoconnections%28__%29.md) methods.

## See Also

### Creating a connection

- [init(inputPort:videoPreviewLayer:)](init%28inputport_videopreviewlayer_%29.md): Creates a capture connection that represents a connection between an input port and a video preview layer.

# initWithInputPorts:output: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

Creates a capture connection that represents a connection between multiple input ports and an output.

## Declaration

```objectivec
- (instancetype) initWithInputPorts:(NSArray<AVCaptureInputPort *> *) ports output:(AVCaptureOutput *) output;
```

## Parameters

- `ports`: An array of [AVCaptureInputPort](../avcaptureinput/port.md) instances that relate to [AVCaptureInput](../avcaptureinput.md) instances.
- `output`: An [AVCaptureOutput](../avcaptureoutput.md) instance.

<a id="return-value"></a>

## Return Value

A capture connection that represents a connection between `ports` and `output`.

<a id="Discussion"></a>

## Discussion

You can add the connection this method returns to an [AVCaptureSession](../avcapturesession.md) instance with the [addConnection:](../avcapturesession/addconnection%28__%29.md) method.

The [addInput:](../avcapturesession/addinput%28__%29.md): or [addOutput:](../avcapturesession/addoutput%28__%29.md) methods automatically form connections between all compatible inputs and outputs. You don’t need to manually create and add connections to the session unless you use the primitive [addInputWithNoConnections:](../avcapturesession/addinputwithnoconnections%28__%29.md) and [addOutputWithNoConnections:](../avcapturesession/addoutputwithnoconnections%28__%29.md) methods.

## See Also

### Creating a connection

- [connectionWithInputPorts:output:](connectionwithinputports_output_.md): Returns a capture connection that represents a connection between multiple input ports and an output.
- [initWithInputPort:videoPreviewLayer:](init%28inputport_videopreviewlayer_%29.md): Creates a capture connection that represents a connection between an input port and a video preview layer.
- [connectionWithInputPort:videoPreviewLayer:](connectionwithinputport_videopreviewlayer_.md): Returns a capture connection that represents a connection between an input port and a video preview layer.
