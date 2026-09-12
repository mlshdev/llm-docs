> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedynamiclookup/subscript(dynamicmember:)-4n6dp](https://developer.apple.com/documentation/foundation/attributedynamiclookup/subscript(dynamicmember:)-4n6dp)

# subscript(dynamicMember:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Provides dynamic member lookup for translation attributes.

## Declaration

```swift
subscript<T>(dynamicMember keyPath: KeyPath<AttributeScopes.TranslationAttributes, T>) -> T where T : AttributedStringKey { get }
```

## Parameters

- `keyPath`: A key path to a property in the `TranslationAttributes` scope.

<a id="return-value"></a>

## Return Value

The attribute key type that can be used to get or set attribute values.

<a id="overview"></a>

## Overview

This subscript enables the convenient dot-syntax access to translation attributes on [AttributedString](../attributedstring.md):

```swift
var text = AttributedString("Product Name")
text.skipsTranslation = true
```
