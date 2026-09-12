> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/clock-utilities](https://developer.apple.com/documentation/audiotoolbox/clock-utilities)

# Clock Utilities (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Manage time-related information associated with audio playback.

## Topics

### Creating a Clock

- [CAClockNew(\_:\_:)](caclocknew%28____%29.md)
- [CAClockDispose(\_:)](caclockdispose%28__%29.md)
- [CAClockRef](caclockref.md)

### Starting and Stopping the Clock

- [CAClockStart(\_:)](caclockstart%28__%29.md)
- [CAClockStop(\_:)](caclockstop%28__%29.md)
- [CAClockArm(\_:)](caclockarm%28__%29.md)
- [CAClockDisarm(\_:)](caclockdisarm%28__%29.md)

### Adding and Removing Listeners

- [CAClockAddListener(\_:\_:\_:)](caclockaddlistener%28______%29.md)
- [CAClockRemoveListener(\_:\_:\_:)](caclockremovelistener%28______%29.md)
- [CAClockListenerProc](caclocklistenerproc.md)
- [CAClockMessage](caclockmessage.md)

### Accessing the Current Time

- [CAClockGetCurrentTime(\_:\_:\_:)](caclockgetcurrenttime%28______%29.md)
- [CAClockSetCurrentTime(\_:\_:)](caclocksetcurrenttime%28____%29.md)
- [CAClockGetStartTime(\_:\_:\_:)](caclockgetstarttime%28______%29.md)
- [CAClockTime](caclocktime.md)
- [CAClockTimeFormat](caclocktimeformat.md)
- [CAClockSamples](caclocksamples.md)

### Accessing Tempo Information

- [CAClockGetCurrentTempo(\_:\_:\_:)](caclockgetcurrenttempo%28______%29.md)
- [CAClockSetCurrentTempo(\_:\_:\_:)](caclocksetcurrenttempo%28______%29.md)
- [CAClockGetPlayRate(\_:\_:)](caclockgetplayrate%28____%29.md)
- [CAClockSetPlayRate(\_:\_:)](caclocksetplayrate%28____%29.md)
- [CAClockTempo](caclocktempo.md)
- [CATempoMapEntry](catempomapentry.md)

### Accessing Clock Properties

- [CAClockGetProperty(\_:\_:\_:\_:)](caclockgetproperty%28________%29.md)
- [CAClockGetPropertyInfo(\_:\_:\_:\_:)](caclockgetpropertyinfo%28________%29.md)
- [CAClockSetProperty(\_:\_:\_:\_:)](caclocksetproperty%28________%29.md)
- [CAClockPropertyID](caclockpropertyid.md)
- [CAClockSyncMode](caclocksyncmode.md)

### Parsing MIDI Data

- [CAClockParseMIDI(\_:\_:)](caclockparsemidi%28____%29.md)

### Converting Time Values

- [CAClockBarBeatTimeToBeats(\_:\_:\_:)](caclockbarbeattimetobeats%28______%29.md)
- [CAClockBeatsToBarBeatTime(\_:\_:\_:\_:)](caclockbeatstobarbeattime%28________%29.md)
- [CAClockSMPTETimeToSeconds(\_:\_:\_:)](caclocksmptetimetoseconds%28______%29.md)
- [CAClockSecondsToSMPTETime(\_:\_:\_:\_:)](caclocksecondstosmptetime%28________%29.md)
- [CAClockTranslateTime(\_:\_:\_:\_:)](caclocktranslatetime%28________%29.md)
- [CAClockTimebase](caclocktimebase.md)
- [CAClockSeconds](caclockseconds.md)
- [CAClockBeats](caclockbeats.md)
- [CAClockSMPTEFormat](caclocksmpteformat.md)
- [CABarBeatTime](cabarbeattime.md)
- [CAMeterTrackEntry](cametertrackentry.md)

### Getting Clock-Related Errors

- [Clock Errors](1513526-clock-errors.md)

## See Also

### Utilities

- [Analyzing audio performance with Instruments](analyzing-audio-performance-with-instruments.md): Ensure a smooth and immersive audio experience in your apps using Audio System Trace.
- [Audio Converter Services](audio-converter-services.md): Convert between linear PCM audio formats, and between linear PCM and compressed formats.
- [Audio Session Support](audio-session-support.md): Describe the properties that you associate with audio sessions and audio routes.
- [Audio Toolbox Debugging](audio-toolbox-debugging.md): Obtain the internal state of Core Audio objects during the development and debugging of your code.
- [Workgroup Management](workgroup-management.md): Coordinate the activity of custom real-time audio threads with those of the system and other processes.
- [Audio Codec](audio-codec.md): Translate audio data from one format to another.

# Clock Utilities (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Manage time-related information associated with audio playback.

## Topics

### Creating a Clock

- [CAClockNew](caclocknew%28____%29.md)
- [CAClockDispose](caclockdispose%28__%29.md)
- [CAClockRef](caclockref.md)

### Starting and Stopping the Clock

- [CAClockStart](caclockstart%28__%29.md)
- [CAClockStop](caclockstop%28__%29.md)
- [CAClockArm](caclockarm%28__%29.md)
- [CAClockDisarm](caclockdisarm%28__%29.md)

### Adding and Removing Listeners

- [CAClockAddListener](caclockaddlistener%28______%29.md)
- [CAClockRemoveListener](caclockremovelistener%28______%29.md)
- [CAClockListenerProc](caclocklistenerproc.md)
- [CAClockMessage](caclockmessage.md)

### Accessing the Current Time

- [CAClockGetCurrentTime](caclockgetcurrenttime%28______%29.md)
- [CAClockSetCurrentTime](caclocksetcurrenttime%28____%29.md)
- [CAClockGetStartTime](caclockgetstarttime%28______%29.md)
- [CAClockTime](caclocktime.md)
- [CAClockTimeFormat](caclocktimeformat.md)
- [CAClockSamples](caclocksamples.md)

### Accessing Tempo Information

- [CAClockGetCurrentTempo](caclockgetcurrenttempo%28______%29.md)
- [CAClockSetCurrentTempo](caclocksetcurrenttempo%28______%29.md)
- [CAClockGetPlayRate](caclockgetplayrate%28____%29.md)
- [CAClockSetPlayRate](caclocksetplayrate%28____%29.md)
- [CAClockTempo](caclocktempo.md)
- [CATempoMapEntry](catempomapentry.md)

### Accessing Clock Properties

- [CAClockGetProperty](caclockgetproperty%28________%29.md)
- [CAClockGetPropertyInfo](caclockgetpropertyinfo%28________%29.md)
- [CAClockSetProperty](caclocksetproperty%28________%29.md)
- [CAClockPropertyID](caclockpropertyid.md)
- [CAClockSyncMode](caclocksyncmode.md)

### Parsing MIDI Data

- [CAClockParseMIDI](caclockparsemidi%28____%29.md)

### Converting Time Values

- [CAClockBarBeatTimeToBeats](caclockbarbeattimetobeats%28______%29.md)
- [CAClockBeatsToBarBeatTime](caclockbeatstobarbeattime%28________%29.md)
- [CAClockSMPTETimeToSeconds](caclocksmptetimetoseconds%28______%29.md)
- [CAClockSecondsToSMPTETime](caclocksecondstosmptetime%28________%29.md)
- [CAClockTranslateTime](caclocktranslatetime%28________%29.md)
- [CAClockTimebase](caclocktimebase.md)
- [CAClockSeconds](caclockseconds.md)
- [CAClockBeats](caclockbeats.md)
- [CAClockSMPTEFormat](caclocksmpteformat.md)
- [CABarBeatTime](cabarbeattime.md)
- [CAMeterTrackEntry](cametertrackentry.md)

### Getting Clock-Related Errors

- [Clock Errors](1513526-clock-errors.md)

## See Also

### Utilities

- [Analyzing audio performance with Instruments](analyzing-audio-performance-with-instruments.md): Ensure a smooth and immersive audio experience in your apps using Audio System Trace.
- [Audio Converter Services](audio-converter-services.md): Convert between linear PCM audio formats, and between linear PCM and compressed formats.
- [Audio Session Support](audio-session-support.md): Describe the properties that you associate with audio sessions and audio routes.
- [Audio Toolbox Debugging](audio-toolbox-debugging.md): Obtain the internal state of Core Audio objects during the development and debugging of your code.
- [Workgroup Management](workgroup-management.md): Coordinate the activity of custom real-time audio threads with those of the system and other processes.
- [Audio Codec](audio-codec.md): Translate audio data from one format to another.
