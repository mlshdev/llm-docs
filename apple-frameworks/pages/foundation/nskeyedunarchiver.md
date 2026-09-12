> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiver](https://developer.apple.com/documentation/foundation/nskeyedunarchiver)

# NSKeyedUnarchiver (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A decoder that restores data from an archive referenced by keys.

## Declaration

```swift
class NSKeyedUnarchiver
```

<a id="overview"></a>

## Overview

[NSKeyedUnarchiver](nskeyedunarchiver.md) is a concrete subclass of [NSCoder](nscoder.md) that defines methods for decoding a set of named objects (and scalar values) from a keyed archive. The [NSKeyedArchiver](nskeyedarchiver.md) class produces archives that this class can decode.

The archiver creates keyed archive as a hierarchy of objects. The archiver treats each object as a namespace into which it can encode other objects. This means that an unarchiver can only decode objects encoded within the immediate scope of their parent object. Objects encoded elsewhere in the hierarchy — whether higher than, lower than, or parallel to this particular object — aren’t accessible. In this way, the keys used by a particular object to encode its instance variables need to be unique only within the scope of that object.

If you invoke one of the `decode`-prefixed methods of this class using a key that does not exist in the archive, the return value indicates failure. This value varies by decoded type. For example, if a key does not exist in an archive, [decodeBool(forKey:)](nskeyedunarchiver/decodebool%28forkey_%29.md) returns [false](https://developer.apple.com/documentation/swift/false), [decodeIntForKey:](nskeyedunarchiver/decodeintforkey_.md) returns `0`, and [decodeObject(forKey:)](nskeyedunarchiver/decodeobject%28forkey_%29.md) returns `nil`.

[NSKeyedUnarchiver](nskeyedunarchiver.md) supports limited type coercion for numeric types. You can use any of the integer decode methods to decode a value encoded as any type of integer, whether a standard `Int` or an explicit 32-bit or 64-bit integer. Likewise, you can use the `Float`\- or `Double`-returning decode methods to handle value encoded as a `Float` or `Double`. If an encoded value is too large to fit within the coerced type, the decoding method throws a [rangeException](nsexceptionname/rangeexception.md). Further, when trying to coerce a value to an incompatible type — for example decoding an `Int` as a `Float` — the decoding method throws an [invalidUnarchiveOperationException](nsexceptionname/invalidunarchiveoperationexception.md).

## Topics

### Creating a Keyed Unarchiver

- [init(forReadingFrom:)](nskeyedunarchiver/init%28forreadingfrom_%29.md): Initializes an archiver to decode data from the specified location.
- [init()](nskeyedunarchiver/init%28%29.md): Deprecated. Initializes an archiver to decode data.
- [init(forReadingWith:)](nskeyedunarchiver/init%28forreadingwith_%29.md): Deprecated. Initializes an archiver to decode data from the specified location.

### Unarchiving Data

- [unarchiveTopLevelObjectWithData(\_:)](nskeyedunarchiver/unarchivetoplevelobjectwithdata%28__%29.md): Deprecated. Decodes a previously-archived object graph, and returns the root object.
- [unarchivedObject(ofClass:from:)](nskeyedunarchiver/unarchivedobject%28ofclass_from_%29.md): Decodes a previously-archived object graph, and returns the root object as the specified type.
- [unarchivedObject(ofClasses:from:)](nskeyedunarchiver/unarchivedobject%28ofclasses_from_%29-b9t5.md): Decodes a previously-archived object graph, returning the root object as one of the specified classes.
- [unarchivedObject(ofClasses:from:)](nskeyedunarchiver/unarchivedobject%28ofclasses_from_%29-3h32t.md): Decodes a previously-archived object graph, returning the root object as one of the specified classes.
- [requiresSecureCoding](nskeyedunarchiver/requiressecurecoding.md): Indicates whether the receiver requires all unarchived classes to conform to [NSSecureCoding](nssecurecoding.md).
- [unarchiveObject(with:)](nskeyedunarchiver/unarchiveobject%28with_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` and stored in a given `NSData` object.
- [unarchiveObject(withFile:)](nskeyedunarchiver/unarchiveobject%28withfile_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` written to the file at a given path.

### Decoding Data

- [containsValue(forKey:)](nskeyedunarchiver/containsvalue%28forkey_%29.md): Returns a Boolean value that indicates whether the archive contains a value for a given key within the current decoding scope.
- [decodeDecodable(\_:forKey:)](nskeyedunarchiver/decodedecodable%28__forkey_%29.md): Decodes a decodable value associated with a given key.
- [decodeTopLevelDecodable(\_:forKey:)](nskeyedunarchiver/decodetopleveldecodable%28__forkey_%29.md): Decodes a top-level decodable value associated with a given key.
- [decodeBool(forKey:)](nskeyedunarchiver/decodebool%28forkey_%29.md): Decodes a Boolean value associated with a given key.
- [decodeBytes(forKey:returnedLength:)](nskeyedunarchiver/decodebytes%28forkey_returnedlength_%29.md): Decodes a stream of bytes associated with a given key.
- [decodeDouble(forKey:)](nskeyedunarchiver/decodedouble%28forkey_%29.md): Decodes a double-precision floating-point value associated with a given key.
- [decodeFloat(forKey:)](nskeyedunarchiver/decodefloat%28forkey_%29.md): Decodes a single-precision floating-point value associated with a given key.
- [decodeInt32(forKey:)](nskeyedunarchiver/decodeint32%28forkey_%29.md): Decodes a 32-bit integer value associated with a given key.
- [decodeInt64(forKey:)](nskeyedunarchiver/decodeint64%28forkey_%29.md): Decodes a 64-bit integer value associated with a given key.
- [decodeObject(forKey:)](nskeyedunarchiver/decodeobject%28forkey_%29.md): Decodes and returns an object associated with a given key.
- [finishDecoding()](nskeyedunarchiver/finishdecoding%28%29.md): Tells the receiver that you are finished decoding objects.
- [decodingFailurePolicy](nskeyedunarchiver/decodingfailurepolicy.md): The action to take when this unarchiver fails to decode an entry.

### Managing the Delegate

- [delegate](nskeyedunarchiver/delegate.md): The receiver’s delegate.

### Managing Class Names

- [setClass(\_:forClassName:)](nskeyedunarchiver/setclass%28__forclassname_%29-swift.type.method.md): Sets a global translation mapping to decode objects encoded with a given class name as instances of a given class instead.
- [class(forClassName:)](nskeyedunarchiver/class%28forclassname_%29-swift.type.method.md): Returns the class from which this unarchiver instantiates an encoded object with a given class name.
- [setClass(\_:forClassName:)](nskeyedunarchiver/setclass%28__forclassname_%29-swift.method.md): Sets a translation mapping on this unarchiver to decode objects encoded with a given class name as instances of a given class instead.
- [class(forClassName:)](nskeyedunarchiver/class%28forclassname_%29-swift.method.md): Returns the class from which this unarchiver instantiates an encoded object with a given class name.

### Constants

- [Keyed Unarchiving Exception Names](keyed-unarchiving-exception-names.md): Names of exceptions that are raised by `NSKeyedUnarchiver` if there is a problem extracting an archive.

### Initializers

- [init(forReadingFromData:)](nskeyedunarchiver/init%28forreadingfromdata_%29.md)
- [init(forReadingWithData:)](nskeyedunarchiver/init%28forreadingwithdata_%29.md): Deprecated.

### Type Methods

- [unarchivedArrayOfObjects(ofClass:from:)](nskeyedunarchiver/unarchivedarrayofobjects%28ofclass_from_%29.md)
- [unarchivedArrayOfObjects(ofClasses:from:)](nskeyedunarchiver/unarchivedarrayofobjects%28ofclasses_from_%29.md)
- [unarchivedDictionary(keysOfClasses:objectsOfClasses:from:)](nskeyedunarchiver/unarchiveddictionary%28keysofclasses_objectsofclasses_from_%29.md)
- [unarchivedDictionary(ofKeyClass:objectClass:from:)](nskeyedunarchiver/unarchiveddictionary%28ofkeyclass_objectclass_from_%29.md)

## Relationships

### Inherits From

- [NSCoder](nscoder.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Keyed Archivers

- [NSKeyedArchiver](nskeyedarchiver.md): An encoder that stores an object’s data to an archive referenced by keys.
- [NSKeyedArchiverDelegate](nskeyedarchiverdelegate.md): The optional methods implemented by the delegate of a keyed archiver.
- [NSKeyedUnarchiverDelegate](nskeyedunarchiverdelegate.md): The optional methods implemented by the delegate of a keyed unarchiver.
- [NSCoder](nscoder.md): An abstract class that serves as the basis for objects that enable archiving and distribution of other objects.
- [NSSecureUnarchiveFromDataTransformer](nssecureunarchivefromdatatransformer.md): A value transformer that converts data to and from classes that support secure coding.

# NSKeyedUnarchiver (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A decoder that restores data from an archive referenced by keys.

## Declaration

```objectivec
@interface NSKeyedUnarchiver : NSCoder
```

<a id="overview"></a>

## Overview

[NSKeyedUnarchiver](nskeyedunarchiver.md) is a concrete subclass of [NSCoder](nscoder.md) that defines methods for decoding a set of named objects (and scalar values) from a keyed archive. The [NSKeyedArchiver](nskeyedarchiver.md) class produces archives that this class can decode.

The archiver creates keyed archive as a hierarchy of objects. The archiver treats each object as a namespace into which it can encode other objects. This means that an unarchiver can only decode objects encoded within the immediate scope of their parent object. Objects encoded elsewhere in the hierarchy — whether higher than, lower than, or parallel to this particular object — aren’t accessible. In this way, the keys used by a particular object to encode its instance variables need to be unique only within the scope of that object.

If you invoke one of the `decode`-prefixed methods of this class using a key that does not exist in the archive, the return value indicates failure. This value varies by decoded type. For example, if a key does not exist in an archive, [decodeBoolForKey:](nskeyedunarchiver/decodebool%28forkey_%29.md) returns [false](https://developer.apple.com/documentation/swift/false), [decodeIntForKey:](nskeyedunarchiver/decodeintforkey_.md) returns `0`, and [decodeObjectForKey:](nskeyedunarchiver/decodeobject%28forkey_%29.md) returns `nil`.

[NSKeyedUnarchiver](nskeyedunarchiver.md) supports limited type coercion for numeric types. You can use any of the integer decode methods to decode a value encoded as any type of integer, whether a standard `Int` or an explicit 32-bit or 64-bit integer. Likewise, you can use the `Float`\- or `Double`-returning decode methods to handle value encoded as a `Float` or `Double`. If an encoded value is too large to fit within the coerced type, the decoding method throws a [NSRangeException](nsexceptionname/rangeexception.md). Further, when trying to coerce a value to an incompatible type — for example decoding an `Int` as a `Float` — the decoding method throws an [NSInvalidUnarchiveOperationException](nsexceptionname/invalidunarchiveoperationexception.md).

## Topics

### Creating a Keyed Unarchiver

- [initForReadingFromData:error:](nskeyedunarchiver/init%28forreadingfrom_%29.md): Initializes an archiver to decode data from the specified location.
- [init](nskeyedunarchiver/init%28%29.md): Deprecated. Initializes an archiver to decode data.
- [initForReadingWithData:](nskeyedunarchiver/init%28forreadingwith_%29.md): Deprecated. Initializes an archiver to decode data from the specified location.

### Unarchiving Data

- [unarchivedObjectOfClass:fromData:error:](nskeyedunarchiver/unarchivedobjectofclass_fromdata_error_.md): Decodes a previously-archived object graph, that returns the root object as the specified type.
- [unarchivedObjectOfClasses:fromData:error:](nskeyedunarchiver/unarchivedobject%28ofclasses_from_%29-b9t5.md): Decodes a previously-archived object graph, returning the root object as one of the specified classes.
- [requiresSecureCoding](nskeyedunarchiver/requiressecurecoding.md): Indicates whether the receiver requires all unarchived classes to conform to [NSSecureCoding](nssecurecoding.md).
- [unarchiveObjectWithData:](nskeyedunarchiver/unarchiveobject%28with_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` and stored in a given `NSData` object.
- [unarchiveTopLevelObjectWithData:error:](nskeyedunarchiver/unarchivetoplevelobjectwithdata_error_.md): Deprecated. Decodes a previously-archived object graph, returning the root object.
- [unarchiveObjectWithFile:](nskeyedunarchiver/unarchiveobject%28withfile_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` written to the file at a given path.

### Decoding Data

- [containsValueForKey:](nskeyedunarchiver/containsvalue%28forkey_%29.md): Returns a Boolean value that indicates whether the archive contains a value for a given key within the current decoding scope.
- [decodeBoolForKey:](nskeyedunarchiver/decodebool%28forkey_%29.md): Decodes a Boolean value associated with a given key.
- [decodeBytesForKey:returnedLength:](nskeyedunarchiver/decodebytes%28forkey_returnedlength_%29.md): Decodes a stream of bytes associated with a given key.
- [decodeDoubleForKey:](nskeyedunarchiver/decodedouble%28forkey_%29.md): Decodes a double-precision floating-point value associated with a given key.
- [decodeFloatForKey:](nskeyedunarchiver/decodefloat%28forkey_%29.md): Decodes a single-precision floating-point value associated with a given key.
- [decodeIntForKey:](nskeyedunarchiver/decodeintforkey_.md): Decodes an integer value associated with a given key.
- [decodeInt32ForKey:](nskeyedunarchiver/decodeint32%28forkey_%29.md): Decodes a 32-bit integer value associated with a given key.
- [decodeInt64ForKey:](nskeyedunarchiver/decodeint64%28forkey_%29.md): Decodes a 64-bit integer value associated with a given key.
- [decodeObjectForKey:](nskeyedunarchiver/decodeobject%28forkey_%29.md): Decodes and returns an object associated with a given key.
- [finishDecoding](nskeyedunarchiver/finishdecoding%28%29.md): Tells the receiver that you are finished decoding objects.
- [decodingFailurePolicy](nskeyedunarchiver/decodingfailurepolicy.md): The action to take when this unarchiver fails to decode an entry.

### Managing the Delegate

- [delegate](nskeyedunarchiver/delegate.md): The receiver’s delegate.

### Managing Class Names

- [setClass:forClassName:](nskeyedunarchiver/setclass%28__forclassname_%29-swift.type.method.md): Sets a global translation mapping to decode objects encoded with a given class name as instances of a given class instead.
- [classForClassName:](nskeyedunarchiver/class%28forclassname_%29-swift.type.method.md): Returns the class from which this unarchiver instantiates an encoded object with a given class name.
- [setClass:forClassName:](nskeyedunarchiver/setclass%28__forclassname_%29-swift.method.md): Sets a translation mapping on this unarchiver to decode objects encoded with a given class name as instances of a given class instead.
- [classForClassName:](nskeyedunarchiver/class%28forclassname_%29-swift.method.md): Returns the class from which this unarchiver instantiates an encoded object with a given class name.

### Constants

- [Keyed Unarchiving Exception Names](keyed-unarchiving-exception-names.md): Names of exceptions that are raised by `NSKeyedUnarchiver` if there is a problem extracting an archive.

### Type Methods

- [unarchivedArrayOfObjectsOfClass:fromData:error:](nskeyedunarchiver/unarchivedarrayofobjectsofclass_fromdata_error_.md): Decodes the \\c NSArray root object from \\c data which should be an \\c NSArray containing the given non-collection class (no nested arrays or arrays of dictionaries, etc) from the given archive, previously encoded by \\c NSKeyedArchiver.
- [unarchivedArrayOfObjectsOfClasses:fromData:error:](nskeyedunarchiver/unarchivedarrayofobjectsofclasses_fromdata_error_.md): Decodes the \\c NSArray root object from \\c data which should be an \\c NSArray, containing the given non-collection classes in \\c classes (no nested arrays or arrays of dictionaries, etc) from the given archive, previously encoded by \\c NSKeyedArchiver.
- [unarchivedDictionaryWithKeysOfClass:objectsOfClass:fromData:error:](nskeyedunarchiver/unarchiveddictionarywithkeysofclass_objectsofclass_fromdata_error_.md): Decodes the \\c NSDictionary root object from \\c data which should be an \\c NSDictionary\<keyCls,objectCls\> with keys of type given in \\c keyCls and objects of the given non-collection class \\c objectCls (no nested dictionaries or other dictionaries contained in the dictionary, etc) from the given archive, previously encoded by \\c NSKeyedArchiver.
- [unarchivedDictionaryWithKeysOfClasses:objectsOfClasses:fromData:error:](nskeyedunarchiver/unarchiveddictionarywithkeysofclasses_objectsofclasses_fromdata_error_.md): Decodes the \\c NSDictionary root object from \\c data which should be an \\c NSDictionary, with keys of the types given in \\c keyClasses and objects of the given non-collection classes in \\c objectClasses (no nested dictionaries or other dictionaries contained in the dictionary, etc) from the given archive, previously encoded by \\c NSKeyedArchiver.

## Relationships

### Inherits From

- [NSCoder](nscoder.md)

## See Also

### Keyed Archivers

- [NSKeyedArchiver](nskeyedarchiver.md): An encoder that stores an object’s data to an archive referenced by keys.
- [NSKeyedArchiverDelegate](nskeyedarchiverdelegate.md): The optional methods implemented by the delegate of a keyed archiver.
- [NSKeyedUnarchiverDelegate](nskeyedunarchiverdelegate.md): The optional methods implemented by the delegate of a keyed unarchiver.
- [NSCoder](nscoder.md): An abstract class that serves as the basis for objects that enable archiving and distribution of other objects.
- [NSSecureUnarchiveFromDataTransformer](nssecureunarchivefromdatatransformer.md): A value transformer that converts data to and from classes that support secure coding.
