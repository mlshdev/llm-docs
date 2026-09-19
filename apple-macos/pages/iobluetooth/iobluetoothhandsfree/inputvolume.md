> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/inputvolume

# inputVolume (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Return the input volume

## Declaration

```swift
var inputVolume: Float { get set }
```

<a id="return-value"></a>

## Return Value

The input volume

<a id="Discussion"></a>

## Discussion

Returns the input volume between 0 and 1. 0 is the same as mute.

# inputVolume (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Return the input volume

## Declaration

```objectivec
@property (assign) float inputVolume;
```

<a id="return-value"></a>

## Return Value

The input volume

<a id="Discussion"></a>

## Discussion

Returns the input volume between 0 and 1. 0 is the same as mute.
