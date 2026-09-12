> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiounitproperty_matrixdimensions](https://developer.apple.com/documentation/audiotoolbox/kaudiounitproperty_matrixdimensions)

# kAudioUnitProperty_MatrixDimensions (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates the total number of channels for input and output of a given matrix mixer.

## Declaration

```swift
var kAudioUnitProperty_MatrixDimensions: AudioUnitPropertyID { get }
```

<a id="Discussion"></a>

## Discussion

A read-only `2 * UInt32` value valid on the audio unit global scope.

## See Also

### Constants

- [kAudioUnitProperty_InputAnchorTimeStamp](kaudiounitproperty_inputanchortimestamp.md)
- [kAudioUnitProperty_MatrixLevels](kaudiounitproperty_matrixlevels.md): Describes the internal state of a matrix mixer.
- [kAudioUnitProperty_MeterClipping](kaudiounitproperty_meterclipping.md): Indicates audio clipping that has occurred since this property was last accessed.
- [kAudioUnitProperty_MeteringMode](kaudiounitproperty_meteringmode.md): Specifies whether metering is enabled or disabled for a particular scope-element combination.

# kAudioUnitProperty_MatrixDimensions (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates the total number of channels for input and output of a given matrix mixer.

## Declaration

```objectivec
kAudioUnitProperty_MatrixDimensions
```

<a id="Discussion"></a>

## Discussion

A read-only `2 * UInt32` value valid on the audio unit global scope.

## See Also

### Constants

- [kAudioUnitProperty_InputAnchorTimeStamp](kaudiounitproperty_inputanchortimestamp.md)
- [kAudioUnitProperty_MatrixLevels](kaudiounitproperty_matrixlevels.md): Describes the internal state of a matrix mixer.
- [kAudioUnitProperty_MeterClipping](kaudiounitproperty_meterclipping.md): Indicates audio clipping that has occurred since this property was last accessed.
- [kAudioUnitProperty_MeteringMode](kaudiounitproperty_meteringmode.md): Specifies whether metering is enabled or disabled for a particular scope-element combination.
