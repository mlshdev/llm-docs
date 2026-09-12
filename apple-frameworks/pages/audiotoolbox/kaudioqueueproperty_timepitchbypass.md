> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudioqueueproperty_timepitchbypass](https://developer.apple.com/documentation/audiotoolbox/kaudioqueueproperty_timepitchbypass)

# kAudioQueueProperty_TimePitchBypass (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
var kAudioQueueProperty_TimePitchBypass: AudioQueuePropertyID { get }
```

## See Also

### Constants

- [kAudioQueueDeviceProperty_NumberChannels](kaudioqueuedeviceproperty_numberchannels.md): Value is a read-only `UInt32` value representing the number of channels in the audio hardware device associated with an audio queue.
- [kAudioQueueDeviceProperty_SampleRate](kaudioqueuedeviceproperty_samplerate.md): Value is a read-only `Float64` value representing the sampling rate of the audio hardware device associated with an audio queue.
- [kAudioQueueProperty_ChannelLayout](kaudioqueueproperty_channellayout.md): Describes an audio queue channel layout.
- [kAudioQueueProperty_ConverterError](kaudioqueueproperty_convertererror.md): Value is a read-only `UInt32` value that indicates the most recent error (if any) encountered by the audio queue’s internal encoding/decoding process.
- [kAudioQueueProperty_CurrentDevice](kaudioqueueproperty_currentdevice.md): The unique identifier (UID) of the audio hardware device.
- [kAudioQueueProperty_CurrentLevelMeter](kaudioqueueproperty_currentlevelmeter.md): A read-only array of level meter status structures.
- [kAudioQueueProperty_CurrentLevelMeterDB](kaudioqueueproperty_currentlevelmeterdb.md): Value is a read-only array of [AudioQueueLevelMeterState](audioqueuelevelmeterstate.md) structures, one array element per audio channel. The member values in the structure are in decibels.
- [kAudioQueueProperty_DecodeBufferSizeFrames](kaudioqueueproperty_decodebuffersizeframes.md): Value is a read/write `UInt32` value that is the size of the buffer into which a playback (output) audio queue decodes buffers. A larger buffer provides more reliability and better long-term performance at the expense of memory and decreased responsiveness in some situations.
- [kAudioQueueProperty_EnableLevelMetering](kaudioqueueproperty_enablelevelmetering.md): Value is a read/write `UInt32` value that indicates whether audio level metering is enabled for an audio queue. `0` = metering off, `1` = metering on.
- [kAudioQueueProperty_EnableTimePitch](kaudioqueueproperty_enabletimepitch.md)
- [kAudioQueueProperty_IsRunning](kaudioqueueproperty_isrunning.md): Value is a read-only `UInt32` value indicating whether or not the audio queue is running. A nonzero value means running; `0` means stopped. A notification is sent when the associated audio queue starts or stops, which may occur sometime after the [AudioQueueStart(\_:\_:)](audioqueuestart%28____%29.md) or [AudioQueueStop(\_:\_:)](audioqueuestop%28____%29.md) function is called.
- [kAudioQueueProperty_MagicCookie](kaudioqueueproperty_magiccookie.md): Value is a read/write void pointer to a block of memory, which you set up, containing an audio format magic cookie. If the audio format you are playing or recording to requires a magic cookie, you must set a value for this property before enqueuing any buffers.
- [kAudioQueueProperty_MaximumOutputPacketSize](kaudioqueueproperty_maximumoutputpacketsize.md): Value is a read-only`UInt32` value that is the size, in bytes, of the largest single packet of data in the output format. Primarily useful when encoding VBR compressed data.
- [kAudioQueueProperty_StreamDescription](kaudioqueueproperty_streamdescription.md): An audio queue’s data format.
- [kAudioQueueProperty_TimePitchAlgorithm](kaudioqueueproperty_timepitchalgorithm.md)

# kAudioQueueProperty_TimePitchBypass (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
kAudioQueueProperty_TimePitchBypass
```

## See Also

### Constants

- [kAudioQueueDeviceProperty_NumberChannels](kaudioqueuedeviceproperty_numberchannels.md): Value is a read-only `UInt32` value representing the number of channels in the audio hardware device associated with an audio queue.
- [kAudioQueueDeviceProperty_SampleRate](kaudioqueuedeviceproperty_samplerate.md): Value is a read-only `Float64` value representing the sampling rate of the audio hardware device associated with an audio queue.
- [kAudioQueueProperty_ChannelLayout](kaudioqueueproperty_channellayout.md): Describes an audio queue channel layout.
- [kAudioQueueProperty_ConverterError](kaudioqueueproperty_convertererror.md): Value is a read-only `UInt32` value that indicates the most recent error (if any) encountered by the audio queue’s internal encoding/decoding process.
- [kAudioQueueProperty_CurrentDevice](kaudioqueueproperty_currentdevice.md): The unique identifier (UID) of the audio hardware device.
- [kAudioQueueProperty_CurrentLevelMeter](kaudioqueueproperty_currentlevelmeter.md): A read-only array of level meter status structures.
- [kAudioQueueProperty_CurrentLevelMeterDB](kaudioqueueproperty_currentlevelmeterdb.md): Value is a read-only array of [AudioQueueLevelMeterState](audioqueuelevelmeterstate.md) structures, one array element per audio channel. The member values in the structure are in decibels.
- [kAudioQueueProperty_DecodeBufferSizeFrames](kaudioqueueproperty_decodebuffersizeframes.md): Value is a read/write `UInt32` value that is the size of the buffer into which a playback (output) audio queue decodes buffers. A larger buffer provides more reliability and better long-term performance at the expense of memory and decreased responsiveness in some situations.
- [kAudioQueueProperty_EnableLevelMetering](kaudioqueueproperty_enablelevelmetering.md): Value is a read/write `UInt32` value that indicates whether audio level metering is enabled for an audio queue. `0` = metering off, `1` = metering on.
- [kAudioQueueProperty_EnableTimePitch](kaudioqueueproperty_enabletimepitch.md)
- [kAudioQueueProperty_IsRunning](kaudioqueueproperty_isrunning.md): Value is a read-only `UInt32` value indicating whether or not the audio queue is running. A nonzero value means running; `0` means stopped. A notification is sent when the associated audio queue starts or stops, which may occur sometime after the [AudioQueueStart](audioqueuestart%28____%29.md) or [AudioQueueStop](audioqueuestop%28____%29.md) function is called.
- [kAudioQueueProperty_MagicCookie](kaudioqueueproperty_magiccookie.md): Value is a read/write void pointer to a block of memory, which you set up, containing an audio format magic cookie. If the audio format you are playing or recording to requires a magic cookie, you must set a value for this property before enqueuing any buffers.
- [kAudioQueueProperty_MaximumOutputPacketSize](kaudioqueueproperty_maximumoutputpacketsize.md): Value is a read-only`UInt32` value that is the size, in bytes, of the largest single packet of data in the output format. Primarily useful when encoding VBR compressed data.
- [kAudioQueueProperty_StreamDescription](kaudioqueueproperty_streamdescription.md): An audio queue’s data format.
- [kAudioQueueProperty_TimePitchAlgorithm](kaudioqueueproperty_timepitchalgorithm.md)
