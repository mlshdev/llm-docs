> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioaudioengine/outputstreams

# outputStreams

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
OSOrderedSet *outputStreams;
```

<a id="overview"></a>

## Overview

An OSSet of all of the output IOAudioStreams attached to this IOAudioEngine.

## See Also

### Instance Variables

- [workLoop](workloop.md)
- [userClients](userclients.md)
- [status](status.md)
- [state](state.md)
- [sampleRate](samplerate.md)
- [runEraseHead](runerasehead.md)
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
