> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodevice/setwantsstreamformatsrestored](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodevice/setwantsstreamformatsrestored)

# SetWantsStreamFormatsRestored

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

## Declaration

```objectivec
void SetWantsStreamFormatsRestored(bool in_wants_stream_formats_restored);
```

## Parameters

- `in_wants_stream_formats_restored`: Bool value indicating if the host should or should not restore the stream formats for the device A value of false indicates that the stream formats for the device should NOT be saved/restored A value of true indicated that the stream formats for the device should be saved/restored

<a id="discussion"></a>

## Discussion

Setter on the device object that tells the host that the stream formats for the device should or should not be saved/restored when the device is first published. If the device doesn’t implement this property, it is assumed that the settings should be saved and restored. Note that this should be set before the device is published to the host.
