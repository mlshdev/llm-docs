> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistencoder/encode(_:configuration:)-4biuh](https://developer.apple.com/documentation/foundation/propertylistencoder/encode(_:configuration:)-4biuh)

# encode(\_:configuration:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
func encode<T, C>(_ value: T, configuration: C.Type) throws -> Data where T : EncodableWithConfiguration, C : EncodingConfigurationProviding, T.EncodingConfiguration == C.EncodingConfiguration
```

## See Also

### Encoding

- [init()](init%28%29.md): Creates a new, reusable property list encoder with the default formatting settings.
- [encode(\_:)](encode%28__%29.md): Returns a property list that represents an encoded version of the value you supply.
- [encode(\_:configuration:)](encode%28__configuration_%29-5ee8q.md)
