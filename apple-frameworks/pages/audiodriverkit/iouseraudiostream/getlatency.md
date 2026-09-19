> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiodriverkit/iouseraudiostream/getlatency

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
