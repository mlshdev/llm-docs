> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuepropertyid](https://developer.apple.com/documentation/audiotoolbox/audioqueuepropertyid)

# AudioQueuePropertyID (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Identifiers for audio queue properties.

## Declaration

```swift
typealias AudioQueuePropertyID = UInt32
```

<a id="Discussion"></a>

## Discussion

To receive a notification that a specific audio queue property has changed:

1. Define a property listener callback, referencing the desired audio queue property ID. Base the callback on the [AudioQueuePropertyListenerProc](audioqueuepropertylistenerproc.md) callback function declaration.
2. Assign the callback to an audio queue using the [AudioQueueAddPropertyListener(\_:\_:\_:\_:)](audioqueueaddpropertylistener%28________%29.md) function.
3. When you get a property-changed notification, call the [AudioQueueGetProperty(\_:\_:\_:\_:)](audioqueuegetproperty%28________%29.md) function to get the current value of the property.

## Topics

### Constants

- [kAudioQueueProperty_IsRunning](kaudioqueueproperty_isrunning.md): Value is a read-only `UInt32` value indicating whether or not the audio queue is running. A nonzero value means running; `0` means stopped. A notification is sent when the associated audio queue starts or stops, which may occur sometime after the [AudioQueueStart(\_:\_:)](audioqueuestart%28____%29.md) or [AudioQueueStop(\_:\_:)](audioqueuestop%28____%29.md) function is called.
- [kAudioQueueDeviceProperty_SampleRate](kaudioqueuedeviceproperty_samplerate.md): Value is a read-only `Float64` value representing the sampling rate of the audio hardware device associated with an audio queue.
- [kAudioQueueDeviceProperty_NumberChannels](kaudioqueuedeviceproperty_numberchannels.md): Value is a read-only `UInt32` value representing the number of channels in the audio hardware device associated with an audio queue.
- [kAudioQueueProperty_CurrentDevice](kaudioqueueproperty_currentdevice.md): The unique identifier (UID) of the audio hardware device.
- [kAudioQueueProperty_MagicCookie](kaudioqueueproperty_magiccookie.md): Value is a read/write void pointer to a block of memory, which you set up, containing an audio format magic cookie. If the audio format you are playing or recording to requires a magic cookie, you must set a value for this property before enqueuing any buffers.
- [kAudioQueueProperty_MaximumOutputPacketSize](kaudioqueueproperty_maximumoutputpacketsize.md): Value is a read-only`UInt32` value that is the size, in bytes, of the largest single packet of data in the output format. Primarily useful when encoding VBR compressed data.
- [kAudioQueueProperty_StreamDescription](kaudioqueueproperty_streamdescription.md): An audio queue’s data format.
- [kAudioQueueProperty_ChannelLayout](kaudioqueueproperty_channellayout.md): Describes an audio queue channel layout.
- [kAudioQueueProperty_EnableLevelMetering](kaudioqueueproperty_enablelevelmetering.md): Value is a read/write `UInt32` value that indicates whether audio level metering is enabled for an audio queue. `0` = metering off, `1` = metering on.
- [kAudioQueueProperty_CurrentLevelMeter](kaudioqueueproperty_currentlevelmeter.md): A read-only array of level meter status structures.
- [kAudioQueueProperty_CurrentLevelMeterDB](kaudioqueueproperty_currentlevelmeterdb.md): Value is a read-only array of [AudioQueueLevelMeterState](audioqueuelevelmeterstate.md) structures, one array element per audio channel. The member values in the structure are in decibels.
- [kAudioQueueProperty_DecodeBufferSizeFrames](kaudioqueueproperty_decodebuffersizeframes.md): Value is a read/write `UInt32` value that is the size of the buffer into which a playback (output) audio queue decodes buffers. A larger buffer provides more reliability and better long-term performance at the expense of memory and decreased responsiveness in some situations.
- [kAudioQueueProperty_ConverterError](kaudioqueueproperty_convertererror.md): Value is a read-only `UInt32` value that indicates the most recent error (if any) encountered by the audio queue’s internal encoding/decoding process.

## See Also

### Constants

- [Audio Queue Parameters](1552626-audio-queue-parameters.md): Identifiers for audio queue parameters.
- [Hardware Codec Policy Keys](1618724-hardware-codec-policy-keys.md): Indicates how an audio queue should choose between hardware and software implementations of a codec.

# AudioQueuePropertyID (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Identifiers for audio queue properties.

## Declaration

```objectivec
typedef UInt32 AudioQueuePropertyID;
```

<a id="Discussion"></a>

## Discussion

To receive a notification that a specific audio queue property has changed:

1. Define a property listener callback, referencing the desired audio queue property ID. Base the callback on the [AudioQueuePropertyListenerProc](audioqueuepropertylistenerproc.md) callback function declaration.
2. Assign the callback to an audio queue using the [AudioQueueAddPropertyListener](audioqueueaddpropertylistener%28________%29.md) function.
3. When you get a property-changed notification, call the [AudioQueueGetProperty](audioqueuegetproperty%28________%29.md) function to get the current value of the property.

## Topics

### Constants

- [kAudioQueueProperty_IsRunning](kaudioqueueproperty_isrunning.md): Value is a read-only `UInt32` value indicating whether or not the audio queue is running. A nonzero value means running; `0` means stopped. A notification is sent when the associated audio queue starts or stops, which may occur sometime after the [AudioQueueStart](audioqueuestart%28____%29.md) or [AudioQueueStop](audioqueuestop%28____%29.md) function is called.
- [kAudioQueueDeviceProperty_SampleRate](kaudioqueuedeviceproperty_samplerate.md): Value is a read-only `Float64` value representing the sampling rate of the audio hardware device associated with an audio queue.
- [kAudioQueueDeviceProperty_NumberChannels](kaudioqueuedeviceproperty_numberchannels.md): Value is a read-only `UInt32` value representing the number of channels in the audio hardware device associated with an audio queue.
- [kAudioQueueProperty_CurrentDevice](kaudioqueueproperty_currentdevice.md): The unique identifier (UID) of the audio hardware device.
- [kAudioQueueProperty_MagicCookie](kaudioqueueproperty_magiccookie.md): Value is a read/write void pointer to a block of memory, which you set up, containing an audio format magic cookie. If the audio format you are playing or recording to requires a magic cookie, you must set a value for this property before enqueuing any buffers.
- [kAudioQueueProperty_MaximumOutputPacketSize](kaudioqueueproperty_maximumoutputpacketsize.md): Value is a read-only`UInt32` value that is the size, in bytes, of the largest single packet of data in the output format. Primarily useful when encoding VBR compressed data.
- [kAudioQueueProperty_StreamDescription](kaudioqueueproperty_streamdescription.md): An audio queue’s data format.
- [kAudioQueueProperty_ChannelLayout](kaudioqueueproperty_channellayout.md): Describes an audio queue channel layout.
- [kAudioQueueProperty_EnableLevelMetering](kaudioqueueproperty_enablelevelmetering.md): Value is a read/write `UInt32` value that indicates whether audio level metering is enabled for an audio queue. `0` = metering off, `1` = metering on.
- [kAudioQueueProperty_CurrentLevelMeter](kaudioqueueproperty_currentlevelmeter.md): A read-only array of level meter status structures.
- [kAudioQueueProperty_CurrentLevelMeterDB](kaudioqueueproperty_currentlevelmeterdb.md): Value is a read-only array of [AudioQueueLevelMeterState](audioqueuelevelmeterstate.md) structures, one array element per audio channel. The member values in the structure are in decibels.
- [kAudioQueueProperty_DecodeBufferSizeFrames](kaudioqueueproperty_decodebuffersizeframes.md): Value is a read/write `UInt32` value that is the size of the buffer into which a playback (output) audio queue decodes buffers. A larger buffer provides more reliability and better long-term performance at the expense of memory and decreased responsiveness in some situations.
- [kAudioQueueProperty_ConverterError](kaudioqueueproperty_convertererror.md): Value is a read-only `UInt32` value that indicates the most recent error (if any) encountered by the audio queue’s internal encoding/decoding process.

## See Also

### Constants

- [Audio Queue Parameters](1552626-audio-queue-parameters.md): Identifiers for audio queue parameters.
- [Hardware Codec Policy Keys](1618724-hardware-codec-policy-keys.md): Indicates how an audio queue should choose between hardware and software implementations of a codec.
