> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiver](https://developer.apple.com/documentation/foundation/nskeyedarchiver)

# NSKeyedArchiver (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An encoder that stores an object’s data to an archive referenced by keys.

## Declaration

```swift
class NSKeyedArchiver
```

<a id="overview"></a>

## Overview

[NSKeyedArchiver](nskeyedarchiver.md), a concrete subclass of [NSCoder](nscoder.md), provides a way to encode objects (and scalar values) into an architecture-independent format suitable for storage in a file. When you archive a set of objects, the archiver writes the class information and instance variables for each object to the archive. The companion class [NSKeyedUnarchiver](nskeyedunarchiver.md) decodes the data in an archive and creates a set of objects equivalent to the original set.

A keyed archive differs from a non-keyed archive in that all the objects and values encoded into the archive have names, or keys. When decoding a non-keyed archive, the decoder must decode values in the same order the original encoder used. When decoding a keyed archive, the decoder requests values by name, meaning it can decode values out of sequence or not at all. Keyed archives, therefore, provide better support for forward and backward compatibility.

The keys given to encoded values must be unique only within the scope of the currently-encoding object. A keyed archive is hierarchical, so the keys used by object A to encode its instance variables don’t conflict with the keys used by object B. This is true even if A and B are instances of the same class. Within a single object, however, the keys used by a subclass can conflict with keys used in its superclasses.

An [NSArchiver](nsarchiver.md) object can write the archive data to a file or to a mutable-data object (an instance of [NSMutableData](nsmutabledata.md)) that you provide.

## Topics

### Creating a Keyed Archiver

- [init(requiringSecureCoding:)](nskeyedarchiver/init%28requiringsecurecoding_%29.md): Creates an archiver to encode data, and optionally disables secure coding.
- [init()](nskeyedarchiver/init%28%29.md): Deprecated. Initializes an archiver to encode data.
- [init(forWritingWith:)](nskeyedarchiver/init%28forwritingwith_%29.md): Deprecated. Initializes an archiver to encode data into a given a mutable-data object.

### Archiving Data

- [archivedData(withRootObject:requiringSecureCoding:)](nskeyedarchiver/archiveddata%28withrootobject_requiringsecurecoding_%29.md): Encodes an object graph with the given root object into a data representation, optionally requiring secure coding.
- [finishEncoding()](nskeyedarchiver/finishencoding%28%29.md): Instructs the receiver to construct the final data stream.
- [encodedData](nskeyedarchiver/encodeddata.md): The encoded data for the archiver.
- [outputFormat](nskeyedarchiver/outputformat.md): The format in which the receiver encodes its data.
- [requiresSecureCoding](nskeyedarchiver/requiressecurecoding.md): Indicates whether the archiver requires all archived classes to resist object substitution attacks.
- [archivedData(withRootObject:)](nskeyedarchiver/archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object that contains the encoded form of the object graph formed by the given root object.
- [archiveRootObject(\_:toFile:)](nskeyedarchiver/archiverootobject%28__tofile_%29.md): Deprecated. Archives an object graph rooted at a given object to a file at a given path.

### Encoding Data and Objects

- [encodeEncodable(\_:forKey:)](nskeyedarchiver/encodeencodable%28__forkey_%29.md): Encodes a given value and associates it with a key.
- [encode(\_:forKey:)](nskeyedarchiver/encode%28__forkey_%29-9pxhm.md): Encodes a given Boolean value and associates it with a key.
- [encodeBytes(\_:length:forKey:)](nskeyedarchiver/encodebytes%28__length_forkey_%29.md): Encodes a given number of bytes from a given C array of bytes and associates them with a key.
- [encodeConditionalObject(\_:forKey:)](nskeyedarchiver/encodeconditionalobject%28__forkey_%29.md): Encodes a reference to a given object and associates it with a key only if it has been unconditionally encoded elsewhere in the archive.
- [encode(\_:forKey:)](nskeyedarchiver/encode%28__forkey_%29-1mkfl.md): Encodes a given `double` value and associates it with a key.
- [encode(\_:forKey:)](nskeyedarchiver/encode%28__forkey_%29-67rcs.md): Encodes a given `float` value and associates it with a key.
- [encode(\_:forKey:)](nskeyedarchiver/encode%28__forkey_%29-5i7tc.md): Encodes a given 32-bit integer value and associates it with a key.
- [encode(\_:forKey:)](nskeyedarchiver/encode%28__forkey_%29-ycdd.md): Encodes a given 64-bit integer value and associates it with a key.
- [encode(\_:forKey:)](nskeyedarchiver/encode%28__forkey_%29-9f4n9.md): Encodes a given object and associates it with a given key.

### Managing the Delegate

- [delegate](nskeyedarchiver/delegate.md): The archiver’s delegate.

### Managing Classes and Class Names

- [setClassName(\_:for:)](nskeyedarchiver/setclassname%28__for_%29-swift.type.method.md): Sets a global translation mapping to encode instances of a given class with the provided name, rather than their real name.
- [className(for:)](nskeyedarchiver/classname%28for_%29-swift.type.method.md): Returns the class name with which the archiver class encodes instances of a given class.
- [setClassName(\_:for:)](nskeyedarchiver/setclassname%28__for_%29-swift.method.md): Sets a mapping for this archiver to encode instances of a given class with the provided name, rather than their real name.
- [className(for:)](nskeyedarchiver/classname%28for_%29-swift.method.md): Returns the class name with which this archiver encodes instances of a given class.

### Constants

- [Keyed Archiving Exception Names](keyed-archiving-exception-names.md): Names of exceptions raised by this class if problems occur while creating an archive.
- [Keyed Archiver Root Object Key](keyed-archiver-root-object-key.md): Keys that the archiver uses in the hierarchy of encoded objects.

### Initializers

- [init(forWritingWithMutableData:)](nskeyedarchiver/init%28forwritingwithmutabledata_%29.md): Deprecated.

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

- [NSKeyedArchiverDelegate](nskeyedarchiverdelegate.md): The optional methods implemented by the delegate of a keyed archiver.
- [NSKeyedUnarchiver](nskeyedunarchiver.md): A decoder that restores data from an archive referenced by keys.
- [NSKeyedUnarchiverDelegate](nskeyedunarchiverdelegate.md): The optional methods implemented by the delegate of a keyed unarchiver.
- [NSCoder](nscoder.md): An abstract class that serves as the basis for objects that enable archiving and distribution of other objects.
- [NSSecureUnarchiveFromDataTransformer](nssecureunarchivefromdatatransformer.md): A value transformer that converts data to and from classes that support secure coding.

# NSKeyedArchiver (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An encoder that stores an object’s data to an archive referenced by keys.

## Declaration

```objectivec
@interface NSKeyedArchiver : NSCoder
```

<a id="overview"></a>

## Overview

[NSKeyedArchiver](nskeyedarchiver.md), a concrete subclass of [NSCoder](nscoder.md), provides a way to encode objects (and scalar values) into an architecture-independent format suitable for storage in a file. When you archive a set of objects, the archiver writes the class information and instance variables for each object to the archive. The companion class [NSKeyedUnarchiver](nskeyedunarchiver.md) decodes the data in an archive and creates a set of objects equivalent to the original set.

A keyed archive differs from a non-keyed archive in that all the objects and values encoded into the archive have names, or keys. When decoding a non-keyed archive, the decoder must decode values in the same order the original encoder used. When decoding a keyed archive, the decoder requests values by name, meaning it can decode values out of sequence or not at all. Keyed archives, therefore, provide better support for forward and backward compatibility.

The keys given to encoded values must be unique only within the scope of the currently-encoding object. A keyed archive is hierarchical, so the keys used by object A to encode its instance variables don’t conflict with the keys used by object B. This is true even if A and B are instances of the same class. Within a single object, however, the keys used by a subclass can conflict with keys used in its superclasses.

An [NSArchiver](nsarchiver.md) object can write the archive data to a file or to a mutable-data object (an instance of [NSMutableData](nsmutabledata.md)) that you provide.

## Topics

### Creating a Keyed Archiver

- [initRequiringSecureCoding:](nskeyedarchiver/init%28requiringsecurecoding_%29.md): Creates an archiver to encode data, and optionally disables secure coding.
- [init](nskeyedarchiver/init%28%29.md): Deprecated. Initializes an archiver to encode data.
- [initForWritingWithMutableData:](nskeyedarchiver/init%28forwritingwith_%29.md): Deprecated. Initializes an archiver to encode data into a given a mutable-data object.

### Archiving Data

- [archivedDataWithRootObject:requiringSecureCoding:error:](nskeyedarchiver/archiveddata%28withrootobject_requiringsecurecoding_%29.md): Encodes an object graph with the given root object into a data representation, optionally requiring secure coding.
- [finishEncoding](nskeyedarchiver/finishencoding%28%29.md): Instructs the receiver to construct the final data stream.
- [encodedData](nskeyedarchiver/encodeddata.md): The encoded data for the archiver.
- [outputFormat](nskeyedarchiver/outputformat.md): The format in which the receiver encodes its data.
- [requiresSecureCoding](nskeyedarchiver/requiressecurecoding.md): Indicates whether the archiver requires all archived classes to resist object substitution attacks.
- [archivedDataWithRootObject:](nskeyedarchiver/archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object that contains the encoded form of the object graph formed by the given root object.
- [archiveRootObject:toFile:](nskeyedarchiver/archiverootobject%28__tofile_%29.md): Deprecated. Archives an object graph rooted at a given object to a file at a given path.

### Encoding Data and Objects

- [encodeBool:forKey:](nskeyedarchiver/encode%28__forkey_%29-9pxhm.md): Encodes a given Boolean value and associates it with a key.
- [encodeBytes:length:forKey:](nskeyedarchiver/encodebytes%28__length_forkey_%29.md): Encodes a given number of bytes from a given C array of bytes and associates them with a key.
- [encodeConditionalObject:forKey:](nskeyedarchiver/encodeconditionalobject%28__forkey_%29.md): Encodes a reference to a given object and associates it with a key only if it has been unconditionally encoded elsewhere in the archive.
- [encodeDouble:forKey:](nskeyedarchiver/encode%28__forkey_%29-1mkfl.md): Encodes a given `double` value and associates it with a key.
- [encodeFloat:forKey:](nskeyedarchiver/encode%28__forkey_%29-67rcs.md): Encodes a given `float` value and associates it with a key.
- [encodeInt:forKey:](nskeyedarchiver/encodeint_forkey_.md): Encodes a given `int` value and associates it with a key.
- [encodeInt32:forKey:](nskeyedarchiver/encode%28__forkey_%29-5i7tc.md): Encodes a given 32-bit integer value and associates it with a key.
- [encodeInt64:forKey:](nskeyedarchiver/encode%28__forkey_%29-ycdd.md): Encodes a given 64-bit integer value and associates it with a key.
- [encodeObject:forKey:](nskeyedarchiver/encode%28__forkey_%29-9f4n9.md): Encodes a given object and associates it with a given key.

### Managing the Delegate

- [delegate](nskeyedarchiver/delegate.md): The archiver’s delegate.

### Managing Classes and Class Names

- [setClassName:forClass:](nskeyedarchiver/setclassname%28__for_%29-swift.type.method.md): Sets a global translation mapping to encode instances of a given class with the provided name, rather than their real name.
- [classNameForClass:](nskeyedarchiver/classname%28for_%29-swift.type.method.md): Returns the class name with which the archiver class encodes instances of a given class.
- [setClassName:forClass:](nskeyedarchiver/setclassname%28__for_%29-swift.method.md): Sets a mapping for this archiver to encode instances of a given class with the provided name, rather than their real name.
- [classNameForClass:](nskeyedarchiver/classname%28for_%29-swift.method.md): Returns the class name with which this archiver encodes instances of a given class.

### Constants

- [Keyed Archiving Exception Names](keyed-archiving-exception-names.md): Names of exceptions raised by this class if problems occur while creating an archive.
- [Keyed Archiver Root Object Key](keyed-archiver-root-object-key.md): Keys that the archiver uses in the hierarchy of encoded objects.

## Relationships

### Inherits From

- [NSCoder](nscoder.md)

## See Also

### Keyed Archivers

- [NSKeyedArchiverDelegate](nskeyedarchiverdelegate.md): The optional methods implemented by the delegate of a keyed archiver.
- [NSKeyedUnarchiver](nskeyedunarchiver.md): A decoder that restores data from an archive referenced by keys.
- [NSKeyedUnarchiverDelegate](nskeyedunarchiverdelegate.md): The optional methods implemented by the delegate of a keyed unarchiver.
- [NSCoder](nscoder.md): An abstract class that serves as the basis for objects that enable archiving and distribution of other objects.
- [NSSecureUnarchiveFromDataTransformer](nssecureunarchivefromdatatransformer.md): A value transformer that converts data to and from classes that support secure coding.
