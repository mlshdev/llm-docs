> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ionetworkdata/1812552-setnotificationtarget](https://developer.apple.com/documentation/kernel/ionetworkdata/1812552-setnotificationtarget)

# setNotificationTarget

**Interface language:** Objective-C

**Framework:** Kernel

Registers a C function to handle access notifications sent from this object.

## Declaration

```objectivec
virtual void setNotificationTarget(
 void *target, 
 Action action, 
 void *param = 0); 
```

## Parameters

- `target`: The first parameter passed to the notification handler.
- `action`: A pointer to a C function that will handle the notification. If 0, then notification is disabled.
- `param`: An optional parameter passed to the notification handler.

<a id="overview"></a>

## Overview

A notification is sent by an IONetworkData object to the registered notification handler, when an access method is called to modify the contents of the data buffer.

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
- [withExternalBuffer](1812563-withexternalbuffer.md): Factory method that constructs and initializes an IONetworkData object with an external data buffer.
- [withInternalBuffer](1812581-withinternalbuffer.md): Factory method that constructs and initializes an IONetworkData object with an internal data buffer.
- [withNoBuffer](1812601-withnobuffer.md): Factory method that constructs and initializes an IONetworkData object without a data buffer.
- [write](1812620-write.md): An access method that writes to the data buffer.
- [writeBytes](1812640-writebytes.md): Writes to the data buffer with data from a source buffer provided by the caller.
