> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideostream/getstartingchannel

# GetStartingChannel

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [SetStartingChannel](setstartingchannel.md): Beta. Sets the starting channel of the stream.
