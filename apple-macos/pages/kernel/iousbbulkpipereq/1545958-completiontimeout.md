> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbbulkpipereq/1545958-completiontimeout](https://developer.apple.com/documentation/kernel/iousbbulkpipereq/1545958-completiontimeout)

# completionTimeout

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.1+

The completion timeout value.

## Declaration

```objectivec
UInt32 completionTimeout;
```

## See Also

### Getting the Properties

- [pipeRef](1545941-piperef.md): A reference to the USB pipe.
- [buf](1546177-buf.md): A pointer to the request buffer.
- [size](1546366-size.md): The requested size of the pipe.
- [noDataTimeout](1546036-nodatatimeout.md): The timeout if no data is available.
