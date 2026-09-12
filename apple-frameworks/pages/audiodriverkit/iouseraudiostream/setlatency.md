> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiostream/setlatency](https://developer.apple.com/documentation/audiodriverkit/iouseraudiostream/setlatency)

# SetLatency

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

## Declaration

```objectivec
kern_return_t SetLatency(uint32_t in_latency);
```

## Parameters

- `in_latency`: uint32_t latency value to set. Value is in sample frames.

<a id="return-value"></a>

## Return Value

Returns kern_return_t.

<a id="discussion"></a>

## Discussion

Set the latency of the stream in sample frames.

Drivers can change the latency of the stream dynamically.  A notification will be sent to the host to update the object state if successful. Setting the value will be synchronized using the work queue created by the object.
