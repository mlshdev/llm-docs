> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributescopes/translationattributes](https://developer.apple.com/documentation/foundation/attributescopes/translationattributes)

# AttributeScopes.TranslationAttributes

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A scope that defines translation-specific properties on attributed strings.

## Declaration

```swift
struct TranslationAttributes
```

<a id="overview"></a>

## Overview

Use this scope to access translation attributes when working with [AttributedString](../attributedstring.md) instances.

## Topics

### Handling translation behavior

- [skipsTranslation](translationattributes/skipstranslation.md): An attribute that marks portions of an attributed string to be excluded from translation.
- [AttributeScopes.TranslationAttributes.SkipTranslationAttribute](translationattributes/skiptranslationattribute.md): The attribute key for skipping translation.

## Relationships

### Conforms To

- [AttributeScope](../attributescope.md)
- [DecodingConfigurationProviding](../decodingconfigurationproviding.md)
- [EncodingConfigurationProviding](../encodingconfigurationproviding.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Translation-Defined Attributes

- [translation](translation.md): Provides access to translation-related attributes.
