> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiver/encodeencodable(_:forkey:)](https://developer.apple.com/documentation/foundation/nskeyedarchiver/encodeencodable(_:forkey:))

# encodeEncodable(\_:forKey:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes a given value and associates it with a key.

## Declaration

```swift
@nonobjc func encodeEncodable<T>(_ value: T, forKey key: String) throws where T : Encodable
```

## Parameters

- `value`: The value to encode.
- `key`: The key with which to associate the encoded value.

<a id="Discussion"></a>

## Discussion

If there’s a problem encoding the value you supply, this method throws an error based on the type of problem:

- The value fails to encode, or contains a nested value that fails to encode—this method throws the corresponding error.
- The value can’t be encoded as a property list—this method throws the [EncodingError.invalidValue(\_:\_:)](https://developer.apple.com/documentation/swift/encodingerror/invalidvalue%28_:_:%29) error.

## See Also

### Encoding Data and Objects

- [encode(\_:forKey:)](encode%28__forkey_%29-9pxhm.md): Encodes a given Boolean value and associates it with a key.
- [encodeBytes(\_:length:forKey:)](encodebytes%28__length_forkey_%29.md): Encodes a given number of bytes from a given C array of bytes and associates them with a key.
- [encodeConditionalObject(\_:forKey:)](encodeconditionalobject%28__forkey_%29.md): Encodes a reference to a given object and associates it with a key only if it has been unconditionally encoded elsewhere in the archive.
- [encode(\_:forKey:)](encode%28__forkey_%29-1mkfl.md): Encodes a given `double` value and associates it with a key.
- [encode(\_:forKey:)](encode%28__forkey_%29-67rcs.md): Encodes a given `float` value and associates it with a key.
- [encode(\_:forKey:)](encode%28__forkey_%29-5i7tc.md): Encodes a given 32-bit integer value and associates it with a key.
- [encode(\_:forKey:)](encode%28__forkey_%29-ycdd.md): Encodes a given 64-bit integer value and associates it with a key.
- [encode(\_:forKey:)](encode%28__forkey_%29-9f4n9.md): Encodes a given object and associates it with a given key.
