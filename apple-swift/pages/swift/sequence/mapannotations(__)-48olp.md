> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/sequence/mapannotations(_:)-48olp](https://developer.apple.com/documentation/swift/sequence/mapannotations(_:)-48olp)

# mapAnnotations(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Returns an array containing the results of mapping the given async closure over the sequence’s annotations.

## Declaration

```swift
func mapAnnotations<Feature, Input, Output>(_ transform: (Input) async throws -> Output) async rethrows -> [AnnotatedFeature<Feature, Output>] where Self.Element == AnnotatedFeature<Feature, Input>
```
