> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioworkloop/1809383-addeventsource](https://developer.apple.com/documentation/kernel/ioworkloop/1809383-addeventsource)

# addEventSource

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn addEventSource(
 IOEventSource *newEvent); 
```

## Parameters

- `newEvent`: Pointer to IOEventSource subclass to add.

<a id="return_value"></a>

## Return Value

Always returns kIOReturnSuccess.

<a id="overview"></a>

## Overview

Add an event source to be monitored by the work loop. This function does not return until the work loop has acknowledged the arrival of the new event source. When a new event has been added the threadMain will always restart its loop and check all outstanding events. The event source is retained by the work loop.

## See Also

### Miscellaneous

- [\_maintRequest](1809377-_maintrequest.md): Synchronous implementation of addEventSource and removeEventSource functions.
- [disableAllEventSources](1809388-disablealleventsources.md): Calls disable() in all event sources.
- [disableAllInterrupts](1809396-disableallinterrupts.md): Calls disable() in all interrupt event sources.
- [enableAllEventSources](1809401-enablealleventsources.md): Calls enable() in all event sources.
- [enableAllInterrupts](1809404-enableallinterrupts.md): Calls enable() in all interrupt event sources.
- [eventSourcePerformsWork](1809410-eventsourceperformswork.md): Checks if the event source passed in overrides checkForWork() to perform any work. IOWorkLoop uses this to determine if the event source should be polled in runEventSources() or not.
- [free](1809418-free.md)
- [getThread](1809425-getthread.md): Gets the workThread.
- [inGate](1809434-ingate.md): Is the current execution context holding the work-loop's gate?
- [init](1809441-init.md)
- [onThread](1809446-onthread.md): Is the current execution context on the work thread?
- [removeEventSource](1809449-removeeventsource.md)
- [runAction](1809454-runaction.md): Single thread a call to an action with the work-loop.
- [runEventSources](1809459-runeventsources.md)
- [threadMain](1809465-threadmain.md)
- [threadMainContinuation](1809470-threadmaincontinuation.md): Static function that calls the threadMain function.
- [workLoop](1809476-workloop.md): Factory member function to construct and intialize a work loop.
- [workLoopWithOptions](1809483-workloopwithoptions.md): Factory member function to constuct and intialize a work loop.
- [workLoopWithOptions(IOOptionBits options)](1809488-workloopwithoptions.md): Factory member function to constuct and intialize a work loop.
