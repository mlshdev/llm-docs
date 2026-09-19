> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice

# IOUserVideoClockDevice

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Class  
**Availability:** DriverKit 27.0+ beta

A clock device.

## Declaration

```objectivec
class IOUserVideoClockDevice;
```

<a id="overview"></a>

## Overview

[IOUserVideoClockDevice](iouservideoclockdevice.md) handles the necessary configurations to be able to run IO.

## Topics

### Creating a clock device

- [Create](iouservideoclockdevice/create.md): Beta. A static factory method that allocates and initializes a video clock device.
- [init](iouservideoclockdevice/init.md): Beta. Initializes a video clock device.
- [IOUserVideoDriver](iouservideodriver.md): Beta. A video driver.

### Freeing a clock device

- [free](iouservideoclockdevice/free.md): Beta. Frees the video clock device.

### Getting information about the class

- [GetClassID](iouservideoclockdevice/getclassid.md): Beta. Gets the class identifier of the object.
- [GetBaseClassID](iouservideoclockdevice/getbaseclassid.md): Beta. Gets the class identifier of the base class object.
- [IOUserVideoClassID](videodriverkit/iouservideoclassid.md): Beta. Video class identifiers of an video object.

### Performing I/O

- [StartIO](iouservideoclockdevice/startio.md): Beta. Tells the clock device to start IO.
- [StopIO](iouservideoclockdevice/stopio.md): Beta. Tells the clock device to stop IO.
- [IOUserVideoStartStopFlags](videodriverkit/iouservideostartstopflags.md): Beta. Flags used to indicate how I/O is starting or stopping.

### Supporting device configuration changes

- [PerformDeviceConfigurationChange](iouservideoclockdevice/performdeviceconfigurationchange.md): Beta. The host calls this method to allow the clock device to perform a configuration change that had been previously requested via a call to the host via RequestDeviceConfigChange or a change to an IO state that requires a configuration change
- [AbortDeviceConfigurationChange](iouservideoclockdevice/abortdeviceconfigurationchange.md): Beta. The host calls this method to tell the driver not to perform a configuration change that had been requested via a call to the Host method, RequestDeviceConfigurationChange().

### Supporting sample rate changes

- [HandleChangeSampleRate](iouservideoclockdevice/handlechangesamplerate.md): Beta. The system calls this virtual method when the clock device’s sample rate changes.

### Identifying the clock device

- [GetUID](iouservideoclockdevice/getuid.md): Beta. Gets the unique identifier of the clock device.

### Working with the clock domain

- [SetClockDomain](iouservideoclockdevice/setclockdomain.md): Beta. Sets the clock domain value of the clock device.
- [GetClockDomain](iouservideoclockdevice/getclockdomain.md): Beta. Gets the clock domain value of the clock device.

### Working with sample rates

- [SetSampleRate](iouservideoclockdevice/setsamplerate.md): Beta. Sets the current sample rate for the clock device.
- [GetSampleRate](iouservideoclockdevice/getsamplerate.md): Beta. Gets sample rate of the clock device.
- [SetAvailableSampleRates](iouservideoclockdevice/setavailablesamplerates.md): Beta. Sets the available sample rates for the clock device.
- [GetAvailableSampleRates](iouservideoclockdevice/getavailablesamplerates.md): Beta. Gets available sample rates of the clock device.
- [GetNumberAvailableSampleRates](iouservideoclockdevice/getnumberavailablesamplerates.md): Beta. Gets number of available sample rates of the clock device.

### Working with timing and latency

- [SetOutputLatency](iouservideoclockdevice/setoutputlatency.md): Beta. Sets the output latency of the clock device.
- [GetOutputLatency](iouservideoclockdevice/getoutputlatency.md): Beta. Gets the output latency of the clock device.
- [SetInputLatency](iouservideoclockdevice/setinputlatency.md): Beta. Sets the input latency of the clock device.
- [GetInputLatency](iouservideoclockdevice/getinputlatency.md): Beta. Gets the input latency of the clock device.

### Working with clock device state

- [GetDeviceIsRunning](iouservideoclockdevice/getdeviceisrunning.md): Beta. Gets bool value indicating if device is running.
- [SetDeviceIsAlive](iouservideoclockdevice/setdeviceisalive.md): Beta. Sets a Boolean value to indicate the device is alive.
- [GetDeviceIsAlive](iouservideoclockdevice/getdeviceisalive.md): Beta. Gets a Boolean value indicating if the device is alive.
- [SetIsHidden](iouservideoclockdevice/setishidden.md): Beta. Sets a Boolean value indicating if the device is hidden.
- [GetIsHidden](iouservideoclockdevice/getishidden.md): Beta. Gets a Boolean value indicating if the device is hidden.

### Working with clock device behavior

- [SetClockAlgorithm](iouservideoclockdevice/setclockalgorithm.md): Beta. Sets the algorithm for the video clock device.
- [GetClockAlgorithm](iouservideoclockdevice/getclockalgorithm.md): Beta. Gets the clock algorithm of the clock device.
- [IOUserVideoClockAlgorithm](videodriverkit/iouservideoclockalgorithm.md): Beta. Clock smoothing algorithm selectors.
- [SetClockIsStable](iouservideoclockdevice/setclockisstable.md): Beta. Sets the clock stability of the clock device.
- [GetClockIsStable](iouservideoclockdevice/getclockisstable.md): Beta. Gets a Boolean value for clock stability of the clock device.

### Working with transport type

- [SetTransportType](iouservideoclockdevice/settransporttype.md): Beta. Sets the transport type of the clock device.
- [GetTransportType](iouservideoclockdevice/gettransporttype.md): Beta. Gets the transport type of the IOUserVideoClockDevice.
- [IOUserVideoTransportType](videodriverkit/iouservideotransporttype.md): Beta. The transport type of a video stream.

### Communicating with the host

- [RequestDeviceConfigurationChange](iouservideoclockdevice/requestdeviceconfigurationchange.md): Beta. Tells the host to initiate a configuration change operation.

### Managing video controls

- [AddControl](iouservideoclockdevice/addcontrol.md): Beta. Adds a video control to the video clock device.
- [RemoveControl](iouservideoclockdevice/removecontrol.md): Beta. Removes a user video control from the video clock device.
- [IOUserVideoControl](iouservideocontrol.md): Beta. A base class for control objects.

### Accessing timestamps

- [UpdateCurrentZeroTimestamp](iouservideoclockdevice/updatecurrentzerotimestamp.md): Beta. Update the current timestamp value.
- [GetCurrentZeroTimestamp](iouservideoclockdevice/getcurrentzerotimestamp.md): Beta. Gets the current zero timestamp value.

### Accessing client status information

- [GetCurrentClientSampleTime](iouservideoclockdevice/getcurrentclientsampletime.md): Beta. Gets the current sample time in the ring buffer that the client reads from and writes to.

### Working with transport states

- [GetDeviceTransportState](iouservideoclockdevice/getdevicetransportstate.md): Beta. Gets the transport state of the device.
- [IOUserVideoDeviceTransportState](videodriverkit/iouservideodevicetransportstate.md): Beta. The current transport state of the device.

### Handling stream format changes

- [StreamFormatChanged](iouservideoclockdevice/streamformatchanged.md): Beta.

## Relationships

### Inherits From

- [IOUserVideoObject](iouservideoobject.md)

### Inherited By

- [IOUserVideoDevice](iouservideodevice.md)

## See Also

### Video devices

- [IOUserVideoDevice](iouservideodevice.md): Beta. A video device.
