> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiodevice/numrunningaudioengines](https://developer.apple.com/documentation/kernel/ioaudiodevice/numrunningaudioengines)

# numRunningAudioEngines

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
UInt32 numRunningAudioEngines;
```

<a id="overview"></a>

## Overview

The number of running IOAudioEngines. This is used to maintain idle vs active power state.

## See Also

### Instance Variables

- [workLoop](workloop.md)
- [timerEventSource](timereventsource.md)
- [timerEvents](timerevents.md): The set of timer events in use by the device.
- [pendingPowerState](pendingpowerstate.md)
- [minimumInterval](minimuminterval.md)
- [familyManagePower](familymanagepower.md)
- [duringStartup](duringstartup.md)
- [currentPowerState](currentpowerstate.md)
- [commandGate](commandgate.md)
- [audioPorts](audioports.md)
- [audioEngines](audioengines.md)
- [asyncPowerStateChangeInProgress](asyncpowerstatechangeinprogress.md)
