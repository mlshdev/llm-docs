> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/augmentationbuilder/buildpartialblock(first:)](https://developer.apple.com/documentation/createmlcomponents/augmentationbuilder/buildpartialblock(first:))

# buildPartialBlock(first:)

**Framework:** Create ML Components  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Builds a partial result random transformer from the first random transformer.

## Declaration

```swift
static func buildPartialBlock(first: some RandomTransformer<Element, Element>) -> some RandomTransformer<Element, Element>

```

## Parameters

- `first`: A random transformer.

## See Also

### Building augmentations

- [buildPartialBlock(accumulated:next:)](buildpartialblock%28accumulated_next_%29.md): Builds a partial result by combining an accumulated random transformer and a new random transformer.
