> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsunarchiver/classnamedecoded(forarchiveclassname:)-swift.type.method](https://developer.apple.com/documentation/foundation/nsunarchiver/classnamedecoded(forarchiveclassname:)-swift.type.method)

# classNameDecoded(forArchiveClassName:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns the name of the class used when instantiating objects whose ostensible class, according to the archived data, is a given name.

> Use NSKeyedUnarchiver instead

## Declaration

```swift
class func classNameDecoded(forArchiveClassName inArchiveName: String) -> String
```

## Parameters

- `inArchiveName`: The name of a class.

<a id="return-value"></a>

## Return Value

The name of the class used when instantiating objects whose ostensible class, according to the archived data, is `nameInArchive`. Returns `nameInArchive` if no substitute name has been specified using the class method (not the instance method) [decodeClassName(\_:asClassName:)](decodeclassname%28__asclassname_%29-swift.type.method.md).

<a id="Discussion"></a>

## Discussion

Note that each individual instance of `NSUnarchiver` can be given its own class name mappings by invoking the instance method [decodeClassName(\_:asClassName:)](decodeclassname%28__asclassname_%29-swift.method.md). The `NSUnarchiver` class has no information about these instance-specific mappings, however, so they don’t affect the return value of [classNameDecoded(forArchiveClassName:)](classnamedecoded%28forarchiveclassname_%29-swift.type.method.md).

## See Also

### Substituting classes or objects

- [decodeClassName(\_:asClassName:)](decodeclassname%28__asclassname_%29-swift.type.method.md): Deprecated. Instructs instances of `NSUnarchiver` to use the class with a given name when instantiating objects whose ostensible class, according to the archived data, is another given name.
- [classNameDecoded(forArchiveClassName:)](classnamedecoded%28forarchiveclassname_%29-swift.method.md): Deprecated. Returns the name of the class that will be used when instantiating objects whose ostensible class, according to the archived data, is a given name.
- [decodeClassName(\_:asClassName:)](decodeclassname%28__asclassname_%29-swift.method.md): Deprecated. Instructs the receiver to use the class with a given name when instantiating objects whose ostensible class, according to the archived data, is another given name.
- [replace(\_:with:)](replace%28__with_%29.md): Deprecated. Causes the receiver to substitute one given object for another whenever the latter is extracted from the archive.

# classNameDecodedForArchiveClassName: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns the name of the class used when instantiating objects whose ostensible class, according to the archived data, is a given name.

> Use NSKeyedUnarchiver instead

## Declaration

```objectivec
+ (NSString *) classNameDecodedForArchiveClassName:(NSString *) inArchiveName;
```

## Parameters

- `inArchiveName`: The name of a class.

<a id="return-value"></a>

## Return Value

The name of the class used when instantiating objects whose ostensible class, according to the archived data, is `nameInArchive`. Returns `nameInArchive` if no substitute name has been specified using the class method (not the instance method) [decodeClassName:asClassName:](decodeclassname%28__asclassname_%29-swift.type.method.md).

<a id="Discussion"></a>

## Discussion

Note that each individual instance of `NSUnarchiver` can be given its own class name mappings by invoking the instance method [decodeClassName:asClassName:](decodeclassname%28__asclassname_%29-swift.method.md). The `NSUnarchiver` class has no information about these instance-specific mappings, however, so they don’t affect the return value of [classNameDecodedForArchiveClassName:](classnamedecoded%28forarchiveclassname_%29-swift.type.method.md).

## See Also

### Substituting classes or objects

- [decodeClassName:asClassName:](decodeclassname%28__asclassname_%29-swift.type.method.md): Deprecated. Instructs instances of `NSUnarchiver` to use the class with a given name when instantiating objects whose ostensible class, according to the archived data, is another given name.
- [classNameDecodedForArchiveClassName:](classnamedecoded%28forarchiveclassname_%29-swift.method.md): Deprecated. Returns the name of the class that will be used when instantiating objects whose ostensible class, according to the archived data, is a given name.
- [decodeClassName:asClassName:](decodeclassname%28__asclassname_%29-swift.method.md): Deprecated. Instructs the receiver to use the class with a given name when instantiating objects whose ostensible class, according to the archived data, is another given name.
- [replaceObject:withObject:](replace%28__with_%29.md): Deprecated. Causes the receiver to substitute one given object for another whenever the latter is extracted from the archive.
