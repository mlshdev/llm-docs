> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioatasmartinterface/1477745-smartvalidatereaddata](https://developer.apple.com/documentation/iokit/ioatasmartinterface/1477745-smartvalidatereaddata)

# SMARTValidateReadData

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

Test the integrity of the device SMART data structure.

## Declaration

```objectivec
IOReturn (*SMARTValidateReadData)(void *interface, const ATASMARTData *data);
```

<a id="discussion"></a>

## Discussion

The data structure checksum is the two's complement of the sum of the first 511 bytes in the data structure. The sum of all 512 bytes will be zero when the checksum is correct. See section 8.54.5.8.7 of ATA/ATAPI-6. Will return an error if checksum fails.
