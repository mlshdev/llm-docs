> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/ioatasmartinterface/1477797-smartreaddatathresholds

# SMARTReadDataThresholds

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

Retrieves 512 byte device SMART data thresholds structure.

## Declaration

```objectivec
IOReturn (*SMARTReadDataThresholds)(void *interface, ATASMARTDataThresholds *dataThresholds);
```

<a id="discussion"></a>

## Discussion

Retrieves 512 byte device SMART data thresholds structure. This command is not defined as part of ATA/ATAPI-6, but is implemented by a large variety of manufacturers. Will return an appropiate error if command can not be completed.
