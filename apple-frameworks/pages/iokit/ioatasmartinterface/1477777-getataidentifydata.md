> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioatasmartinterface/1477777-getataidentifydata](https://developer.apple.com/documentation/iokit/ioatasmartinterface/1477777-getataidentifydata)

# GetATAIdentifyData

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

Reads the 512-byte data provided by the drive in response to the ATA IDENTIFY DEVICE command.

## Declaration

```objectivec
IOReturn (*GetATAIdentifyData)(void *interface, void *buffer, UInt32 inSize, UInt32 *outSize);
```

## Parameters

- `interface`: A valid IOATASMARTInterface\*\*.
- `buffer`: A valid buffer.
- `inSize`: The number of bytes to place in the buffer.
- `outSize`: The number of bytes placed in the buffer. Can be NULL if the information is not required by the caller.

<a id="return_value"></a>

## Return Value

An IOReturn result code. If inSize is greater than 512 or less than 1, kIOReturnBadArgument is returned.

<a id="discussion"></a>

## Discussion

Reads the 512-byte data provided by the drive in response to the ATA IDENTIFY DEVICE command. See section 8.15 of ATA/ATAPI-6. The data placed in buffer is guaranteed to be in native endian form on return. (i.e. it will be byte swapped on big endian platforms, so the caller need not do anything)
