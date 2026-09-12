> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioatacontroller/1811887-dispatchnext](https://developer.apple.com/documentation/kernel/ioatacontroller/1811887-dispatchnext)

# dispatchNext

**Interface language:** Objective-C

**Framework:** Kernel

Causes the command at the front of the queue to dequeue, made the current command and begin execution.

## Declaration

```objectivec
virtual IOReturn dispatchNext(
 void ); 
```

<a id="return_value"></a>

## Return Value

noErr indicates successful dispatch.

## See Also

### Miscellaneous

- [busCanDispatch](1811873-buscandispatch.md): answers whether the bus is in state such that the next command can be dispatched.
- [handleCommand](1811902-handlecommand.md): Called by executeCommand() to handle the client command from the workloop context.
