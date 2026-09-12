> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiver/decodebytes(forkey:returnedlength:)](https://developer.apple.com/documentation/foundation/nskeyedunarchiver/decodebytes(forkey:returnedlength:))

# decodeBytes(forKey:returnedLength:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes a stream of bytes associated with a given key.

## Declaration

```swift
func decodeBytes(forKey key: String, returnedLength lengthp: UnsafeMutablePointer<Int>?) -> UnsafePointer<UInt8>?
```

## Parameters

- `key`: A key in the archive within the current decoding scope. `key` must not be `nil`.
- `lengthp`: Upon return, contains the number of bytes returned.

<a id="return-value"></a>

## Return Value

The stream of bytes associated with the key `key`. Returns `NULL` if `key` does not exist.

<a id="Discussion"></a>

## Discussion

The returned value is a pointer to a temporary buffer owned by the receiver. The buffer goes away with the unarchiver, not the containing autorelease pool block. You must copy the bytes into your own buffer if you need the data to persist beyond the life of the receiver.

## See Also

### Related Documentation

- [encodeBytes(\_:length:forKey:)](../nskeyedarchiver/encodebytes%28__length_forkey_%29.md): Encodes a given number of bytes from a given C array of bytes and associates them with a key.

### Decoding Data

- [containsValue(forKey:)](containsvalue%28forkey_%29.md): Returns a Boolean value that indicates whether the archive contains a value for a given key within the current decoding scope.
- [decodeDecodable(\_:forKey:)](decodedecodable%28__forkey_%29.md): Decodes a decodable value associated with a given key.
- [decodeTopLevelDecodable(\_:forKey:)](decodetopleveldecodable%28__forkey_%29.md): Decodes a top-level decodable value associated with a given key.
- [decodeBool(forKey:)](decodebool%28forkey_%29.md): Decodes a Boolean value associated with a given key.
- [decodeDouble(forKey:)](decodedouble%28forkey_%29.md): Decodes a double-precision floating-point value associated with a given key.
- [decodeFloat(forKey:)](decodefloat%28forkey_%29.md): Decodes a single-precision floating-point value associated with a given key.
- [decodeInt32(forKey:)](decodeint32%28forkey_%29.md): Decodes a 32-bit integer value associated with a given key.
- [decodeInt64(forKey:)](decodeint64%28forkey_%29.md): Decodes a 64-bit integer value associated with a given key.
- [decodeObject(forKey:)](decodeobject%28forkey_%29.md): Decodes and returns an object associated with a given key.
- [finishDecoding()](finishdecoding%28%29.md): Tells the receiver that you are finished decoding objects.
- [decodingFailurePolicy](decodingfailurepolicy.md): The action to take when this unarchiver fails to decode an entry.

# decodeBytesForKey:returnedLength: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes a stream of bytes associated with a given key.

## Declaration

```objectivec
- (const uint8_t *) decodeBytesForKey:(NSString *) key returnedLength:(NSUInteger *) lengthp;
```

## Parameters

- `key`: A key in the archive within the current decoding scope. `key` must not be `nil`.
- `lengthp`: Upon return, contains the number of bytes returned.

<a id="return-value"></a>

## Return Value

The stream of bytes associated with the key `key`. Returns `NULL` if `key` does not exist.

<a id="Discussion"></a>

## Discussion

The returned value is a pointer to a temporary buffer owned by the receiver. The buffer goes away with the unarchiver, not the containing autorelease pool block. You must copy the bytes into your own buffer if you need the data to persist beyond the life of the receiver.

## See Also

### Related Documentation

- [encodeBytes:length:forKey:](../nskeyedarchiver/encodebytes%28__length_forkey_%29.md): Encodes a given number of bytes from a given C array of bytes and associates them with a key.

### Decoding Data

- [containsValueForKey:](containsvalue%28forkey_%29.md): Returns a Boolean value that indicates whether the archive contains a value for a given key within the current decoding scope.
- [decodeBoolForKey:](decodebool%28forkey_%29.md): Decodes a Boolean value associated with a given key.
- [decodeDoubleForKey:](decodedouble%28forkey_%29.md): Decodes a double-precision floating-point value associated with a given key.
- [decodeFloatForKey:](decodefloat%28forkey_%29.md): Decodes a single-precision floating-point value associated with a given key.
- [decodeIntForKey:](decodeintforkey_.md): Decodes an integer value associated with a given key.
- [decodeInt32ForKey:](decodeint32%28forkey_%29.md): Decodes a 32-bit integer value associated with a given key.
- [decodeInt64ForKey:](decodeint64%28forkey_%29.md): Decodes a 64-bit integer value associated with a given key.
- [decodeObjectForKey:](decodeobject%28forkey_%29.md): Decodes and returns an object associated with a given key.
- [finishDecoding](finishdecoding%28%29.md): Tells the receiver that you are finished decoding objects.
- [decodingFailurePolicy](decodingfailurepolicy.md): The action to take when this unarchiver fails to decode an entry.
