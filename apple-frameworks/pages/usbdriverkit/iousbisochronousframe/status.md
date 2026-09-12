> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbisochronousframe/status](https://developer.apple.com/documentation/usbdriverkit/iousbisochronousframe/status)

# status

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Property  
**Availability:** DriverKit 19.0+

The completion status for this individual frame.

## Declaration

```objectivec
IOReturn status;
```

<a id="Discussion"></a>

## Discussion

The system initializes this field to `kIOReturnInvalid` and updates it with a valid status code upon completion of the frame.

## See Also

### Getting the Frame Properties

- [requestCount](requestcount.md): The number of bytes to transfer for this frame.
- [completeCount](completecount.md): The number of bytes actually transferred for this frame.
- [reserved](reserved.md): Reserved for future use.
- [timeStamp](timestamp.md): The frame’s observed completion time.
