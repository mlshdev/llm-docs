> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiodevice/timereventsource](https://developer.apple.com/documentation/kernel/ioaudiodevice/timereventsource)

# timerEventSource

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
IOTimerEventSource *timerEventSource;
```

<a id="overview"></a>

## Overview

An IOTimerEventSource attached to workLoop used for the timer services

## See Also

### Instance Variables

- [workLoop](workloop.md)
- [timerEvents](timerevents.md): The set of timer events in use by the device.
- [pendingPowerState](pendingpowerstate.md)
- [numRunningAudioEngines](numrunningaudioengines.md)
- [minimumInterval](minimuminterval.md)
- [familyManagePower](familymanagepower.md)
- [duringStartup](duringstartup.md)
- [currentPowerState](currentpowerstate.md)
- [commandGate](commandgate.md)
- [audioPorts](audioports.md)
- [audioEngines](audioengines.md)
- [asyncPowerStateChangeInProgress](asyncpowerstatechangeinprogress.md)
