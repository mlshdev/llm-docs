> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/codableconfiguration/init(wrappedvalue:from:)-46oo6](https://developer.apple.com/documentation/foundation/codableconfiguration/init(wrappedvalue:from:)-46oo6)

# init(wrappedValue:from:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a codable configuration wrapper for the given value, using the given configuration provider type.

## Declaration

```swift
init(wrappedValue: T, from configurationProvider: ConfigurationProvider.Type)
```

## Parameters

- `wrappedValue`: The underlying value to make codable, using data from the configuration provider.
- `configurationProvider`: The type of the configuration provider, which provides additional information to encode `wrappedValue`.

## See Also

### Creating a Codable Configuration

- [init(wrappedValue:)](init%28wrappedvalue_%29.md): Creates a codable configuration wrapper for the given value.
- [init(wrappedValue:from:)](init%28wrappedvalue_from_%29-8mkxk.md): Conforms when `T` conforms to `DecodableWithConfiguration`, `T` conforms to `EncodableWithConfiguration`, `ConfigurationProvider` conforms to `AttributeScope`, `T.DecodingConfiguration` is `ConfigurationProvider.DecodingConfiguration`, and `T.EncodingConfiguration` is `ConfigurationProvider.EncodingConfiguration`. Creates a codable configuration wrapper for the given value, using given configuration provider type identified by key path.
