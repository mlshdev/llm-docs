> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiodevice/timerevents](https://developer.apple.com/documentation/kernel/ioaudiodevice/timerevents)

# timerEvents

**Interface language:** Objective-C

**Framework:** Kernel

The set of timer events in use by the device.

## Declaration

```objectivec
OSDictionary * timerEvents;
```

<a id="overview"></a>

## Overview

The key for the dictionary is the target of the event. This means that a single target may have only a single event associated with it.

## See Also

### Instance Variables

- [workLoop](workloop.md)
- [timerEventSource](timereventsource.md)
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
