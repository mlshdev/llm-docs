> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudioengine/numerasesperbuffer](https://developer.apple.com/documentation/kernel/ioaudioengine/numerasesperbuffer)

# numErasesPerBuffer

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
UInt32 numErasesPerBuffer;
```

<a id="overview"></a>

## Overview

The number of times the erase head get scheduled to run for each cycle of the audio engine.

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
- [numActiveUserClients](numactiveuserclients.md)
- [isRegistered](isregistered.md)
- [inputStreams](inputstreams.md)
- [deviceStartedAudioEngine](devicestartedaudioengine.md)
- [defaultAudioControls](defaultaudiocontrols.md)
- [configurationChangeInProgress](configurationchangeinprogress.md)
- [commandGate](commandgate.md)
- [audioEngineStopPosition](audioenginestopposition.md)
- [audioDevice](audiodevice.md)
