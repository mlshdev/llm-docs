> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiver/decodingfailurepolicy](https://developer.apple.com/documentation/foundation/nskeyedunarchiver/decodingfailurepolicy)

# decodingFailurePolicy (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The action to take when this unarchiver fails to decode an entry.

## Declaration

```swift
var decodingFailurePolicy: NSCoder.DecodingFailurePolicy { get set }
```

<a id="Discussion"></a>

## Discussion

The unarchiver may fail to decode an entry for the following reasons:

- The keyed archive data is corrupt or missing.
- A type mismatch occurs, such as expecting a class by calling [decodeObject(of:forKey:)](../nscoder/decodeobject%28of_forkey_%29-7tmft.md), but the unarchiver encounters a numeric value for that key instead. This also occurs when [decodeIntForKey:](decodeintforkey_.md) encounters a value encoded as floating-point, or vice versa.
- A secure coding violation occurs. This happens when attempting to decode an object that doesn’t conform to [NSSecureCoding](../nssecurecoding.md). This also happens when the encoded type doesn’t match any of the classes passed to [unarchivedObject(ofClasses:from:)](unarchivedobject%28ofclasses_from_%29-b9t5.md).

## See Also

### Decoding Data

- [containsValue(forKey:)](containsvalue%28forkey_%29.md): Returns a Boolean value that indicates whether the archive contains a value for a given key within the current decoding scope.
- [decodeDecodable(\_:forKey:)](decodedecodable%28__forkey_%29.md): Decodes a decodable value associated with a given key.
- [decodeTopLevelDecodable(\_:forKey:)](decodetopleveldecodable%28__forkey_%29.md): Decodes a top-level decodable value associated with a given key.
- [decodeBool(forKey:)](decodebool%28forkey_%29.md): Decodes a Boolean value associated with a given key.
- [decodeBytes(forKey:returnedLength:)](decodebytes%28forkey_returnedlength_%29.md): Decodes a stream of bytes associated with a given key.
- [decodeDouble(forKey:)](decodedouble%28forkey_%29.md): Decodes a double-precision floating-point value associated with a given key.
- [decodeFloat(forKey:)](decodefloat%28forkey_%29.md): Decodes a single-precision floating-point value associated with a given key.
- [decodeInt32(forKey:)](decodeint32%28forkey_%29.md): Decodes a 32-bit integer value associated with a given key.
- [decodeInt64(forKey:)](decodeint64%28forkey_%29.md): Decodes a 64-bit integer value associated with a given key.
- [decodeObject(forKey:)](decodeobject%28forkey_%29.md): Decodes and returns an object associated with a given key.
- [finishDecoding()](finishdecoding%28%29.md): Tells the receiver that you are finished decoding objects.

# decodingFailurePolicy (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The action to take when this unarchiver fails to decode an entry.

## Declaration

```objectivec
@property (readwrite) NSDecodingFailurePolicy decodingFailurePolicy;
```

<a id="Discussion"></a>

## Discussion

The unarchiver may fail to decode an entry for the following reasons:

- The keyed archive data is corrupt or missing.
- A type mismatch occurs, such as expecting a class by calling [decodeObject(of:forKey:)](../nscoder/decodeobject%28of_forkey_%29-7tmft.md), but the unarchiver encounters a numeric value for that key instead. This also occurs when [decodeIntForKey:](decodeintforkey_.md) encounters a value encoded as floating-point, or vice versa.
- A secure coding violation occurs. This happens when attempting to decode an object that doesn’t conform to [NSSecureCoding](../nssecurecoding.md). This also happens when the encoded type doesn’t match any of the classes passed to [unarchivedObjectOfClasses:fromData:error:](unarchivedobject%28ofclasses_from_%29-b9t5.md).

## See Also

### Decoding Data

- [containsValueForKey:](containsvalue%28forkey_%29.md): Returns a Boolean value that indicates whether the archive contains a value for a given key within the current decoding scope.
- [decodeBoolForKey:](decodebool%28forkey_%29.md): Decodes a Boolean value associated with a given key.
- [decodeBytesForKey:returnedLength:](decodebytes%28forkey_returnedlength_%29.md): Decodes a stream of bytes associated with a given key.
- [decodeDoubleForKey:](decodedouble%28forkey_%29.md): Decodes a double-precision floating-point value associated with a given key.
- [decodeFloatForKey:](decodefloat%28forkey_%29.md): Decodes a single-precision floating-point value associated with a given key.
- [decodeIntForKey:](decodeintforkey_.md): Decodes an integer value associated with a given key.
- [decodeInt32ForKey:](decodeint32%28forkey_%29.md): Decodes a 32-bit integer value associated with a given key.
- [decodeInt64ForKey:](decodeint64%28forkey_%29.md): Decodes a 64-bit integer value associated with a given key.
- [decodeObjectForKey:](decodeobject%28forkey_%29.md): Decodes and returns an object associated with a given key.
- [finishDecoding](finishdecoding%28%29.md): Tells the receiver that you are finished decoding objects.
