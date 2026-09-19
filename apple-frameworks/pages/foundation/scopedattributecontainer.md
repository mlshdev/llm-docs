> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/scopedattributecontainer

# ScopedAttributeContainer

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An attribute container that allows dynamic member lookup of its contents within the specified attribute scope.

## Declaration

```swift
@dynamicMemberLookup struct ScopedAttributeContainer<S> where S : AttributeScope
```

<a id="overview"></a>

## Overview

Use a [ScopedAttributeContainer](scopedattributecontainer.md) when you need to disambiguate between attributes that exist in several attribute scopes that your app uses.

## Topics

### Accessing Attribute Keys

- [subscript(dynamicMember:)](scopedattributecontainer/subscript%28dynamicmember_%29.md): Returns the value of the attribute that the specified key path indicates.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Using Defined Attributes

- [AttributeScopes](attributescopes.md): Collections of attributes that system frameworks define.
- [AttributeDynamicLookup](attributedynamiclookup.md): A type to support dynamic member lookup of attributes and containers.
