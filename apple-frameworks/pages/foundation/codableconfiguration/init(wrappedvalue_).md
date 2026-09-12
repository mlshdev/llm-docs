> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/codableconfiguration/init(wrappedvalue:)](https://developer.apple.com/documentation/foundation/codableconfiguration/init(wrappedvalue:))

# init(wrappedValue:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a codable configuration wrapper for the given value.

## Declaration

```swift
init(wrappedValue: T)
```

## Parameters

- `wrappedValue`: The underlying value to make codable.

<a id="Discussion"></a>

## Discussion

This initializer doesn’t take a `ConfigurationProvider.Type` parameter. As a result, it won’t compile unless the compiler can imply the provider type through other means, such as a generic expression like `@CodableConfiguration<AttributedString, FoundationAttributes>`.

For clarity, use this type’s other initializers, which take the configuration provider type as an explicit parameter.

## See Also

### Creating a Codable Configuration

- [init(wrappedValue:from:)](init%28wrappedvalue_from_%29-46oo6.md): Creates a codable configuration wrapper for the given value, using the given configuration provider type.
- [init(wrappedValue:from:)](init%28wrappedvalue_from_%29-8mkxk.md): Conforms when `T` conforms to `DecodableWithConfiguration`, `T` conforms to `EncodableWithConfiguration`, `ConfigurationProvider` conforms to `AttributeScope`, `T.DecodingConfiguration` is `ConfigurationProvider.DecodingConfiguration`, and `T.EncodingConfiguration` is `ConfigurationProvider.EncodingConfiguration`. Creates a codable configuration wrapper for the given value, using given configuration provider type identified by key path.
