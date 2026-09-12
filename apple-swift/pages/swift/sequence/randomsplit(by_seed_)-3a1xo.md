> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/sequence/randomsplit(by:seed:)-3a1xo](https://developer.apple.com/documentation/swift/sequence/randomsplit(by:seed:)-3a1xo)

# randomSplit(by:seed:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Generates two AnnotatedFeatures by randomly splitting the elements of the sequence, at the same proportion within each unique Annotation.

## Declaration

```swift
func randomSplit<Feature, Annotation>(by proportion: Double, seed: Int? = nil) -> ([AnnotatedFeature<Feature, Annotation>], [AnnotatedFeature<Feature, Annotation>]) where Annotation : Hashable, Self.Element == AnnotatedFeature<Feature, Annotation>
```

## Parameters

- `proportion`: A proportion in the range `[0.0, 1.0]`.
- `seed`: A seed number for a random-number generator.

<a id="return-value"></a>

## Return Value

A tuple of arrays.
