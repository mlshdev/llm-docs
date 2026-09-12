> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdeviceinquiry/stop()](https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/stop())

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
