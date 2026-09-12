> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributecontainer/subscript(dynamicmember:)-3jcvx](https://developer.apple.com/documentation/foundation/attributecontainer/subscript(dynamicmember:)-3jcvx)

# subscript(dynamicMember:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the attribute container that corresponds to a specified key path.

## Declaration

```swift
subscript<S>(dynamicMember keyPath: KeyPath<AttributeScopes, S.Type>) -> ScopedAttributeContainer<S> where S : AttributeScope { get set }
```

<a id="Discussion"></a>

## Discussion

Use this subscript when you need to work with an explicit attribute scope. For example, the SwiftUI [foregroundColor](../attributescopes/swiftuiattributes/foregroundcolor.md) attribute overrides the attribute in the AppKit and UIKit scopes with the same name. If you work with both the SwiftUI and UIKit scopes, you can use the syntax `myAttributeContainer.uiKit.foregroundColor` to disambiguate and explicitly use the UIKit attribute.

## See Also

### Accessing Attributes

- [subscript(\_:)](subscript%28__%29.md): Returns the attribute that corresponds to a specified key.
- [subscript(dynamicMember:)](subscript%28dynamicmember_%29-657oj.md): Returns the attribute that corresponds to a specified key path.
- [subscript(dynamicMember:)](subscript%28dynamicmember_%29-60ps5.md): Returns a modified attribute container as part of building a chain of attributes.
- [subscript(dynamicMember:)](subscript%28dynamicmember_%29-swift.type.subscript.md): Returns a modified attribute container as part of building a chain of attributes, for use as a static method.
- [AttributedStringKey](../attributedstringkey.md): A type that defines an attribute’s name and type.
- [AttributeContainer.Builder](builder.md): A type that iteratively builds attribute containers by setting attribute values.
