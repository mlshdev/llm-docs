> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudioengine/devicestartedaudioengine](https://developer.apple.com/documentation/kernel/ioaudioengine/devicestartedaudioengine)

# deviceStartedAudioEngine

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
bool deviceStartedAudioEngine;
```

<a id="overview"></a>

## Overview

Used by the IOAudioDevice to determine responsibility for shutting the audio engine down when it is no longer needed.

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
- [defaultAudioControls](defaultaudiocontrols.md)
- [configurationChangeInProgress](configurationchangeinprogress.md)
- [commandGate](commandgate.md)
- [audioEngineStopPosition](audioenginestopposition.md)
- [audioDevice](audiodevice.md)
