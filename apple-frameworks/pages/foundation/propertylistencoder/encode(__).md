> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistencoder/encode(_:)](https://developer.apple.com/documentation/foundation/propertylistencoder/encode(_:))

# encode(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a property list that represents an encoded version of the value you supply.

## Declaration

```swift
func encode<Value>(_ value: Value) throws -> Data where Value : Encodable
```

## Parameters

- `value`: The value to encode as a property list.

<a id="Discussion"></a>

## Discussion

If there’s a problem encoding the value you supply, this method throws an error based on the type of problem:

- The value fails to encode, or contains a nested value that fails to encode—this method throws the corresponding error.
- The value can’t be encoded as a property list—this method throws the [EncodingError.invalidValue(\_:\_:)](https://developer.apple.com/documentation/swift/encodingerror/invalidvalue%28_:_:%29) error.

## See Also

### Encoding

- [init()](init%28%29.md): Creates a new, reusable property list encoder with the default formatting settings.
- [encode(\_:configuration:)](encode%28__configuration_%29-4biuh.md)
- [encode(\_:configuration:)](encode%28__configuration_%29-5ee8q.md)
