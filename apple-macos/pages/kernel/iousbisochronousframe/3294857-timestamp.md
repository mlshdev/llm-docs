> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbisochronousframe/3294857-timestamp](https://developer.apple.com/documentation/kernel/iousbisochronousframe/3294857-timestamp)

# timeStamp

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The frame’s observed completion time.

## Declaration

```objectivec
uint64_t timeStamp;
```

<a id="discussion"></a>

## Discussion

Interrupt latency and system load may result in more than one frame completing with the same timestamp.

## See Also

### Getting the Frame Properties

- [status](3294856-status.md): The completion status for this individual frame.
- [requestCount](3294855-requestcount.md): The number of bytes to transfer for this frame.
- [completeCount](3294854-completecount.md): The number of bytes that the system actually transferred for this frame.
- [reserved](3377598-reserved.md): Reserved for future use.
