> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decodingconfigurationproviding](https://developer.apple.com/documentation/foundation/decodingconfigurationproviding)

# DecodingConfigurationProviding

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A protocol whose conformers provide a configuration instance to help decode types that don’t support encoding by themselves.

## Declaration

```swift
protocol DecodingConfigurationProviding
```

## Topics

### Accessing the Configuration

- [decodingConfiguration](decodingconfigurationproviding/decodingconfiguration-swift.type.property.md): The configuration instance that assists in decoding another type.

### Supporting Types

- [DecodingConfiguration](decodingconfigurationproviding/decodingconfiguration-swift.associatedtype.md)

## Relationships

### Inherited By

- [AttributeScope](attributescope.md)

### Conforming Types

- [AttributeScopes.AccessibilityAttributes](attributescopes/accessibilityattributes.md)
- [AttributeScopes.AppKitAttributes](attributescopes/appkitattributes.md)
- [AttributeScopes.FoundationAttributes](attributescopes/foundationattributes.md)
- [AttributeScopes.FoundationAttributes.NumberFormatAttributes](attributescopes/foundationattributes/numberformatattributes.md)
- [AttributeScopes.SpeechAttributes](attributescopes/speechattributes.md)
- [AttributeScopes.SwiftUIAttributes](attributescopes/swiftuiattributes.md)
- [AttributeScopes.TranslationAttributes](attributescopes/translationattributes.md)
- [AttributeScopes.UIKitAttributes](attributescopes/uikitattributes.md)

## See Also

### Serializing Arbitrary Payloads

- [CodableWithConfiguration](codablewithconfiguration.md): A type that can convert itself into and out of an external representation with the help of a configuration that handles encoding contained types.
- [CodableConfiguration](codableconfiguration.md): A property wrapper that makes a type codable, by supplying a configuration that provides additional information for serialization.
- [DecodableWithConfiguration](decodablewithconfiguration.md): A protocol for types that support decoding when supplied with an additional configuration type.
- [EncodableWithConfiguration](encodablewithconfiguration.md): A protocol for types that support encoding when supplied with an additional configuration type.
- [EncodingConfigurationProviding](encodingconfigurationproviding.md): A protocol whose conformers provide a configuration instance to help encode types that don’t support encoding by themselves.
