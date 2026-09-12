> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbisochronousframe/completecount](https://developer.apple.com/documentation/usbdriverkit/iousbisochronousframe/completecount)

# completeCount

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 19.0+

The number of bytes actually transferred for this frame.

## Declaration

```objectivec
uint32_t completeCount;
```

<a id="Discussion"></a>

## Discussion

The system updates this field upon completion of the frame.

## See Also

### Getting the Frame Properties

- [status](status.md): The completion status for this individual frame.
- [requestCount](requestcount.md): The number of bytes to transfer for this frame.
- [reserved](reserved.md): Reserved for future use.
- [timeStamp](timestamp.md): The frame’s observed completion time.
