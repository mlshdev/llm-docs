> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiodevice/minimuminterval](https://developer.apple.com/documentation/kernel/ioaudiodevice/minimuminterval)

# minimumInterval

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
AbsoluteTime minimumInterval;
```

<a id="overview"></a>

## Overview

The smallest timer interval requested by all timer event targets.

## See Also

### Instance Variables

- [workLoop](workloop.md)
- [timerEventSource](timereventsource.md)
- [timerEvents](timerevents.md): The set of timer events in use by the device.
- [pendingPowerState](pendingpowerstate.md)
- [numRunningAudioEngines](numrunningaudioengines.md)
- [familyManagePower](familymanagepower.md)
- [duringStartup](duringstartup.md)
- [currentPowerState](currentpowerstate.md)
- [commandGate](commandgate.md)
- [audioPorts](audioports.md)
- [audioEngines](audioengines.md)
- [asyncPowerStateChangeInProgress](asyncpowerstatechangeinprogress.md)
