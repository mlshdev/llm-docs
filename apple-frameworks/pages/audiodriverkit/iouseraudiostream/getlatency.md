> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiostream/getlatency](https://developer.apple.com/documentation/audiodriverkit/iouseraudiostream/getlatency)

# GetLatency

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

## Declaration

```objectivec
uint32_t GetLatency();
```

<a id="return-value"></a>

## Return Value

Returns uint32_t

<a id="discussion"></a>

## Discussion

Get the latency of the stream in sample frames.

Getting the value will be synchronized using the work queue created by the object.
