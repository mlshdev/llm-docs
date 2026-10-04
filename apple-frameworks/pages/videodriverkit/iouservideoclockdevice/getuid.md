> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getuid

# GetUID

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Gets the unique identifier of the clock device.

## Declaration

```objectivec
OSSharedPtr<OSString> GetUID();
```

<a id="return-value"></a>

## Return Value

The unique identifier.

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.
