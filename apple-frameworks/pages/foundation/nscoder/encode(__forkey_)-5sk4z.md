> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/encode(_:forkey:)-5sk4z](https://developer.apple.com/documentation/foundation/nscoder/encode(_:forkey:)-5sk4z)

# encode(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes a 32-bit integer value and associates it with the string key.

## Declaration

```swift
func encode(_ value: Int32, forKey key: String)
```

<a id="Discussion"></a>

## Discussion

Subclasses must override this method if they perform keyed coding.

## See Also

### Related Documentation

- [decodeCInt(forKey:)](decodecint%28forkey_%29.md): Decodes and returns an int value that was previously encoded with [encodeCInt(\_:forKey:)](encodecint%28__forkey_%29.md), [encode(\_:forKey:)](encode%28__forkey_%29-2dprz.md), [encode(\_:forKey:)](encode%28__forkey_%29-5sk4z.md), or [encode(\_:forKey:)](encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeInt32(forKey:)](decodeint32%28forkey_%29.md): Decodes and returns a 32-bit integer value that was previously encoded with [encodeCInt(\_:forKey:)](encodecint%28__forkey_%29.md), [encode(\_:forKey:)](encode%28__forkey_%29-2dprz.md), [encode(\_:forKey:)](encode%28__forkey_%29-5sk4z.md), or [encode(\_:forKey:)](encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeInt64(forKey:)](decodeint64%28forkey_%29.md): Decodes and returns a 64-bit integer value that was previously encoded with [encodeCInt(\_:forKey:)](encodecint%28__forkey_%29.md), [encode(\_:forKey:)](encode%28__forkey_%29-2dprz.md), [encode(\_:forKey:)](encode%28__forkey_%29-5sk4z.md), or [encode(\_:forKey:)](encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeInteger(forKey:)](decodeinteger%28forkey_%29.md): Decodes and returns an NSInteger value that was previously encoded with [encodeCInt(\_:forKey:)](encodecint%28__forkey_%29.md), [encode(\_:forKey:)](encode%28__forkey_%29-2dprz.md), [encode(\_:forKey:)](encode%28__forkey_%29-5sk4z.md), or [encode(\_:forKey:)](encode%28__forkey_%29-dixg.md) and associated with the string `key`.

### Encoding General Data

- [encodeArray(ofObjCType:count:at:)](encodearray%28ofobjctype_count_at_%29.md): Encodes an array of the given Objective-C type, provided the number of items and a pointer.
- [encode(\_:forKey:)](encode%28__forkey_%29-7o6mu.md): Encodes a Boolean value and associates it with the string `key`.
- [encodeBycopyObject(\_:)](encodebycopyobject%28__%29.md): An encoding method for subclasses to override such that it creates a copy, rather than a proxy, when decoded.
- [encodeByrefObject(\_:)](encodebyrefobject%28__%29.md): An encoding method for subclasses to override such that it creates a proxy, rather than a copy, when decoded.
- [encodeBytes(\_:length:)](encodebytes%28__length_%29.md): Encodes a buffer of data of an unspecified type.
- [encodeBytes(\_:length:forKey:)](encodebytes%28__length_forkey_%29.md): Encodes a buffer of data, given its length and a pointer, and associates it with a string key.
- [encodeConditionalObject(\_:)](encodeconditionalobject%28__%29.md): An encoding method for subclasses to override to conditionally encode an object, preserving common references to it.
- [encodeConditionalObject(\_:forKey:)](encodeconditionalobject%28__forkey_%29.md): An encoding method for subclasses to override to conditionally encode an object, preserving common references to it, only if it has been unconditionally encoded.
- [encode(\_:)](encode%28__%29-1qd1e.md): Encodes a given data object.
- [encode(\_:forKey:)](encode%28__forkey_%29-9xiiu.md): Encodes a double-precision floating point value and associates it with the string key.
- [encode(\_:forKey:)](encode%28__forkey_%29-84cez.md): Encodes a floating point value and associates it with the string key.
- [encodeCInt(\_:forKey:)](encodecint%28__forkey_%29.md): Encodes a C integer value and associates it with the string key.
- [encode(\_:forKey:)](encode%28__forkey_%29-2dprz.md): Encodes an integer value and associates it with the string key.
- [encode(\_:forKey:)](encode%28__forkey_%29-dixg.md): Encodes a 64-bit integer value and associates it with the string key.
- [encode(\_:)](encode%28__%29-9648d.md): Encodes an object.

# encodeInt32:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes a 32-bit integer value and associates it with the string key.

## Declaration

```objectivec
- (void) encodeInt32:(int32_t) value forKey:(NSString *) key;
```

<a id="Discussion"></a>

## Discussion

Subclasses must override this method if they perform keyed coding.

## See Also

### Related Documentation

- [decodeIntForKey:](decodecint%28forkey_%29.md): Decodes and returns an int value that was previously encoded with [encodeInt:forKey:](encodecint%28__forkey_%29.md), [encodeInteger:forKey:](encode%28__forkey_%29-2dprz.md), [encodeInt32:forKey:](encode%28__forkey_%29-5sk4z.md), or [encodeInt64:forKey:](encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeInt32ForKey:](decodeint32%28forkey_%29.md): Decodes and returns a 32-bit integer value that was previously encoded with [encodeInt:forKey:](encodecint%28__forkey_%29.md), [encodeInteger:forKey:](encode%28__forkey_%29-2dprz.md), [encodeInt32:forKey:](encode%28__forkey_%29-5sk4z.md), or [encodeInt64:forKey:](encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeInt64ForKey:](decodeint64%28forkey_%29.md): Decodes and returns a 64-bit integer value that was previously encoded with [encodeInt:forKey:](encodecint%28__forkey_%29.md), [encodeInteger:forKey:](encode%28__forkey_%29-2dprz.md), [encodeInt32:forKey:](encode%28__forkey_%29-5sk4z.md), or [encodeInt64:forKey:](encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeIntegerForKey:](decodeinteger%28forkey_%29.md): Decodes and returns an NSInteger value that was previously encoded with [encodeInt:forKey:](encodecint%28__forkey_%29.md), [encodeInteger:forKey:](encode%28__forkey_%29-2dprz.md), [encodeInt32:forKey:](encode%28__forkey_%29-5sk4z.md), or [encodeInt64:forKey:](encode%28__forkey_%29-dixg.md) and associated with the string `key`.

### Encoding General Data

- [encodeArrayOfObjCType:count:at:](encodearray%28ofobjctype_count_at_%29.md): Encodes an array of the given Objective-C type, provided the number of items and a pointer.
- [encodeBool:forKey:](encode%28__forkey_%29-7o6mu.md): Encodes a Boolean value and associates it with the string `key`.
- [encodeBycopyObject:](encodebycopyobject%28__%29.md): An encoding method for subclasses to override such that it creates a copy, rather than a proxy, when decoded.
- [encodeByrefObject:](encodebyrefobject%28__%29.md): An encoding method for subclasses to override such that it creates a proxy, rather than a copy, when decoded.
- [encodeBytes:length:](encodebytes%28__length_%29.md): Encodes a buffer of data of an unspecified type.
- [encodeBytes:length:forKey:](encodebytes%28__length_forkey_%29.md): Encodes a buffer of data, given its length and a pointer, and associates it with a string key.
- [encodeConditionalObject:](encodeconditionalobject%28__%29.md): An encoding method for subclasses to override to conditionally encode an object, preserving common references to it.
- [encodeConditionalObject:forKey:](encodeconditionalobject%28__forkey_%29.md): An encoding method for subclasses to override to conditionally encode an object, preserving common references to it, only if it has been unconditionally encoded.
- [encodeDataObject:](encode%28__%29-1qd1e.md): Encodes a given data object.
- [encodeDouble:forKey:](encode%28__forkey_%29-9xiiu.md): Encodes a double-precision floating point value and associates it with the string key.
- [encodeFloat:forKey:](encode%28__forkey_%29-84cez.md): Encodes a floating point value and associates it with the string key.
- [encodeInt:forKey:](encodecint%28__forkey_%29.md): Encodes a C integer value and associates it with the string key.
- [encodeInteger:forKey:](encode%28__forkey_%29-2dprz.md): Encodes an integer value and associates it with the string key.
- [encodeInt64:forKey:](encode%28__forkey_%29-dixg.md): Encodes a 64-bit integer value and associates it with the string key.
- [encodeNXObject:](encodenxobject_.md): Deprecated. Encodes an old-style object onto the coder.
