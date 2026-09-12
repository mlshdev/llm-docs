> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiver/encode(_:forkey:)-1mkfl](https://developer.apple.com/documentation/foundation/nskeyedarchiver/encode(_:forkey:)-1mkfl)

# encode(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes a given `double` value and associates it with a key.

## Declaration

```swift
func encode(_ value: Double, forKey key: String)
```

## Parameters

- `value`: The value to encode.
- `key`: The key with which to associate `realv`. This value must not be `nil`.

## See Also

### Related Documentation

- [decodeFloat(forKey:)](../nskeyedunarchiver/decodefloat%28forkey_%29.md): Decodes a single-precision floating-point value associated with a given key.
- [decodeDouble(forKey:)](../nskeyedunarchiver/decodedouble%28forkey_%29.md): Decodes a double-precision floating-point value associated with a given key.

### Encoding Data and Objects

- [encodeEncodable(\_:forKey:)](encodeencodable%28__forkey_%29.md): Encodes a given value and associates it with a key.
- [encode(\_:forKey:)](encode%28__forkey_%29-9pxhm.md): Encodes a given Boolean value and associates it with a key.
- [encodeBytes(\_:length:forKey:)](encodebytes%28__length_forkey_%29.md): Encodes a given number of bytes from a given C array of bytes and associates them with a key.
- [encodeConditionalObject(\_:forKey:)](encodeconditionalobject%28__forkey_%29.md): Encodes a reference to a given object and associates it with a key only if it has been unconditionally encoded elsewhere in the archive.
- [encode(\_:forKey:)](encode%28__forkey_%29-67rcs.md): Encodes a given `float` value and associates it with a key.
- [encode(\_:forKey:)](encode%28__forkey_%29-5i7tc.md): Encodes a given 32-bit integer value and associates it with a key.
- [encode(\_:forKey:)](encode%28__forkey_%29-ycdd.md): Encodes a given 64-bit integer value and associates it with a key.
- [encode(\_:forKey:)](encode%28__forkey_%29-9f4n9.md): Encodes a given object and associates it with a given key.

# encodeDouble:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes a given `double` value and associates it with a key.

## Declaration

```objectivec
- (void) encodeDouble:(double) value forKey:(NSString *) key;
```

## Parameters

- `value`: The value to encode.
- `key`: The key with which to associate `realv`. This value must not be `nil`.

## See Also

### Related Documentation

- [decodeFloatForKey:](../nskeyedunarchiver/decodefloat%28forkey_%29.md): Decodes a single-precision floating-point value associated with a given key.
- [decodeDoubleForKey:](../nskeyedunarchiver/decodedouble%28forkey_%29.md): Decodes a double-precision floating-point value associated with a given key.

### Encoding Data and Objects

- [encodeBool:forKey:](encode%28__forkey_%29-9pxhm.md): Encodes a given Boolean value and associates it with a key.
- [encodeBytes:length:forKey:](encodebytes%28__length_forkey_%29.md): Encodes a given number of bytes from a given C array of bytes and associates them with a key.
- [encodeConditionalObject:forKey:](encodeconditionalobject%28__forkey_%29.md): Encodes a reference to a given object and associates it with a key only if it has been unconditionally encoded elsewhere in the archive.
- [encodeFloat:forKey:](encode%28__forkey_%29-67rcs.md): Encodes a given `float` value and associates it with a key.
- [encodeInt:forKey:](encodeint_forkey_.md): Encodes a given `int` value and associates it with a key.
- [encodeInt32:forKey:](encode%28__forkey_%29-5i7tc.md): Encodes a given 32-bit integer value and associates it with a key.
- [encodeInt64:forKey:](encode%28__forkey_%29-ycdd.md): Encodes a given 64-bit integer value and associates it with a key.
- [encodeObject:forKey:](encode%28__forkey_%29-9f4n9.md): Encodes a given object and associates it with a given key.
