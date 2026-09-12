> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ionetworkdata/1812581-withinternalbuffer](https://developer.apple.com/documentation/kernel/ionetworkdata/1812581-withinternalbuffer)

# withInternalBuffer

**Interface language:** Objective-C

**Framework:** Kernel

Factory method that constructs and initializes an IONetworkData object with an internal data buffer.

## Declaration

```objectivec
static IONetworkData * withInternalBuffer(
 const char *name, 
 UInt32 bufferSize, 
 UInt32 accessTypes = (
 kIONetworkDataAccessTypeRead | kIONetworkDataAccessTypeSerialize), 
 void *target = 0, 
 Action action = 0, 
 void *param = 0); 
```

## Parameters

- `name`: A name to assign to this object.
- `bufferSize`: The number of bytes to allocate for the internal data buffer.
- `accessTypes`: The initial supported access types.
- `target`: The notification target.
- `action`: The notification action.
- `param`: A parameter to pass to the notification action.

<a id="return_value"></a>

## Return Value

Returns an IONetworkData object on success, or 0 otherwise.

## See Also

### Miscellaneous

- [clearBuffer](1812449-clearbuffer.md): Clears the data buffer by filling it with zeroes.
- [free](1812455-free.md): Frees the IONetworkData object.
- [getAccessTypes](1812461-getaccesstypes.md): Gets the types of data access supported by this object.
- [getBuffer](1812470-getbuffer.md): Gets a pointer to the data buffer.
- [getBufferType](1812479-getbuffertype.md): Gets the type of data buffer managed by this object.
- [getKey](1812486-getkey.md): Gets a unique OSSymbol key associated with this object.
- [getNotificationAction](1812491-getnotificationaction.md): Gets the C function that was registered to handle access notifications sent from this object.
- [getNotificationParameter](1812494-getnotificationparameter.md): Gets the parameter that will be passed to the access notification handler.
- [getNotificationTarget](1812497-getnotificationtarget.md): Gets the first parameter that will be passed to the access notification handler.
- [getSize](1812500-getsize.md): Gets the size of the data buffer.
- [init](1812508-init.md): Initializes an IONetworkData object.
- [read](1812511-read.md): An access method that reads from the data buffer.
- [readBytes](1812517-readbytes.md): Reads from the data buffer and copies the data to a destination buffer provided by the caller.
- [reset](1812524-reset.md): An access method that resets the data buffer.
- [serialize](1812531-serialize.md): Serializes the IONetworkData object.
- [setAccessTypes](1812540-setaccesstypes.md): Sets the types of access that are permitted on the data buffer.
- [setNotificationTarget](1812552-setnotificationtarget.md): Registers a C function to handle access notifications sent from this object.
- [withExternalBuffer](1812563-withexternalbuffer.md): Factory method that constructs and initializes an IONetworkData object with an external data buffer.
- [withNoBuffer](1812601-withnobuffer.md): Factory method that constructs and initializes an IONetworkData object without a data buffer.
- [write](1812620-write.md): An access method that writes to the data buffer.
- [writeBytes](1812640-writebytes.md): Writes to the data buffer with data from a source buffer provided by the caller.
