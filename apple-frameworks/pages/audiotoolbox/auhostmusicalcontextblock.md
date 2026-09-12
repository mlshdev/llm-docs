> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auhostmusicalcontextblock](https://developer.apple.com/documentation/audiotoolbox/auhostmusicalcontextblock)

# AUHostMusicalContextBlock (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block through which hosts provide musical tempo, time signature, and beat position.

## Declaration

```swift
typealias AUHostMusicalContextBlock = (UnsafeMutablePointer<Double>?, UnsafeMutablePointer<Double>?, UnsafeMutablePointer<Int>?, UnsafeMutablePointer<Double>?, UnsafeMutablePointer<Int>?, UnsafeMutablePointer<Double>?) -> Bool
```

<a id="Discussion"></a>

## Discussion

If the host app provides this block to an audio unit, via the [musicalContextBlock](auaudiounit/musicalcontextblock.md) property, then the block may be called at the beginning of each render cycle to obtain information about the current render cycle’s musical context. Any of the provided parameters may be null to indicate that the audio unit is not interested in that particular piece of information.

This block returns [true](https://developer.apple.com/documentation/swift/true) if the operation was successful and [false](https://developer.apple.com/documentation/swift/false) otherwise.

The block takes the following parameters:

- **currentTempo**: The current tempo, in beats per minute.
- **timeSignatureNumerator**: The numerator of the current time signature.
- **timeSignatureDenominator**: The denominator of the current time signature.
- **currentBeatPosition**: The precise beat position of the beginning of the current buffer being rendered.
- **sampleOffsetToNextBeat**: The number of samples between the beginning of the buffer being rendered and the next beat. Can be `0`.
- **currentMeasureDownbeatPosition**: The beat position corresponding to the beginning of the current measure.

## See Also

### Providing Data to the Host

- [musicalContextBlock](auaudiounit/musicalcontextblock.md): A callback to the host for musical context information.
- [transportStateBlock](auaudiounit/transportstateblock.md): A callback to the host for transport state information.
- [contextName](auaudiounit/contextname.md): Information about the host context in which the audio unit is connected, for display in the audio unit’s view.
- [supportsMPE](auaudiounit/supportsmpe.md): A Boolean value that indicates whether the audio unit supports multi-dimensional polyphonic expression.
- [AUHostTransportStateBlock](auhosttransportstateblock.md): A block through which hosts provide information about their transport state.

# AUHostMusicalContextBlock (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block through which hosts provide musical tempo, time signature, and beat position.

## Declaration

```objectivec
typedef _Bool (^)(double *, double *, long *, double *, long *, double *) __attribute__((nonblocking)) AUHostMusicalContextBlock;
```

<a id="Discussion"></a>

## Discussion

If the host app provides this block to an audio unit, via the [musicalContextBlock](auaudiounit/musicalcontextblock.md) property, then the block may be called at the beginning of each render cycle to obtain information about the current render cycle’s musical context. Any of the provided parameters may be null to indicate that the audio unit is not interested in that particular piece of information.

This block returns [true](https://developer.apple.com/documentation/swift/true) if the operation was successful and [false](https://developer.apple.com/documentation/swift/false) otherwise.

The block takes the following parameters:

- **currentTempo**: The current tempo, in beats per minute.
- **timeSignatureNumerator**: The numerator of the current time signature.
- **timeSignatureDenominator**: The denominator of the current time signature.
- **currentBeatPosition**: The precise beat position of the beginning of the current buffer being rendered.
- **sampleOffsetToNextBeat**: The number of samples between the beginning of the buffer being rendered and the next beat. Can be `0`.
- **currentMeasureDownbeatPosition**: The beat position corresponding to the beginning of the current measure.

## See Also

### Providing Data to the Host

- [musicalContextBlock](auaudiounit/musicalcontextblock.md): A callback to the host for musical context information.
- [transportStateBlock](auaudiounit/transportstateblock.md): A callback to the host for transport state information.
- [contextName](auaudiounit/contextname.md): Information about the host context in which the audio unit is connected, for display in the audio unit’s view.
- [supportsMPE](auaudiounit/supportsmpe.md): A Boolean value that indicates whether the audio unit supports multi-dimensional polyphonic expression.
- [AUHostTransportStateBlock](auhosttransportstateblock.md): A block through which hosts provide information about their transport state.
