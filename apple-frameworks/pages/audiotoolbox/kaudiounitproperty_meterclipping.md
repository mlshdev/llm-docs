> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiounitproperty_meterclipping](https://developer.apple.com/documentation/audiotoolbox/kaudiounitproperty_meterclipping)

# kAudioUnitProperty_MeterClipping (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates audio clipping that has occurred since this property was last accessed.

## Declaration

```swift
var kAudioUnitProperty_MeterClipping: AudioUnitPropertyID { get }
```

<a id="Discussion"></a>

## Discussion

A read-only [AudioUnitMeterClipping](audiounitmeterclipping.md) data structure valid on the audio unit global scope.

## See Also

### Constants

- [kAudioUnitProperty_InputAnchorTimeStamp](kaudiounitproperty_inputanchortimestamp.md)
- [kAudioUnitProperty_MatrixDimensions](kaudiounitproperty_matrixdimensions.md): Indicates the total number of channels for input and output of a given matrix mixer.
- [kAudioUnitProperty_MatrixLevels](kaudiounitproperty_matrixlevels.md): Describes the internal state of a matrix mixer.
- [kAudioUnitProperty_MeteringMode](kaudiounitproperty_meteringmode.md): Specifies whether metering is enabled or disabled for a particular scope-element combination.

# kAudioUnitProperty_MeterClipping (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates audio clipping that has occurred since this property was last accessed.

## Declaration

```objectivec
kAudioUnitProperty_MeterClipping
```

<a id="Discussion"></a>

## Discussion

A read-only [AudioUnitMeterClipping](audiounitmeterclipping.md) data structure valid on the audio unit global scope.

## See Also

### Constants

- [kAudioUnitProperty_InputAnchorTimeStamp](kaudiounitproperty_inputanchortimestamp.md)
- [kAudioUnitProperty_MatrixDimensions](kaudiounitproperty_matrixdimensions.md): Indicates the total number of channels for input and output of a given matrix mixer.
- [kAudioUnitProperty_MatrixLevels](kaudiounitproperty_matrixlevels.md): Describes the internal state of a matrix mixer.
- [kAudioUnitProperty_MeteringMode](kaudiounitproperty_meteringmode.md): Specifies whether metering is enabled or disabled for a particular scope-element combination.
