> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudioengine/audioenginestopposition](https://developer.apple.com/documentation/kernel/ioaudioengine/audioenginestopposition)

# audioEngineStopPosition

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
IOAudioEnginePosition audioEngineStopPosition;
```

<a id="overview"></a>

## Overview

When all clients have disconnected, this is set to one buffer length past the current audio engine position at the time. Then when the stop position is reached, the audio engine is stopped

## See Also

### Instance Variables

- [workLoop](workloop.md)
- [userClients](userclients.md)
- [status](status.md)
- [state](state.md)
- [sampleRate](samplerate.md)
- [runEraseHead](runerasehead.md)
- [outputStreams](outputstreams.md)
- [numSampleFramesPerBuffer](numsampleframesperbuffer.md)
- [numErasesPerBuffer](numerasesperbuffer.md)
- [numActiveUserClients](numactiveuserclients.md)
- [isRegistered](isregistered.md)
- [inputStreams](inputstreams.md)
- [deviceStartedAudioEngine](devicestartedaudioengine.md)
- [defaultAudioControls](defaultaudiocontrols.md)
- [configurationChangeInProgress](configurationchangeinprogress.md)
- [commandGate](commandgate.md)
- [audioDevice](audiodevice.md)
