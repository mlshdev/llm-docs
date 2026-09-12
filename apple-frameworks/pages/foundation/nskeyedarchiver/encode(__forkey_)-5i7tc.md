> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiver/encode(_:forkey:)-5i7tc](https://developer.apple.com/documentation/foundation/nskeyedarchiver/encode(_:forkey:)-5i7tc)

# encode(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes a given 32-bit integer value and associates it with a key.

## Declaration

```swift
func encode(_ value: Int32, forKey key: String)
```

## Parameters

- `value`: The value to encode.
- `key`: The key with which to associate `intv`. This value must not be `nil`.

## See Also

### Related Documentation

- [decodeInt32(forKey:)](../nskeyedunarchiver/decodeint32%28forkey_%29.md): Decodes a 32-bit integer value associated with a given key.

### Encoding Data and Objects

- [encodeEncodable(\_:forKey:)](encodeencodable%28__forkey_%29.md): Encodes a given value and associates it with a key.
- [encode(\_:forKey:)](encode%28__forkey_%29-9pxhm.md): Encodes a given Boolean value and associates it with a key.
- [encodeBytes(\_:length:forKey:)](encodebytes%28__length_forkey_%29.md): Encodes a given number of bytes from a given C array of bytes and associates them with a key.
- [encodeConditionalObject(\_:forKey:)](encodeconditionalobject%28__forkey_%29.md): Encodes a reference to a given object and associates it with a key only if it has been unconditionally encoded elsewhere in the archive.
- [encode(\_:forKey:)](encode%28__forkey_%29-1mkfl.md): Encodes a given `double` value and associates it with a key.
- [encode(\_:forKey:)](encode%28__forkey_%29-67rcs.md): Encodes a given `float` value and associates it with a key.
- [encode(\_:forKey:)](encode%28__forkey_%29-ycdd.md): Encodes a given 64-bit integer value and associates it with a key.
- [encode(\_:forKey:)](encode%28__forkey_%29-9f4n9.md): Encodes a given object and associates it with a given key.

# encodeInt32:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes a given 32-bit integer value and associates it with a key.

## Declaration

```objectivec
- (void) encodeInt32:(int32_t) value forKey:(NSString *) key;
```

## Parameters

- `value`: The value to encode.
- `key`: The key with which to associate `intv`. This value must not be `nil`.

## See Also

### Related Documentation

- [decodeInt32ForKey:](../nskeyedunarchiver/decodeint32%28forkey_%29.md): Decodes a 32-bit integer value associated with a given key.

### Encoding Data and Objects

- [encodeBool:forKey:](encode%28__forkey_%29-9pxhm.md): Encodes a given Boolean value and associates it with a key.
- [encodeBytes:length:forKey:](encodebytes%28__length_forkey_%29.md): Encodes a given number of bytes from a given C array of bytes and associates them with a key.
- [encodeConditionalObject:forKey:](encodeconditionalobject%28__forkey_%29.md): Encodes a reference to a given object and associates it with a key only if it has been unconditionally encoded elsewhere in the archive.
- [encodeDouble:forKey:](encode%28__forkey_%29-1mkfl.md): Encodes a given `double` value and associates it with a key.
- [encodeFloat:forKey:](encode%28__forkey_%29-67rcs.md): Encodes a given `float` value and associates it with a key.
- [encodeInt:forKey:](encodeint_forkey_.md): Encodes a given `int` value and associates it with a key.
- [encodeInt64:forKey:](encode%28__forkey_%29-ycdd.md): Encodes a given 64-bit integer value and associates it with a key.
- [encodeObject:forKey:](encode%28__forkey_%29-9f4n9.md): Encodes a given object and associates it with a given key.
