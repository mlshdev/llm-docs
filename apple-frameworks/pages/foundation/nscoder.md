> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder](https://developer.apple.com/documentation/foundation/nscoder)

# NSCoder (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract class that serves as the basis for objects that enable archiving and distribution of other objects.

## Declaration

```swift
class NSCoder
```

<a id="overview"></a>

## Overview

[NSCoder](nscoder.md) declares the interface used by concrete subclasses to transfer objects and other values between memory and some other format. This capability provides the basis for archiving (storing objects and data on disk) and distribution (copying objects and data items between different processes or threads). The concrete subclasses provided by Foundation for these purposes are [NSArchiver](nsarchiver.md), [NSUnarchiver](nsunarchiver.md), [NSKeyedArchiver](nskeyedarchiver.md), [NSKeyedUnarchiver](nskeyedunarchiver.md), and [NSPortCoder](nsportcoder.md). Concrete subclasses of [NSCoder](nscoder.md) are “coder classes”, and instances of these classes are “coder objects” (or simply “coders”). A coder that can only encode values is an “encoder”, and one that can only decode values is a “decoder”.

[NSCoder](nscoder.md) operates on objects, scalars, C arrays, structures, strings, and on pointers to these types. It doesn’t handle types whose implementation varies across platforms, such as `union`, `void *`, function pointers, and long chains of pointers. A coder stores object type information along with the data, so an object decoded from a stream of bytes is normally of the same class as the object that was originally encoded into the stream. An object can change its class when encoded, however; this is described in [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i).

The AVFoundation framework adds methods to the [NSCoder](nscoder.md) class to make it easier to create archives including Core Media time structures, and extract Core Media time structure from archives.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

For details of how to create a subclass of `NSCoder`, see [Subclassing NSCoder](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Articles/subclassing.html#//apple_ref/doc/uid/20000951) in [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i).

## Topics

### Inspecting a Coder

- [allowsKeyedCoding](nscoder/allowskeyedcoding.md): A Boolean value that indicates whether the receiver supports keyed coding of objects.
- [containsValue(forKey:)](nscoder/containsvalue%28forkey_%29.md): Returns a Boolean value that indicates whether an encoded value is available for a string.
- [decodingFailurePolicy](nscoder/decodingfailurepolicy-swift.property.md): The action the coder should take when decoding fails.
- [NSCoder.DecodingFailurePolicy](nscoder/decodingfailurepolicy-swift.enum.md): Policies describing the action the coder should take when encountering decode failures.

### Encoding General Data

- [encodeArray(ofObjCType:count:at:)](nscoder/encodearray%28ofobjctype_count_at_%29.md): Encodes an array of the given Objective-C type, provided the number of items and a pointer.
- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-7o6mu.md): Encodes a Boolean value and associates it with the string `key`.
- [encodeBycopyObject(\_:)](nscoder/encodebycopyobject%28__%29.md): An encoding method for subclasses to override such that it creates a copy, rather than a proxy, when decoded.
- [encodeByrefObject(\_:)](nscoder/encodebyrefobject%28__%29.md): An encoding method for subclasses to override such that it creates a proxy, rather than a copy, when decoded.
- [encodeBytes(\_:length:)](nscoder/encodebytes%28__length_%29.md): Encodes a buffer of data of an unspecified type.
- [encodeBytes(\_:length:forKey:)](nscoder/encodebytes%28__length_forkey_%29.md): Encodes a buffer of data, given its length and a pointer, and associates it with a string key.
- [encodeConditionalObject(\_:)](nscoder/encodeconditionalobject%28__%29.md): An encoding method for subclasses to override to conditionally encode an object, preserving common references to it.
- [encodeConditionalObject(\_:forKey:)](nscoder/encodeconditionalobject%28__forkey_%29.md): An encoding method for subclasses to override to conditionally encode an object, preserving common references to it, only if it has been unconditionally encoded.
- [encode(\_:)](nscoder/encode%28__%29-1qd1e.md): Encodes a given data object.
- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-9xiiu.md): Encodes a double-precision floating point value and associates it with the string key.
- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-84cez.md): Encodes a floating point value and associates it with the string key.
- [encodeCInt(\_:forKey:)](nscoder/encodecint%28__forkey_%29.md): Encodes a C integer value and associates it with the string key.
- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-2dprz.md): Encodes an integer value and associates it with the string key.
- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-5sk4z.md): Encodes a 32-bit integer value and associates it with the string key.
- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-dixg.md): Encodes a 64-bit integer value and associates it with the string key.
- [encode(\_:)](nscoder/encode%28__%29-9648d.md): Encodes an object.
- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-1mlmu.md): Encodes an object and associates it with the string key.
- [encode(\_:)](nscoder/encode%28__%29-75jv4.md): Encodes a point.
- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-27lif.md): Encodes a point and associates it with the string key.
- [encodePropertyList(\_:)](nscoder/encodepropertylist%28__%29.md): Encodes a property list.
- [encode(\_:)](nscoder/encode%28__%29-3c1wz.md): Encodes a rectangle structure.
- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-2knxx.md): Encodes a rectangle structure and associates it with the string key.
- [encodeRootObject(\_:)](nscoder/encoderootobject%28__%29.md): An encoding method for subclasses to override to encode an interconnected group of objects, starting with the provided root object.
- [encode(\_:)](nscoder/encode%28__%29-82i7c.md): Encodes a size structure.
- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-9imtu.md): Encodes a size structure and associates it with the given string key.
- [encodeValue(ofObjCType:at:)](nscoder/encodevalue%28ofobjctype_at_%29.md): Encodes a value of the given type at the given address.

### Encoding Geometry-Based Data

- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-29jyx.md): Encodes an affine transform and associates it with the specified key in the receiver’s archive.
- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-7z9kc.md): Encodes a point and associates it with the specified key in the receiver’s archive.
- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-10qhm.md): Encodes a rectangle and associates it with the specified key in the receiver’s archive.
- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-6wq3n.md): Encodes size information and associates it with the specified key in the coder’s archive.
- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-26fxa.md): Encodes vector data and associates it with the specified key in the coder’s archive.
- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-7oo2n.md): Encodes directional edge inset data and associates it with the specified key in the coder’s archive.
- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-44zsc.md): Encodes edge inset data and associates it with the specified key in the coder’s archive.
- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-9d1qy.md): Encodes offset data and associates it with the specified key in the coder’s archive.

### Encoding Core Media Time Structures

- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-6wbby.md): Encodes a given Core Media time structure and associates it with a specified key.
- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-46lo8.md): Encodes a given Core Media time range structure and associates it with a specified key.
- [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-8tefb.md): Encodes a given Core Media time mapping structure and associates it with a specified key.

### Secure Coding

- [requiresSecureCoding](nscoder/requiressecurecoding.md): Indicates whether the archiver requires all archived classes to resist object substitution attacks.
- [allowedClasses](nscoder/allowedclasses.md): The set of coded classes allowed for secure coding.

### Decoding Top-Level Objects

- [decodeObject(of:forKey:)](nscoder/decodeobject%28of_forkey_%29-7tmft.md): Decode an object as an expected type, failing if the archived type doesn’t match.
- [decodeObject(of:forKey:)](nscoder/decodeobject%28of_forkey_%29-roif.md): Decode an object as one of several expected types, failing if the archived type doesn’t match any of the types.
- [decodeTopLevelObject()](nscoder/decodetoplevelobject%28%29.md): Deprecated. Decodes a previously-encoded object.
- [decodeTopLevelObject(forKey:)](nscoder/decodetoplevelobject%28forkey_%29.md): Deprecated. Decodes the previously-encoded object associated by a key.
- [decodeTopLevelObject(of:forKey:)](nscoder/decodetoplevelobject%28of_forkey_%29-3w6pd.md): Decode an object as one of several expected types, failing if the archived type does not match.
- [decodeTopLevelObject(of:forKey:)](nscoder/decodetoplevelobject%28of_forkey_%29-5lnnn.md): Decode an object as one of several expected types, failing if the archived type does not match.

### Decoding General Data

- [decodeArray(ofObjCType:count:at:)](nscoder/decodearray%28ofobjctype_count_at_%29.md): Decodes an array of `count` items, whose Objective-C type is given by `itemType`.
- [decodeBool(forKey:)](nscoder/decodebool%28forkey_%29.md): Decodes and returns a boolean value that was previously encoded with [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-7o6mu.md) and associated with the string `key`.
- [decodeBytes(forKey:returnedLength:)](nscoder/decodebytes%28forkey_returnedlength_%29.md): Decodes a buffer of data that was previously encoded with [encodeBytes(\_:length:forKey:)](nscoder/encodebytes%28__length_forkey_%29.md) and associated with the string `key`.
- [decodeBytes(withReturnedLength:)](nscoder/decodebytes%28withreturnedlength_%29.md): Decodes a buffer of data whose types are unspecified.
- [decodeData()](nscoder/decodedata%28%29.md): Decodes and returns an `NSData` object that was previously encoded with [encode(\_:)](nscoder/encode%28__%29-1qd1e.md). Subclasses must override this method.
- [decodeDouble(forKey:)](nscoder/decodedouble%28forkey_%29.md): Decodes and returns a double value that was previously encoded with either [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-84cez.md) or [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-9xiiu.md) and associated with the string `key`.
- [decodeFloat(forKey:)](nscoder/decodefloat%28forkey_%29.md): Decodes and returns a float value that was previously encoded with [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-84cez.md) or [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-9xiiu.md) and associated with the string `key`.
- [decodeCInt(forKey:)](nscoder/decodecint%28forkey_%29.md): Decodes and returns an int value that was previously encoded with [encodeCInt(\_:forKey:)](nscoder/encodecint%28__forkey_%29.md), [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-2dprz.md), [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-5sk4z.md), or [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeInteger(forKey:)](nscoder/decodeinteger%28forkey_%29.md): Decodes and returns an NSInteger value that was previously encoded with [encodeCInt(\_:forKey:)](nscoder/encodecint%28__forkey_%29.md), [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-2dprz.md), [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-5sk4z.md), or [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeInt32(forKey:)](nscoder/decodeint32%28forkey_%29.md): Decodes and returns a 32-bit integer value that was previously encoded with [encodeCInt(\_:forKey:)](nscoder/encodecint%28__forkey_%29.md), [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-2dprz.md), [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-5sk4z.md), or [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeInt64(forKey:)](nscoder/decodeint64%28forkey_%29.md): Decodes and returns a 64-bit integer value that was previously encoded with [encodeCInt(\_:forKey:)](nscoder/encodecint%28__forkey_%29.md), [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-2dprz.md), [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-5sk4z.md), or [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeObject()](nscoder/decodeobject%28%29.md): Decodes and returns an object that was previously encoded with any of the `encode…Object` methods.
- [decodeObject(forKey:)](nscoder/decodeobject%28forkey_%29.md): Decodes and returns a previously-encoded object that was previously encoded with [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-1mlmu.md) or [encodeConditionalObject(\_:forKey:)](nscoder/encodeconditionalobject%28__forkey_%29.md) and associated with the string `key`.
- [decodePoint()](nscoder/decodepoint%28%29.md): Decodes and returns an NSPoint structure that was previously encoded with [encode(\_:)](nscoder/encode%28__%29-75jv4.md).
- [decodePoint(forKey:)](nscoder/decodepoint%28forkey_%29.md): Decodes and returns an NSPoint structure that was previously encoded with [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-27lif.md).
- [decodePropertyList()](nscoder/decodepropertylist%28%29.md): Decodes a property list that was previously encoded with [encodePropertyList(\_:)](nscoder/encodepropertylist%28__%29.md).
- [decodeRect()](nscoder/decoderect%28%29.md): Decodes and returns an NSRect structure that was previously encoded with [encode(\_:)](nscoder/encode%28__%29-3c1wz.md).
- [decodeRect(forKey:)](nscoder/decoderect%28forkey_%29.md): Decodes and returns an NSRect structure that was previously encoded with [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-2knxx.md).
- [decodeSize()](nscoder/decodesize%28%29.md): Decodes and returns an NSSize structure that was previously encoded with [encode(\_:)](nscoder/encode%28__%29-82i7c.md).
- [decodeSize(forKey:)](nscoder/decodesize%28forkey_%29.md): Decodes and returns an NSSize structure that was previously encoded with [encode(\_:forKey:)](nscoder/encode%28__forkey_%29-9imtu.md).
- [decodeValue(ofObjCType:at:)](nscoder/decodevalue%28ofobjctype_at_%29.md): Deprecated. Decodes a single value, whose Objective-C type is given by `valueType`.
- [decodeValue(ofObjCType:at:size:)](nscoder/decodevalue%28ofobjctype_at_size_%29.md): Decodes a single value of a known type from the specified data buffer.
- [decodePropertyList(forKey:)](nscoder/decodepropertylist%28forkey_%29.md): Returns a decoded property list for the specified key.

### Decoding Geometry-Based Data

- [decodeCGAffineTransform(forKey:)](nscoder/decodecgaffinetransform%28forkey_%29.md): Decodes and returns the Core Graphics affine transform structure associated with the specified key in the coder’s archive.
- [decodeCGPoint(forKey:)](nscoder/decodecgpoint%28forkey_%29.md): Decodes and returns the Core Graphics point structure associated with the specified key in the coder’s archive.
- [decodeCGRect(forKey:)](nscoder/decodecgrect%28forkey_%29.md): Decodes and returns the Core Graphics rectangle structure associated with the specified key in the coder’s archive.
- [decodeCGSize(forKey:)](nscoder/decodecgsize%28forkey_%29.md): Decodes and returns the Core Graphics size structure associated with the specified key in the coder’s archive.
- [decodeCGVector(forKey:)](nscoder/decodecgvector%28forkey_%29.md): Decodes and returns the Core Graphics vector data associated with the specified key in the coder’s archive.
- [decodeDirectionalEdgeInsets(forKey:)](nscoder/decodedirectionaledgeinsets%28forkey_%29.md): Decodes and returns the UIKit directional edge insets structure associated with the specified key in the coder’s archive.
- [decodeUIEdgeInsets(forKey:)](nscoder/decodeuiedgeinsets%28forkey_%29.md): Decodes and returns the UIKit edge insets structure associated with the specified key in the coder’s archive.
- [decodeUIOffset(forKey:)](nscoder/decodeuioffset%28forkey_%29.md): Decodes and returns the UIKit offset structure associated with the specified key in the coder’s archive.

### Decoding Core Media Time Structures

- [decodeTime(forKey:)](nscoder/decodetime%28forkey_%29.md): Returns the Core Media time structure associated with a given key.
- [decodeTimeRange(forKey:)](nscoder/decodetimerange%28forkey_%29.md): Returns the Core Media time range structure associated with a given key.
- [decodeTimeMapping(forKey:)](nscoder/decodetimemapping%28forkey_%29.md): Returns the Core Media time mapping structure associated with a given key.

### Managing Decode Errors

- [failWithError(\_:)](nscoder/failwitherror%28__%29.md): Signals to this coder that the decode operation has failed.
- [error](nscoder/error.md): An error in the top-level encode.

### Getting Version Information

- [systemVersion](nscoder/systemversion.md): The system version in effect for the archive.
- [version(forClassName:)](nscoder/version%28forclassname_%29.md): This method is present for historical reasons and is not used with keyed archivers.

### Representing Geometric Types as Strings

Convenience methods for creating encodable and decodable types in Objective-C.

- [cgAffineTransform(for:)](nscoder/cgaffinetransform%28for_%29.md): Returns a Core Graphics affine transform structure corresponding to the data in a given string.
- [cgPoint(for:)](nscoder/cgpoint%28for_%29.md): Returns a Core Graphics point structure corresponding to the data in a given string.
- [cgRect(for:)](nscoder/cgrect%28for_%29.md): Returns a Core Graphics rectangle structure corresponding to the data in a given string.
- [cgSize(for:)](nscoder/cgsize%28for_%29.md): Returns a Core Graphics size structure corresponding to the data in a given string.
- [cgVector(for:)](nscoder/cgvector%28for_%29.md): Returns a Core Graphics vector corresponding to the data in a given string.
- [nsDirectionalEdgeInsets(for:)](nscoder/nsdirectionaledgeinsets%28for_%29.md): Returns a directional edge insets structure based on data in the specified string.
- [uiEdgeInsets(for:)](nscoder/uiedgeinsets%28for_%29.md): Returns a UIKit edge insets structure based on the data in the specified string.
- [uiOffset(for:)](nscoder/uioffset%28for_%29.md): Returns a UIKit offset structure corresponding to the data in a given string.
- [string(for:)](nscoder/string%28for_%29-4qz0a.md): Returns a string formatted to contain the data from a rectangle.
- [string(for:)](nscoder/string%28for_%29-4omzv.md): Returns a string formatted to contain the data from a vector data structure.
- [string(for:)](nscoder/string%28for_%29-6yx6n.md): Returns a string formatted to contain the data from an affine transform.
- [string(for:)](nscoder/string%28for_%29-6ix86.md): Returns a string formatted to contain the data from a point.
- [string(for:)](nscoder/string%28for_%29-2f1xb.md): Returns a string formatted to contain the data from a size data structure.
- [string(for:)](nscoder/string%28for_%29-hp8b.md): Returns a string formatted to contain the data from a directional edge insets structure.
- [string(for:)](nscoder/string%28for_%29-26b4z.md): Returns a string formatted to contain the data from an edge insets structure.
- [string(for:)](nscoder/string%28for_%29-454dj.md): Returns a string formatted to contain the data from an offset structure.

### Error Codes

- [NSCoderErrorMaximum](nscodererrormaximum-swift.var.md): The end of the range of error codes reserved for coder errors.
- [NSCoderErrorMinimum](nscodererrorminimum-swift.var.md): The start of the range of error codes reserved for coder errors.
- [NSCoderReadCorruptError](nscoderreadcorrupterror-swift.var.md): Decoding failed due to corrupt data.
- [NSCoderValueNotFoundError](nscodervaluenotfounderror-swift.var.md): The requested data wasn’t found.
- [NSCoderInvalidValueError](nscoderinvalidvalueerror-swift.var.md): Data wasn’t valid to encode.

### Instance Methods

- [decodeArrayOfObjects(ofClass:forKey:)](nscoder/decodearrayofobjects%28ofclass_forkey_%29.md)
- [decodeArrayOfObjects(ofClasses:forKey:)](nscoder/decodearrayofobjects%28ofclasses_forkey_%29.md)
- [decodeBytes(forKey:minimumLength:)](nscoder/decodebytes%28forkey_minimumlength_%29.md): Decode bytes from the decoder for a given key. The length of the bytes must be greater than or equal to the `length` parameter. If the result exists, but is of insufficient length, then the decoder uses `failWithError` to fail the entire decode operation. The result of that is configurable on a per-NSCoder basis using `NSDecodingFailurePolicy`.
- [decodeBytes(withMinimumLength:)](nscoder/decodebytes%28withminimumlength_%29.md): Decode bytes from the decoder. The length of the bytes must be greater than or equal to the `length` parameter. If the result exists, but is of insufficient length, then the decoder uses `failWithError` to fail the entire decode operation. The result of that is configurable on a per-NSCoder basis using `NSDecodingFailurePolicy`.
- [decodeDictionary(withKeyClass:objectClass:forKey:)](nscoder/decodedictionary%28withkeyclass_objectclass_forkey_%29.md)
- [decodeDictionary(withKeysOfClasses:objectsOfClasses:forKey:)](nscoder/decodedictionary%28withkeysofclasses_objectsofclasses_forkey_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSArchiver](nsarchiver.md)
- [NSKeyedArchiver](nskeyedarchiver.md)
- [NSKeyedUnarchiver](nskeyedunarchiver.md)
- [NSUnarchiver](nsunarchiver.md)
- [NSXPCCoder](nsxpccoder.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Keyed Archivers

- [NSKeyedArchiver](nskeyedarchiver.md): An encoder that stores an object’s data to an archive referenced by keys.
- [NSKeyedArchiverDelegate](nskeyedarchiverdelegate.md): The optional methods implemented by the delegate of a keyed archiver.
- [NSKeyedUnarchiver](nskeyedunarchiver.md): A decoder that restores data from an archive referenced by keys.
- [NSKeyedUnarchiverDelegate](nskeyedunarchiverdelegate.md): The optional methods implemented by the delegate of a keyed unarchiver.
- [NSSecureUnarchiveFromDataTransformer](nssecureunarchivefromdatatransformer.md): A value transformer that converts data to and from classes that support secure coding.

# NSCoder (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract class that serves as the basis for objects that enable archiving and distribution of other objects.

## Declaration

```objectivec
@interface NSCoder : NSObject
```

<a id="overview"></a>

## Overview

[NSCoder](nscoder.md) declares the interface used by concrete subclasses to transfer objects and other values between memory and some other format. This capability provides the basis for archiving (storing objects and data on disk) and distribution (copying objects and data items between different processes or threads). The concrete subclasses provided by Foundation for these purposes are [NSArchiver](nsarchiver.md), [NSUnarchiver](nsunarchiver.md), [NSKeyedArchiver](nskeyedarchiver.md), [NSKeyedUnarchiver](nskeyedunarchiver.md), and [NSPortCoder](nsportcoder.md). Concrete subclasses of [NSCoder](nscoder.md) are “coder classes”, and instances of these classes are “coder objects” (or simply “coders”). A coder that can only encode values is an “encoder”, and one that can only decode values is a “decoder”.

[NSCoder](nscoder.md) operates on objects, scalars, C arrays, structures, strings, and on pointers to these types. It doesn’t handle types whose implementation varies across platforms, such as `union`, `void *`, function pointers, and long chains of pointers. A coder stores object type information along with the data, so an object decoded from a stream of bytes is normally of the same class as the object that was originally encoded into the stream. An object can change its class when encoded, however; this is described in [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i).

The AVFoundation framework adds methods to the [NSCoder](nscoder.md) class to make it easier to create archives including Core Media time structures, and extract Core Media time structure from archives.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

For details of how to create a subclass of `NSCoder`, see [Subclassing NSCoder](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Articles/subclassing.html#//apple_ref/doc/uid/20000951) in [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i).

## Topics

### Inspecting a Coder

- [allowsKeyedCoding](nscoder/allowskeyedcoding.md): A Boolean value that indicates whether the receiver supports keyed coding of objects.
- [containsValueForKey:](nscoder/containsvalue%28forkey_%29.md): Returns a Boolean value that indicates whether an encoded value is available for a string.
- [decodingFailurePolicy](nscoder/decodingfailurepolicy-swift.property.md): The action the coder should take when decoding fails.
- [NSDecodingFailurePolicy](nscoder/decodingfailurepolicy-swift.enum.md): Policies describing the action the coder should take when encountering decode failures.

### Encoding General Data

- [encodeArrayOfObjCType:count:at:](nscoder/encodearray%28ofobjctype_count_at_%29.md): Encodes an array of the given Objective-C type, provided the number of items and a pointer.
- [encodeBool:forKey:](nscoder/encode%28__forkey_%29-7o6mu.md): Encodes a Boolean value and associates it with the string `key`.
- [encodeBycopyObject:](nscoder/encodebycopyobject%28__%29.md): An encoding method for subclasses to override such that it creates a copy, rather than a proxy, when decoded.
- [encodeByrefObject:](nscoder/encodebyrefobject%28__%29.md): An encoding method for subclasses to override such that it creates a proxy, rather than a copy, when decoded.
- [encodeBytes:length:](nscoder/encodebytes%28__length_%29.md): Encodes a buffer of data of an unspecified type.
- [encodeBytes:length:forKey:](nscoder/encodebytes%28__length_forkey_%29.md): Encodes a buffer of data, given its length and a pointer, and associates it with a string key.
- [encodeConditionalObject:](nscoder/encodeconditionalobject%28__%29.md): An encoding method for subclasses to override to conditionally encode an object, preserving common references to it.
- [encodeConditionalObject:forKey:](nscoder/encodeconditionalobject%28__forkey_%29.md): An encoding method for subclasses to override to conditionally encode an object, preserving common references to it, only if it has been unconditionally encoded.
- [encodeDataObject:](nscoder/encode%28__%29-1qd1e.md): Encodes a given data object.
- [encodeDouble:forKey:](nscoder/encode%28__forkey_%29-9xiiu.md): Encodes a double-precision floating point value and associates it with the string key.
- [encodeFloat:forKey:](nscoder/encode%28__forkey_%29-84cez.md): Encodes a floating point value and associates it with the string key.
- [encodeInt:forKey:](nscoder/encodecint%28__forkey_%29.md): Encodes a C integer value and associates it with the string key.
- [encodeInteger:forKey:](nscoder/encode%28__forkey_%29-2dprz.md): Encodes an integer value and associates it with the string key.
- [encodeInt32:forKey:](nscoder/encode%28__forkey_%29-5sk4z.md): Encodes a 32-bit integer value and associates it with the string key.
- [encodeInt64:forKey:](nscoder/encode%28__forkey_%29-dixg.md): Encodes a 64-bit integer value and associates it with the string key.
- [encodeNXObject:](nscoder/encodenxobject_.md): Deprecated. Encodes an old-style object onto the coder.
- [encodeObject:](nscoder/encode%28__%29-9648d.md): Encodes an object.
- [encodeObject:forKey:](nscoder/encode%28__forkey_%29-1mlmu.md): Encodes an object and associates it with the string key.
- [encodePoint:](nscoder/encode%28__%29-75jv4.md): Encodes a point.
- [encodePoint:forKey:](nscoder/encode%28__forkey_%29-27lif.md): Encodes a point and associates it with the string key.
- [encodePropertyList:](nscoder/encodepropertylist%28__%29.md): Encodes a property list.
- [encodeRect:](nscoder/encode%28__%29-3c1wz.md): Encodes a rectangle structure.
- [encodeRect:forKey:](nscoder/encode%28__forkey_%29-2knxx.md): Encodes a rectangle structure and associates it with the string key.
- [encodeRootObject:](nscoder/encoderootobject%28__%29.md): An encoding method for subclasses to override to encode an interconnected group of objects, starting with the provided root object.
- [encodeSize:](nscoder/encode%28__%29-82i7c.md): Encodes a size structure.
- [encodeSize:forKey:](nscoder/encode%28__forkey_%29-9imtu.md): Encodes a size structure and associates it with the given string key.
- [encodeValueOfObjCType:at:](nscoder/encodevalue%28ofobjctype_at_%29.md): Encodes a value of the given type at the given address.
- [encodeValuesOfObjCTypes:](nscoder/encodevaluesofobjctypes_.md): Encodes a series of values of potentially differing Objective-C types.

### Encoding Geometry-Based Data

- [encodeCGAffineTransform:forKey:](nscoder/encode%28__forkey_%29-29jyx.md): Encodes an affine transform and associates it with the specified key in the receiver’s archive.
- [encodeCGPoint:forKey:](nscoder/encode%28__forkey_%29-7z9kc.md): Encodes a point and associates it with the specified key in the receiver’s archive.
- [encodeCGRect:forKey:](nscoder/encode%28__forkey_%29-10qhm.md): Encodes a rectangle and associates it with the specified key in the receiver’s archive.
- [encodeCGSize:forKey:](nscoder/encode%28__forkey_%29-6wq3n.md): Encodes size information and associates it with the specified key in the coder’s archive.
- [encodeCGVector:forKey:](nscoder/encode%28__forkey_%29-26fxa.md): Encodes vector data and associates it with the specified key in the coder’s archive.
- [encodeDirectionalEdgeInsets:forKey:](nscoder/encode%28__forkey_%29-7oo2n.md): Encodes directional edge inset data and associates it with the specified key in the coder’s archive.
- [encodeUIEdgeInsets:forKey:](nscoder/encode%28__forkey_%29-44zsc.md): Encodes edge inset data and associates it with the specified key in the coder’s archive.
- [encodeUIOffset:forKey:](nscoder/encode%28__forkey_%29-9d1qy.md): Encodes offset data and associates it with the specified key in the coder’s archive.

### Encoding Core Media Time Structures

- [encodeCMTime:forKey:](nscoder/encode%28__forkey_%29-6wbby.md): Encodes a given Core Media time structure and associates it with a specified key.
- [encodeCMTimeRange:forKey:](nscoder/encode%28__forkey_%29-46lo8.md): Encodes a given Core Media time range structure and associates it with a specified key.
- [encodeCMTimeMapping:forKey:](nscoder/encode%28__forkey_%29-8tefb.md): Encodes a given Core Media time mapping structure and associates it with a specified key.

### Secure Coding

- [requiresSecureCoding](nscoder/requiressecurecoding.md): Indicates whether the archiver requires all archived classes to resist object substitution attacks.
- [allowedClasses](nscoder/allowedclasses.md): The set of coded classes allowed for secure coding.

### Decoding Top-Level Objects

- [decodeTopLevelObjectOfClass:forKey:error:](nscoder/decodetoplevelobjectofclass_forkey_error_.md): Decode an object as an expected type, failing if the archived type does not match.
- [decodeTopLevelObjectOfClasses:forKey:error:](nscoder/decodetoplevelobjectofclasses_forkey_error_.md): Decode an object as one of several expected types, failing if the archived type does not match.
- [decodeTopLevelObjectAndReturnError:](nscoder/decodetoplevelobjectandreturnerror_.md): Decodes a previously-encoded object, populating an error if decoding fails.
- [decodeTopLevelObjectForKey:error:](nscoder/decodetoplevelobjectforkey_error_.md): Decodes the previously-encoded object associated by a key, populating an error if decoding fails.

### Decoding General Data

- [decodeArrayOfObjCType:count:at:](nscoder/decodearray%28ofobjctype_count_at_%29.md): Decodes an array of `count` items, whose Objective-C type is given by `itemType`.
- [decodeBoolForKey:](nscoder/decodebool%28forkey_%29.md): Decodes and returns a boolean value that was previously encoded with [encodeBool:forKey:](nscoder/encode%28__forkey_%29-7o6mu.md) and associated with the string `key`.
- [decodeBytesForKey:returnedLength:](nscoder/decodebytes%28forkey_returnedlength_%29.md): Decodes a buffer of data that was previously encoded with [encodeBytes:length:forKey:](nscoder/encodebytes%28__length_forkey_%29.md) and associated with the string `key`.
- [decodeBytesWithReturnedLength:](nscoder/decodebytes%28withreturnedlength_%29.md): Decodes a buffer of data whose types are unspecified.
- [decodeDataObject](nscoder/decodedata%28%29.md): Decodes and returns an `NSData` object that was previously encoded with [encodeDataObject:](nscoder/encode%28__%29-1qd1e.md). Subclasses must override this method.
- [decodeDoubleForKey:](nscoder/decodedouble%28forkey_%29.md): Decodes and returns a double value that was previously encoded with either [encodeFloat:forKey:](nscoder/encode%28__forkey_%29-84cez.md) or [encodeDouble:forKey:](nscoder/encode%28__forkey_%29-9xiiu.md) and associated with the string `key`.
- [decodeFloatForKey:](nscoder/decodefloat%28forkey_%29.md): Decodes and returns a float value that was previously encoded with [encodeFloat:forKey:](nscoder/encode%28__forkey_%29-84cez.md) or [encodeDouble:forKey:](nscoder/encode%28__forkey_%29-9xiiu.md) and associated with the string `key`.
- [decodeIntForKey:](nscoder/decodecint%28forkey_%29.md): Decodes and returns an int value that was previously encoded with [encodeInt:forKey:](nscoder/encodecint%28__forkey_%29.md), [encodeInteger:forKey:](nscoder/encode%28__forkey_%29-2dprz.md), [encodeInt32:forKey:](nscoder/encode%28__forkey_%29-5sk4z.md), or [encodeInt64:forKey:](nscoder/encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeIntegerForKey:](nscoder/decodeinteger%28forkey_%29.md): Decodes and returns an NSInteger value that was previously encoded with [encodeInt:forKey:](nscoder/encodecint%28__forkey_%29.md), [encodeInteger:forKey:](nscoder/encode%28__forkey_%29-2dprz.md), [encodeInt32:forKey:](nscoder/encode%28__forkey_%29-5sk4z.md), or [encodeInt64:forKey:](nscoder/encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeInt32ForKey:](nscoder/decodeint32%28forkey_%29.md): Decodes and returns a 32-bit integer value that was previously encoded with [encodeInt:forKey:](nscoder/encodecint%28__forkey_%29.md), [encodeInteger:forKey:](nscoder/encode%28__forkey_%29-2dprz.md), [encodeInt32:forKey:](nscoder/encode%28__forkey_%29-5sk4z.md), or [encodeInt64:forKey:](nscoder/encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeInt64ForKey:](nscoder/decodeint64%28forkey_%29.md): Decodes and returns a 64-bit integer value that was previously encoded with [encodeInt:forKey:](nscoder/encodecint%28__forkey_%29.md), [encodeInteger:forKey:](nscoder/encode%28__forkey_%29-2dprz.md), [encodeInt32:forKey:](nscoder/encode%28__forkey_%29-5sk4z.md), or [encodeInt64:forKey:](nscoder/encode%28__forkey_%29-dixg.md) and associated with the string `key`.
- [decodeNXObject](nscoder/decodenxobject.md): Deprecated. Decodes an object previously written with [encodeNXObject:](nscoder/encodenxobject_.md).
- [decodeObject](nscoder/decodeobject%28%29.md): Decodes and returns an object that was previously encoded with any of the `encode…Object` methods.
- [decodeObjectForKey:](nscoder/decodeobject%28forkey_%29.md): Decodes and returns a previously-encoded object that was previously encoded with [encodeObject:forKey:](nscoder/encode%28__forkey_%29-1mlmu.md) or [encodeConditionalObject:forKey:](nscoder/encodeconditionalobject%28__forkey_%29.md) and associated with the string `key`.
- [decodePoint](nscoder/decodepoint%28%29.md): Decodes and returns an NSPoint structure that was previously encoded with [encodePoint:](nscoder/encode%28__%29-75jv4.md).
- [decodePointForKey:](nscoder/decodepoint%28forkey_%29.md): Decodes and returns an NSPoint structure that was previously encoded with [encodePoint:forKey:](nscoder/encode%28__forkey_%29-27lif.md).
- [decodePropertyList](nscoder/decodepropertylist%28%29.md): Decodes a property list that was previously encoded with [encodePropertyList:](nscoder/encodepropertylist%28__%29.md).
- [decodeRect](nscoder/decoderect%28%29.md): Decodes and returns an NSRect structure that was previously encoded with [encodeRect:](nscoder/encode%28__%29-3c1wz.md).
- [decodeRectForKey:](nscoder/decoderect%28forkey_%29.md): Decodes and returns an NSRect structure that was previously encoded with [encodeRect:forKey:](nscoder/encode%28__forkey_%29-2knxx.md).
- [decodeSize](nscoder/decodesize%28%29.md): Decodes and returns an NSSize structure that was previously encoded with [encodeSize:](nscoder/encode%28__%29-82i7c.md).
- [decodeSizeForKey:](nscoder/decodesize%28forkey_%29.md): Decodes and returns an NSSize structure that was previously encoded with [encodeSize:forKey:](nscoder/encode%28__forkey_%29-9imtu.md).
- [decodeValueOfObjCType:at:](nscoder/decodevalue%28ofobjctype_at_%29.md): Deprecated. Decodes a single value, whose Objective-C type is given by `valueType`.
- [decodeValueOfObjCType:at:size:](nscoder/decodevalue%28ofobjctype_at_size_%29.md): Decodes a single value of a known type from the specified data buffer.
- [decodeValuesOfObjCTypes:](nscoder/decodevaluesofobjctypes_.md): Decodes a series of potentially different Objective-C types.
- [decodeObjectOfClass:forKey:](nscoder/decodeobjectofclass_forkey_.md): Decodes an object for the key, restricted to the specified class.
- [decodeObjectOfClasses:forKey:](nscoder/decodeobjectofclasses_forkey_.md): Decodes an object for the key, restricted to the specified classes.
- [decodePropertyListForKey:](nscoder/decodepropertylist%28forkey_%29.md): Returns a decoded property list for the specified key.

### Decoding Color Struct Data

- [decodeNXColor](nscoder/decodenxcolor.md): Deprecated. Decodes a color structure from NEXTSTEP Release 3 or earlier.

### Decoding Geometry-Based Data

- [decodeCGAffineTransformForKey:](nscoder/decodecgaffinetransform%28forkey_%29.md): Decodes and returns the Core Graphics affine transform structure associated with the specified key in the coder’s archive.
- [decodeCGPointForKey:](nscoder/decodecgpoint%28forkey_%29.md): Decodes and returns the Core Graphics point structure associated with the specified key in the coder’s archive.
- [decodeCGRectForKey:](nscoder/decodecgrect%28forkey_%29.md): Decodes and returns the Core Graphics rectangle structure associated with the specified key in the coder’s archive.
- [decodeCGSizeForKey:](nscoder/decodecgsize%28forkey_%29.md): Decodes and returns the Core Graphics size structure associated with the specified key in the coder’s archive.
- [decodeCGVectorForKey:](nscoder/decodecgvector%28forkey_%29.md): Decodes and returns the Core Graphics vector data associated with the specified key in the coder’s archive.
- [decodeDirectionalEdgeInsetsForKey:](nscoder/decodedirectionaledgeinsets%28forkey_%29.md): Decodes and returns the UIKit directional edge insets structure associated with the specified key in the coder’s archive.
- [decodeUIEdgeInsetsForKey:](nscoder/decodeuiedgeinsets%28forkey_%29.md): Decodes and returns the UIKit edge insets structure associated with the specified key in the coder’s archive.
- [decodeUIOffsetForKey:](nscoder/decodeuioffset%28forkey_%29.md): Decodes and returns the UIKit offset structure associated with the specified key in the coder’s archive.

### Decoding Core Media Time Structures

- [decodeCMTimeForKey:](nscoder/decodetime%28forkey_%29.md): Returns the Core Media time structure associated with a given key.
- [decodeCMTimeRangeForKey:](nscoder/decodetimerange%28forkey_%29.md): Returns the Core Media time range structure associated with a given key.
- [decodeCMTimeMappingForKey:](nscoder/decodetimemapping%28forkey_%29.md): Returns the Core Media time mapping structure associated with a given key.

### Managing Decode Errors

- [failWithError:](nscoder/failwitherror%28__%29.md): Signals to this coder that the decode operation has failed.
- [error](nscoder/error.md): An error in the top-level encode.

### Getting Version Information

- [systemVersion](nscoder/systemversion.md): The system version in effect for the archive.
- [versionForClassName:](nscoder/version%28forclassname_%29.md): This method is present for historical reasons and is not used with keyed archivers.

### Managing Zones

- [objectZone](nscoder/objectzone.md): This method is present for historical reasons and has no effect.
- [setObjectZone:](nscoder/setobjectzone_.md): This method is present for historical reasons and has no effect.

### Representing Geometric Types as Strings

Convenience methods for creating encodable and decodable types in Objective-C.

- [CGAffineTransformFromString](../uikit/cgaffinetransformfromstring.md): Returns a Core Graphics affine transform structure corresponding to the data in a given string.
- [CGPointFromString](../uikit/cgpointfromstring.md): Returns a Core Graphics point structure corresponding to the data in a given string.
- [CGRectFromString](../uikit/cgrectfromstring.md): Returns a Core Graphics rectangle structure corresponding to the data in a given string.
- [CGSizeFromString](../uikit/cgsizefromstring.md): Returns a Core Graphics size structure corresponding to the data in a given string.
- [CGVectorFromString](../uikit/cgvectorfromstring.md): Returns a Core Graphics vector corresponding to the data in a given string.
- [NSDirectionalEdgeInsetsFromString](../uikit/nsdirectionaledgeinsetsfromstring.md): Returns a directional edge insets structure based on data in the specified string.
- [UIEdgeInsetsFromString](../uikit/uiedgeinsetsfromstring.md): Returns a UIKit edge insets structure based on the data in the specified string.
- [UIOffsetFromString](../uikit/uioffsetfromstring.md): Returns a UIKit offset structure corresponding to the data in a given string.
- [NSStringFromCGRect](../uikit/nsstringfromcgrect.md): Returns a string formatted to contain the data from a rectangle.
- [NSStringFromCGVector](../uikit/nsstringfromcgvector.md): Returns a string formatted to contain the data from a vector data structure.
- [NSStringFromCGAffineTransform](../uikit/nsstringfromcgaffinetransform.md): Returns a string formatted to contain the data from an affine transform.
- [NSStringFromCGPoint](../uikit/nsstringfromcgpoint.md): Returns a string formatted to contain the data from a point.
- [NSStringFromCGSize](../uikit/nsstringfromcgsize.md): Returns a string formatted to contain the data from a size data structure.
- [NSStringFromDirectionalEdgeInsets](../uikit/nsstringfromdirectionaledgeinsets.md): Returns a string formatted to contain the data from a directional edge insets structure.
- [NSStringFromUIEdgeInsets](../uikit/nsstringfromuiedgeinsets.md): Returns a string formatted to contain the data from an edge insets structure.
- [NSStringFromCGPoint](../uikit/nsstringfromcgpoint.md): Returns a string formatted to contain the data from a point.
- [NSStringFromUIOffset](../uikit/nsstringfromuioffset.md): Returns a string formatted to contain the data from an offset structure.

### Error Codes

- [NSCoderErrorMaximum](nscodererrormaximum-c.enum.case.md): The end of the range of error codes reserved for coder errors.
- [NSCoderErrorMinimum](nscodererrorminimum-c.enum.case.md): The start of the range of error codes reserved for coder errors.
- [NSCoderReadCorruptError](nscoderreadcorrupterror-c.enum.case.md): Decoding failed due to corrupt data.
- [NSCoderValueNotFoundError](nscodervaluenotfounderror-c.enum.case.md): The requested data wasn’t found.

### Instance Methods

- [decodeArrayOfObjectsOfClass:forKey:](nscoder/decodearrayofobjectsofclass_forkey_.md): Decodes the \\c NSArray object for the given \\c key, which should be an \\c NSArray, containing the given non-collection class (no nested arrays or arrays of dictionaries, etc) from the coder.
- [decodeArrayOfObjectsOfClasses:forKey:](nscoder/decodearrayofobjectsofclasses_forkey_.md): Decodes the \\c NSArray object for the given \\c key, which should be an \\c NSArray, containing the given non-collection classes (no nested arrays or arrays of dictionaries, etc) from the coder.
- [decodeBytesForKey:minimumLength:](nscoder/decodebytes%28forkey_minimumlength_%29.md): Decode bytes from the decoder for a given key. The length of the bytes must be greater than or equal to the `length` parameter. If the result exists, but is of insufficient length, then the decoder uses `failWithError` to fail the entire decode operation. The result of that is configurable on a per-NSCoder basis using `NSDecodingFailurePolicy`.
- [decodeBytesWithMinimumLength:](nscoder/decodebytes%28withminimumlength_%29.md): Decode bytes from the decoder. The length of the bytes must be greater than or equal to the `length` parameter. If the result exists, but is of insufficient length, then the decoder uses `failWithError` to fail the entire decode operation. The result of that is configurable on a per-NSCoder basis using `NSDecodingFailurePolicy`.
- [decodeDictionaryWithKeysOfClass:objectsOfClass:forKey:](nscoder/decodedictionarywithkeysofclass_objectsofclass_forkey_.md): Decodes the \\c NSDictionary object for the given \\c key, which should be an \\c NSDictionary\<keyCls,objectCls\> , with keys of type given in \\c keyCls and objects of the given non-collection class \\c objectCls (no nested dictionaries or other dictionaries contained in the dictionary, etc) from the coder.
- [decodeDictionaryWithKeysOfClasses:objectsOfClasses:forKey:](nscoder/decodedictionarywithkeysofclasses_objectsofclasses_forkey_.md): Decodes the \\c NSDictionary object for the given \\c key, which should be an \\c NSDictionary, with keys of the types given in \\c keyClasses and objects of the given non-collection classes in \\c objectClasses (no nested dictionaries or other dictionaries contained in the dictionary, etc) from the given coder.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSArchiver](nsarchiver.md)
- [NSKeyedArchiver](nskeyedarchiver.md)
- [NSKeyedUnarchiver](nskeyedunarchiver.md)
- [NSPortCoder](nsportcoder.md)
- [NSUnarchiver](nsunarchiver.md)
- [NSXPCCoder](nsxpccoder.md)

## See Also

### Keyed Archivers

- [NSKeyedArchiver](nskeyedarchiver.md): An encoder that stores an object’s data to an archive referenced by keys.
- [NSKeyedArchiverDelegate](nskeyedarchiverdelegate.md): The optional methods implemented by the delegate of a keyed archiver.
- [NSKeyedUnarchiver](nskeyedunarchiver.md): A decoder that restores data from an archive referenced by keys.
- [NSKeyedUnarchiverDelegate](nskeyedunarchiverdelegate.md): The optional methods implemented by the delegate of a keyed unarchiver.
- [NSSecureUnarchiveFromDataTransformer](nssecureunarchivefromdatatransformer.md): A value transformer that converts data to and from classes that support secure coding.
