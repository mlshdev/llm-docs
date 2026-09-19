> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/setstartingchannel

# SetStartingChannel

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Sets the starting channel of the stream.

## Declaration

```objectivec
kern_return_t SetStartingChannel(uint32_t in_starting_channel);
```

## Parameters

- `in_starting_channel`: The first element in the owning device that corresponds to element one of this stream.

<a id="discussion"></a>

## Discussion

Starting channel can be changed dynamically. The object sends a notification to the host to update the object state on success.

## See Also

### Working with channels

- [GetStartingChannel](getstartingchannel.md): Beta. Gets the starting channel of the stream.
