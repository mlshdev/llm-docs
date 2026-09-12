> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/sequence/mapfeatures(_:)-8zq1h](https://developer.apple.com/documentation/swift/sequence/mapfeatures(_:)-8zq1h)

# mapFeatures(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Returns an array containing the results of mapping the given closure over the sequence’s features.

## Declaration

```swift
func mapFeatures<Input, Output, Annotation>(_ transform: (Input) throws -> Output) rethrows -> [AnnotatedFeature<Output, Annotation>] where Self.Element == AnnotatedFeature<Input, Annotation>
```
