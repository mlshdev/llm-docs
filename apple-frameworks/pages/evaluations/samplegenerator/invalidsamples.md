> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/samplegenerator/invalidsamples

# invalidSamples

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Samples that the validator rejected during the most recent run.

## Declaration

```swift
var invalidSamples: [SampleType] { get }
```

## Mentioned In

- [Generating synthetic datasets](../generating-synthetic-evaluation-datasets.md)

<a id="discussion"></a>

## Discussion

Returns an empty array when no validator was provided.

## See Also

### Accessing results

- [samples](samples.md): All initial and generated samples from the most recent run.
