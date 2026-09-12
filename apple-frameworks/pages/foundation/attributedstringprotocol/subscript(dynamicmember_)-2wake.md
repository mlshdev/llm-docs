> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstringprotocol/subscript(dynamicmember:)-2wake](https://developer.apple.com/documentation/foundation/attributedstringprotocol/subscript(dynamicmember:)-2wake)

# subscript(dynamicMember:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns an attribute value that a key path indicates.

## Declaration

```swift
@preconcurrency subscript<K>(dynamicMember keyPath: KeyPath<AttributeDynamicLookup, K>) -> K.Value? where K : AttributedStringKey, K.Value : Sendable { get set }
```

<a id="Discussion"></a>

## Discussion

This subscript returns `nil` unless the specified attribute exists, and is present and identical for the entire attributed string or substring. To find portions of an attributed string with consistent attributes, use the [runs](runs.md) property.

Getting or setting stringwide attributes with this subscript has `O(n)` behavior in the worst case, where `n` is the number of runs.

## See Also

### Accessing Whole-String Attributes

- [subscript(\_:)](subscript%28__%29-4thnp.md): Returns an attribute value that corresponds to an attributed string key.
- [AttributeDynamicLookup](../attributedynamiclookup.md): A type to support dynamic member lookup of attributes and containers.
- [subscript(dynamicMember:)](subscript%28dynamicmember_%29-55pcu.md): Returns a scoped attribute container that a key path indicates.
- [ScopedAttributeContainer](../scopedattributecontainer.md): An attribute container that allows dynamic member lookup of its contents within the specified attribute scope.
