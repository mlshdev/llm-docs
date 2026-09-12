> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarchiver](https://developer.apple.com/documentation/foundation/nsarchiver)

# NSArchiver (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

A coder that stores an object’s data to an archive.

> Use NSKeyedArchiver instead

## Declaration

```swift
class NSArchiver
```

<a id="overview"></a>

## Overview

[NSArchiver](nsarchiver.md), a concrete subclass of [NSCoder](nscoder.md), provides a way to encode objects into an architecture-independent format that can be stored in a file. When you archive a graph of objects, the class information and instance variables for each object are written to the archive. The companion class [NSUnarchiver](nsunarchiver.md) decodes the data in an archive and creates a graph of objects equivalent to the original set.

[NSArchiver](nsarchiver.md) stores the archive data in a mutable data object ([NSMutableData](nsmutabledata.md)). After encoding the objects, you can have the [NSArchiver](nsarchiver.md) object write this mutable data object immediately to a file, or you can retrieve the mutable data object for some other use.

In macOS 10.2 and later, [NSArchiver](nsarchiver.md) and [NSUnarchiver](nsunarchiver.md) have been replaced by [NSKeyedArchiver](nskeyedarchiver.md) and [NSKeyedUnarchiver](nskeyedunarchiver.md) respectively—see [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i).

## Topics

### Initializing an NSArchiver

- [init(forWritingWith:)](nsarchiver/init%28forwritingwith_%29.md): Deprecated. Returns an archiver, initialized to encode stream and version information into a given mutable data object.

### Archiving data

- [archivedData(withRootObject:)](nsarchiver/archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object containing the encoded form of the object graph whose root object is given.
- [archiveRootObject(\_:toFile:)](nsarchiver/archiverootobject%28__tofile_%29.md): Deprecated. Creates a temporary instance of `NSArchiver` and archives an object graph by encoding it into a data object and writing the resulting data object to a specified file.
- [encodeRootObject(\_:)](nsarchiver/encoderootobject%28__%29.md): Deprecated. Archives a given object along with all the objects to which it is connected.
- [encodeConditionalObject(\_:)](nsarchiver/encodeconditionalobject%28__%29.md): Deprecated. Conditionally archives a given object.

### Getting the archived data

- [archiverData](nsarchiver/archiverdata.md): Deprecated. The receiver’s archive data.

### Substituting classes or objects

- [classNameEncoded(forTrueClassName:)](nsarchiver/classnameencoded%28fortrueclassname_%29.md): Deprecated. Returns the name of the class used to archive instances of the class with a given true name.
- [encodeClassName(\_:intoClassName:)](nsarchiver/encodeclassname%28__intoclassname_%29.md): Deprecated. Encodes a substitute name for the class with a given true name.
- [replace(\_:with:)](nsarchiver/replace%28__with_%29.md): Deprecated. Causes the receiver to treat subsequent requests to encode a given object as though they were requests to encode another given object.

### Constants

- [Archiving Exception Names](archiving-exception-names.md): Raised by `NSArchiver` if there are problems initializing or encoding.

### Initializers

- [init(forWritingWithMutableData:)](nsarchiver/init%28forwritingwithmutabledata_%29.md): Deprecated.

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

### Deprecated

- [NSUnarchiver](nsunarchiver.md): Deprecated. A decoder that restores data from an archive.

# NSArchiver (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

A coder that stores an object’s data to an archive.

> Use NSKeyedArchiver instead

## Declaration

```objectivec
@interface NSArchiver : NSCoder
```

<a id="overview"></a>

## Overview

[NSArchiver](nsarchiver.md), a concrete subclass of [NSCoder](nscoder.md), provides a way to encode objects into an architecture-independent format that can be stored in a file. When you archive a graph of objects, the class information and instance variables for each object are written to the archive. The companion class [NSUnarchiver](nsunarchiver.md) decodes the data in an archive and creates a graph of objects equivalent to the original set.

[NSArchiver](nsarchiver.md) stores the archive data in a mutable data object ([NSMutableData](nsmutabledata.md)). After encoding the objects, you can have the [NSArchiver](nsarchiver.md) object write this mutable data object immediately to a file, or you can retrieve the mutable data object for some other use.

In macOS 10.2 and later, [NSArchiver](nsarchiver.md) and [NSUnarchiver](nsunarchiver.md) have been replaced by [NSKeyedArchiver](nskeyedarchiver.md) and [NSKeyedUnarchiver](nskeyedunarchiver.md) respectively—see [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i).

## Topics

### Initializing an NSArchiver

- [initForWritingWithMutableData:](nsarchiver/init%28forwritingwith_%29.md): Deprecated. Returns an archiver, initialized to encode stream and version information into a given mutable data object.

### Archiving data

- [archivedDataWithRootObject:](nsarchiver/archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object containing the encoded form of the object graph whose root object is given.
- [archiveRootObject:toFile:](nsarchiver/archiverootobject%28__tofile_%29.md): Deprecated. Creates a temporary instance of `NSArchiver` and archives an object graph by encoding it into a data object and writing the resulting data object to a specified file.
- [encodeRootObject:](nsarchiver/encoderootobject%28__%29.md): Deprecated. Archives a given object along with all the objects to which it is connected.
- [encodeConditionalObject:](nsarchiver/encodeconditionalobject%28__%29.md): Deprecated. Conditionally archives a given object.

### Getting the archived data

- [archiverData](nsarchiver/archiverdata.md): Deprecated. The receiver’s archive data.

### Substituting classes or objects

- [classNameEncodedForTrueClassName:](nsarchiver/classnameencoded%28fortrueclassname_%29.md): Deprecated. Returns the name of the class used to archive instances of the class with a given true name.
- [encodeClassName:intoClassName:](nsarchiver/encodeclassname%28__intoclassname_%29.md): Deprecated. Encodes a substitute name for the class with a given true name.
- [replaceObject:withObject:](nsarchiver/replace%28__with_%29.md): Deprecated. Causes the receiver to treat subsequent requests to encode a given object as though they were requests to encode another given object.

### Constants

- [Archiving Exception Names](archiving-exception-names.md): Raised by `NSArchiver` if there are problems initializing or encoding.

### Instance Variables

- [ids](nsarchiver/ids.md): Deprecated.
- [map](nsarchiver/map.md): Deprecated.
- [mdata](nsarchiver/mdata.md): Deprecated.
- [pointerTable](nsarchiver/pointertable.md): Deprecated.
- [replacementTable](nsarchiver/replacementtable.md): Deprecated.
- [reserved](nsarchiver/reserved.md): Deprecated.
- [stringTable](nsarchiver/stringtable.md): Deprecated.

## Relationships

### Inherits From

- [NSCoder](nscoder.md)

## See Also

### Deprecated

- [NSUnarchiver](nsunarchiver.md): Deprecated. A decoder that restores data from an archive.
- [NXReadNSObjectFromCoder](nxreadnsobjectfromcoder.md): Deprecated. Returns the next object from the coder.
