> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiodevice/audioengines](https://developer.apple.com/documentation/kernel/ioaudiodevice/audioengines)

# audioEngines

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
OSArray * audioEngines;
```

<a id="overview"></a>

## Overview

The set of IOAudioEngine objects vended by the IOAudioDevice.

## See Also

### Instance Variables

- [workLoop](workloop.md)
- [timerEventSource](timereventsource.md)
- [timerEvents](timerevents.md): The set of timer events in use by the device.
- [pendingPowerState](pendingpowerstate.md)
- [numRunningAudioEngines](numrunningaudioengines.md)
- [minimumInterval](minimuminterval.md)
- [familyManagePower](familymanagepower.md)
- [duringStartup](duringstartup.md)
- [currentPowerState](currentpowerstate.md)
- [commandGate](commandgate.md)
- [audioPorts](audioports.md)
- [asyncPowerStateChangeInProgress](asyncpowerstatechangeinprogress.md)
