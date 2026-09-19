> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioatacontroller/1811873-buscandispatch

# busCanDispatch

**Interface language:** Objective-C

**Framework:** Kernel

answers whether the bus is in state such that the next command can be dispatched.

## Declaration

```objectivec
virtual bool busCanDispatch(
 void ); 
```

<a id="return_value"></a>

## Return Value

true - bus is free to issue commands. false - bus cannot issue commands at this time.

## See Also

### Miscellaneous

- [dispatchNext](1811887-dispatchnext.md): Causes the command at the front of the queue to dequeue, made the current command and begin execution.
- [handleCommand](1811902-handlecommand.md): Called by executeCommand() to handle the client command from the workloop context.
