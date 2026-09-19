> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usbdriverkit/iousbisochronousframe/reserved

# reserved

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 19.0+

Reserved for future use.

## Declaration

```objectivec
uint32_t reserved;
```

## See Also

### Getting the Frame Properties

- [status](status.md): The completion status for this individual frame.
- [requestCount](requestcount.md): The number of bytes to transfer for this frame.
- [completeCount](completecount.md): The number of bytes actually transferred for this frame.
- [timeStamp](timestamp.md): The frame’s observed completion time.
