> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usbdriverkit/iousbisochronousframe/requestcount

# requestCount

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 19.0+

The number of bytes to transfer for this frame.

## Declaration

```objectivec
uint32_t requestCount;
```

<a id="Discussion"></a>

## Discussion

Set the value of this field before making an isochronous request.

## See Also

### Getting the Frame Properties

- [status](status.md): The completion status for this individual frame.
- [completeCount](completecount.md): The number of bytes actually transferred for this frame.
- [reserved](reserved.md): Reserved for future use.
- [timeStamp](timestamp.md): The frame’s observed completion time.
