> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbisochronousframe/3294855-requestcount](https://developer.apple.com/documentation/kernel/iousbisochronousframe/3294855-requestcount)

# requestCount

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The number of bytes to transfer for this frame.

## Declaration

```objectivec
uint32_t requestCount;
```

<a id="discussion"></a>

## Discussion

Set the value of this field before making an isochronous request.

## See Also

### Getting the Frame Properties

- [status](3294856-status.md): The completion status for this individual frame.
- [completeCount](3294854-completecount.md): The number of bytes that the system actually transferred for this frame.
- [reserved](3377598-reserved.md): Reserved for future use.
- [timeStamp](3294857-timestamp.md): The frame’s observed completion time.
