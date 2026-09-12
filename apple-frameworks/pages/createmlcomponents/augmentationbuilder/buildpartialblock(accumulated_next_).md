> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/augmentationbuilder/buildpartialblock(accumulated:next:)](https://developer.apple.com/documentation/createmlcomponents/augmentationbuilder/buildpartialblock(accumulated:next:))

# buildPartialBlock(accumulated:next:)

**Framework:** Create ML Components  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Builds a partial result by combining an accumulated random transformer and a new random transformer.

## Declaration

```swift
static func buildPartialBlock(accumulated: some RandomTransformer<Element, Element>, next: some RandomTransformer<Element, Element>) -> some RandomTransformer<Element, Element>

```

## Parameters

- `accumulated`: A random transformer representing the accumulated result thus far.
- `next`: A random transformer representing the next component after the accumulated ones in the block.

## See Also

### Building augmentations

- [buildPartialBlock(first:)](buildpartialblock%28first_%29.md): Builds a partial result random transformer from the first random transformer.
