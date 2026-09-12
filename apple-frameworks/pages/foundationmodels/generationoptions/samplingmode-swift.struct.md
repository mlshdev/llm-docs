> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationoptions/samplingmode-swift.struct](https://developer.apple.com/documentation/foundationmodels/generationoptions/samplingmode-swift.struct)

# GenerationOptions.SamplingMode

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A type that defines how values are sampled from a probability distribution.

## Declaration

```swift
struct SamplingMode
```

<a id="overview"></a>

## Overview

A model builds its response to a prompt in a loop. At each iteration in the loop the model produces a probability distribution for all the tokens in its vocabulary. The sampling mode controls how a token is selected from that distribution.

## Topics

### Sampling modes

- [greedy](samplingmode-swift.struct/greedy.md): A sampling mode that always chooses the most likely token.
- [random(probabilityThreshold:seed:)](samplingmode-swift.struct/random%28probabilitythreshold_seed_%29.md): A mode that considers a variable number of high-probability tokens based on the specified threshold.
- [random(top:seed:)](samplingmode-swift.struct/random%28top_seed_%29.md): A sampling mode that considers a fixed number of high-probability tokens.

### Getting the kind of sampling

- [kind](samplingmode-swift.struct/kind-swift.property.md)
- [GenerationOptions.SamplingMode.Kind](samplingmode-swift.struct/kind-swift.enum.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring options

- [temperature](temperature.md): A value that influences the confidence of the model’s response.
- [sampling](sampling.md): Deprecated. A sampling strategy for how the model picks tokens when generating a response.
- [samplingMode](samplingmode-swift.property.md): A sampling strategy for how the model picks tokens when generating a response.
- [toolCallingMode](toolcallingmode-swift.property.md): The tool calling requirements.
- [GenerationOptions.ToolCallingMode](toolcallingmode-swift.struct.md): A value you use to describe the model behavior when it comes to tool usage.
- [maximumResponseTokens](maximumresponsetokens.md): The maximum number of tokens the model is allowed to produce in its response.
