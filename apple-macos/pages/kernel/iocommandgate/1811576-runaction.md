> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocommandgate/1811576-runaction](https://developer.apple.com/documentation/kernel/iocommandgate/1811576-runaction)

# runAction

**Interface language:** Objective-C

**Framework:** Kernel

Single thread a call to an action with the target work-loop.

## Declaration

```objectivec
virtual IOReturn runAction(
 Action action, 
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

kIOReturnSuccess if successful. kIOReturnBadArgument if action is not defined, kIOReturnAborted if a disabled command gate is free()ed before being reenabled.

<a id="overview"></a>

## Overview

Client function that causes the given action to be called in a single threaded manner. Beware the work-loop's gate is recursive and command gates can cause direct or indirect re-entrancy. When the executing on a client's thread runAction will sleep until the work-loop's gate opens for execution of client actions, the action is single threaded against all other work-loop event sources. If the command is disabled the attempt to run a command will be stalled until enable is called.

## See Also

### Miscellaneous

- [attemptAction](1811105-attemptaction.md): Single thread a call to an action with the target work-loop.
- [attemptCommand](1811141-attemptcommand.md): Single thread a command with the target work-loop.
- [commandGate](1811293-commandgate.md): Factory method to create and initialise an IOCommandGate, See $link init.
- [commandSleep(void \*, AbsoluteTime, UInt32)](1811482-commandsleep.md): Put a thread that is currently holding the command gate to sleep.
- [commandSleep(void \*, UInt32)](1811498-commandsleep.md): Put a thread that is currently holding the command gate to sleep.
- [commandWakeup](1811517-commandwakeup.md): Wakeup one or more threads that are asleep on an event.
- [disable](1811531-disable.md): Disable the command gate
- [enable](1811547-enable.md): Enable command gate, this will unblock any blocked Commands and Actions.
- [init](1811560-init.md): Class initialiser.
- [runCommand](1811585-runcommand.md): Single thread a command with the target work-loop.
