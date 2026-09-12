> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/encodenxobject:](https://developer.apple.com/documentation/foundation/nscoder/encodenxobject:)

# encodeNXObject:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Encodes an old-style object onto the coder.

> Apple discourages the use of this symbol.

## Declaration

```objectivec
- (void) encodeNXObject:(id) object;
```

<a id="Discussion"></a>

## Discussion

No sharing is done across separate [encodeNXObject:](encodenxobject_.md) invocations. Callers must have implemented an [encodeWithCoder:](../nscoding/encode%28with_%29.md), which parallels the `write:` methods, on all of their classes that may be touched by this operation.

## See Also

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
- [encodeInt32:forKey:](encode%28__forkey_%29-5sk4z.md): Encodes a 32-bit integer value and associates it with the string key.
- [encodeInt64:forKey:](encode%28__forkey_%29-dixg.md): Encodes a 64-bit integer value and associates it with the string key.
