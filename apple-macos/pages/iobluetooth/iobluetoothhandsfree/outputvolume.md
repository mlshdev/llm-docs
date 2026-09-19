> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/outputvolume

# outputVolume (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Return the output volume

## Declaration

```swift
var outputVolume: Float { get set }
```

<a id="return-value"></a>

## Return Value

The output volume

<a id="Discussion"></a>

## Discussion

Returns the output volume between 0 and 1. 0 is the same as mute.

# outputVolume (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Return the output volume

## Declaration

```objectivec
@property (assign) float outputVolume;
```

<a id="return-value"></a>

## Return Value

The output volume

<a id="Discussion"></a>

## Discussion

Returns the output volume between 0 and 1. 0 is the same as mute.
