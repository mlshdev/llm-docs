> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostream/1809680-handleclose](https://developer.apple.com/documentation/kernel/iostream/1809680-handleclose)

# handleClose

**Interface language:** Objective-C

**Framework:** Kernel

The handleClose method destroys the shared input and output queues.

## Declaration

```objectivec
virtual void handleClose(
 IOService *forClient, 
 IOOptionBits options ); 
```

## Parameters

- `options`:

## See Also

### Opening and closing streams

- [handleOpen](1809688-handleopen.md): The handleOpen() method relies on the default IOService behavior to ensure that only one client has the stream open at a time. The shared input and output queues are created at open time.
