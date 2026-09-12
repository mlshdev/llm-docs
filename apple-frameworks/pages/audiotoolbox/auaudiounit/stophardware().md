> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/stophardware()](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/stophardware())

# stopHardware() (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Stops the audio hardware.

## Declaration

```swift
func stopHardware()
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
- [deviceInputLatency](deviceinputlatency.md): The audio device’s input latency, in seconds.
- [deviceOutputLatency](deviceoutputlatency.md): The audio devic’s output latency, in seconds.
- [startHardware()](starthardware%28%29.md): Starts the audio hardware.
- [AURenderPullInputBlock](../aurenderpullinputblock.md): A block to supply audio input to a render block.

# stopHardware (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Stops the audio hardware.

## Declaration

```objectivec
- (void) stopHardware;
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
- [deviceInputLatency](deviceinputlatency.md): The audio device’s input latency, in seconds.
- [deviceOutputLatency](deviceoutputlatency.md): The audio devic’s output latency, in seconds.
- [startHardwareAndReturnError:](starthardware%28%29.md): Starts the audio hardware.
- [AURenderPullInputBlock](../aurenderpullinputblock.md): A block to supply audio input to a render block.
