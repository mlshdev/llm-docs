> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbabortoptions](https://developer.apple.com/documentation/usbdriverkit/iousbabortoptions)

# IOUSBAbortOptions

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 19.0+

Options to use when aborting an I/O request.

## Declaration

```objectivec
enum IOUSBAbortOptions : unsigned int;
```

## Topics

### Getting the Options

- [kIOUSBAbortAsynchronous](iousbabortoptions/kiousbabortasynchronous.md): Enqueue the abort request and return immediately.
- [kIOUSBAbortSynchronous](iousbabortoptions/kiousbabortsynchronous.md): Enqueue the abort request and wait for it to finish.

## See Also

### Aborting I/O Requests

- [Abort](iousbhostpipe/abort.md): Aborts all of the pipe’s pending I/O requests.
