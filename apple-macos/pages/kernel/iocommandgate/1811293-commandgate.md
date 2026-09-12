> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocommandgate/1811293-commandgate](https://developer.apple.com/documentation/kernel/iocommandgate/1811293-commandgate)

# commandGate

**Interface language:** Objective-C

**Framework:** Kernel

Factory method to create and initialise an IOCommandGate, See $link init.

## Declaration

```objectivec
static IOCommandGate *commandGate(
 OSObject *owner,
 Action action = 0); 
```

<a id="return_value"></a>

## Return Value

Returns a pointer to the new command gate if sucessful, 0 otherwise.

## See Also

### Miscellaneous

- [attemptAction](1811105-attemptaction.md): Single thread a call to an action with the target work-loop.
- [attemptCommand](1811141-attemptcommand.md): Single thread a command with the target work-loop.
- [commandSleep(void \*, AbsoluteTime, UInt32)](1811482-commandsleep.md): Put a thread that is currently holding the command gate to sleep.
- [commandSleep(void \*, UInt32)](1811498-commandsleep.md): Put a thread that is currently holding the command gate to sleep.
- [commandWakeup](1811517-commandwakeup.md): Wakeup one or more threads that are asleep on an event.
- [disable](1811531-disable.md): Disable the command gate
- [enable](1811547-enable.md): Enable command gate, this will unblock any blocked Commands and Actions.
- [init](1811560-init.md): Class initialiser.
- [runAction](1811576-runaction.md): Single thread a call to an action with the target work-loop.
- [runCommand](1811585-runcommand.md): Single thread a command with the target work-loop.
