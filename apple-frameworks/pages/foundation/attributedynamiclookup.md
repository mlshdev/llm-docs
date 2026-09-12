> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedynamiclookup](https://developer.apple.com/documentation/foundation/attributedynamiclookup)

# AttributeDynamicLookup

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type to support dynamic member lookup of attributes and containers.

## Declaration

```swift
@dynamicMemberLookup @frozen enum AttributeDynamicLookup
```

<a id="overview"></a>

## Overview

This type allows attribute owners to add extensions that enable dynamic member lookup access to attributes. Supporting types — including [AttributedString](attributedstring.md), [AttributedSubstring](attributedsubstring.md), and [AttributeContainer](attributecontainer.md) — gain dynamic lookup support by extending this type.

You can enable dynamic member lookup for your own [AttributedStringKey](attributedstringkey.md) attributes by defining them as implementations, collecting them into an [AttributeScope](attributescope.md) and extending [AttributeDynamicLookup](attributedynamiclookup.md), like in the following example:

```swift
public extension AttributeDynamicLookup {
    subscript<T: AttributedStringKey>(dynamicMember keyPath: KeyPath<AttributeScopes.MyFrameworkAttributes, T>) -> T {
        return self[T.self]
    }
}
```

## Topics

### Accessing Key Values

- [subscript(\_:)](attributedynamiclookup/subscript%28__%29.md): Returns an attributed string key that corresponds to a specified type.

### Accessing Framework Attribute Scopes

- [subscript(dynamicMember:)](attributedynamiclookup/subscript%28dynamicmember_%29-3nor6.md): Returns the attributed string key for a specified Foundation key path.
- [subscript(dynamicMember:)](attributedynamiclookup/subscript%28dynamicmember_%29-3neai.md): Returns the attributed string key for a specified Foundation number format key path.
- [subscript(dynamicMember:)](attributedynamiclookup/subscript%28dynamicmember_%29-3q4ap.md): Returns the attributed string key for a specified SwiftUI key path.
- [subscript(dynamicMember:)](attributedynamiclookup/subscript%28dynamicmember_%29-4yyyo.md): Returns the attributed string key for a specified UIKit key path.
- [subscript(dynamicMember:)](attributedynamiclookup/subscript%28dynamicmember_%29-3v1cn.md): Returns the attributed string key for a specified AppKit key path.

### Subscripts

- [subscript(dynamicMember:)](attributedynamiclookup/subscript%28dynamicmember_%29-30vmv.md)
- [subscript(dynamicMember:)](attributedynamiclookup/subscript%28dynamicmember_%29-3ft4y.md)
- [subscript(dynamicMember:)](attributedynamiclookup/subscript%28dynamicmember_%29-4n6dp.md): Provides dynamic member lookup for translation attributes.
- [subscript(dynamicMember:)](attributedynamiclookup/subscript%28dynamicmember_%29-7vcf2.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)

## See Also

### Using Defined Attributes

- [AttributeScopes](attributescopes.md): Collections of attributes that system frameworks define.
- [ScopedAttributeContainer](scopedattributecontainer.md): An attribute container that allows dynamic member lookup of its contents within the specified attribute scope.
