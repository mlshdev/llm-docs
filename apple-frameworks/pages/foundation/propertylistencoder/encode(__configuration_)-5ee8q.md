> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistencoder/encode(_:configuration:)-5ee8q](https://developer.apple.com/documentation/foundation/propertylistencoder/encode(_:configuration:)-5ee8q)

# encode(\_:configuration:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
func encode<T>(_ value: T, configuration: T.EncodingConfiguration) throws -> Data where T : EncodableWithConfiguration
```

## See Also

### Encoding

- [init()](init%28%29.md): Creates a new, reusable property list encoder with the default formatting settings.
- [encode(\_:)](encode%28__%29.md): Returns a property list that represents an encoded version of the value you supply.
- [encode(\_:configuration:)](encode%28__configuration_%29-4biuh.md)
