> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/devicesupportedfeatures

# deviceSupportedFeatures (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Return the device’s supported features.

## Declaration

```swift
var deviceSupportedFeatures: UInt32 { get }
```

<a id="return-value"></a>

## Return Value

The device features bitmap

<a id="Discussion"></a>

## Discussion

Returns the device’s supported features bitmap. The values are described in “IOBluetoothHandsFreeDeviceFeatures and IOBluetoothHandsFreeAudioGatewayFeatures.”

# deviceSupportedFeatures (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Return the device’s supported features.

## Declaration

```objectivec
@property (readonly) uint32_t deviceSupportedFeatures;
```

<a id="return-value"></a>

## Return Value

The device features bitmap

<a id="Discussion"></a>

## Discussion

Returns the device’s supported features bitmap. The values are described in “IOBluetoothHandsFreeDeviceFeatures and IOBluetoothHandsFreeAudioGatewayFeatures.”
