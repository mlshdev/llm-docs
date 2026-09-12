> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/deviceinputlatency](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/deviceinputlatency)

# deviceInputLatency (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The audio device’s input latency, in seconds.

## Declaration

```swift
var deviceInputLatency: TimeInterval { get }
```

## See Also

### Configuring the Device

- [deviceID](deviceid.md): Gets the I/O hardware device.
- [setDeviceID(\_:)](setdeviceid%28__%29.md): Sets the I/O hardware device.
- [canPerformInput](canperforminput.md): Determines whether the I/O device can perform input.
- [canPerformOutput](canperformoutput.md): Determines whether the I/O device can perform output.
- [isInputEnabled](isinputenabled.md): A flag enabling audio input from the unit.
- [isOutputEnabled](isoutputenabled.md): A flag enabling audio output from the unit.
- [inputHandler](inputhandler.md): The block that the output unit will call to notify when input is available.
- [outputProvider](outputprovider.md): The block that the output unit will call to get audio to send to the output.
- [deviceOutputLatency](deviceoutputlatency.md): The audio devic’s output latency, in seconds.
- [startHardware()](starthardware%28%29.md): Starts the audio hardware.
- [stopHardware()](stophardware%28%29.md): Stops the audio hardware.
- [AURenderPullInputBlock](../aurenderpullinputblock.md): A block to supply audio input to a render block.

# deviceInputLatency (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The audio device’s input latency, in seconds.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval deviceInputLatency;
```

## See Also

### Configuring the Device

- [deviceID](deviceid.md): Gets the I/O hardware device.
- [setDeviceID:error:](setdeviceid%28__%29.md): Sets the I/O hardware device.
- [canPerformInput](canperforminput.md): Determines whether the I/O device can perform input.
- [canPerformOutput](canperformoutput.md): Determines whether the I/O device can perform output.
- [inputEnabled](isinputenabled.md): A flag enabling audio input from the unit.
- [outputEnabled](isoutputenabled.md): A flag enabling audio output from the unit.
- [inputHandler](inputhandler.md): The block that the output unit will call to notify when input is available.
- [outputProvider](outputprovider.md): The block that the output unit will call to get audio to send to the output.
- [deviceOutputLatency](deviceoutputlatency.md): The audio devic’s output latency, in seconds.
- [startHardwareAndReturnError:](starthardware%28%29.md): Starts the audio hardware.
- [stopHardware](stophardware%28%29.md): Stops the audio hardware.
- [AURenderPullInputBlock](../aurenderpullinputblock.md): A block to supply audio input to a render block.
