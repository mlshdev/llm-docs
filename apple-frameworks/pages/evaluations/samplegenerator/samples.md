> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/samplegenerator/samples](https://developer.apple.com/documentation/evaluations/samplegenerator/samples)

# samples

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

All initial and generated samples from the most recent run.

## Declaration

```swift
var samples: [SampleType] { get }
```

<a id="discussion"></a>

## Discussion

Before you call [run()](run%28%29.md), this equals the samples you passed to the initializer. After iteration completes, it contains the full resulting dataset.

## See Also

### Accessing results

- [invalidSamples](invalidsamples.md): Samples that the validator rejected during the most recent run.
