> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsunarchiver](https://developer.apple.com/documentation/foundation/nsunarchiver)

# NSUnarchiver (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

A decoder that restores data from an archive.

> Use NSKeyedUnarchiver instead

## Declaration

```swift
class NSUnarchiver
```

<a id="overview"></a>

## Overview

[NSUnarchiver](nsunarchiver.md), a concrete subclass of [NSCoder](nscoder.md), defines methods for decoding a set of Objective-C objects from an archive. Such archives are produced by objects of the [NSArchiver](nsarchiver.md) class.

In macOS 10.2 and later, [NSArchiver](nsarchiver.md) and [NSUnarchiver](nsunarchiver.md) have been replaced by [NSKeyedArchiver](nskeyedarchiver.md) and [NSKeyedUnarchiver](nskeyedunarchiver.md) respectively—see [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i).

## Topics

### Initializing an NSUnarchiver

- [init(forReadingWith:)](nsunarchiver/init%28forreadingwith_%29.md): Deprecated. Returns an `NSUnarchiver` object initialized to read an archive from a given data object.

### Decoding objects

- [unarchiveObject(with:)](nsunarchiver/unarchiveobject%28with_%29.md): Deprecated. Decodes and returns the object archived in a given `NSData` object.
- [unarchiveObject(withFile:)](nsunarchiver/unarchiveobject%28withfile_%29.md): Deprecated. Decodes and returns the object archived in the file `path`.

### Managing an NSUnarchiver

- [isAtEnd](nsunarchiver/isatend.md): Deprecated. A Boolean value that indicates whether the receiver has reached the end of the encoded data while decoding.
- [systemVersion](nsunarchiver/systemversion-swift.property.md): Deprecated. The system version number in effect when the archive was created.

### Substituting classes or objects

- [classNameDecoded(forArchiveClassName:)](nsunarchiver/classnamedecoded%28forarchiveclassname_%29-swift.type.method.md): Deprecated. Returns the name of the class used when instantiating objects whose ostensible class, according to the archived data, is a given name.
- [decodeClassName(\_:asClassName:)](nsunarchiver/decodeclassname%28__asclassname_%29-swift.type.method.md): Deprecated. Instructs instances of `NSUnarchiver` to use the class with a given name when instantiating objects whose ostensible class, according to the archived data, is another given name.
- [classNameDecoded(forArchiveClassName:)](nsunarchiver/classnamedecoded%28forarchiveclassname_%29-swift.method.md): Deprecated. Returns the name of the class that will be used when instantiating objects whose ostensible class, according to the archived data, is a given name.
- [decodeClassName(\_:asClassName:)](nsunarchiver/decodeclassname%28__asclassname_%29-swift.method.md): Deprecated. Instructs the receiver to use the class with a given name when instantiating objects whose ostensible class, according to the archived data, is another given name.
- [replace(\_:with:)](nsunarchiver/replace%28__with_%29.md): Deprecated. Causes the receiver to substitute one given object for another whenever the latter is extracted from the archive.

### Initializers

- [init(forReadingWithData:)](nsunarchiver/init%28forreadingwithdata_%29.md): Deprecated.

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

- [NSArchiver](nsarchiver.md): Deprecated. A coder that stores an object’s data to an archive.

# NSUnarchiver (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

A decoder that restores data from an archive.

> Use NSKeyedUnarchiver instead

## Declaration

```objectivec
@interface NSUnarchiver : NSCoder
```

<a id="overview"></a>

## Overview

[NSUnarchiver](nsunarchiver.md), a concrete subclass of [NSCoder](nscoder.md), defines methods for decoding a set of Objective-C objects from an archive. Such archives are produced by objects of the [NSArchiver](nsarchiver.md) class.

In macOS 10.2 and later, [NSArchiver](nsarchiver.md) and [NSUnarchiver](nsunarchiver.md) have been replaced by [NSKeyedArchiver](nskeyedarchiver.md) and [NSKeyedUnarchiver](nskeyedunarchiver.md) respectively—see [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i).

## Topics

### Initializing an NSUnarchiver

- [initForReadingWithData:](nsunarchiver/init%28forreadingwith_%29.md): Deprecated. Returns an `NSUnarchiver` object initialized to read an archive from a given data object.

### Decoding objects

- [unarchiveObjectWithData:](nsunarchiver/unarchiveobject%28with_%29.md): Deprecated. Decodes and returns the object archived in a given `NSData` object.
- [unarchiveObjectWithFile:](nsunarchiver/unarchiveobject%28withfile_%29.md): Deprecated. Decodes and returns the object archived in the file `path`.

### Managing an NSUnarchiver

- [atEnd](nsunarchiver/isatend.md): Deprecated. A Boolean value that indicates whether the receiver has reached the end of the encoded data while decoding.
- [objectZone](nsunarchiver/objectzone-c.method.md): Deprecated. Returns the memory zone used to allocate decoded objects.
- [setObjectZone:](nsunarchiver/setobjectzone_.md): Deprecated. Sets the memory zone used to allocate decoded objects.
- [systemVersion](nsunarchiver/systemversion-swift.property.md): Deprecated. The system version number in effect when the archive was created.

### Substituting classes or objects

- [classNameDecodedForArchiveClassName:](nsunarchiver/classnamedecoded%28forarchiveclassname_%29-swift.type.method.md): Deprecated. Returns the name of the class used when instantiating objects whose ostensible class, according to the archived data, is a given name.
- [decodeClassName:asClassName:](nsunarchiver/decodeclassname%28__asclassname_%29-swift.type.method.md): Deprecated. Instructs instances of `NSUnarchiver` to use the class with a given name when instantiating objects whose ostensible class, according to the archived data, is another given name.
- [classNameDecodedForArchiveClassName:](nsunarchiver/classnamedecoded%28forarchiveclassname_%29-swift.method.md): Deprecated. Returns the name of the class that will be used when instantiating objects whose ostensible class, according to the archived data, is a given name.
- [decodeClassName:asClassName:](nsunarchiver/decodeclassname%28__asclassname_%29-swift.method.md): Deprecated. Instructs the receiver to use the class with a given name when instantiating objects whose ostensible class, according to the archived data, is another given name.
- [replaceObject:withObject:](nsunarchiver/replace%28__with_%29.md): Deprecated. Causes the receiver to substitute one given object for another whenever the latter is extracted from the archive.

### Instance Variables

- [allUnarchivedObjects](nsunarchiver/allunarchivedobjects.md): Deprecated.
- [classVersions](nsunarchiver/classversions.md): Deprecated.
- [cursor](nsunarchiver/cursor.md): Deprecated.
- [datax](nsunarchiver/datax.md): Deprecated.
- [lastLabel](nsunarchiver/lastlabel.md): Deprecated.
- [map](nsunarchiver/map.md): Deprecated.
- [objectZone](nsunarchiver/objectzone-c.ivar.md): Deprecated.
- [pointerTable](nsunarchiver/pointertable.md): Deprecated.
- [reserved](nsunarchiver/reserved.md): Deprecated.
- [streamerVersion](nsunarchiver/streamerversion.md): Deprecated.
- [stringTable](nsunarchiver/stringtable.md): Deprecated.
- [swap](nsunarchiver/swap.md): Deprecated.
- [systemVersion](nsunarchiver/systemversion-c.ivar.md): Deprecated.
- [unused1](nsunarchiver/unused1.md): Deprecated.
- [unused2](nsunarchiver/unused2.md): Deprecated.

## Relationships

### Inherits From

- [NSCoder](nscoder.md)

## See Also

### Deprecated

- [NSArchiver](nsarchiver.md): Deprecated. A coder that stores an object’s data to an archive.
- [NXReadNSObjectFromCoder](nxreadnsobjectfromcoder.md): Deprecated. Returns the next object from the coder.
