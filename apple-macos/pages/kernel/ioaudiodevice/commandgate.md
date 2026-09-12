> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiodevice/commandgate](https://developer.apple.com/documentation/kernel/ioaudiodevice/commandgate)

# commandGate

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
IOCommandGate *commandGate;
```

<a id="overview"></a>

## Overview

The IOCommandGate for this IOAudioDevice. It is attached to workLoop

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
- [audioPorts](audioports.md)
- [audioEngines](audioengines.md)
- [asyncPowerStateChangeInProgress](asyncpowerstatechangeinprogress.md)
