> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiohardwareserviceaddpropertylistener(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiohardwareserviceaddpropertylistener(_:_:_:_:))

# AudioHardwareServiceAddPropertyListener(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.11)

Registers a HAL audio object property listener callback function to be invoked when a specified property changes.

> no longer supported

## Declaration

```swift
func AudioHardwareServiceAddPropertyListener(_ inObjectID: AudioObjectID, _ inAddress: UnsafePointer<AudioObjectPropertyAddress>!, _ inListener: AudioObjectPropertyListenerProc!, _ inClientData: UnsafeMutableRawPointer!) -> OSStatus
```

## Parameters

- `inObjectID`: The HAL audio object to register the listener callback function with.
- `inAddress`: The property that, when changed, triggers a call to your listener callback function.
- `inListener`: He property listener callback to register.
- `inClientData`: Application data that is passed to your listener callback when it is invoked.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Related Documentation

- [AudioHardwareServiceRemovePropertyListener(\_:\_:\_:\_:)](audiohardwareserviceremovepropertylistener%28________%29.md): Deprecated. Unregisters a HAL audio object property listener callback function.

### Functions

- [AudioFileReadPackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilereadpackets%28______________%29.md): Deprecated. Reads a fixed duration of audio data from an audio file.
- [AudioComponentGetIcon(\_:\_:)](audiocomponentgeticon%28____%29.md): Deprecated. The UIImage of the audio component’s icon.
- [AudioComponentGetLastActiveTime(\_:)](audiocomponentgetlastactivetime%28__%29.md): Deprecated. The time at which the application publishing the component was last active.
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

# AudioHardwareServiceAddPropertyListener (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.11)

Registers a HAL audio object property listener callback function to be invoked when a specified property changes.

> no longer supported

## Declaration

```objectivec
extern OSStatus AudioHardwareServiceAddPropertyListener(AudioObjectID inObjectID, const AudioObjectPropertyAddress *inAddress, AudioObjectPropertyListenerProc inListener, void *inClientData);
```

## Parameters

- `inObjectID`: The HAL audio object to register the listener callback function with.
- `inAddress`: The property that, when changed, triggers a call to your listener callback function.
- `inListener`: He property listener callback to register.
- `inClientData`: Application data that is passed to your listener callback when it is invoked.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Related Documentation

- [AudioHardwareServiceRemovePropertyListener](audiohardwareserviceremovepropertylistener%28________%29.md): Deprecated. Unregisters a HAL audio object property listener callback function.

### Functions

- [AudioFileCreate](audiofilecreate.md): Deprecated.
- [AudioFileInitialize](audiofileinitialize.md): Deprecated.
- [AudioFileOpen](audiofileopen.md): Deprecated.
- [AudioFileReadPackets](audiofilereadpackets%28______________%29.md): Deprecated. Reads a fixed duration of audio data from an audio file.
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
