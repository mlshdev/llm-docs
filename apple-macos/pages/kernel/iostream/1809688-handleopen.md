> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostream/1809688-handleopen](https://developer.apple.com/documentation/kernel/iostream/1809688-handleopen)

# handleOpen

**Interface language:** Objective-C

**Framework:** Kernel

The handleOpen() method relies on the default IOService behavior to ensure that only one client has the stream open at a time. The shared input and output queues are created at open time.

## Declaration

```objectivec
virtual bool handleOpen(
 IOService *forClient, 
 IOOptionBits options, 
 void *arg ); 
```

## Parameters

- `options`:
- `arg`:

## See Also

### Opening and closing streams

- [handleClose](1809680-handleclose.md): The handleClose method destroys the shared input and output queues.
