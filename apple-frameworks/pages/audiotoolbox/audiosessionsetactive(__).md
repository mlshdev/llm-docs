> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiosessionsetactive(_:)](https://developer.apple.com/documentation/audiotoolbox/audiosessionsetactive(_:))

# AudioSessionSetActive(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Actives or deactivates your application’s audio session.

> Deprecated in iOS 7.0.

## Declaration

```swift
func AudioSessionSetActive(_ active: Bool) -> OSStatus
```

## Parameters

- `active`: Pass `true` to activate your application’s audio session, or `false` to deactivate it.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Activating your audio session may interrupt audio sessions belonging to other applications running in the background, depending on categories and priorities. Deactivating your audio session allows other, interrupted audio sessions to resume.

When another active audio session does not allow mixing, attempting to activate your audio session may fail.

## See Also

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
- [AudioHardwareServiceSetPropertyData(\_:\_:\_:\_:\_:\_:)](audiohardwareservicesetpropertydata%28____________%29.md): Deprecated. Asks a HAL audio object to change the value of a specified property.
- [AudioOutputUnitGetHostIcon(\_:\_:)](audiooutputunitgethosticon%28____%29.md): Deprecated. The host app’s icon.
- [AudioOutputUnitPublish(\_:\_:\_:\_:)](audiooutputunitpublish%28________%29.md): Deprecated. Registers an audio output unit for use by other applications.
- [AudioSessionAddPropertyListener(\_:\_:\_:)](audiosessionaddpropertylistener%28______%29.md): Deprecated. Adds a property listener callback function to your application’s audio session object.
- [AudioSessionGetProperty(\_:\_:\_:)](audiosessiongetproperty%28______%29.md): Deprecated. Gets the value of a specified audio session property.
- [AudioSessionGetPropertySize(\_:\_:)](audiosessiongetpropertysize%28____%29.md): Deprecated. Gets the size of the value for a specified audio session property.

# AudioSessionSetActive (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Actives or deactivates your application’s audio session.

> Deprecated in iOS 7.0.

## Declaration

```objectivec
extern OSStatus AudioSessionSetActive(Boolean active);
```

## Parameters

- `active`: Pass `true` to activate your application’s audio session, or `false` to deactivate it.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Activating your audio session may interrupt audio sessions belonging to other applications running in the background, depending on categories and priorities. Deactivating your audio session allows other, interrupted audio sessions to resume.

When another active audio session does not allow mixing, attempting to activate your audio session may fail.

## See Also

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
