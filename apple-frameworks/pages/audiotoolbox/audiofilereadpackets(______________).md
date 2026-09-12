> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilereadpackets(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilereadpackets(_:_:_:_:_:_:_:))

# AudioFileReadPackets(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Reads a fixed duration of audio data from an audio file.

> no longer supported

## Declaration

```swift
func AudioFileReadPackets(_ inAudioFile: AudioFileID, _ inUseCache: Bool, _ outNumBytes: UnsafeMutablePointer<UInt32>, _ outPacketDescriptions: UnsafeMutablePointer<AudioStreamPacketDescription>?, _ inStartingPacket: Int64, _ ioNumPackets: UnsafeMutablePointer<UInt32>, _ outBuffer: UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `inAudioFile`: The audio file whose audio packets you want to read.
- `inUseCache`: Set to `true` to cache the data. Otherwise, set to `false`.
- `outNumBytes`: On output, the number of bytes actually read.
- `outPacketDescriptions`: On output, an array of packet descriptions for the packets that were read. The array that you pass must be large enough to accommodate descriptions for the number of packets requested in the `ioNumPackets` parameter.

  This parameter applies only to variable bit-rate data. If the file being read contains constant bit-rate (CBR) data, such as linear PCM, this parameter does not get filled. Pass `NULL` if the file’s data format is CBR.
- `inStartingPacket`: The packet index of the first packet you want to read.
- `ioNumPackets`: On input, the number of packets to read. On output, the number of packets actually read.

  You will see a difference in the input and output values when this function has reached the end of the file you are reading. In this case, the output value for this parameter is smaller than its input value.
- `outBuffer`: Memory that you allocate to hold the read packets. Determine an appropriate size by multiplying the number of packets requested (in the `ioNumPackets` parameter) by the maximum (or upper bound for) packet size of the audio file. For uncompressed audio formats, a packet is equal to a frame.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

If you do not need to read a fixed duration of audio data, but rather want to use your memory buffer most efficiently, use [AudioFileReadPacketData(\_:\_:\_:\_:\_:\_:\_:)](audiofilereadpacketdata%28______________%29.md) instead of this function.

When reading variable bit-rate (VBR) audio data, using this function requires that you allocate more memory than you would for the [AudioFileReadPacketData(\_:\_:\_:\_:\_:\_:\_:)](audiofilereadpacketdata%28______________%29.md) function. See the descriptions for the `outBuffer` parameter in each of these two functions.

In addition, this function is less efficient than [AudioFileReadPacketData(\_:\_:\_:\_:\_:\_:\_:)](audiofilereadpacketdata%28______________%29.md) when reading compressed file formats that do not have packet tables, such as MP3 or ADTS. Use this function only when you need to read a fixed duration of audio data, or when you are reading only uncompressed audio.

Audio File Services reads one 32-bit chunk of a file at a time.

## See Also

### Related Documentation

- [AudioFileWritePackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilewritepackets%28______________%29.md): Writes packets of audio data to an audio data file.

### Functions

- [AudioComponentGetIcon(\_:\_:)](audiocomponentgeticon%28____%29.md): Deprecated. The UIImage of the audio component’s icon.
- [AudioComponentGetLastActiveTime(\_:)](audiocomponentgetlastactivetime%28__%29.md): Deprecated. The time at which the application publishing the component was last active.
- [AudioHardwareServiceAddPropertyListener(\_:\_:\_:\_:)](audiohardwareserviceaddpropertylistener%28________%29.md): Deprecated. Registers a HAL audio object property listener callback function to be invoked when a specified property changes.
- [AudioHardwareServiceGetPropertyData(\_:\_:\_:\_:\_:\_:)](audiohardwareservicegetpropertydata%28____________%29.md): Deprecated. Gets the value for a specified property.
- [AudioHardwareServiceGetPropertyDataSize(\_:\_:\_:\_:\_:)](audiohardwareservicegetpropertydatasize%28__________%29.md): Deprecated. Gets the payload size for a given property.
- [AudioHardwareServiceHasProperty(\_:\_:)](audiohardwareservicehasproperty%28____%29.md): Deprecated. Queries a HAL audio object about whether or not it has a specified property.
- [AudioHardwareServiceIsPropertySettable(\_:\_:\_:)](audiohardwareserviceispropertysettable%28______%29.md): Deprecated. Queries a HAL audio object about whether a specified property is settable.
- [AudioHardwareServiceRemovePropertyListener(\_:\_:\_:\_:)](audiohardwareserviceremovepropertylistener%28________%29.md): Deprecated. Unregisters a HAL audio object property listener callback function.
- [AudioHardwareServiceSetPropertyData(\_:\_:\_:\_:\_:\_:)](audiohardwareservicesetpropertydata%28____________%29.md): Deprecated. Asks a HAL audio object to change the value of a specified property.
- [AudioOutputUnitGetHostIcon(\_:\_:)](audiooutputunitgethosticon%28____%29.md): Deprecated. The host app’s icon.
- [AudioOutputUnitPublish(\_:\_:\_:\_:)](audiooutputunitpublish%28________%29.md): Deprecated. Registers an audio output unit for use by other applications.
- [AudioSessionAddPropertyListener(\_:\_:\_:)](audiosessionaddpropertylistener%28______%29.md): Deprecated. Adds a property listener callback function to your application’s audio session object.
- [AudioSessionGetProperty(\_:\_:\_:)](audiosessiongetproperty%28______%29.md): Deprecated. Gets the value of a specified audio session property.
- [AudioSessionGetPropertySize(\_:\_:)](audiosessiongetpropertysize%28____%29.md): Deprecated. Gets the size of the value for a specified audio session property.
- [AudioSessionInitialize(\_:\_:\_:\_:)](audiosessioninitialize%28________%29.md): Deprecated. Initializes an iOS application’s audio session object.

# AudioFileReadPackets (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Reads a fixed duration of audio data from an audio file.

> no longer supported

## Declaration

```objectivec
extern OSStatus AudioFileReadPackets(AudioFileID inAudioFile, Boolean inUseCache, UInt32 *outNumBytes, AudioStreamPacketDescription *outPacketDescriptions, SInt64 inStartingPacket, UInt32 *ioNumPackets, void *outBuffer);
```

## Parameters

- `inAudioFile`: The audio file whose audio packets you want to read.
- `inUseCache`: Set to `true` to cache the data. Otherwise, set to `false`.
- `outNumBytes`: On output, the number of bytes actually read.
- `outPacketDescriptions`: On output, an array of packet descriptions for the packets that were read. The array that you pass must be large enough to accommodate descriptions for the number of packets requested in the `ioNumPackets` parameter.

  This parameter applies only to variable bit-rate data. If the file being read contains constant bit-rate (CBR) data, such as linear PCM, this parameter does not get filled. Pass `NULL` if the file’s data format is CBR.
- `inStartingPacket`: The packet index of the first packet you want to read.
- `ioNumPackets`: On input, the number of packets to read. On output, the number of packets actually read.

  You will see a difference in the input and output values when this function has reached the end of the file you are reading. In this case, the output value for this parameter is smaller than its input value.
- `outBuffer`: Memory that you allocate to hold the read packets. Determine an appropriate size by multiplying the number of packets requested (in the `ioNumPackets` parameter) by the maximum (or upper bound for) packet size of the audio file. For uncompressed audio formats, a packet is equal to a frame.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

If you do not need to read a fixed duration of audio data, but rather want to use your memory buffer most efficiently, use [AudioFileReadPacketData](audiofilereadpacketdata%28______________%29.md) instead of this function.

When reading variable bit-rate (VBR) audio data, using this function requires that you allocate more memory than you would for the [AudioFileReadPacketData](audiofilereadpacketdata%28______________%29.md) function. See the descriptions for the `outBuffer` parameter in each of these two functions.

In addition, this function is less efficient than [AudioFileReadPacketData](audiofilereadpacketdata%28______________%29.md) when reading compressed file formats that do not have packet tables, such as MP3 or ADTS. Use this function only when you need to read a fixed duration of audio data, or when you are reading only uncompressed audio.

Audio File Services reads one 32-bit chunk of a file at a time.

## See Also

### Related Documentation

- [AudioFileWritePackets](audiofilewritepackets%28______________%29.md): Writes packets of audio data to an audio data file.

### Functions

- [AudioFileCreate](audiofilecreate.md): Deprecated.
- [AudioFileInitialize](audiofileinitialize.md): Deprecated.
- [AudioFileOpen](audiofileopen.md): Deprecated.
- [MusicSequenceLoadSMFDataWithFlags](musicsequenceloadsmfdatawithflags.md): Deprecated.
- [MusicSequenceLoadSMFWithFlags](musicsequenceloadsmfwithflags.md): Deprecated.
- [MusicSequenceSaveMIDIFile](musicsequencesavemidifile.md): Deprecated.
- [MusicSequenceSaveSMFData](musicsequencesavesmfdata.md): Deprecated.
- [MusicTrackNewExtendedControlEvent](musictracknewextendedcontrolevent.md): Deprecated.
- [AudioComponentGetIcon](audiocomponentgeticon%28____%29.md): Deprecated. The UIImage of the audio component’s icon.
- [AudioComponentGetLastActiveTime](audiocomponentgetlastactivetime%28__%29.md): Deprecated. The time at which the application publishing the component was last active.
- [AudioFileComponentCreate](audiofilecomponentcreate.md): Deprecated.
- [AudioFileComponentDataIsThisFormat](audiofilecomponentdataisthisformat.md): Deprecated.
- [AudioFileComponentFileIsThisFormat](audiofilecomponentfileisthisformat.md): Deprecated.
- [AudioFileComponentInitialize](audiofilecomponentinitialize.md): Deprecated.
- [AudioFileComponentOpenFile](audiofilecomponentopenfile.md): Deprecated.
