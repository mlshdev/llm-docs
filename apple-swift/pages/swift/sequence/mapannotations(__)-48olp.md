> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/sequence/mapannotations(_:)-48olp

# mapAnnotations(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Returns an array containing the results of mapping the given async closure over the sequence’s annotations.

## Declaration

```swift
func mapAnnotations<Feature, Input, Output>(_ transform: (Input) async throws -> Output) async rethrows -> [AnnotatedFeature<Feature, Output>] where Self.Element == AnnotatedFeature<Feature, Input>
```
