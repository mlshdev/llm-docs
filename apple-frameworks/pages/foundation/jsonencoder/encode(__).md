> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsonencoder/encode(_:)](https://developer.apple.com/documentation/foundation/jsonencoder/encode(_:))

# encode(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a JSON-encoded representation of the value you supply.

## Declaration

```swift
func encode<T>(_ value: T) throws -> Data where T : Encodable
```

## Parameters

- `value`: The value to encode as JSON.

<a id="return-value"></a>

## Return Value

The encoded JSON data.

<a id="Discussion"></a>

## Discussion

If there’s a problem encoding the value you supply, this method throws an error based on the type of problem:

- The value fails to encode, or contains a nested value that fails to encode—this method throws the corresponding error.
- The value isn’t encodable as a JSON array or JSON object—this method throws the [EncodingError.invalidValue(\_:\_:)](https://developer.apple.com/documentation/swift/encodingerror/invalidvalue%28_:_:%29) error.
- The value contains an exceptional floating-point number (such as [infinity](https://developer.apple.com/documentation/swift/floatingpoint/infinity) or [nan](https://developer.apple.com/documentation/swift/floatingpoint/nan)) and you’re using the default [JSONEncoder.NonConformingFloatEncodingStrategy](nonconformingfloatencodingstrategy-swift.enum.md) — this method throws the [EncodingError.invalidValue(\_:\_:)](https://developer.apple.com/documentation/swift/encodingerror/invalidvalue%28_:_:%29) error.

## See Also

### First Steps

- [init()](init%28%29.md): Creates a new, reusable JSON encoder with the default formatting settings and encoding strategies.
