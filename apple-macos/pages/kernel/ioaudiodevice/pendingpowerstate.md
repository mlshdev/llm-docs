> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiodevice/pendingpowerstate](https://developer.apple.com/documentation/kernel/ioaudiodevice/pendingpowerstate)

# pendingPowerState

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
IOAudioDevicePowerState pendingPowerState;
```

<a id="overview"></a>

## Overview

If a power state change is in progress, this represents the pending power state. All other times this is the same as the currentPowerState.

## See Also

### Instance Variables

- [workLoop](workloop.md)
- [timerEventSource](timereventsource.md)
- [timerEvents](timerevents.md): The set of timer events in use by the device.
- [numRunningAudioEngines](numrunningaudioengines.md)
- [minimumInterval](minimuminterval.md)
- [familyManagePower](familymanagepower.md)
- [duringStartup](duringstartup.md)
- [currentPowerState](currentpowerstate.md)
- [commandGate](commandgate.md)
- [audioPorts](audioports.md)
- [audioEngines](audioengines.md)
- [asyncPowerStateChangeInProgress](asyncpowerstatechangeinprogress.md)
