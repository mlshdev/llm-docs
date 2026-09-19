> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/setterminaltype

# SetTerminalType

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Sets the terminal type of the stream.

## Declaration

```objectivec
kern_return_t SetTerminalType(IOUserVideoStreamTerminalType in_terminal_type);
```

<a id="discussion"></a>

## Discussion

You can change the terminal type dynamically. On success, the system sends a notification to the host to update the object state.

## See Also

### Working with stream terminals

- [GetTerminalType](getterminaltype.md): Beta. Gets the terminal type of the stream.
- [IOUserVideoStreamTerminalType](../videodriverkit/iouservideostreamterminaltype.md): Beta. The terminal type of video stream.
