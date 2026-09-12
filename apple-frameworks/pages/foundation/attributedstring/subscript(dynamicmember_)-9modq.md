> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/subscript(dynamicmember:)-9modq](https://developer.apple.com/documentation/foundation/attributedstring/subscript(dynamicmember:)-9modq)

# subscript(dynamicMember:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a scoped attribute container that a key path indicates.

## Declaration

```swift
subscript<S>(dynamicMember keyPath: KeyPath<AttributeScopes, S.Type>) -> ScopedAttributeContainer<S> where S : AttributeScope { get set }
```

<a id="Discussion"></a>

## Discussion

Use this subscript when you need to work with an explicit attribute scope. For example, the SwiftUI [foregroundColor](../attributescopes/swiftuiattributes/foregroundcolor.md) attribute overrides the attribute in the AppKit and UIKit scopes with the same name. If you work with both the SwiftUI and UIKit scopes, you can use the syntax `myAttributedString.uiKit.foregroundColor` to disambiguate and explicitly use the UIKit attribute.

The attribute container that this method returns contains only attributes that exist, and are present and identical for the entire attributed string. To find portions of the string with consistent attributes, use the [runs](runs-swift.property.md) property.

Getting or setting stringwide attributes with this subscript has `O(n)` behavior in the worst case, where `n` is the number of runs.

## See Also

### Accessing Whole-String Attributes

- [subscript(dynamicMember:)](subscript%28dynamicmember_%29-34zdf.md): Returns an attribute value that a key path indicates.
- [AttributeDynamicLookup](../attributedynamiclookup.md): A type to support dynamic member lookup of attributes and containers.
- [ScopedAttributeContainer](../scopedattributecontainer.md): An attribute container that allows dynamic member lookup of its contents within the specified attribute scope.
