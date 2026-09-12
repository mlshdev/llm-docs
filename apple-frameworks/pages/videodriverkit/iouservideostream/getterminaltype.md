> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/getterminaltype](https://developer.apple.com/documentation/videodriverkit/iouservideostream/getterminaltype)

# GetTerminalType

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the terminal type of the stream.

## Declaration

```objectivec
IOUserVideoStreamTerminalType GetTerminalType();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Working with stream terminals

- [SetTerminalType](setterminaltype.md): Sets the terminal type of the stream.
- [IOUserVideoStreamTerminalType](../videodriverkit/iouservideostreamterminaltype.md): The terminal type of video stream.
