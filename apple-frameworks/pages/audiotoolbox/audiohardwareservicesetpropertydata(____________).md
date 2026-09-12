> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiohardwareservicesetpropertydata(_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiohardwareservicesetpropertydata(_:_:_:_:_:_:))

# AudioHardwareServiceSetPropertyData(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.11)

Asks a HAL audio object to change the value of a specified property.

> no longer supported

## Declaration

```swift
func AudioHardwareServiceSetPropertyData(_ inObjectID: AudioObjectID, _ inAddress: UnsafePointer<AudioObjectPropertyAddress>!, _ inQualifierDataSize: UInt32, _ inQualifierData: UnsafeRawPointer!, _ inDataSize: UInt32, _ inData: UnsafeRawPointer!) -> OSStatus
```

## Parameters

- `inObjectID`: The HAL audio object to set a property value on.
- `inAddress`: The property to set.
- `inQualifierDataSize`: A `UInt32` value indicating the size of the buffer pointed to by the `inQualifierData` parameter. Not all properties require qualification; in such a case you set this parameter to `0`.
- `inQualifierData`: A buffer of data to be used in determining the value of the property being queried. Not all properties require qualification; in such a case you set this parameter to `NULL`.
- `inDataSize`: A `UInt32` value indicating the size of the buffer pointed to by the `inData` parameter.
- `inData`: The buffer containing the data to be used as the new property value.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

The property should not be considered changed until the HAL has called your property listener callback. Many HAL audio object properties are changed asynchronously.

## See Also

### Related Documentation

- [AudioHardwareServiceHasProperty(\_:\_:)](audiohardwareservicehasproperty%28____%29.md): Deprecated. Queries a HAL audio object about whether or not it has a specified property.
- [AudioHardwareServiceIsPropertySettable(\_:\_:\_:)](audiohardwareserviceispropertysettable%28______%29.md): Deprecated. Queries a HAL audio object about whether a specified property is settable.

### Functions

- [AudioFileReadPackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilereadpackets%28______________%29.md): Deprecated. Reads a fixed duration of audio data from an audio file.
- [AudioComponentGetIcon(\_:\_:)](audiocomponentgeticon%28____%29.md): Deprecated. The UIImage of the audio component’s icon.
- [AudioComponentGetLastActiveTime(\_:)](audiocomponentgetlastactivetime%28__%29.md): Deprecated. The time at which the application publishing the component was last active.
- [AudioHardwareServiceAddPropertyListener(\_:\_:\_:\_:)](audiohardwareserviceaddpropertylistener%28________%29.md): Deprecated. Registers a HAL audio object property listener callback function to be invoked when a specified property changes.
- [AudioHardwareServiceGetPropertyData(\_:\_:\_:\_:\_:\_:)](audiohardwareservicegetpropertydata%28____________%29.md): Deprecated. Gets the value for a specified property.
- [AudioHardwareServiceGetPropertyDataSize(\_:\_:\_:\_:\_:)](audiohardwareservicegetpropertydatasize%28__________%29.md): Deprecated. Gets the payload size for a given property.
- [AudioHardwareServiceHasProperty(\_:\_:)](audiohardwareservicehasproperty%28____%29.md): Deprecated. Queries a HAL audio object about whether or not it has a specified property.
- [AudioHardwareServiceIsPropertySettable(\_:\_:\_:)](audiohardwareserviceispropertysettable%28______%29.md): Deprecated. Queries a HAL audio object about whether a specified property is settable.
- [AudioHardwareServiceRemovePropertyListener(\_:\_:\_:\_:)](audiohardwareserviceremovepropertylistener%28________%29.md): Deprecated. Unregisters a HAL audio object property listener callback function.
- [AudioOutputUnitGetHostIcon(\_:\_:)](audiooutputunitgethosticon%28____%29.md): Deprecated. The host app’s icon.
- [AudioOutputUnitPublish(\_:\_:\_:\_:)](audiooutputunitpublish%28________%29.md): Deprecated. Registers an audio output unit for use by other applications.
- [AudioSessionAddPropertyListener(\_:\_:\_:)](audiosessionaddpropertylistener%28______%29.md): Deprecated. Adds a property listener callback function to your application’s audio session object.
- [AudioSessionGetProperty(\_:\_:\_:)](audiosessiongetproperty%28______%29.md): Deprecated. Gets the value of a specified audio session property.
- [AudioSessionGetPropertySize(\_:\_:)](audiosessiongetpropertysize%28____%29.md): Deprecated. Gets the size of the value for a specified audio session property.
- [AudioSessionInitialize(\_:\_:\_:\_:)](audiosessioninitialize%28________%29.md): Deprecated. Initializes an iOS application’s audio session object.

# AudioHardwareServiceSetPropertyData (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.11)

Asks a HAL audio object to change the value of a specified property.

> no longer supported

## Declaration

```objectivec
extern OSStatus AudioHardwareServiceSetPropertyData(AudioObjectID inObjectID, const AudioObjectPropertyAddress *inAddress, UInt32 inQualifierDataSize, const void *inQualifierData, UInt32 inDataSize, const void *inData);
```

## Parameters

- `inObjectID`: The HAL audio object to set a property value on.
- `inAddress`: The property to set.
- `inQualifierDataSize`: A `UInt32` value indicating the size of the buffer pointed to by the `inQualifierData` parameter. Not all properties require qualification; in such a case you set this parameter to `0`.
- `inQualifierData`: A buffer of data to be used in determining the value of the property being queried. Not all properties require qualification; in such a case you set this parameter to `NULL`.
- `inDataSize`: A `UInt32` value indicating the size of the buffer pointed to by the `inData` parameter.
- `inData`: The buffer containing the data to be used as the new property value.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

The property should not be considered changed until the HAL has called your property listener callback. Many HAL audio object properties are changed asynchronously.

## See Also

### Related Documentation

- [AudioHardwareServiceHasProperty](audiohardwareservicehasproperty%28____%29.md): Deprecated. Queries a HAL audio object about whether or not it has a specified property.
- [AudioHardwareServiceIsPropertySettable](audiohardwareserviceispropertysettable%28______%29.md): Deprecated. Queries a HAL audio object about whether a specified property is settable.

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
