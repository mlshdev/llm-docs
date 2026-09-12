> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iogatedoutputqueue/1812945-scheduleservicethread](https://developer.apple.com/documentation/kernel/iogatedoutputqueue/1812945-scheduleservicethread)

# scheduleServiceThread

**Interface language:** Objective-C

**Framework:** Kernel

Overrides the method inherited from IOOutputQueue.

## Declaration

```objectivec
virtual bool scheduleServiceThread(
 void *param); 
```

<a id="return_value"></a>

## Return Value

Returns true if a thread was successfully scheduled to service the queue.

## See Also

### Miscellaneous

- [free](1812925-free.md): Frees the IOGatedOutputQueue object.
- [init](1812930-init.md): Initializes an IOGatedOutputQueue object.
- [output(IOMbufQueue \*, UInt32 \*)](1812936-output.md): Transfers all packets in the mbuf queue to the target.
- [output(void \*)](1812941-output.md): Overrides the method inherited from IOOutputQueue.
- [withTarget(IONetworkController \*, IOWorkLoop \*, UInt32)](1812948-withtarget.md): Factory method that constructs and initializes an IOGatedOutputQueue object.
- [withTarget(IONetworkController \*, IOWorkLoop \*, UInt32, UInt32)](1812950-withtarget.md): Factory method that constructs and initializes an IOGatedOutputQueue object.
- [withTarget(OSObject \*, IOOutputAction, IOWorkLoop \*, UInt32)](1812954-withtarget.md): Factory method that constructs and initializes an IOGatedOutputQueue object.
- [withTarget(OSObject \*, IOOutputAction, IOWorkLoop \*, UInt32, UInt32)](1812957-withtarget.md): Factory method that constructs and initializes an IOGatedOutputQueue object.
