> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioworkloop/1809454-runaction](https://developer.apple.com/documentation/kernel/ioworkloop/1809454-runaction)

# runAction

**Interface language:** Objective-C

**Framework:** Kernel

Single thread a call to an action with the work-loop.

## Declaration

```objectivec
virtual IOReturn runAction(
 Action action,
 OSObject *target, 
 void *arg0 = 0,
 void *arg1 = 0, 
 void *arg2 = 0,
 void *arg3 = 0); 
```

## Parameters

- `action`: Pointer to function to be executed in work-loop context.
- `arg0`: Parameter for action parameter, defaults to 0.
- `arg1`: Parameter for action parameter, defaults to 0.
- `arg2`: Parameter for action parameter, defaults to 0.
- `arg3`: Parameter for action parameter, defaults to 0.

<a id="return_value"></a>

## Return Value

Returns the value of the Action callout.

<a id="overview"></a>

## Overview

Client function that causes the given action to be called in a single threaded manner. Beware: the work-loop's gate is recursive and runAction can cause direct or indirect re-entrancy. When executing on a client's thread, runAction will sleep until the work-loop's gate opens for execution of client actions, the action is single threaded against all other work-loop event sources.

## See Also

### Miscellaneous

- [\_maintRequest](1809377-_maintrequest.md): Synchronous implementation of addEventSource and removeEventSource functions.
- [addEventSource](1809383-addeventsource.md)
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
- [runEventSources](1809459-runeventsources.md)
- [threadMain](1809465-threadmain.md)
- [threadMainContinuation](1809470-threadmaincontinuation.md): Static function that calls the threadMain function.
- [workLoop](1809476-workloop.md): Factory member function to construct and intialize a work loop.
- [workLoopWithOptions](1809483-workloopwithoptions.md): Factory member function to constuct and intialize a work loop.
- [workLoopWithOptions(IOOptionBits options)](1809488-workloopwithoptions.md): Factory member function to constuct and intialize a work loop.
