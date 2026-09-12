> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioatasmartinterface/1477805-smartreaddata](https://developer.apple.com/documentation/iokit/ioatasmartinterface/1477805-smartreaddata)

# SMARTReadData

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

Retrieves 512 byte device SMART data structure.

## Declaration

```objectivec
IOReturn (*SMARTReadData)(void *interface, ATASMARTData *data);
```

<a id="discussion"></a>

## Discussion

See section 8.54.5 of ATA/ATAPI-6. Will return an appropiate error if command can not be completed.
