> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributecontainer](https://developer.apple.com/documentation/foundation/attributecontainer)

# AttributeContainer

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A container for attribute keys and values.

## Declaration

```swift
@dynamicMemberLookup struct AttributeContainer
```

<a id="overview"></a>

## Overview

[AttributeContainer](attributecontainer.md) provides a way to store attributes and their values outside of an attributed string. You use this type to initialize an instance of [AttributedString](attributedstring.md) with preset attributes, and to set, merge, or replace attributes in existing attributed strings.

## Topics

### Creating an Attribute Container

- [init()](attributecontainer/init%28%29.md): Creates an empty attribute container.
- [init(\_:including:)](attributecontainer/init%28__including_%29-2mw0o.md): Creates an attribute container from a dictionary and an attribute scope.
- [init(\_:including:)](attributecontainer/init%28__including_%29-28n0g.md): Creates an attribute container from a dictionary and an attribute scope that a key path identifies.
- [init(\_:)](attributecontainer/init%28__%29.md): Creates an attribute container from a dictionary, using default attribute scopes.

### Accessing Attributes

- [subscript(\_:)](attributecontainer/subscript%28__%29.md): Returns the attribute that corresponds to a specified key.
- [subscript(dynamicMember:)](attributecontainer/subscript%28dynamicmember_%29-657oj.md): Returns the attribute that corresponds to a specified key path.
- [subscript(dynamicMember:)](attributecontainer/subscript%28dynamicmember_%29-3jcvx.md): Returns the attribute container that corresponds to a specified key path.
- [subscript(dynamicMember:)](attributecontainer/subscript%28dynamicmember_%29-60ps5.md): Returns a modified attribute container as part of building a chain of attributes.
- [subscript(dynamicMember:)](attributecontainer/subscript%28dynamicmember_%29-swift.type.subscript.md): Returns a modified attribute container as part of building a chain of attributes, for use as a static method.
- [AttributedStringKey](attributedstringkey.md): A type that defines an attribute’s name and type.
- [AttributeContainer.Builder](attributecontainer/builder.md): A type that iteratively builds attribute containers by setting attribute values.

### Modifying Attributes

- [merge(\_:mergePolicy:)](attributecontainer/merge%28__mergepolicy_%29.md): Merges the container’s attributes with those in another attribute container.
- [merging(\_:mergePolicy:)](attributecontainer/merging%28__mergepolicy_%29.md): Returns an attribute container by merging the container’s attributes with those in another attribute container.
- [AttributedString.AttributeMergePolicy](attributedstring/attributemergepolicy.md): An enumeration of behaviors to apply when merging attributes.

### Interoperating with Objective-C Attributes

- [ObjectiveCConvertibleAttributedStringKey](objectivecconvertibleattributedstringkey.md): A protocol that defines Objective-C interoperability with an attribute key’s value type.

### Instance Methods

- [filter(inheritedByAddedText:)](attributecontainer/filter%28inheritedbyaddedtext_%29.md): Returns a copy of the attribute container with only attributes that specify the provided inheritance behavior.
- [filter(runBoundaries:)](attributecontainer/filter%28runboundaries_%29.md): Returns a copy of the attribute container with only attributes that have the provided run boundaries.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DecodableWithConfiguration](decodablewithconfiguration.md)
- [EncodableWithConfiguration](encodablewithconfiguration.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating an Attributed String

- [init()](attributedstring/init%28%29.md): Creates an empty attributed string.
- [init(\_:)](attributedstring/init%28__%29-8tnoq.md): Creates an attributed string from an attributed substring.
- [init(\_:attributes:)](attributedstring/init%28__attributes_%29-2a45h.md): Creates an attributed string from a string and an attribute container.
- [init(\_:attributes:)](attributedstring/init%28__attributes_%29-8jqhp.md): Creates an attributed string from a substring and an attribute container.
- [init(\_:attributes:)](attributedstring/init%28__attributes_%29-8l0iq.md): Creates an attributed string from a character sequence and an attribute container.
