> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiodevice/currentpowerstate](https://developer.apple.com/documentation/kernel/ioaudiodevice/currentpowerstate)

# currentPowerState

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
IOAudioDevicePowerState currentPowerState;
```

<a id="overview"></a>

## Overview

Used to track the existing power state - can be fetched by calling getPowerState()

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
- [commandGate](commandgate.md)
- [audioPorts](audioports.md)
- [audioEngines](audioengines.md)
- [asyncPowerStateChangeInProgress](asyncpowerstatechangeinprogress.md)
