> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/lazysequence/mapfeatures(_:)](https://developer.apple.com/documentation/swift/lazysequence/mapfeatures(_:))

# mapFeatures(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Returns a lazy sequence where the elements of the result are computed each time they are read by calling transform function on the feature of an annotated feature.

## Declaration

```swift
func mapFeatures<Input, Output, Annotation>(_ transform: @escaping (Input) -> Output) -> LazyMapSequence<Base, AnnotatedFeature<Output, Annotation>> where Base.Element == AnnotatedFeature<Input, Annotation>
```
