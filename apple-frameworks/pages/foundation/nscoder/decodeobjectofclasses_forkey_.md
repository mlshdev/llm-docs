> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/decodeobjectofclasses:forkey:](https://developer.apple.com/documentation/foundation/nscoder/decodeobjectofclasses:forkey:)

# decodeObjectOfClasses:forKey:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes an object for the key, restricted to the specified classes.

## Declaration

```objectivec
- (id) decodeObjectOfClasses:(NSSet<Class> *) classes forKey:(NSString *) key;
```

## Parameters

- `classes`: A set of the expected classes.
- `key`: The coder key.

<a id="return-value"></a>

## Return Value

The decoded object.

<a id="Discussion"></a>

## Discussion

The class of the object may be any class in the `classes` set, or a subclass of any class in the set. Otherwise, the behavior is the same as [decodeObjectOfClass:forKey:](decodeobjectofclass_forkey_.md).

## See Also

### Decoding General Data

- [decodeArrayOfObjCType:count:at:](decodearray%28ofobjctype_count_at_%29.md): Decodes an array of `count` items, whose Objective-C type is given by `itemType`.
- [decodeBoolForKey:](decodebool%28forkey_%29.md): Decodes and returns a boolean value that was previously encoded with [encodeBool:forKey:](encode%28__forkey_%29-7o6mu.md) and associated with the string `key`.
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
