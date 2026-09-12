> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstringprotocol/subscript(_:)-4thnp](https://developer.apple.com/documentation/foundation/attributedstringprotocol/subscript(_:)-4thnp)

# subscript(\_:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns an attribute value that corresponds to an attributed string key.

## Declaration

```swift
@preconcurrency subscript<K>(_: K.Type) -> K.Value? where K : AttributedStringKey, K.Value : Sendable { get set }
```

<a id="Discussion"></a>

## Discussion

This subscript returns `nil` unless the specified attribute exists, and is present and identical for the entire attributed string or substring. To find portions of an attributed string with consistent attributes, use the [runs](../attributedstring/runs-swift.property.md) property.

Getting or setting stringwide attributes with this subscript has `O(n)` behavior in the worst case, where `n` is the number of runs.

## Default Implementations

### AttributedStringProtocol Implementations

- [subscript(\_:)](subscript%28__%29-67hgv.md): Returns a discontiguous substring of this attributed string using a set of ranges to indicate the discontiguous substring bounds.

## See Also

### Accessing Whole-String Attributes

- [subscript(dynamicMember:)](subscript%28dynamicmember_%29-2wake.md): Returns an attribute value that a key path indicates.
- [AttributeDynamicLookup](../attributedynamiclookup.md): A type to support dynamic member lookup of attributes and containers.
- [subscript(dynamicMember:)](subscript%28dynamicmember_%29-55pcu.md): Returns a scoped attribute container that a key path indicates.
- [ScopedAttributeContainer](../scopedattributecontainer.md): An attribute container that allows dynamic member lookup of its contents within the specified attribute scope.
