> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbisochronousframe/3377598-reserved](https://developer.apple.com/documentation/kernel/iousbisochronousframe/3377598-reserved)

# reserved

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

Reserved for future use.

## Declaration

```objectivec
uint32_t reserved;
```

## See Also

### Getting the Frame Properties

- [status](3294856-status.md): The completion status for this individual frame.
- [requestCount](3294855-requestcount.md): The number of bytes to transfer for this frame.
- [completeCount](3294854-completecount.md): The number of bytes that the system actually transferred for this frame.
- [timeStamp](3294857-timestamp.md): The frame’s observed completion time.
