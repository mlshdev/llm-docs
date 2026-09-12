> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideostream/getstartingchannel](https://developer.apple.com/documentation/videodriverkit/iouservideostream/getstartingchannel)

# GetStartingChannel

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the starting channel of the stream.

## Declaration

```objectivec
uint32_t GetStartingChannel();
```

<a id="return-value"></a>

## Return Value

The starting channel of the stream.

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Working with channels

- [SetStartingChannel](setstartingchannel.md): Sets the starting channel of the stream.
