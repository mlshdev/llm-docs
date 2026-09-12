> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaredevice](https://developer.apple.com/documentation/coreaudio/audiohardwaredevice)

# AudioHardwareDevice

**Framework:** Core Audio  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS 15.0+

Instances of the AudioHardwareDevice class encapsulate individual audio devices. An audio device serves as the basic unit of IO. AudioHardwareDevice provides properties and methods to access and manipulate a device’s state and run IO.

## Declaration

```swift
class AudioHardwareDevice
```

## Topics

### Initializers

- [init(id:)](audiohardwaredevice/init%28id_%29.md)

### Instance Properties

- [actualSampleRate](audiohardwaredevice/actualsamplerate.md): A Double that indicates the current actual sample rate of the device as measured by its timestamps.
- [bufferFrameSize](audiohardwaredevice/bufferframesize.md): An Int whose value indicates the number of frames in the IO buffers.
- [bufferFrameSizeRange](audiohardwaredevice/bufferframesizerange.md): An AudioValueRange indicating the minimum and maximum values, inclusive, for bufferFrameSize.
- [canBeDefaultInputDevice](audiohardwaredevice/canbedefaultinputdevice.md): A Bool where true indicates that the device is a possible selection for default input device.
- [canBeDefaultOutputDevice](audiohardwaredevice/canbedefaultoutputdevice.md): A Bool where true indicates that the device is a possible selection for default output device.
- [canBeDefaultSoundEffectsDevice](audiohardwaredevice/canbedefaultsoundeffectsdevice.md): A Bool where true indicates that the device is a possible selection for default sound effects device.
- [clock](audiohardwaredevice/clock.md): The AudioHardwareClock that is currently serving as the main time base of the device.
- [configurationApplication](audiohardwaredevice/configurationapplication.md): A String that contains the bundle ID for an application that provides a GUI for configuring the device. By default, the value of this property is the bundle ID for Audio MIDI Setup.
- [currentTime](audiohardwaredevice/currenttime.md): An AudioTimeStamp containing the current time from the device.
- [hogModePID](audiohardwaredevice/hogmodepid.md): A pid_t indicating the process that currently owns exclusive access to the device or a value of -1 indicating that the device is currently available to all processes.
- [icon](audiohardwaredevice/icon.md): A URL that directs to an image file that can be used to represent the device visually.
- [inputSafetyOffset](audiohardwaredevice/inputsafetyoffset.md): An Int whose value indicates the number of frames behind the current hardware position that is safe to do IO.
- [inputStreamConfiguration](audiohardwaredevice/inputstreamconfiguration.md): This property returns the stream configuration of the device in an array of AudioBuffers (with the buffer data set to nil) which describes the list of streams and the number of channels in each stream. This corresponds to what will be passed into the IOProc.
- [ioCycleUsage](audiohardwaredevice/iocycleusage.md): A Float whose range is from 0 to 1. This value indicates how much of the client portion of the IO cycle the process will use.
- [isHidden](audiohardwaredevice/ishidden.md): A Bool where true indicates that the device is not included in the normal list of devices provided by the system nor can it be the default device. Hidden devices can only be obtained from the system by UID.
- [isProcessInputMuted](audiohardwaredevice/isprocessinputmuted.md): A Bool where true indicates that the current process’s input audio will be zeroed out by the system.
- [isProcessOutputMuted](audiohardwaredevice/isprocessoutputmuted.md): A Bool where true indicates that the current process’s output audio will be zeroed out by the system.
- [isRunningInAProcess](audiohardwaredevice/isrunninginaprocess.md): A Bool where true indicates that the device is running in at least one process on the system and false means that it isn’t running at all.
- [largestVariableBufferFrameSize](audiohardwaredevice/largestvariablebufferframesize.md): An Int that indicates the largest buffer that will be passed and bufferFrameSize if usesVariableBufferFrameSizes is true.
- [modelUID](audiohardwaredevice/modeluid.md): A String that contains a persistent identifier for the model of a device. The identifier is unique such that the identifier from two devices are equal if and only if the two devices are the exact same model from the same manufacturer. Further, the identifier has to be the same no matter on what machine the device appears.
- [outputSafetyOffset](audiohardwaredevice/outputsafetyoffset.md): An Int whose value indicates the number for frames ahead of the current hardware position that is safe to do IO.
- [outputStreamConfiguration](audiohardwaredevice/outputstreamconfiguration.md): This property returns the stream configuration of the device in an array of AudioBuffers (with the buffer data set to nil) which describes the list of streams and the number of channels in each stream. This corresponds to what will be passed into the IOProc.
- [preferredInputChannelsForStereo](audiohardwaredevice/preferredinputchannelsforstereo.md): An array of two UInt32s, the first for the left channel, the second for the right channel, that indicate the channel numbers to use for stereo input IO on the device.
- [preferredOutputChannelsForStereo](audiohardwaredevice/preferredoutputchannelsforstereo.md): An array of two UInt32s, the first for the left channel, the second for the right channel, that indicate the channel numbers to use for stereo output IO on the device.
- [relatedDevices](audiohardwaredevice/relateddevices.md): An array of AudioHardwareDevices for devices related to the device. For IOAudio-based devices, devices are related if they share the same IOAudioDevice object.
- [streams](audiohardwaredevice/streams.md): An array of AudioHardwareStreams that represent the IO streams of the device.
- [usesVariableBufferFrameSizes](audiohardwaredevice/usesvariablebufferframesizes.md): A Bool where true indicates that the sizes of the buffers passed to an IOProc will vary by a small amount.
- [workgroup](audiohardwaredevice/workgroup.md): A WorkGroup that represents the thread workgroup the device’s IO thread belongs to.

### Instance Methods

- [nearestStartTime(atTime:withFlags:)](audiohardwaredevice/neareststarttime%28attime_withflags_%29.md): Query the device to get a time equal to or later than the given time that is the best time to start IO.
- [setBufferFrameSize(\_:)](audiohardwaredevice/setbufferframesize%28__%29.md): Set the bufferFrameSize property.
- [setClock(\_:)](audiohardwaredevice/setclock%28__%29.md): Set the clock property.
- [setIOCycleUsage(\_:)](audiohardwaredevice/setiocycleusage%28__%29.md): Set the ioCycleUsage property.
- [setIsProcessInputMuted(\_:)](audiohardwaredevice/setisprocessinputmuted%28__%29.md): Set the isProcessInputMuted property.
- [setIsProcessOutputMuted(\_:)](audiohardwaredevice/setisprocessoutputmuted%28__%29.md): Set the isProcessOutputMuted property.
- [setPreferredInputChannelsForStereo(\_:)](audiohardwaredevice/setpreferredinputchannelsforstereo%28__%29.md): Set the preferredInputChannelsForStereo property.
- [setPreferredOutputChannelsForStereo(\_:)](audiohardwaredevice/setpreferredoutputchannelsforstereo%28__%29.md): Set the preferredOutputChannelsForStereo property.
- [start(IOProcID:)](audiohardwaredevice/start%28ioprocid_%29.md): Starts IO for the given AudioDeviceIOProcID.
- [start(at:flags:IOProcID:)](audiohardwaredevice/start%28at_flags_ioprocid_%29.md): Starts IO for the given AudioDeviceIOProcID and aligns the IO cycle of the device with the given time.
- [stop(IOProcID:)](audiohardwaredevice/stop%28ioprocid_%29.md): Stops IO for the given AudioDeviceIOProcID.
- [toggleHogMode()](audiohardwaredevice/togglehogmode%28%29.md): Toggle exclusive access to the device for the current process. If another process owns exclusive access, that remains unchanged. If the current process owns exclusive access, it is released and made available to all processes again. If no process has exclusive access, this process gains ownership of exclusive access.
- [translateTime(\_:)](audiohardwaredevice/translatetime%28__%29.md): Translates the time in the device’s time base from one representation to another. Note that the device has to be running

## Relationships

### Inherits From

- [AudioHardwareClock](audiohardwareclock.md)

### Inherited By

- [AudioHardwareAggregateDevice](audiohardwareaggregatedevice.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
