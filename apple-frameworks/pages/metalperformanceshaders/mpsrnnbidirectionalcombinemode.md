> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsrnnbidirectionalcombinemode](https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnbidirectionalcombinemode)

# MPSRNNBidirectionalCombineMode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Modes that define how two images or matrices are combined.

## Declaration

```swift
enum MPSRNNBidirectionalCombineMode
```

## Topics

### Enumeration Cases

- [MPSRNNBidirectionalCombineMode.add](mpsrnnbidirectionalcombinemode/add.md): A mode in which two sequences are summed to form a single output.
- [MPSRNNBidirectionalCombineMode.concatenate](mpsrnnbidirectionalcombinemode/concatenate.md): A mode in which two sequences are concatenated along the feature channels to form a single output.
- [MPSRNNBidirectionalCombineMode.none](mpsrnnbidirectionalcombinemode/none.md): A mode in which two sequences are kept separate.

### Initializers

- [init(rawValue:)](mpsrnnbidirectionalcombinemode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Instance Properties

- [bidirectionalCombineMode](mpsrnnimageinferencelayer/bidirectionalcombinemode.md)
- [numberOfLayers](mpsrnnimageinferencelayer/numberoflayers.md)
- [recurrentOutputIsTemporary](mpsrnnimageinferencelayer/recurrentoutputistemporary.md)
- [storeAllIntermediateStates](mpsrnnimageinferencelayer/storeallintermediatestates.md)
- [inputFeatureChannels](mpsrnnimageinferencelayer/inputfeaturechannels.md)
- [outputFeatureChannels](mpsrnnimageinferencelayer/outputfeaturechannels.md)

# MPSRNNBidirectionalCombineMode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Modes that define how two images or matrices are combined.

## Declaration

```objectivec
enum MPSRNNBidirectionalCombineMode : NSUInteger;
```

## Topics

### Enumeration Cases

- [MPSRNNBidirectionalCombineModeAdd](mpsrnnbidirectionalcombinemode/add.md): A mode in which two sequences are summed to form a single output.
- [MPSRNNBidirectionalCombineModeConcatenate](mpsrnnbidirectionalcombinemode/concatenate.md): A mode in which two sequences are concatenated along the feature channels to form a single output.
- [MPSRNNBidirectionalCombineModeNone](mpsrnnbidirectionalcombinemode/none.md): A mode in which two sequences are kept separate.

## See Also

### Instance Properties

- [bidirectionalCombineMode](mpsrnnimageinferencelayer/bidirectionalcombinemode.md)
- [numberOfLayers](mpsrnnimageinferencelayer/numberoflayers.md)
- [recurrentOutputIsTemporary](mpsrnnimageinferencelayer/recurrentoutputistemporary.md)
- [storeAllIntermediateStates](mpsrnnimageinferencelayer/storeallintermediatestates.md)
- [inputFeatureChannels](mpsrnnimageinferencelayer/inputfeaturechannels.md)
- [outputFeatureChannels](mpsrnnimageinferencelayer/outputfeaturechannels.md)
