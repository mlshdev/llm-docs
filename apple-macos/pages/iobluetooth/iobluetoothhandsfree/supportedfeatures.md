> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/supportedfeatures

# supportedFeatures (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Set the supported features

## Declaration

```swift
var supportedFeatures: UInt32 { get set }
```

<a id="Discussion"></a>

## Discussion

Sets the supported features bitmap. The values are described in “IOBluetoothHandsFreeDeviceFeatures and IOBluetoothHandsFreeAudioGatewayFeatures.”

# supportedFeatures (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Set the supported features

## Declaration

```objectivec
@property (assign) uint32_t supportedFeatures;
```

<a id="Discussion"></a>

## Discussion

Sets the supported features bitmap. The values are described in “IOBluetoothHandsFreeDeviceFeatures and IOBluetoothHandsFreeAudioGatewayFeatures.”
