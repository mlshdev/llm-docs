> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocommandgate/1811141-attemptcommand](https://developer.apple.com/documentation/kernel/iocommandgate/1811141-attemptcommand)

# attemptCommand

**Interface language:** Objective-C

**Framework:** Kernel

Single thread a command with the target work-loop.

## Declaration

```objectivec
virtual IOReturn attemptCommand(
 void *arg0 = 0,
 void *arg1 = 0, 
 void *arg2 = 0,
 void *arg3 = 0); 
```

## Parameters

- `arg0`: Parameter for action of command gate, defaults to 0.
- `arg1`: Parameter for action of command gate, defaults to 0.
- `arg2`: Parameter for action of command gate, defaults to 0.
- `arg3`: Parameter for action of command gate, defaults to 0.

<a id="return_value"></a>

## Return Value

kIOReturnSuccess if successful. kIOReturnNotPermitted if this event source is currently disabled, kIOReturnNoResources if no action available, kIOReturnCannotLock if lock attempt fails.

<a id="overview"></a>

## Overview

Client function that causes the current action to be called in a single threaded manner. When the executing on a client's thread attemptCommand will fail if the work-loop's gate is closed.

## See Also

### Miscellaneous

- [attemptAction](1811105-attemptaction.md): Single thread a call to an action with the target work-loop.
- [commandGate](1811293-commandgate.md): Factory method to create and initialise an IOCommandGate, See $link init.
- [commandSleep(void \*, AbsoluteTime, UInt32)](1811482-commandsleep.md): Put a thread that is currently holding the command gate to sleep.
- [commandSleep(void \*, UInt32)](1811498-commandsleep.md): Put a thread that is currently holding the command gate to sleep.
- [commandWakeup](1811517-commandwakeup.md): Wakeup one or more threads that are asleep on an event.
- [disable](1811531-disable.md): Disable the command gate
- [enable](1811547-enable.md): Enable command gate, this will unblock any blocked Commands and Actions.
- [init](1811560-init.md): Class initialiser.
- [runAction](1811576-runaction.md): Single thread a call to an action with the target work-loop.
- [runCommand](1811585-runcommand.md): Single thread a command with the target work-loop.
