> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributecontainer/builder](https://developer.apple.com/documentation/foundation/attributecontainer/builder)

# AttributeContainer.Builder

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that iteratively builds attribute containers by setting attribute values.

## Declaration

```swift
struct Builder<T> where T : AttributedStringKey
```

<a id="overview"></a>

## Overview

The [AttributeContainer.Builder](builder.md) type lets you build [AttributeContainer](../attributecontainer.md) instances by chaining together several attributes in one expression. The following example shows this approach:

```swift
// An attribute container with the link and backgroundColor attributes.
let myContainer = AttributeContainer().link(myURL).backgroundColor(.yellow)
```

The first part of this expression, `AttributeContainer().link(URL(myURL))`, creates a builder to apply the [link](../attributescopes/foundationattributes/link.md) attribute to the empty [AttributeContainer](../attributecontainer.md). The builder’s [callAsFunction(\_:)](builder/callasfunction%28__%29.md) returns a new [AttributeContainer](../attributecontainer.md) with this attribute set. Then the `backgroundColor(.yellow)` creates a second builder to modify the just-returned [AttributeContainer](../attributecontainer.md) by adding the [backgroundColor](../attributescopes/swiftuiattributes/backgroundcolor.md) attribute. The result is an [AttributeContainer](../attributecontainer.md) with both attributes set.

## Topics

### Calling Builder Functions

- [callAsFunction(\_:)](builder/callasfunction%28__%29.md): Builds an attribute container by setting an attribute and returning a modified attribute container.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Attributes

- [subscript(\_:)](subscript%28__%29.md): Returns the attribute that corresponds to a specified key.
- [subscript(dynamicMember:)](subscript%28dynamicmember_%29-657oj.md): Returns the attribute that corresponds to a specified key path.
- [subscript(dynamicMember:)](subscript%28dynamicmember_%29-3jcvx.md): Returns the attribute container that corresponds to a specified key path.
- [subscript(dynamicMember:)](subscript%28dynamicmember_%29-60ps5.md): Returns a modified attribute container as part of building a chain of attributes.
- [subscript(dynamicMember:)](subscript%28dynamicmember_%29-swift.type.subscript.md): Returns a modified attribute container as part of building a chain of attributes, for use as a static method.
- [AttributedStringKey](../attributedstringkey.md): A type that defines an attribute’s name and type.
