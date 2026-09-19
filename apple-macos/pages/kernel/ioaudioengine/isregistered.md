> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioaudioengine/isregistered

# isRegistered

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
bool isRegistered;
```

<a id="overview"></a>

## Overview

Internal state variable to keep track or whether registerService() has been called.

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
- [inputStreams](inputstreams.md)
- [deviceStartedAudioEngine](devicestartedaudioengine.md)
- [defaultAudioControls](defaultaudiocontrols.md)
- [configurationChangeInProgress](configurationchangeinprogress.md)
- [commandGate](commandgate.md)
- [audioEngineStopPosition](audioenginestopposition.md)
- [audioDevice](audiodevice.md)
