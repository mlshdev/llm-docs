> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfree/devicecallholdmodes](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/devicecallholdmodes)

# deviceCallHoldModes (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Return the device’s supported call hold modes.

## Declaration

```swift
var deviceCallHoldModes: UInt32 { get }
```

<a id="return-value"></a>

## Return Value

The SMS services supported

<a id="Discussion"></a>

## Discussion

Returns the device’s supported call hold modes bitmap. The values are described in “IOBluetoothHandsFreeCallHoldModes.”

# deviceCallHoldModes (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Return the device’s supported call hold modes.

## Declaration

```objectivec
@property (readonly) uint32_t deviceCallHoldModes;
```

<a id="return-value"></a>

## Return Value

The SMS services supported

<a id="Discussion"></a>

## Discussion

Returns the device’s supported call hold modes bitmap. The values are described in “IOBluetoothHandsFreeCallHoldModes.”
