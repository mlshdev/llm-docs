> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/decodebool(forkey:)](https://developer.apple.com/documentation/foundation/nscoder/decodebool(forkey:))

# decodeBool(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes and returns a boolean value that was previously encoded with [encode(\_:forKey:)](encode%28__forkey_%29-7o6mu.md) and associated with the string `key`.

## Declaration

```swift
func decodeBool(forKey key: String) -> Bool
```

<a id="Discussion"></a>

## Discussion

Subclasses must override this method if they perform keyed coding.

## See Also

### Decoding General Data

- [decodeArray(ofObjCType:count:at:)](decodearray%28ofobjctype_count_at_%29.md): Decodes an array of `count` items, whose Objective-C type is given by `itemType`.
- [decodeBytes(forKey:returnedLength:)](decodebytes%28forkey_returnedlength_%29.md): Decodes a buffer of data that was previously encoded with [encodeBytes(\_:length:forKey:)](encodebytes%28__length_forkey_%29.md) and associated with the string `key`.
- [decodeBytes(withReturnedLength:)](decodebytes%28withreturnedlength_%29.md): Decodes a buffer of data whose types are unspecified.
- [decodeData()](decodedata%28%29.md): Decodes and returns an `NSData` object that was previously encoded with [encode(\_:)](encode%28__%29-1qd1e.md). Subclasses must override this method.
- [decodeDouble(forKey:)](decodedouble%28forkey_%29.md): Decodes and returns a double value that was previously encoded with either [encode(\_:forKey:)](encode%28__forkey_%29-84cez.md) or [encode(\_:forKey:)](encode%28__forkey_%29-9xiiu.md) and associated with the string `key`.
- [decodeFloat(forKey:)](decodefloat%28forkey_%29.md): Decodes and returns a float value that was previously encoded with [encode(\_:forKey:)](encode%28__forkey_%29-84cez.md) or [encode(\_:forKey:)](encode%28__forkey_%29-9xiiu.md) and associated with the string `key`.
- [decodeCInt(forKey:)](decodecint%28forkey_%29.md): Decodes and returns an int value that was previously encoded with [encodeCInt(\_:forKey:)](encodecint%28__forkey_%29.md), [encode(\_:forKey:)](encode%28__forkey_%29-2dprz.md), [encode(\_:forKey:)](encode%28__forkey_%29-5sk4z.md), or [encode(\_:forKey:)](encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeInteger(forKey:)](decodeinteger%28forkey_%29.md): Decodes and returns an NSInteger value that was previously encoded with [encodeCInt(\_:forKey:)](encodecint%28__forkey_%29.md), [encode(\_:forKey:)](encode%28__forkey_%29-2dprz.md), [encode(\_:forKey:)](encode%28__forkey_%29-5sk4z.md), or [encode(\_:forKey:)](encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeInt32(forKey:)](decodeint32%28forkey_%29.md): Decodes and returns a 32-bit integer value that was previously encoded with [encodeCInt(\_:forKey:)](encodecint%28__forkey_%29.md), [encode(\_:forKey:)](encode%28__forkey_%29-2dprz.md), [encode(\_:forKey:)](encode%28__forkey_%29-5sk4z.md), or [encode(\_:forKey:)](encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeInt64(forKey:)](decodeint64%28forkey_%29.md): Decodes and returns a 64-bit integer value that was previously encoded with [encodeCInt(\_:forKey:)](encodecint%28__forkey_%29.md), [encode(\_:forKey:)](encode%28__forkey_%29-2dprz.md), [encode(\_:forKey:)](encode%28__forkey_%29-5sk4z.md), or [encode(\_:forKey:)](encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeObject()](decodeobject%28%29.md): Decodes and returns an object that was previously encoded with any of the `encode…Object` methods.
- [decodeObject(forKey:)](decodeobject%28forkey_%29.md): Decodes and returns a previously-encoded object that was previously encoded with [encode(\_:forKey:)](encode%28__forkey_%29-1mlmu.md) or [encodeConditionalObject(\_:forKey:)](encodeconditionalobject%28__forkey_%29.md) and associated with the string `key`.
- [decodePoint()](decodepoint%28%29.md): Decodes and returns an NSPoint structure that was previously encoded with [encode(\_:)](encode%28__%29-75jv4.md).
- [decodePoint(forKey:)](decodepoint%28forkey_%29.md): Decodes and returns an NSPoint structure that was previously encoded with [encode(\_:forKey:)](encode%28__forkey_%29-27lif.md).
- [decodePropertyList()](decodepropertylist%28%29.md): Decodes a property list that was previously encoded with [encodePropertyList(\_:)](encodepropertylist%28__%29.md).

# decodeBoolForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes and returns a boolean value that was previously encoded with [encodeBool:forKey:](encode%28__forkey_%29-7o6mu.md) and associated with the string `key`.

## Declaration

```objectivec
- (BOOL) decodeBoolForKey:(NSString *) key;
```

<a id="Discussion"></a>

## Discussion

Subclasses must override this method if they perform keyed coding.

## See Also

### Decoding General Data

- [decodeArrayOfObjCType:count:at:](decodearray%28ofobjctype_count_at_%29.md): Decodes an array of `count` items, whose Objective-C type is given by `itemType`.
- [decodeBytesForKey:returnedLength:](decodebytes%28forkey_returnedlength_%29.md): Decodes a buffer of data that was previously encoded with [encodeBytes:length:forKey:](encodebytes%28__length_forkey_%29.md) and associated with the string `key`.
- [decodeBytesWithReturnedLength:](decodebytes%28withreturnedlength_%29.md): Decodes a buffer of data whose types are unspecified.
- [decodeDataObject](decodedata%28%29.md): Decodes and returns an `NSData` object that was previously encoded with [encodeDataObject:](encode%28__%29-1qd1e.md). Subclasses must override this method.
- [decodeDoubleForKey:](decodedouble%28forkey_%29.md): Decodes and returns a double value that was previously encoded with either [encodeFloat:forKey:](encode%28__forkey_%29-84cez.md) or [encodeDouble:forKey:](encode%28__forkey_%29-9xiiu.md) and associated with the string `key`.
- [decodeFloatForKey:](decodefloat%28forkey_%29.md): Decodes and returns a float value that was previously encoded with [encodeFloat:forKey:](encode%28__forkey_%29-84cez.md) or [encodeDouble:forKey:](encode%28__forkey_%29-9xiiu.md) and associated with the string `key`.
- [decodeIntForKey:](decodecint%28forkey_%29.md): Decodes and returns an int value that was previously encoded with [encodeInt:forKey:](encodecint%28__forkey_%29.md), [encodeInteger:forKey:](encode%28__forkey_%29-2dprz.md), [encodeInt32:forKey:](encode%28__forkey_%29-5sk4z.md), or [encodeInt64:forKey:](encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeIntegerForKey:](decodeinteger%28forkey_%29.md): Decodes and returns an NSInteger value that was previously encoded with [encodeInt:forKey:](encodecint%28__forkey_%29.md), [encodeInteger:forKey:](encode%28__forkey_%29-2dprz.md), [encodeInt32:forKey:](encode%28__forkey_%29-5sk4z.md), or [encodeInt64:forKey:](encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeInt32ForKey:](decodeint32%28forkey_%29.md): Decodes and returns a 32-bit integer value that was previously encoded with [encodeInt:forKey:](encodecint%28__forkey_%29.md), [encodeInteger:forKey:](encode%28__forkey_%29-2dprz.md), [encodeInt32:forKey:](encode%28__forkey_%29-5sk4z.md), or [encodeInt64:forKey:](encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeInt64ForKey:](decodeint64%28forkey_%29.md): Decodes and returns a 64-bit integer value that was previously encoded with [encodeInt:forKey:](encodecint%28__forkey_%29.md), [encodeInteger:forKey:](encode%28__forkey_%29-2dprz.md), [encodeInt32:forKey:](encode%28__forkey_%29-5sk4z.md), or [encodeInt64:forKey:](encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeNXObject](decodenxobject.md): Deprecated. Decodes an object previously written with [encodeNXObject:](encodenxobject_.md).
- [decodeObject](decodeobject%28%29.md): Decodes and returns an object that was previously encoded with any of the `encode…Object` methods.
- [decodeObjectForKey:](decodeobject%28forkey_%29.md): Decodes and returns a previously-encoded object that was previously encoded with [encodeObject:forKey:](encode%28__forkey_%29-1mlmu.md) or [encodeConditionalObject:forKey:](encodeconditionalobject%28__forkey_%29.md) and associated with the string `key`.
- [decodePoint](decodepoint%28%29.md): Decodes and returns an NSPoint structure that was previously encoded with [encodePoint:](encode%28__%29-75jv4.md).
- [decodePointForKey:](decodepoint%28forkey_%29.md): Decodes and returns an NSPoint structure that was previously encoded with [encodePoint:forKey:](encode%28__forkey_%29-27lif.md).
