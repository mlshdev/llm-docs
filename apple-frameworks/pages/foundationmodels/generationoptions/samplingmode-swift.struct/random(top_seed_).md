> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationoptions/samplingmode-swift.struct/random(top:seed:)](https://developer.apple.com/documentation/foundationmodels/generationoptions/samplingmode-swift.struct/random(top:seed:))

# random(top:seed:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A sampling mode that considers a fixed number of high-probability tokens.

## Declaration

```swift
static func random(top k: Int, seed: UInt64? = nil) -> GenerationOptions.SamplingMode
```

## Parameters

- `k`: The number of tokens to consider.
- `seed`: An optional random seed used to make output more deterministic.

<a id="discussion"></a>

## Discussion

Also known as top-k.

During the token-selection process, the vocabulary is sorted by probability a token is selected from among the top K candidates. Smaller values of K ensure only the most probable tokens are candidates for selection, resulting in more deterministic and confident answers. Larger values of K allow less probably tokens to be selected, raising non-determinism and creativity.

> **Note**

> Setting a random seed is not guaranteed to result in fully deterministic output. It is best effort.

> **See Also**

> Sampling modes [greedy](greedy.md) and [random(probabilityThreshold:seed:)](random%28probabilitythreshold_seed_%29.md)

## See Also

### Sampling modes

- [greedy](greedy.md): A sampling mode that always chooses the most likely token.
- [random(probabilityThreshold:seed:)](random%28probabilitythreshold_seed_%29.md): A mode that considers a variable number of high-probability tokens based on the specified threshold.
