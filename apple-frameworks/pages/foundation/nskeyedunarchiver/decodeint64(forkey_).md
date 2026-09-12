> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiver/decodeint64(forkey:)](https://developer.apple.com/documentation/foundation/nskeyedunarchiver/decodeint64(forkey:))

# decodeInt64(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes a 64-bit integer value associated with a given key.

## Declaration

```swift
func decodeInt64(forKey key: String) -> Int64
```

## Parameters

- `key`: A key in the archive within the current decoding scope. `key` must not be `nil`.

<a id="return-value"></a>

## Return Value

The 64-bit integer value associated with the key `key`. Returns `0` if `key` does not exist.

<a id="Discussion"></a>

## Discussion

If the archived value was encoded with a different size but is still an integer, the type is coerced.

## See Also

### Related Documentation

- [encode(\_:forKey:)](../nskeyedarchiver/encode%28__forkey_%29-ycdd.md): Encodes a given 64-bit integer value and associates it with a key.

### Decoding Data

- [containsValue(forKey:)](containsvalue%28forkey_%29.md): Returns a Boolean value that indicates whether the archive contains a value for a given key within the current decoding scope.
- [decodeDecodable(\_:forKey:)](decodedecodable%28__forkey_%29.md): Decodes a decodable value associated with a given key.
- [decodeTopLevelDecodable(\_:forKey:)](decodetopleveldecodable%28__forkey_%29.md): Decodes a top-level decodable value associated with a given key.
- [decodeBool(forKey:)](decodebool%28forkey_%29.md): Decodes a Boolean value associated with a given key.
- [decodeBytes(forKey:returnedLength:)](decodebytes%28forkey_returnedlength_%29.md): Decodes a stream of bytes associated with a given key.
- [decodeDouble(forKey:)](decodedouble%28forkey_%29.md): Decodes a double-precision floating-point value associated with a given key.
- [decodeFloat(forKey:)](decodefloat%28forkey_%29.md): Decodes a single-precision floating-point value associated with a given key.
- [decodeInt32(forKey:)](decodeint32%28forkey_%29.md): Decodes a 32-bit integer value associated with a given key.
- [decodeObject(forKey:)](decodeobject%28forkey_%29.md): Decodes and returns an object associated with a given key.
- [finishDecoding()](finishdecoding%28%29.md): Tells the receiver that you are finished decoding objects.
- [decodingFailurePolicy](decodingfailurepolicy.md): The action to take when this unarchiver fails to decode an entry.

# decodeInt64ForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes a 64-bit integer value associated with a given key.

## Declaration

```objectivec
- (int64_t) decodeInt64ForKey:(NSString *) key;
```

## Parameters

- `key`: A key in the archive within the current decoding scope. `key` must not be `nil`.

<a id="return-value"></a>

## Return Value

The 64-bit integer value associated with the key `key`. Returns `0` if `key` does not exist.

<a id="Discussion"></a>

## Discussion

If the archived value was encoded with a different size but is still an integer, the type is coerced.

## See Also

### Related Documentation

- [encodeInt64:forKey:](../nskeyedarchiver/encode%28__forkey_%29-ycdd.md): Encodes a given 64-bit integer value and associates it with a key.

### Decoding Data

- [containsValueForKey:](containsvalue%28forkey_%29.md): Returns a Boolean value that indicates whether the archive contains a value for a given key within the current decoding scope.
- [decodeBoolForKey:](decodebool%28forkey_%29.md): Decodes a Boolean value associated with a given key.
- [decodeBytesForKey:returnedLength:](decodebytes%28forkey_returnedlength_%29.md): Decodes a stream of bytes associated with a given key.
- [decodeDoubleForKey:](decodedouble%28forkey_%29.md): Decodes a double-precision floating-point value associated with a given key.
- [decodeFloatForKey:](decodefloat%28forkey_%29.md): Decodes a single-precision floating-point value associated with a given key.
- [decodeIntForKey:](decodeintforkey_.md): Decodes an integer value associated with a given key.
- [decodeInt32ForKey:](decodeint32%28forkey_%29.md): Decodes a 32-bit integer value associated with a given key.
- [decodeObjectForKey:](decodeobject%28forkey_%29.md): Decodes and returns an object associated with a given key.
- [finishDecoding](finishdecoding%28%29.md): Tells the receiver that you are finished decoding objects.
- [decodingFailurePolicy](decodingfailurepolicy.md): The action to take when this unarchiver fails to decode an entry.
