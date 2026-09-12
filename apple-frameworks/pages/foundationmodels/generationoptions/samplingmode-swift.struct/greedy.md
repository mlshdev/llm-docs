> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationoptions/samplingmode-swift.struct/greedy](https://developer.apple.com/documentation/foundationmodels/generationoptions/samplingmode-swift.struct/greedy)

# greedy

**Framework:** Foundation Models  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A sampling mode that always chooses the most likely token.

## Declaration

```swift
static var greedy: GenerationOptions.SamplingMode { get }
```

## Mentioned In

- [Analyzing images with multimodal prompting](../../analyzing-images-with-multimodal-prompting.md)

<a id="discussion"></a>

## Discussion

This mode always produces the same output for a given input. Responses produced with greedy sampling are statistically likely, but may lack the human-like quality and variety of other sampling strategies.

> **See Also**

> Sampling modes [random(top:seed:)](random%28top_seed_%29.md) and [random(probabilityThreshold:seed:)](random%28probabilitythreshold_seed_%29.md)

## See Also

### Sampling modes

- [random(probabilityThreshold:seed:)](random%28probabilitythreshold_seed_%29.md): A mode that considers a variable number of high-probability tokens based on the specified threshold.
- [random(top:seed:)](random%28top_seed_%29.md): A sampling mode that considers a fixed number of high-probability tokens.
