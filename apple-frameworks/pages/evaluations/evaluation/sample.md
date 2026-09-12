> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluation/sample](https://developer.apple.com/documentation/evaluations/evaluation/sample)

# Sample

**Framework:** Evaluations  
**Kind:** Associated Type  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The type of input samples in the evaluation dataset.

## Declaration

```swift
associatedtype Sample where Self.Sample == Self.SampleLoader.Sample, Self.Sample.ExpectedValue == Self.Subject.Value
```

## See Also

### Providing data

- [SampleLoader](sampleloader.md): The type of the sample loader used to provide the evaluation dataset.
- [dataset](dataset.md): The evaluation dataset.
