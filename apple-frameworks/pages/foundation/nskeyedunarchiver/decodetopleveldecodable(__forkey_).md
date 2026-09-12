> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiver/decodetopleveldecodable(_:forkey:)](https://developer.apple.com/documentation/foundation/nskeyedunarchiver/decodetopleveldecodable(_:forkey:))

# decodeTopLevelDecodable(\_:forKey:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes a top-level decodable value associated with a given key.

## Declaration

```swift
@nonobjc func decodeTopLevelDecodable<T>(_ type: T.Type, forKey key: String) throws -> T? where T : Decodable
```

## Parameters

- `type`: The type of the value to decode.
- `key`: The key in the archive associated with the value to decode.

<a id="Discussion"></a>

## Discussion

If the archive is not a valid property list, this method throws the [DecodingError.dataCorrupted(\_:)](https://developer.apple.com/documentation/swift/decodingerror/datacorrupted%28_:%29) error. If a value within the archive fails to decode, this method throws the corresponding error.

## See Also

### Decoding Data

- [containsValue(forKey:)](containsvalue%28forkey_%29.md): Returns a Boolean value that indicates whether the archive contains a value for a given key within the current decoding scope.
- [decodeDecodable(\_:forKey:)](decodedecodable%28__forkey_%29.md): Decodes a decodable value associated with a given key.
- [decodeBool(forKey:)](decodebool%28forkey_%29.md): Decodes a Boolean value associated with a given key.
- [decodeBytes(forKey:returnedLength:)](decodebytes%28forkey_returnedlength_%29.md): Decodes a stream of bytes associated with a given key.
- [decodeDouble(forKey:)](decodedouble%28forkey_%29.md): Decodes a double-precision floating-point value associated with a given key.
- [decodeFloat(forKey:)](decodefloat%28forkey_%29.md): Decodes a single-precision floating-point value associated with a given key.
- [decodeInt32(forKey:)](decodeint32%28forkey_%29.md): Decodes a 32-bit integer value associated with a given key.
- [decodeInt64(forKey:)](decodeint64%28forkey_%29.md): Decodes a 64-bit integer value associated with a given key.
- [decodeObject(forKey:)](decodeobject%28forkey_%29.md): Decodes and returns an object associated with a given key.
- [finishDecoding()](finishdecoding%28%29.md): Tells the receiver that you are finished decoding objects.
- [decodingFailurePolicy](decodingfailurepolicy.md): The action to take when this unarchiver fails to decode an entry.
