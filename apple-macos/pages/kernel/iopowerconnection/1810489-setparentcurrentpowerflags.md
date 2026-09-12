> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopowerconnection/1810489-setparentcurrentpowerflags](https://developer.apple.com/documentation/kernel/iopowerconnection/1810489-setparentcurrentpowerflags)

# setParentCurrentPowerFlags

**Interface language:** Objective-C

**Framework:** Kernel

Sets the currentPowerFlags variable.

## Declaration

```objectivec
void setParentCurrentPowerFlags (
 IOPMPowerFlags ); 
```

<a id="overview"></a>

## Overview

Called by the parent when the object is created and called by the child when it discovers that the parent state is changing.

## See Also

### Miscellaneous

- [childHasRequestedPower](1810220-childhasrequestedpower.md): Return the flag that says whether the child has called requestPowerDomainState.
- [getAwaitingAck](1810241-getawaitingack.md): Returns the awaitingAck variable.
- [getDesiredDomainState](1810268-getdesireddomainstate.md): Returns the desiredDomainState variable.
- [getPreventIdleSleepFlag](1810287-getpreventidlesleepflag.md): Returns the preventIdleSleepFlag variable.
- [getPreventSystemSleepFlag](1810313-getpreventsystemsleepflag.md): Returns the preventSystemSleepFlag variable.
- [getReadyFlag](1810329-getreadyflag.md): Returns the readyFlag variable.
- [parentCurrentPowerFlags](1810355-parentcurrentpowerflags.md): Returns the currentPowerFlags variable.
- [parentKnowsState](1810379-parentknowsstate.md): Returns the stateKnown variable.
- [setAwaitingAck](1810405-setawaitingack.md): Sets the awaitingAck variable.
- [setChildHasRequestedPower](1810436-setchildhasrequestedpower.md): Set the flag that says that the child has called requestPowerDomainState.
- [setDesiredDomainState](1810465-setdesireddomainstate.md): Sets the desiredDomainState variable.
- [setParentKnowsState](1810522-setparentknowsstate.md): Sets the stateKnown variable.
- [setPreventIdleSleepFlag](1810555-setpreventidlesleepflag.md): Sets the preventIdleSleepFlag variable.
- [setPreventSystemSleepFlag](1810587-setpreventsystemsleepflag.md): Sets the preventSystemSleepFlag variable.
- [setReadyFlag](1810620-setreadyflag.md): Sets the readyFlag variable.
