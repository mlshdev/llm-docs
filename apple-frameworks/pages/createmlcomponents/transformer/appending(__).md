> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/transformer/appending(_:)

# appending(\_:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Composes this transformer with an annotated-feature transformer.

## Declaration

```swift
func appending<Other, Annotation>(_ other: Other) -> some Transformer<AnnotatedFeature<Self.Input, Annotation>, Other.Output> where Other : Transformer, Other.Input == AnnotatedFeature<Self.Output, Annotation>

```
