> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/stop()

# stop() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Halts the inquiry object. Could either stop the search for new devices, or the updating of found device names.

## Declaration

```swift
func stop() -> IOReturn
```

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the inquiry is successfully stopped. Returns kIOReturnNotPermitted if the inquiry object is already stopped. May return other IOReturn values, as appropriate.

# stop (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Halts the inquiry object. Could either stop the search for new devices, or the updating of found device names.

## Declaration

```objectivec
- (IOReturn) stop;
```

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the inquiry is successfully stopped. Returns kIOReturnNotPermitted if the inquiry object is already stopped. May return other IOReturn values, as appropriate.
