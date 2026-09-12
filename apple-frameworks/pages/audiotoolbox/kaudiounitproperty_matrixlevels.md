> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiounitproperty_matrixlevels](https://developer.apple.com/documentation/audiotoolbox/kaudiounitproperty_matrixlevels)

# kAudioUnitProperty_MatrixLevels (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Describes the internal state of a matrix mixer.

## Declaration

```swift
var kAudioUnitProperty_MatrixLevels: AudioUnitPropertyID { get }
```

<a id="Discussion"></a>

## Discussion

Calculate the size required for this property’s value as follows:

```objc
(input channel count + 1) * (output channel count + 1)
```

Obtain the channel counts using the `kAudioUnitProperty_MatrixDimensions` property.

For example, consider a matrix mixer that has 2 input channels and 2 output channels. The value of this property then requires a 3 x 3 array of `Float32` values. You can retrieve specific pieces of information for this example matrix mixer’s state as follows:

- Global volume is stored at `volumes[2][2]`
- Input volumes are stored in the last column: first input channel at `volumes[0][2]`; second input channel at `volumes[1][2]`
- Output volumes are stored in the last row: first output channel at `volumes [2][0]`; second output channel at `volumes[2][1]`
- Cross-point volumes are stored at their expected locations(`volumes[0][1]`, etc)

A read-only two-dimensional array of `Float32` values valid on the audio unit global scope.

## See Also

### Constants

- [kAudioUnitProperty_InputAnchorTimeStamp](kaudiounitproperty_inputanchortimestamp.md)
- [kAudioUnitProperty_MatrixDimensions](kaudiounitproperty_matrixdimensions.md): Indicates the total number of channels for input and output of a given matrix mixer.
- [kAudioUnitProperty_MeterClipping](kaudiounitproperty_meterclipping.md): Indicates audio clipping that has occurred since this property was last accessed.
- [kAudioUnitProperty_MeteringMode](kaudiounitproperty_meteringmode.md): Specifies whether metering is enabled or disabled for a particular scope-element combination.

# kAudioUnitProperty_MatrixLevels (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Describes the internal state of a matrix mixer.

## Declaration

```objectivec
kAudioUnitProperty_MatrixLevels
```

<a id="Discussion"></a>

## Discussion

Calculate the size required for this property’s value as follows:

```objc
(input channel count + 1) * (output channel count + 1)
```

Obtain the channel counts using the `kAudioUnitProperty_MatrixDimensions` property.

For example, consider a matrix mixer that has 2 input channels and 2 output channels. The value of this property then requires a 3 x 3 array of `Float32` values. You can retrieve specific pieces of information for this example matrix mixer’s state as follows:

- Global volume is stored at `volumes[2][2]`
- Input volumes are stored in the last column: first input channel at `volumes[0][2]`; second input channel at `volumes[1][2]`
- Output volumes are stored in the last row: first output channel at `volumes [2][0]`; second output channel at `volumes[2][1]`
- Cross-point volumes are stored at their expected locations(`volumes[0][1]`, etc)

A read-only two-dimensional array of `Float32` values valid on the audio unit global scope.

## See Also

### Constants

- [kAudioUnitProperty_InputAnchorTimeStamp](kaudiounitproperty_inputanchortimestamp.md)
- [kAudioUnitProperty_MatrixDimensions](kaudiounitproperty_matrixdimensions.md): Indicates the total number of channels for input and output of a given matrix mixer.
- [kAudioUnitProperty_MeterClipping](kaudiounitproperty_meterclipping.md): Indicates audio clipping that has occurred since this property was last accessed.
- [kAudioUnitProperty_MeteringMode](kaudiounitproperty_meteringmode.md): Specifies whether metering is enabled or disabled for a particular scope-element combination.
