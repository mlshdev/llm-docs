> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/music-player](https://developer.apple.com/documentation/audiotoolbox/music-player)

# Music Player (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Create and play a sequence of tracks, and manage aspects of playback in response to standard events.

## Topics

### Managing a Music Player

- [NewMusicPlayer(\_:)](newmusicplayer%28__%29.md): Creates a new music player.
- [DisposeMusicPlayer(\_:)](disposemusicplayer%28__%29.md): Disposes of a music player.
- [MusicPlayerGetBeatsForHostTime(\_:\_:\_:)](musicplayergetbeatsforhosttime%28______%29.md): Gets the beat number associated a specified host time.
- [MusicPlayerGetHostTimeForBeats(\_:\_:\_:)](musicplayergethosttimeforbeats%28______%29.md): Gets the host time associated with a specified beat.
- [MusicPlayerGetPlayRateScalar(\_:\_:)](musicplayergetplayratescalar%28____%29.md): Gets the playback rate multiplier for a music player.
- [MusicPlayerGetSequence(\_:\_:)](musicplayergetsequence%28____%29.md): Gets the music sequence associated with a music player.
- [MusicPlayerGetTime(\_:\_:)](musicplayergettime%28____%29.md): Gets the playback point for a music player, in beats.
- [MusicPlayerIsPlaying(\_:\_:)](musicplayerisplaying%28____%29.md): Indicates whether or not a music player is playing.
- [MusicPlayerPreroll(\_:)](musicplayerpreroll%28__%29.md): Prepares a music player to play.
- [MusicPlayerSetPlayRateScalar(\_:\_:)](musicplayersetplayratescalar%28____%29.md): Sets a playback rate multiplier for a music player.
- [MusicPlayerSetSequence(\_:\_:)](musicplayersetsequence%28____%29.md): Sets the music sequence for the music player to play.
- [MusicPlayerSetTime(\_:\_:)](musicplayersettime%28____%29.md): Sets the playback point for a music player, in beats.
- [MusicPlayerStart(\_:)](musicplayerstart%28__%29.md): Starts playback of a music player.
- [MusicPlayerStop(\_:)](musicplayerstop%28__%29.md): Stops playback of a music player.
- [MusicPlayer](musicplayer.md): A music player plays a music sequence (of type `MusicSequence`).
- [MusicTimeStamp](musictimestamp.md): A timestamp for use by a music sequence.
- [kMusicTimeStamp_EndOfTrack](kmusictimestamp_endoftrack.md): Indicates a time immediately beyond the last music event in a music track. Use this value when selecting all music events starting at a designated time and extending to, and including, the last event in a track. Also use this value to position an iterator for moving backward through a track, from the end to the start. See also [NewMusicEventIterator(\_:\_:)](newmusiceventiterator%28____%29.md) and [MusicEventIteratorSeek(\_:\_:)](musiceventiteratorseek%28____%29.md).

### Iterating Over Music Events

- [NewMusicEventIterator(\_:\_:)](newmusiceventiterator%28____%29.md): Creates a new music event iterator.
- [DisposeMusicEventIterator(\_:)](disposemusiceventiterator%28__%29.md): Disposes of a music event iterator.
- [MusicEventIteratorNextEvent(\_:)](musiceventiteratornextevent%28__%29.md): Positions a music event iterator at the next event on a music track.
- [MusicEventIteratorSeek(\_:\_:)](musiceventiteratorseek%28____%29.md): Positions a music event iterator at a specified timestamp, in beats.
- [MusicEventIteratorDeleteEvent(\_:)](musiceventiteratordeleteevent%28__%29.md): Deletes the event at a music event iterator’s current position.
- [MusicEventIteratorGetEventInfo(\_:\_:\_:\_:\_:)](musiceventiteratorgeteventinfo%28__________%29.md): Gets information about the event at a music event iterator’s current position.
- [MusicEventIteratorHasCurrentEvent(\_:\_:)](musiceventiteratorhascurrentevent%28____%29.md): Indicates whether or not a music track contains an event at the music event iterator’s current position.
- [MusicEventIteratorHasNextEvent(\_:\_:)](musiceventiteratorhasnextevent%28____%29.md): Indicates whether or not a music track contains an event beyond the music event iterator’s current position.
- [MusicEventIteratorHasPreviousEvent(\_:\_:)](musiceventiteratorhaspreviousevent%28____%29.md): Indicates whether or not a music track contains an event before the music event iterator’s current position.
- [MusicEventIteratorPreviousEvent(\_:)](musiceventiteratorpreviousevent%28__%29.md): Positions a music event iterator at the previous event on a music track.
- [MusicEventIteratorSetEventInfo(\_:\_:\_:)](musiceventiteratorseteventinfo%28______%29.md): Sets information for the event at a music event iterator’s current position.
- [MusicEventIteratorSetEventTime(\_:\_:)](musiceventiteratorseteventtime%28____%29.md): Sets the timestamp for the event at a music event iterator’s current position.
- [MusicEventIterator](musiceventiterator.md): A music event iterator sequentially handles events on a music track.
- [MusicEventType](musiceventtype.md): MIDI and other music event types, used by music event iterator functions.
- [ExtendedNoteOnEvent](extendednoteonevent.md): Describes a note-on event with extended parameters.
- [ExtendedTempoEvent](extendedtempoevent.md): Describes a music track tempo in beats-per-minute.
- [MusicEventUserData](musiceventuserdata.md): Describes a user-defined event.
- [ParameterEvent](parameterevent.md): Describes an audio unit parameter automation event.
- [MusicDeviceNoteParams](musicdevicenoteparams.md)
- [MusicDeviceStdNoteParams](musicdevicestdnoteparams.md)
- [NoteParamsControlValue](noteparamscontrolvalue.md)

### Managing Music Sequences

- [NewMusicSequence(\_:)](newmusicsequence%28__%29.md): Creates a new empty music sequence.
- [DisposeMusicSequence(\_:)](disposemusicsequence%28__%29.md): Disposes of a music sequence.
- [MusicSequenceBarBeatTimeToBeats(\_:\_:\_:)](musicsequencebarbeattimetobeats%28______%29.md): Formats a music sequence’s bar-beat time to its beat time.
- [MusicSequenceBeatsToBarBeatTime(\_:\_:\_:\_:)](musicsequencebeatstobarbeattime%28________%29.md): Formats a music sequence’s beat time to its bar-beat time.
- [MusicSequenceDisposeTrack(\_:\_:)](musicsequencedisposetrack%28____%29.md): Removes a music track from a music sequence, and disposes of the track.
- [MusicSequenceFileCreate(\_:\_:\_:\_:\_:)](musicsequencefilecreate%28__________%29.md): Creates a MIDI file from the events in a music sequence.
- [MusicSequenceFileCreateData(\_:\_:\_:\_:\_:)](musicsequencefilecreatedata%28__________%29.md): Creates a data object containing the events from a music sequence.
- [MusicSequenceFileLoad(\_:\_:\_:\_:)](musicsequencefileload%28________%29.md): Loads data into a music sequence from a URL reference.
- [MusicSequenceFileLoadData(\_:\_:\_:\_:)](musicsequencefileloaddata%28________%29.md): Load data into a music sequence from a data reference.
- [MusicSequenceGetAUGraph(\_:\_:)](musicsequencegetaugraph%28____%29.md): Gets the audio processing graph associated with a music sequence.
- [MusicSequenceGetBeatsForSeconds(\_:\_:\_:)](musicsequencegetbeatsforseconds%28______%29.md): Calculates the number of beats that correspond to a number of seconds.
- [MusicSequenceGetIndTrack(\_:\_:\_:)](musicsequencegetindtrack%28______%29.md): Gets the music track at the specified track index.
- [MusicSequenceGetInfoDictionary(\_:)](musicsequencegetinfodictionary%28__%29.md): Returns a dictionary containing music sequence information.
- [MusicSequenceGetSMPTEResolution(\_:\_:\_:)](musicsequencegetsmpteresolution%28______%29.md)
- [MusicSequenceGetSecondsForBeats(\_:\_:\_:)](musicsequencegetsecondsforbeats%28______%29.md): Calculates the number of seconds that correspond to a number of beats.
- [MusicSequenceGetSequenceType(\_:\_:)](musicsequencegetsequencetype%28____%29.md): Gets the sequence type for a music sequence.
- [MusicSequenceGetTempoTrack(\_:\_:)](musicsequencegettempotrack%28____%29.md): Gets the tempo track for a music sequence.
- [MusicSequenceGetTrackCount(\_:\_:)](musicsequencegettrackcount%28____%29.md): Gets the number of music tracks owned by a music sequence.
- [MusicSequenceGetTrackIndex(\_:\_:\_:)](musicsequencegettrackindex%28______%29.md): Gets the index number for a specified music track.
- [MusicSequenceNewTrack(\_:\_:)](musicsequencenewtrack%28____%29.md): Add a new, empty music track to a music sequence.
- [MusicSequenceReverse(\_:)](musicsequencereverse%28__%29.md): Reverses the MIDI and tempo events in a music sequence, so the start becomes the end.
- [MusicSequenceSetAUGraph(\_:\_:)](musicsequencesetaugraph%28____%29.md): Associates an audio processing graph with a music sequence.
- [MusicSequenceSetMIDIEndpoint(\_:\_:)](musicsequencesetmidiendpoint%28____%29.md): Associates a specified MIDI endpoint with all music tracks in a music sequence.
- [MusicSequenceSetSMPTEResolution(\_:\_:)](musicsequencesetsmpteresolution%28____%29.md)
- [MusicSequenceSetSequenceType(\_:\_:)](musicsequencesetsequencetype%28____%29.md): Sets the sequence type for a music sequence.
- [MusicSequenceSetUserCallback(\_:\_:\_:)](musicsequencesetusercallback%28______%29.md): Registers a user callback function with a music sequence.
- [MusicSequence](musicsequence.md): A music sequence.
- [MusicSequenceUserCallback](musicsequenceusercallback.md)
- [MusicSequenceFileFlags](musicsequencefileflags.md): Flags that configure the behavior of the [MusicSequenceFileCreate(\_:\_:\_:\_:\_:)](musicsequencefilecreate%28__________%29.md) and [MusicSequenceFileCreateData(\_:\_:\_:\_:\_:)](musicsequencefilecreatedata%28__________%29.md) functions.
- [MusicSequenceLoadFlags](musicsequenceloadflags.md): Flags used to configure the behavior of the [MusicSequenceFileLoad(\_:\_:\_:\_:)](musicsequencefileload%28________%29.md) and [MusicSequenceFileLoadData(\_:\_:\_:\_:)](musicsequencefileloaddata%28________%29.md) functions.

### Managing Music Tracks

- [MusicTrackClear(\_:\_:\_:)](musictrackclear%28______%29.md): Removes a specified range of music track events.
- [MusicTrackCopyInsert(\_:\_:\_:\_:\_:)](musictrackcopyinsert%28__________%29.md): Copies a range of events from one music track and inserts them into another music track.
- [MusicTrackCut(\_:\_:\_:)](musictrackcut%28______%29.md): Removes a specified range of music track events, and shifts later events toward the start of the track to fill in the gap.
- [MusicTrackGetDestMIDIEndpoint(\_:\_:)](musictrackgetdestmidiendpoint%28____%29.md): Gets the MIDI endpoint that is the event target for a music track.
- [MusicTrackGetDestNode(\_:\_:)](musictrackgetdestnode%28____%29.md): Gets the audio unit node that is the event target for a music track.
- [MusicTrackGetProperty(\_:\_:\_:\_:)](musictrackgetproperty%28________%29.md): Gets a music track property value.
- [MusicTrackGetSequence(\_:\_:)](musictrackgetsequence%28____%29.md): Gets the music sequence that the music track is a member of.
- [MusicTrackMerge(\_:\_:\_:\_:\_:)](musictrackmerge%28__________%29.md): Copies a range of events from one music track and merges them into another music track.
- [MusicTrackMoveEvents(\_:\_:\_:\_:)](musictrackmoveevents%28________%29.md): Shifts music track events forward or backward in time, in terms of beats.
- [MusicTrackNewAUPresetEvent(\_:\_:\_:)](musictracknewaupresetevent%28______%29.md): Adds an event of type `AUPresetEvent` to a music track.
- [MusicTrackNewExtendedNoteEvent(\_:\_:\_:)](musictracknewextendednoteevent%28______%29.md): Adds an event of type `ExtendedNoteOnEvent` to a music track.
- [MusicTrackNewExtendedTempoEvent(\_:\_:\_:)](musictracknewextendedtempoevent%28______%29.md): Adds a tempo to a music track.
- [MusicTrackNewMIDIChannelEvent(\_:\_:\_:)](musictracknewmidichannelevent%28______%29.md): Adds an event of type `MIDIChannelMessage` to a music track.
- [MusicTrackNewMIDINoteEvent(\_:\_:\_:)](musictracknewmidinoteevent%28______%29.md): Adds an event of type `MIDINoteMessage` to a music track.
- [MusicTrackNewMIDIRawDataEvent(\_:\_:\_:)](musictracknewmidirawdataevent%28______%29.md): Adds an event of type `MIDIRawData` to a music track.
- [MusicTrackNewMetaEvent(\_:\_:\_:)](musictracknewmetaevent%28______%29.md): Adds an event of type `MIDIMetaEvent` to a music track.
- [MusicTrackNewParameterEvent(\_:\_:\_:)](musictracknewparameterevent%28______%29.md): Adds an event of type `ParameterEvent` to a music track.
- [MusicTrackNewUserEvent(\_:\_:\_:)](musictracknewuserevent%28______%29.md): Adds an event of type `MusicEventUserData` to a music track.
- [MusicTrackSetDestMIDIEndpoint(\_:\_:)](musictracksetdestmidiendpoint%28____%29.md): Sets the music track’s event target to a MIDI endpoint.
- [MusicTrackSetDestNode(\_:\_:)](musictracksetdestnode%28____%29.md): Sets the music track’s event target to an audio unit node.
- [MusicTrackSetProperty(\_:\_:\_:\_:)](musictracksetproperty%28________%29.md): Sets a music track property value.
- [MusicTrack](musictrack.md): A music track consists of a series of music events, each timestamped using units of beats.
- [MusicTrackLoopInfo](musictrackloopinfo.md): Supports control of the looping behavior of a music track.
- [MIDIChannelMessage](midichannelmessage.md): Describes a MIDI channel message.
- [MIDIMetaEvent](midimetaevent.md): Describes a MIDI metaevent such as lyric text, time signature, and so on.
- [MIDINoteMessage](midinotemessage.md): Describes a MIDI note.
- [MIDIRawData](midirawdata.md): Describes a MIDI system-exclusive (SysEx) message.

### Interacting with Music Devices

- [MusicDeviceMIDIEvent(\_:\_:\_:\_:\_:)](musicdevicemidievent%28__________%29.md)
- [MusicDeviceMIDIEventList(\_:\_:\_:)](musicdevicemidieventlist%28______%29.md)
- [MusicDeviceStartNote(\_:\_:\_:\_:\_:\_:)](musicdevicestartnote%28____________%29.md)
- [MusicDeviceStopNote(\_:\_:\_:\_:)](musicdevicestopnote%28________%29.md)
- [MusicDeviceSysEx(\_:\_:\_:)](musicdevicesysex%28______%29.md)
- [MusicDeviceComponent](musicdevicecomponent.md)
- [MusicDeviceGroupID](musicdevicegroupid.md)
- [MusicDeviceInstrumentID](musicdeviceinstrumentid.md)
- [MusicDeviceMIDIEventProc](musicdevicemidieventproc.md)
- [MusicDeviceStartNoteProc](musicdevicestartnoteproc.md)
- [MusicDeviceStopNoteProc](musicdevicestopnoteproc.md)
- [MusicDeviceSysExProc](musicdevicesysexproc.md)

### Enumerations

- [Music Instrument Audio Unit Subtypes](1619498-music-instrument-audio-unit-subt.md)
- [Music Track Properties](1515456-music-track-properties.md): Properties for music tracks.
- [MusicSequenceFileFlags](musicsequencefileflags.md): Flags that configure the behavior of the [MusicSequenceFileCreate(\_:\_:\_:\_:\_:)](musicsequencefilecreate%28__________%29.md) and [MusicSequenceFileCreateData(\_:\_:\_:\_:\_:)](musicsequencefilecreatedata%28__________%29.md) functions.
- [MusicSequenceFileTypeID](musicsequencefiletypeid.md): The various types of files that can be parsed by a music sequence.
- [MusicSequenceLoadFlags](musicsequenceloadflags.md): Flags used to configure the behavior of the [MusicSequenceFileLoad(\_:\_:\_:\_:)](musicsequencefileload%28________%29.md) and [MusicSequenceFileLoadData(\_:\_:\_:\_:)](musicsequencefileloaddata%28________%29.md) functions.
- [MusicSequenceType](musicsequencetype.md): The various types of music sequences.
- [Music Extended Control Event Type](1515446-music-extended-control-event-typ.md)
- [Music Player Errors](1515472-music-player-errors.md)
- [Music Event Types](1515479-music-event-types.md)
- [Music Note Events](1473494-music-note-events.md)
- [Music Device Selectors](1473469-music-device-selectors.md)
- [Music Device Properties](1533931-music-device-properties.md)
- [Music Device Sample Frame Mask](1533978-music-device-sample-frame-mask.md)
- [Music Device Unit Properties](1533963-music-device-unit-properties.md)
- [Instrument Types](1534202-instrument-types.md)
- [Music Device Generic Properties](1533930-music-device-generic-properties.md)
- [Music Effect and Instrument Unit Properties](1533941-music-effect-and-instrument-unit.md)
- [DLS Music Device Properties](1534153-dls-music-device-properties.md)
- [DLS Music Device Parameters](1389667-dls-music-device-parameters.md)

## See Also

### Playback and Recording

- [Audio Queue Services](audio-queue-services.md): Connect to audio hardware and manage the recording or playback process.
- [Audio Services](audio-services.md): Play short sounds or trigger a vibration effect on iOS devices with the appropriate hardware.
- [Anchoring sound to a window or volume](spatializing-sound-from-a-uiscene.md): Provide unique app experiences by attaching sounds to windows and volumes in 3D space.

# Music Player (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Create and play a sequence of tracks, and manage aspects of playback in response to standard events.

## Topics

### Managing a Music Player

- [NewMusicPlayer](newmusicplayer%28__%29.md): Creates a new music player.
- [DisposeMusicPlayer](disposemusicplayer%28__%29.md): Disposes of a music player.
- [MusicPlayerGetBeatsForHostTime](musicplayergetbeatsforhosttime%28______%29.md): Gets the beat number associated a specified host time.
- [MusicPlayerGetHostTimeForBeats](musicplayergethosttimeforbeats%28______%29.md): Gets the host time associated with a specified beat.
- [MusicPlayerGetPlayRateScalar](musicplayergetplayratescalar%28____%29.md): Gets the playback rate multiplier for a music player.
- [MusicPlayerGetSequence](musicplayergetsequence%28____%29.md): Gets the music sequence associated with a music player.
- [MusicPlayerGetTime](musicplayergettime%28____%29.md): Gets the playback point for a music player, in beats.
- [MusicPlayerIsPlaying](musicplayerisplaying%28____%29.md): Indicates whether or not a music player is playing.
- [MusicPlayerPreroll](musicplayerpreroll%28__%29.md): Prepares a music player to play.
- [MusicPlayerSetPlayRateScalar](musicplayersetplayratescalar%28____%29.md): Sets a playback rate multiplier for a music player.
- [MusicPlayerSetSequence](musicplayersetsequence%28____%29.md): Sets the music sequence for the music player to play.
- [MusicPlayerSetTime](musicplayersettime%28____%29.md): Sets the playback point for a music player, in beats.
- [MusicPlayerStart](musicplayerstart%28__%29.md): Starts playback of a music player.
- [MusicPlayerStop](musicplayerstop%28__%29.md): Stops playback of a music player.
- [MusicPlayer](musicplayer.md): A music player plays a music sequence (of type `MusicSequence`).
- [MusicTimeStamp](musictimestamp.md): A timestamp for use by a music sequence.
- [kMusicTimeStamp_EndOfTrack](kmusictimestamp_endoftrack.md): Indicates a time immediately beyond the last music event in a music track. Use this value when selecting all music events starting at a designated time and extending to, and including, the last event in a track. Also use this value to position an iterator for moving backward through a track, from the end to the start. See also [NewMusicEventIterator](newmusiceventiterator%28____%29.md) and [MusicEventIteratorSeek](musiceventiteratorseek%28____%29.md).

### Iterating Over Music Events

- [NewMusicEventIterator](newmusiceventiterator%28____%29.md): Creates a new music event iterator.
- [DisposeMusicEventIterator](disposemusiceventiterator%28__%29.md): Disposes of a music event iterator.
- [MusicEventIteratorNextEvent](musiceventiteratornextevent%28__%29.md): Positions a music event iterator at the next event on a music track.
- [MusicEventIteratorSeek](musiceventiteratorseek%28____%29.md): Positions a music event iterator at a specified timestamp, in beats.
- [MusicEventIteratorDeleteEvent](musiceventiteratordeleteevent%28__%29.md): Deletes the event at a music event iterator’s current position.
- [MusicEventIteratorGetEventInfo](musiceventiteratorgeteventinfo%28__________%29.md): Gets information about the event at a music event iterator’s current position.
- [MusicEventIteratorHasCurrentEvent](musiceventiteratorhascurrentevent%28____%29.md): Indicates whether or not a music track contains an event at the music event iterator’s current position.
- [MusicEventIteratorHasNextEvent](musiceventiteratorhasnextevent%28____%29.md): Indicates whether or not a music track contains an event beyond the music event iterator’s current position.
- [MusicEventIteratorHasPreviousEvent](musiceventiteratorhaspreviousevent%28____%29.md): Indicates whether or not a music track contains an event before the music event iterator’s current position.
- [MusicEventIteratorPreviousEvent](musiceventiteratorpreviousevent%28__%29.md): Positions a music event iterator at the previous event on a music track.
- [MusicEventIteratorSetEventInfo](musiceventiteratorseteventinfo%28______%29.md): Sets information for the event at a music event iterator’s current position.
- [MusicEventIteratorSetEventTime](musiceventiteratorseteventtime%28____%29.md): Sets the timestamp for the event at a music event iterator’s current position.
- [MusicEventIterator](musiceventiterator.md): A music event iterator sequentially handles events on a music track.
- [MusicEventType](musiceventtype.md): MIDI and other music event types, used by music event iterator functions.
- [ExtendedNoteOnEvent](extendednoteonevent.md): Describes a note-on event with extended parameters.
- [ExtendedTempoEvent](extendedtempoevent.md): Describes a music track tempo in beats-per-minute.
- [MusicEventUserData](musiceventuserdata.md): Describes a user-defined event.
- [ParameterEvent](parameterevent.md): Describes an audio unit parameter automation event.
- [MusicDeviceNoteParams](musicdevicenoteparams.md)
- [MusicDeviceStdNoteParams](musicdevicestdnoteparams.md)
- [NoteParamsControlValue](noteparamscontrolvalue.md)

### Managing Music Sequences

- [NewMusicSequence](newmusicsequence%28__%29.md): Creates a new empty music sequence.
- [DisposeMusicSequence](disposemusicsequence%28__%29.md): Disposes of a music sequence.
- [MusicSequenceBarBeatTimeToBeats](musicsequencebarbeattimetobeats%28______%29.md): Formats a music sequence’s bar-beat time to its beat time.
- [MusicSequenceBeatsToBarBeatTime](musicsequencebeatstobarbeattime%28________%29.md): Formats a music sequence’s beat time to its bar-beat time.
- [MusicSequenceDisposeTrack](musicsequencedisposetrack%28____%29.md): Removes a music track from a music sequence, and disposes of the track.
- [MusicSequenceFileCreate](musicsequencefilecreate%28__________%29.md): Creates a MIDI file from the events in a music sequence.
- [MusicSequenceFileCreateData](musicsequencefilecreatedata%28__________%29.md): Creates a data object containing the events from a music sequence.
- [MusicSequenceFileLoad](musicsequencefileload%28________%29.md): Loads data into a music sequence from a URL reference.
- [MusicSequenceFileLoadData](musicsequencefileloaddata%28________%29.md): Load data into a music sequence from a data reference.
- [MusicSequenceGetAUGraph](musicsequencegetaugraph%28____%29.md): Gets the audio processing graph associated with a music sequence.
- [MusicSequenceGetBeatsForSeconds](musicsequencegetbeatsforseconds%28______%29.md): Calculates the number of beats that correspond to a number of seconds.
- [MusicSequenceGetIndTrack](musicsequencegetindtrack%28______%29.md): Gets the music track at the specified track index.
- [MusicSequenceGetInfoDictionary](musicsequencegetinfodictionary%28__%29.md): Returns a dictionary containing music sequence information.
- [MusicSequenceGetSMPTEResolution](musicsequencegetsmpteresolution%28______%29.md)
- [MusicSequenceGetSecondsForBeats](musicsequencegetsecondsforbeats%28______%29.md): Calculates the number of seconds that correspond to a number of beats.
- [MusicSequenceGetSequenceType](musicsequencegetsequencetype%28____%29.md): Gets the sequence type for a music sequence.
- [MusicSequenceGetTempoTrack](musicsequencegettempotrack%28____%29.md): Gets the tempo track for a music sequence.
- [MusicSequenceGetTrackCount](musicsequencegettrackcount%28____%29.md): Gets the number of music tracks owned by a music sequence.
- [MusicSequenceGetTrackIndex](musicsequencegettrackindex%28______%29.md): Gets the index number for a specified music track.
- [MusicSequenceNewTrack](musicsequencenewtrack%28____%29.md): Add a new, empty music track to a music sequence.
- [MusicSequenceReverse](musicsequencereverse%28__%29.md): Reverses the MIDI and tempo events in a music sequence, so the start becomes the end.
- [MusicSequenceSetAUGraph](musicsequencesetaugraph%28____%29.md): Associates an audio processing graph with a music sequence.
- [MusicSequenceSetMIDIEndpoint](musicsequencesetmidiendpoint%28____%29.md): Associates a specified MIDI endpoint with all music tracks in a music sequence.
- [MusicSequenceSetSMPTEResolution](musicsequencesetsmpteresolution%28____%29.md)
- [MusicSequenceSetSequenceType](musicsequencesetsequencetype%28____%29.md): Sets the sequence type for a music sequence.
- [MusicSequenceSetUserCallback](musicsequencesetusercallback%28______%29.md): Registers a user callback function with a music sequence.
- [MusicSequence](musicsequence.md): A music sequence.
- [MusicSequenceUserCallback](musicsequenceusercallback.md)
- [MusicSequenceFileFlags](musicsequencefileflags.md): Flags that configure the behavior of the [MusicSequenceFileCreate](musicsequencefilecreate%28__________%29.md) and [MusicSequenceFileCreateData](musicsequencefilecreatedata%28__________%29.md) functions.
- [MusicSequenceLoadFlags](musicsequenceloadflags.md): Flags used to configure the behavior of the [MusicSequenceFileLoad](musicsequencefileload%28________%29.md) and [MusicSequenceFileLoadData](musicsequencefileloaddata%28________%29.md) functions.

### Managing Music Tracks

- [NewMusicTrackFrom](newmusictrackfrom.md): Deprecated.
- [MusicTrackClear](musictrackclear%28______%29.md): Removes a specified range of music track events.
- [MusicTrackCopyInsert](musictrackcopyinsert%28__________%29.md): Copies a range of events from one music track and inserts them into another music track.
- [MusicTrackCut](musictrackcut%28______%29.md): Removes a specified range of music track events, and shifts later events toward the start of the track to fill in the gap.
- [MusicTrackGetDestMIDIEndpoint](musictrackgetdestmidiendpoint%28____%29.md): Gets the MIDI endpoint that is the event target for a music track.
- [MusicTrackGetDestNode](musictrackgetdestnode%28____%29.md): Gets the audio unit node that is the event target for a music track.
- [MusicTrackGetProperty](musictrackgetproperty%28________%29.md): Gets a music track property value.
- [MusicTrackGetSequence](musictrackgetsequence%28____%29.md): Gets the music sequence that the music track is a member of.
- [MusicTrackMerge](musictrackmerge%28__________%29.md): Copies a range of events from one music track and merges them into another music track.
- [MusicTrackMoveEvents](musictrackmoveevents%28________%29.md): Shifts music track events forward or backward in time, in terms of beats.
- [MusicTrackNewAUPresetEvent](musictracknewaupresetevent%28______%29.md): Adds an event of type `AUPresetEvent` to a music track.
- [MusicTrackNewExtendedNoteEvent](musictracknewextendednoteevent%28______%29.md): Adds an event of type `ExtendedNoteOnEvent` to a music track.
- [MusicTrackNewExtendedTempoEvent](musictracknewextendedtempoevent%28______%29.md): Adds a tempo to a music track.
- [MusicTrackNewMIDIChannelEvent](musictracknewmidichannelevent%28______%29.md): Adds an event of type `MIDIChannelMessage` to a music track.
- [MusicTrackNewMIDINoteEvent](musictracknewmidinoteevent%28______%29.md): Adds an event of type `MIDINoteMessage` to a music track.
- [MusicTrackNewMIDIRawDataEvent](musictracknewmidirawdataevent%28______%29.md): Adds an event of type `MIDIRawData` to a music track.
- [MusicTrackNewMetaEvent](musictracknewmetaevent%28______%29.md): Adds an event of type `MIDIMetaEvent` to a music track.
- [MusicTrackNewParameterEvent](musictracknewparameterevent%28______%29.md): Adds an event of type `ParameterEvent` to a music track.
- [MusicTrackNewUserEvent](musictracknewuserevent%28______%29.md): Adds an event of type `MusicEventUserData` to a music track.
- [MusicTrackSetDestMIDIEndpoint](musictracksetdestmidiendpoint%28____%29.md): Sets the music track’s event target to a MIDI endpoint.
- [MusicTrackSetDestNode](musictracksetdestnode%28____%29.md): Sets the music track’s event target to an audio unit node.
- [MusicTrackSetProperty](musictracksetproperty%28________%29.md): Sets a music track property value.
- [MusicTrack](musictrack.md): A music track consists of a series of music events, each timestamped using units of beats.
- [MusicTrackLoopInfo](musictrackloopinfo.md): Supports control of the looping behavior of a music track.
- [MIDIChannelMessage](midichannelmessage.md): Describes a MIDI channel message.
- [MIDIMetaEvent](midimetaevent.md): Describes a MIDI metaevent such as lyric text, time signature, and so on.
- [MIDINoteMessage](midinotemessage.md): Describes a MIDI note.
- [MIDIRawData](midirawdata.md): Describes a MIDI system-exclusive (SysEx) message.

### Interacting with Music Devices

- [MusicDeviceMIDIEvent](musicdevicemidievent%28__________%29.md)
- [MusicDeviceMIDIEventList](musicdevicemidieventlist%28______%29.md)
- [MusicDeviceStartNote](musicdevicestartnote%28____________%29.md)
- [MusicDeviceStopNote](musicdevicestopnote%28________%29.md)
- [MusicDeviceSysEx](musicdevicesysex%28______%29.md)
- [MusicDeviceComponent](musicdevicecomponent.md)
- [MusicDeviceGroupID](musicdevicegroupid.md)
- [MusicDeviceInstrumentID](musicdeviceinstrumentid.md)
- [MusicDeviceMIDIEventProc](musicdevicemidieventproc.md)
- [MusicDeviceStartNoteProc](musicdevicestartnoteproc.md)
- [MusicDeviceStopNoteProc](musicdevicestopnoteproc.md)
- [MusicDeviceSysExProc](musicdevicesysexproc.md)

### Enumerations

- [Music Instrument Audio Unit Subtypes](1619498-music-instrument-audio-unit-subt.md)
- [Music Track Properties](1515456-music-track-properties.md): Properties for music tracks.
- [MusicSequenceFileFlags](musicsequencefileflags.md): Flags that configure the behavior of the [MusicSequenceFileCreate](musicsequencefilecreate%28__________%29.md) and [MusicSequenceFileCreateData](musicsequencefilecreatedata%28__________%29.md) functions.
- [MusicSequenceFileTypeID](musicsequencefiletypeid.md): The various types of files that can be parsed by a music sequence.
- [MusicSequenceLoadFlags](musicsequenceloadflags.md): Flags used to configure the behavior of the [MusicSequenceFileLoad](musicsequencefileload%28________%29.md) and [MusicSequenceFileLoadData](musicsequencefileloaddata%28________%29.md) functions.
- [MusicSequenceType](musicsequencetype.md): The various types of music sequences.
- [Music Extended Control Event Type](1515446-music-extended-control-event-typ.md)
- [Music Player Errors](1515472-music-player-errors.md)
- [Music Event Types](1515479-music-event-types.md)
- [Music Note Events](1473494-music-note-events.md)
- [Music Device Selectors](1473469-music-device-selectors.md)
- [Music Device Properties](1533931-music-device-properties.md)
- [Music Device Sample Frame Mask](1533978-music-device-sample-frame-mask.md)
- [Music Device Unit Properties](1533963-music-device-unit-properties.md)
- [Instrument Types](1534202-instrument-types.md)
- [Music Device Generic Properties](1533930-music-device-generic-properties.md)
- [Music Effect and Instrument Unit Properties](1533941-music-effect-and-instrument-unit.md)
- [DLS Music Device Properties](1534153-dls-music-device-properties.md)
- [DLS Music Device Parameters](1389667-dls-music-device-parameters.md)

## See Also

### Playback and Recording

- [Audio Queue Services](audio-queue-services.md): Connect to audio hardware and manage the recording or playback process.
- [Audio Services](audio-services.md): Play short sounds or trigger a vibration effect on iOS devices with the appropriate hardware.
- [Anchoring sound to a window or volume](spatializing-sound-from-a-uiscene.md): Provide unique app experiences by attaching sounds to windows and volumes in 3D space.
