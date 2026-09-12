> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudioengine/runerasehead](https://developer.apple.com/documentation/kernel/ioaudioengine/runerasehead)

# runEraseHead

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
bool runEraseHead;
```

<a id="overview"></a>

## Overview

Set to true if the erase head is to run when the audio engine is running. This is the case if there are any output streams.

## See Also

### Instance Variables

- [workLoop](workloop.md)
- [userClients](userclients.md)
- [status](status.md)
- [state](state.md)
- [sampleRate](samplerate.md)
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
- [audioEngineStopPosition](audioenginestopposition.md)
- [audioDevice](audiodevice.md)
