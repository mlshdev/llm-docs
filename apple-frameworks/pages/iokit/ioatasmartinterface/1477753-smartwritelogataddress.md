> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioatasmartinterface/1477753-smartwritelogataddress](https://developer.apple.com/documentation/iokit/ioatasmartinterface/1477753-smartwritelogataddress)

# SMARTWriteLogAtAddress

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

Writes to the 512-byte log at the specified logOffset in the log.

## Declaration

```objectivec
IOReturn (*SMARTWriteLogAtAddress)(void *interface, UInt32 logOffset, const void *buffer, UInt32 size);
```

<a id="discussion"></a>

## Discussion

Writes to the 512-byte log at the specified logOffset in the log. See section 8.54.8.4 of ATA/ATAPI-6.
