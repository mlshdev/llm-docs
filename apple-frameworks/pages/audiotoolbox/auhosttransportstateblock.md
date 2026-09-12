> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auhosttransportstateblock](https://developer.apple.com/documentation/audiotoolbox/auhosttransportstateblock)

# AUHostTransportStateBlock (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block through which hosts provide information about their transport state.

## Declaration

```swift
typealias AUHostTransportStateBlock = (UnsafeMutablePointer<AUHostTransportStateFlags>?, UnsafeMutablePointer<Double>?, UnsafeMutablePointer<Double>?, UnsafeMutablePointer<Double>?) -> Bool
```

<a id="Discussion"></a>

## Discussion

If the host app provides this block to an audio unit, via the [transportStateBlock](auaudiounit/transportstateblock.md) property, then the block may be called at the beginning of each render cycle to obtain information about the current transport state. Any of the provided parameters may be null to indicate that the audio unit is not interested in that particular piece of information.

This block returns [true](https://developer.apple.com/documentation/swift/true) if the transport state was able to be retrieved from the host; it returns [false](https://developer.apple.com/documentation/swift/false) otherwise.

The block takes the following parameters:

- **transportStateFlags**: The current state of the audio transport.
- **currentSamplePosition**: The current position in the host’s timeline, in samples at the audio unit’s output sample rate.
- **cycleStartBeatPosition**: If cycling, the starting beat position of the cycle.
- **cycleEndBeatPosition**: If cycling, the ending beat position of the cycle.

## See Also

### Providing Data to the Host

- [musicalContextBlock](auaudiounit/musicalcontextblock.md): A callback to the host for musical context information.
- [transportStateBlock](auaudiounit/transportstateblock.md): A callback to the host for transport state information.
- [contextName](auaudiounit/contextname.md): Information about the host context in which the audio unit is connected, for display in the audio unit’s view.
- [supportsMPE](auaudiounit/supportsmpe.md): A Boolean value that indicates whether the audio unit supports multi-dimensional polyphonic expression.
- [AUHostMusicalContextBlock](auhostmusicalcontextblock.md): A block through which hosts provide musical tempo, time signature, and beat position.

# AUHostTransportStateBlock (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block through which hosts provide information about their transport state.

## Declaration

```objectivec
typedef _Bool (^)(enum AUHostTransportStateFlags *, double *, double *, double *) __attribute__((nonblocking)) AUHostTransportStateBlock;
```

<a id="Discussion"></a>

## Discussion

If the host app provides this block to an audio unit, via the [transportStateBlock](auaudiounit/transportstateblock.md) property, then the block may be called at the beginning of each render cycle to obtain information about the current transport state. Any of the provided parameters may be null to indicate that the audio unit is not interested in that particular piece of information.

This block returns [true](https://developer.apple.com/documentation/swift/true) if the transport state was able to be retrieved from the host; it returns [false](https://developer.apple.com/documentation/swift/false) otherwise.

The block takes the following parameters:

- **transportStateFlags**: The current state of the audio transport.
- **currentSamplePosition**: The current position in the host’s timeline, in samples at the audio unit’s output sample rate.
- **cycleStartBeatPosition**: If cycling, the starting beat position of the cycle.
- **cycleEndBeatPosition**: If cycling, the ending beat position of the cycle.

## See Also

### Providing Data to the Host

- [musicalContextBlock](auaudiounit/musicalcontextblock.md): A callback to the host for musical context information.
- [transportStateBlock](auaudiounit/transportstateblock.md): A callback to the host for transport state information.
- [contextName](auaudiounit/contextname.md): Information about the host context in which the audio unit is connected, for display in the audio unit’s view.
- [supportsMPE](auaudiounit/supportsmpe.md): A Boolean value that indicates whether the audio unit supports multi-dimensional polyphonic expression.
- [AUHostMusicalContextBlock](auhostmusicalcontextblock.md): A block through which hosts provide musical tempo, time signature, and beat position.
