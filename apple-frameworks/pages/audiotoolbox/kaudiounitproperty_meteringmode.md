> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiounitproperty_meteringmode](https://developer.apple.com/documentation/audiotoolbox/kaudiounitproperty_meteringmode)

# kAudioUnitProperty_MeteringMode (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Specifies whether metering is enabled or disabled for a particular scope-element combination.

## Declaration

```swift
var kAudioUnitProperty_MeteringMode: AudioUnitPropertyID { get }
```

<a id="Discussion"></a>

## Discussion

A read/write `UInt32` value valid on the input and output scopes.

## See Also

### Constants

- [kAudioUnitProperty_InputAnchorTimeStamp](kaudiounitproperty_inputanchortimestamp.md)
- [kAudioUnitProperty_MatrixDimensions](kaudiounitproperty_matrixdimensions.md): Indicates the total number of channels for input and output of a given matrix mixer.
- [kAudioUnitProperty_MatrixLevels](kaudiounitproperty_matrixlevels.md): Describes the internal state of a matrix mixer.
- [kAudioUnitProperty_MeterClipping](kaudiounitproperty_meterclipping.md): Indicates audio clipping that has occurred since this property was last accessed.

# kAudioUnitProperty_MeteringMode (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Specifies whether metering is enabled or disabled for a particular scope-element combination.

## Declaration

```objectivec
kAudioUnitProperty_MeteringMode
```

<a id="Discussion"></a>

## Discussion

A read/write `UInt32` value valid on the input and output scopes.

## See Also

### Constants

- [kAudioUnitProperty_InputAnchorTimeStamp](kaudiounitproperty_inputanchortimestamp.md)
- [kAudioUnitProperty_MatrixDimensions](kaudiounitproperty_matrixdimensions.md): Indicates the total number of channels for input and output of a given matrix mixer.
- [kAudioUnitProperty_MatrixLevels](kaudiounitproperty_matrixlevels.md): Describes the internal state of a matrix mixer.
- [kAudioUnitProperty_MeterClipping](kaudiounitproperty_meterclipping.md): Indicates audio clipping that has occurred since this property was last accessed.
