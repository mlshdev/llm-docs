> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/getterminaltype

# GetTerminalType

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [SetTerminalType](setterminaltype.md): Beta. Sets the terminal type of the stream.
- [IOUserVideoStreamTerminalType](../videodriverkit/iouservideostreamterminaltype.md): Beta. The terminal type of video stream.
