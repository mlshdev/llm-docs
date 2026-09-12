> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributescope](https://developer.apple.com/documentation/foundation/attributescope)

# AttributeScope

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that organizes attributes into a grouping, and supports dynamic member lookup and serialization of attribute keys.

## Declaration

```swift
protocol AttributeScope : DecodingConfigurationProviding, EncodingConfigurationProviding, SendableMetatype
```

<a id="overview"></a>

## Overview

Attribute owners — typically frameworks — define attributes with [AttributedStringKey](attributedstringkey.md) types. To allow access to attributes with dynamic member lookup, owners create one or more structures that conform to [AttributeScope](attributescope.md). The scopes provide short names for their attributes that map to the [AttributedStringKey](attributedstringkey.md) type. The following example shows how to do this:

```swift
struct TextStyleAttributes : AttributeScope {
    let foregroundColor : ForegroundColorAttribute // ForegroundColorAttribute.Value == Color
    let backgroundColor : BackgroundColorAttribute // BackgroundColorAttribute.Value == Color
    let underlineStyle : UnderlineStyleAttribute // UnderlineStyleAttribute.Value == UnderlineStyle
    // etc.
}
```

This allows callers to use a syntax like `myAttributedString.foregroundColor = .red`.

## Topics

### Supporting Coding Configurations

- [encodingConfiguration](attributescope/encodingconfiguration.md): The configuration for encoding the attribute scope.
- [decodingConfiguration](attributescope/decodingconfiguration.md): The configuration for decoding the attribute scope.

### Type Properties

- [attributeKeys](attributescope/attributekeys.md): A list of all attribute keys contained within this scope and any sub-scopes.

## Relationships

### Inherits From

- [DecodingConfigurationProviding](decodingconfigurationproviding.md)
- [EncodingConfigurationProviding](encodingconfigurationproviding.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [AttributeScopes.AccessibilityAttributes](attributescopes/accessibilityattributes.md)
- [AttributeScopes.AppKitAttributes](attributescopes/appkitattributes.md)
- [AttributeScopes.FoundationAttributes](attributescopes/foundationattributes.md)
- [AttributeScopes.FoundationAttributes.NumberFormatAttributes](attributescopes/foundationattributes/numberformatattributes.md)
- [AttributeScopes.SpeechAttributes](attributescopes/speechattributes.md)
- [AttributeScopes.SwiftUIAttributes](attributescopes/swiftuiattributes.md)
- [AttributeScopes.TranslationAttributes](attributescopes/translationattributes.md)
- [AttributeScopes.UIKitAttributes](attributescopes/uikitattributes.md)
