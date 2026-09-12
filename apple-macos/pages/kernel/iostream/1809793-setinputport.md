> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostream/1809793-setinputport](https://developer.apple.com/documentation/kernel/iostream/1809793-setinputport)

# setInputPort

**Interface language:** Objective-C

**Framework:** Kernel

Set the Mach port used to receive notifications from user space that a buffer has been added to the input queue.

## Declaration

```objectivec
virtual IOReturn setInputPort(
 mach_port_tport); 
```

## Parameters

- `port`:

## See Also

### Managing notification ports

- [getInputPort](1809770-getinputport.md): Get the Mach port used to receive notifications from user space that a buffer has been added to the input queue.
- [getOutputPort](1809774-getoutputport.md): Get the Mach port used to send notifications to user space that a buffer has been added to the output queue.
- [sendOutputNotification](1809783-sendoutputnotification.md): Send a notification to the user client that data is available for reading on the output queue. This will result in the user's output handler being called, if they registered one.
- [setOutputPort](1809801-setoutputport.md): Set the Mach port used to send notifications to user space that a buffer has been added to the output queue.
