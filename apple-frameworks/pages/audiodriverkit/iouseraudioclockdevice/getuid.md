> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/getuid

# GetUID

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the unique identifier of the clock device.

## Declaration

```objectivec
OSSharedPtr<OSString> GetUID();
```

<a id="return-value"></a>

## Return Value

A pointer to an [OSString](../../driverkit/osstring.md) containing the UID.

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.
