> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/scsitaskdeviceinterface/1575379-isexclusiveaccessavailable

# IsExclusiveAccessAvailable

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to find out if the device can be opened exclusively by the caller.

## Declaration

```objectivec
Boolean (*IsExclusiveAccessAvailable)(void *self);
```

## Parameters

- `self`: Pointer to an instance of an SCSITaskDeviceInterface.

<a id="return_value"></a>

## Return Value

Returns false if the device has been opened for exclusive access, otherwise true.

<a id="discussion"></a>

## Discussion

Method to find out if the device can be opened exclusively by the caller.
