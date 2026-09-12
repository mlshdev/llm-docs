> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbisochronousframe/timestamp](https://developer.apple.com/documentation/usbdriverkit/iousbisochronousframe/timestamp)

# timeStamp

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 19.0+

The frame’s observed completion time.

## Declaration

```objectivec
uint64_t timeStamp;
```

<a id="Discussion"></a>

## Discussion

Interrupt latency and system load may result in more than one frame completing with the same timestamp.

## See Also

### Getting the Frame Properties

- [status](status.md): The completion status for this individual frame.
- [requestCount](requestcount.md): The number of bytes to transfer for this frame.
- [completeCount](completecount.md): The number of bytes actually transferred for this frame.
- [reserved](reserved.md): Reserved for future use.
