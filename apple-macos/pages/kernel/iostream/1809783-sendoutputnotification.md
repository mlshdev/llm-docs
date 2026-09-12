> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostream/1809783-sendoutputnotification](https://developer.apple.com/documentation/kernel/iostream/1809783-sendoutputnotification)

# sendOutputNotification

**Interface language:** Objective-C

**Framework:** Kernel

Send a notification to the user client that data is available for reading on the output queue. This will result in the user's output handler being called, if they registered one.

## Declaration

```objectivec
virtual IOReturn sendOutputNotification(
 void); 
```

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if the notification was successfully sent.

## See Also

### Managing notification ports

- [getInputPort](1809770-getinputport.md): Get the Mach port used to receive notifications from user space that a buffer has been added to the input queue.
- [getOutputPort](1809774-getoutputport.md): Get the Mach port used to send notifications to user space that a buffer has been added to the output queue.
- [setInputPort](1809793-setinputport.md): Set the Mach port used to receive notifications from user space that a buffer has been added to the input queue.
- [setOutputPort](1809801-setoutputport.md): Set the Mach port used to send notifications to user space that a buffer has been added to the output queue.
