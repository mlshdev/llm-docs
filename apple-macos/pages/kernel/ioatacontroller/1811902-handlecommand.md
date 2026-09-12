> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioatacontroller/1811902-handlecommand](https://developer.apple.com/documentation/kernel/ioatacontroller/1811902-handlecommand)

# handleCommand

**Interface language:** Objective-C

**Framework:** Kernel

Called by executeCommand() to handle the client command from the workloop context.

## Declaration

```objectivec
virtual IOReturn handleCommand(
 void *command, 
 void *param1 = 0, 
 void *param2 = 0, 
 void *param3 = 0); 
```

## Parameters

- `command`: The command code.
- `param1`: Command parameter.
- `param2`: Command parameter.
- `param3`: Command parameter.

<a id="return_value"></a>

## Return Value

kIOReturnSuccess on success, or an error code otherwise.

## See Also

### Miscellaneous

- [busCanDispatch](1811873-buscandispatch.md): answers whether the bus is in state such that the next command can be dispatched.
- [dispatchNext](1811887-dispatchnext.md): Causes the command at the front of the queue to dequeue, made the current command and begin execution.
