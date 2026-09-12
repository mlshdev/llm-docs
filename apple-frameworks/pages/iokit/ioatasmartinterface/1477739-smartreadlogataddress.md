> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioatasmartinterface/1477739-smartreadlogataddress](https://developer.apple.com/documentation/iokit/ioatasmartinterface/1477739-smartreadlogataddress)

# SMARTReadLogAtAddress

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

Reads the 512-byte log at the specified logOffset in the log.

## Declaration

```objectivec
IOReturn (*SMARTReadLogAtAddress)(void *interface, UInt32 logOffset, void *buffer, UInt32 size);
```

<a id="discussion"></a>

## Discussion

Reads the 512-byte log at the specified logOffset in the log. See section 8.54.6.4 of ATA/ATAPI-6.
