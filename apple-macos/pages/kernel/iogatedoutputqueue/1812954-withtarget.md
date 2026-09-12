> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iogatedoutputqueue/1812954-withtarget](https://developer.apple.com/documentation/kernel/iogatedoutputqueue/1812954-withtarget)

# withTarget(OSObject \*, IOOutputAction, IOWorkLoop \*, UInt32)

**Interface language:** Objective-C

**Framework:** Kernel

Factory method that constructs and initializes an IOGatedOutputQueue object.

## Declaration

```objectivec
static IOGatedOutputQueue * withTarget(
 OSObject *target, 
 IOOutputAction action, 
 IOWorkLoop *workloop, 
 UInt32 capacity = 0); 
```

## Parameters

- `target`: The object that will handle packets removed from the queue.
- `action`: The function that will handle packets removed from the queue.
- `workloop`: A workloop object. An IOCommandGate object is created and added to this workloop as an event source.
- `capacity`: The initial capacity of the output queue.

<a id="return_value"></a>

## Return Value

Returns an IOGatedOutputQueue object on success, or 0 otherwise.

## See Also

### Miscellaneous

- [free](1812925-free.md): Frees the IOGatedOutputQueue object.
- [init](1812930-init.md): Initializes an IOGatedOutputQueue object.
- [output(IOMbufQueue \*, UInt32 \*)](1812936-output.md): Transfers all packets in the mbuf queue to the target.
- [output(void \*)](1812941-output.md): Overrides the method inherited from IOOutputQueue.
- [scheduleServiceThread](1812945-scheduleservicethread.md): Overrides the method inherited from IOOutputQueue.
- [withTarget(IONetworkController \*, IOWorkLoop \*, UInt32)](1812948-withtarget.md): Factory method that constructs and initializes an IOGatedOutputQueue object.
- [withTarget(IONetworkController \*, IOWorkLoop \*, UInt32, UInt32)](1812950-withtarget.md): Factory method that constructs and initializes an IOGatedOutputQueue object.
- [withTarget(OSObject \*, IOOutputAction, IOWorkLoop \*, UInt32, UInt32)](1812957-withtarget.md): Factory method that constructs and initializes an IOGatedOutputQueue object.
