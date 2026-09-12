> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributecontainer/merge(_:mergepolicy:)](https://developer.apple.com/documentation/foundation/attributecontainer/merge(_:mergepolicy:))

# merge(\_:mergePolicy:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Merges the container’s attributes with those in another attribute container.

## Declaration

```swift
mutating func merge(_ other: AttributeContainer, mergePolicy: AttributedString.AttributeMergePolicy = .keepNew)
```

## Parameters

- `other`: The attribute container with the attributes to merge.
- `mergePolicy`: A policy to use when resolving conflicts between this string’s attributes and those in `other`.

## See Also

### Modifying Attributes

- [merging(\_:mergePolicy:)](merging%28__mergepolicy_%29.md): Returns an attribute container by merging the container’s attributes with those in another attribute container.
- [AttributedString.AttributeMergePolicy](../attributedstring/attributemergepolicy.md): An enumeration of behaviors to apply when merging attributes.
