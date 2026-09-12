> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitpropertylistenerproc](https://developer.apple.com/documentation/audiotoolbox/audiounitpropertylistenerproc)

# AudioUnitPropertyListenerProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Called by the system when the value of a specified audio unit property has changed.

## Declaration

```swift
typealias AudioUnitPropertyListenerProc = (UnsafeMutableRawPointer, AudioUnit, AudioUnitPropertyID, AudioUnitScope, AudioUnitElement) -> Void
```

## Parameters

- `inRefCon`: Custom data that you provided when registering your callback with the audio unit.
- `inUnit`: The audio unit upon which the specified property value has changed.
- `inID`: The property whose value has changed.
- `inScope`: The scope of the property whose value has changed.
- `inElement`: The element ID on the scope of the property whose value has changed.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

If you named your callback function `MyAudioUnitPropertyListenerProc`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

You register your `AudioUnitPropertyListenerProc` callback function using the [AudioUnitAddPropertyListener(\_:\_:\_:\_:)](audiounitaddpropertylistener%28________%29.md) function.

## See Also

### Audio Unit Types

- [ScheduledAudioFileRegion](scheduledaudiofileregion.md)
- [ScheduledAudioSlice](scheduledaudioslice.md)
- [ScheduledAudioFileRegionCompletionProc](scheduledaudiofileregioncompletionproc.md)
- [ScheduledAudioSliceCompletionProc](scheduledaudioslicecompletionproc.md)
- [MIDIChannelNumber](midichannelnumber.md): MIDI Channel, 0~15 (channels 1 through 16, respectively).
- [AUAudioObjectID](auaudioobjectid.md)
- [AUMIDICIProfileChangedBlock](aumidiciprofilechangedblock.md)
- [AUAudioChannelCount](auaudiochannelcount.md): A number of audio channels.
- [AUAudioFrameCount](auaudioframecount.md): A number of audio sample frames.
- [AUAudioUnitStatus](auaudiounitstatus.md): A result code returned from an audio unit’s render function.
- [AUEventListenerProc](aueventlistenerproc.md)
- [AUEventListenerRef](aueventlistenerref.md)
- [AUEventSampleTime](aueventsampletime.md): Expresses time as a sample count.
- [AUImplementorValueObserver](auimplementorvalueobserver.md): A block called to notify the audio unit implementation of changes to a parameter value.
- [AUImplementorValueProvider](auimplementorvalueprovider.md): A block called to fetch a parameter’s current value from the audio unit implementation.

# AudioUnitPropertyListenerProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Called by the system when the value of a specified audio unit property has changed.

## Declaration

```objectivec
typedef void (*)(void *, struct OpaqueAudioComponentInstance *, unsigned int, unsigned int, unsigned int) AudioUnitPropertyListenerProc;
```

```objectivec
typedef void (*)(void *, struct ComponentInstanceRecord *, unsigned int, unsigned int, unsigned int) AudioUnitPropertyListenerProc;
```

## Parameters

- `inRefCon`: Custom data that you provided when registering your callback with the audio unit.
- `inUnit`: The audio unit upon which the specified property value has changed.
- `inID`: The property whose value has changed.
- `inScope`: The scope of the property whose value has changed.
- `inElement`: The element ID on the scope of the property whose value has changed.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

If you named your callback function `MyAudioUnitPropertyListenerProc`, you would declare it like this:

<a id="Discussion"></a>

### Discussion

You register your `AudioUnitPropertyListenerProc` callback function using the [AudioUnitAddPropertyListener](audiounitaddpropertylistener%28________%29.md) function.

## See Also

### Audio Unit Types

- [ScheduledAudioFileRegion](scheduledaudiofileregion.md)
- [ScheduledAudioSlice](scheduledaudioslice.md)
- [ScheduledAudioFileRegionCompletionProc](scheduledaudiofileregioncompletionproc.md)
- [ScheduledAudioSliceCompletionProc](scheduledaudioslicecompletionproc.md)
- [MIDIChannelNumber](midichannelnumber.md): MIDI Channel, 0~15 (channels 1 through 16, respectively).
- [AUAudioObjectID](auaudioobjectid.md)
- [AUMIDICIProfileChangedBlock](aumidiciprofilechangedblock.md)
- [AUAudioChannelCount](auaudiochannelcount.md): A number of audio channels.
- [AUAudioFrameCount](auaudioframecount.md): A number of audio sample frames.
- [AUAudioUnitStatus](auaudiounitstatus.md): A result code returned from an audio unit’s render function.
- [AUEventListenerProc](aueventlistenerproc.md)
- [AUEventListenerRef](aueventlistenerref.md)
- [AUEventSampleTime](aueventsampletime.md): Expresses time as a sample count.
- [AUImplementorValueObserver](auimplementorvalueobserver.md): A block called to notify the audio unit implementation of changes to a parameter value.
- [AUImplementorValueProvider](auimplementorvalueprovider.md): A block called to fetch a parameter’s current value from the audio unit implementation.
