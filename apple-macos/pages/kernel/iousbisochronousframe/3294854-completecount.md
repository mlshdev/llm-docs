> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbisochronousframe/3294854-completecount

# completeCount

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The number of bytes that the system actually transferred for this frame.

## Declaration

```objectivec
uint32_t completeCount;
```

<a id="discussion"></a>

## Discussion

The system updates this field upon completion of the frame.

## See Also

### Getting the Frame Properties

- [status](3294856-status.md): The completion status for this individual frame.
- [requestCount](3294855-requestcount.md): The number of bytes to transfer for this frame.
- [reserved](3377598-reserved.md): Reserved for future use.
- [timeStamp](3294857-timestamp.md): The frame’s observed completion time.
