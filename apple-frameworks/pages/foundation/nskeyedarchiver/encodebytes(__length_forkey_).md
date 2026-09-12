> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiver/encodebytes(_:length:forkey:)](https://developer.apple.com/documentation/foundation/nskeyedarchiver/encodebytes(_:length:forkey:))

# encodeBytes(\_:length:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes a given number of bytes from a given C array of bytes and associates them with a key.

## Declaration

```swift
func encodeBytes(_ bytes: UnsafePointer<UInt8>?, length: Int, forKey key: String)
```

## Parameters

- `bytes`: A C array of bytes to encode.
- `length`: The number of bytes from `bytesp` to encode.
- `key`: The key with which to associate the encoded value. This value must not be `nil`.

## See Also

### Related Documentation

- [decodeBytes(forKey:returnedLength:)](../nskeyedunarchiver/decodebytes%28forkey_returnedlength_%29.md): Decodes a stream of bytes associated with a given key.

### Encoding Data and Objects

- [encodeEncodable(\_:forKey:)](encodeencodable%28__forkey_%29.md): Encodes a given value and associates it with a key.
- [encode(\_:forKey:)](encode%28__forkey_%29-9pxhm.md): Encodes a given Boolean value and associates it with a key.
- [encodeConditionalObject(\_:forKey:)](encodeconditionalobject%28__forkey_%29.md): Encodes a reference to a given object and associates it with a key only if it has been unconditionally encoded elsewhere in the archive.
- [encode(\_:forKey:)](encode%28__forkey_%29-1mkfl.md): Encodes a given `double` value and associates it with a key.
- [encode(\_:forKey:)](encode%28__forkey_%29-67rcs.md): Encodes a given `float` value and associates it with a key.
- [encode(\_:forKey:)](encode%28__forkey_%29-5i7tc.md): Encodes a given 32-bit integer value and associates it with a key.
- [encode(\_:forKey:)](encode%28__forkey_%29-ycdd.md): Encodes a given 64-bit integer value and associates it with a key.
- [encode(\_:forKey:)](encode%28__forkey_%29-9f4n9.md): Encodes a given object and associates it with a given key.

# encodeBytes:length:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes a given number of bytes from a given C array of bytes and associates them with a key.

## Declaration

```objectivec
- (void) encodeBytes:(const uint8_t *) bytes length:(NSUInteger) length forKey:(NSString *) key;
```

## Parameters

- `bytes`: A C array of bytes to encode.
- `length`: The number of bytes from `bytesp` to encode.
- `key`: The key with which to associate the encoded value. This value must not be `nil`.

## See Also

### Related Documentation

- [decodeBytesForKey:returnedLength:](../nskeyedunarchiver/decodebytes%28forkey_returnedlength_%29.md): Decodes a stream of bytes associated with a given key.

### Encoding Data and Objects

- [encodeBool:forKey:](encode%28__forkey_%29-9pxhm.md): Encodes a given Boolean value and associates it with a key.
- [encodeConditionalObject:forKey:](encodeconditionalobject%28__forkey_%29.md): Encodes a reference to a given object and associates it with a key only if it has been unconditionally encoded elsewhere in the archive.
- [encodeDouble:forKey:](encode%28__forkey_%29-1mkfl.md): Encodes a given `double` value and associates it with a key.
- [encodeFloat:forKey:](encode%28__forkey_%29-67rcs.md): Encodes a given `float` value and associates it with a key.
- [encodeInt:forKey:](encodeint_forkey_.md): Encodes a given `int` value and associates it with a key.
- [encodeInt32:forKey:](encode%28__forkey_%29-5i7tc.md): Encodes a given 32-bit integer value and associates it with a key.
- [encodeInt64:forKey:](encode%28__forkey_%29-ycdd.md): Encodes a given 64-bit integer value and associates it with a key.
- [encodeObject:forKey:](encode%28__forkey_%29-9f4n9.md): Encodes a given object and associates it with a given key.
