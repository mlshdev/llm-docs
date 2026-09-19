> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/handlechangesamplerate

# HandleChangeSampleRate

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

The system calls this virtual method when the clock device’s sample rate changes.

## Declaration

```objectivec
virtual kern_return_t HandleChangeSampleRate(double in_sample_rate);
```

## Parameters

- `in_sample_rate`: The double sample rate attempting to be set on the clock device.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` on success. Upon success the value should be updated.

<a id="discussion"></a>

## Discussion

The default implementation calls SetSampleRate() and returns `kIOReturnSuccess`. Subclass and override this method to handle changes to this value and return `kIOReturnSuccess` upon success.
