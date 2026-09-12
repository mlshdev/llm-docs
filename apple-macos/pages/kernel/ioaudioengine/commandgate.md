> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudioengine/commandgate](https://developer.apple.com/documentation/kernel/ioaudioengine/commandgate)

# commandGate

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
IOCommandGate *commandGate;
```

<a id="overview"></a>

## Overview

The IOCommandGate for this audio engine - attached to the driver's IOWorkLoop.

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
- [audioEngineStopPosition](audioenginestopposition.md)
- [audioDevice](audiodevice.md)
