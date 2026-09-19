> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioaudiodevice/duringstartup

# duringStartup

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
bool duringStartup;
```

<a id="overview"></a>

## Overview

State variable set to true while the driver is starting up and false all other times

## See Also

### Instance Variables

- [workLoop](workloop.md)
- [timerEventSource](timereventsource.md)
- [timerEvents](timerevents.md): The set of timer events in use by the device.
- [pendingPowerState](pendingpowerstate.md)
- [numRunningAudioEngines](numrunningaudioengines.md)
- [minimumInterval](minimuminterval.md)
- [familyManagePower](familymanagepower.md)
- [currentPowerState](currentpowerstate.md)
- [commandGate](commandgate.md)
- [audioPorts](audioports.md)
- [audioEngines](audioengines.md)
- [asyncPowerStateChangeInProgress](asyncpowerstatechangeinprogress.md)
