> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/setterminaltype](https://developer.apple.com/documentation/videodriverkit/iouservideostream/setterminaltype)

# SetTerminalType

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

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

- [GetTerminalType](getterminaltype.md): Gets the terminal type of the stream.
- [IOUserVideoStreamTerminalType](../videodriverkit/iouservideostreamterminaltype.md): The terminal type of video stream.
