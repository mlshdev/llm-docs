> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsunarchiver/decodeclassname(_:asclassname:)-swift.type.method](https://developer.apple.com/documentation/foundation/nsunarchiver/decodeclassname(_:asclassname:)-swift.type.method)

# decodeClassName(\_:asClassName:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Instructs instances of `NSUnarchiver` to use the class with a given name when instantiating objects whose ostensible class, according to the archived data, is another given name.

> Use NSKeyedUnarchiver instead

## Declaration

```swift
class func decodeClassName(_ inArchiveName: String, asClassName trueName: String)
```

## Parameters

- `inArchiveName`: The ostensible name of a class in an archive.
- `trueName`: The name of the class to use when instantiating objects whose ostensible class, according to the archived data, is `nameInArchive`.

<a id="Discussion"></a>

## Discussion

This method enables easy conversion of unarchived data when the name of a class has changed since the archive was created.

Note that there is also an instance method of the same name. An instance of `NSUnarchiver` can maintain its own mapping of class names. However, if both the class method and the instance method have been invoked using an identical value for `nameInArchive`, the class method takes precedence.

## See Also

### Substituting classes or objects

- [classNameDecoded(forArchiveClassName:)](classnamedecoded%28forarchiveclassname_%29-swift.type.method.md): Deprecated. Returns the name of the class used when instantiating objects whose ostensible class, according to the archived data, is a given name.
- [classNameDecoded(forArchiveClassName:)](classnamedecoded%28forarchiveclassname_%29-swift.method.md): Deprecated. Returns the name of the class that will be used when instantiating objects whose ostensible class, according to the archived data, is a given name.
- [decodeClassName(\_:asClassName:)](decodeclassname%28__asclassname_%29-swift.method.md): Deprecated. Instructs the receiver to use the class with a given name when instantiating objects whose ostensible class, according to the archived data, is another given name.
- [replace(\_:with:)](replace%28__with_%29.md): Deprecated. Causes the receiver to substitute one given object for another whenever the latter is extracted from the archive.

# decodeClassName:asClassName: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Instructs instances of `NSUnarchiver` to use the class with a given name when instantiating objects whose ostensible class, according to the archived data, is another given name.

> Use NSKeyedUnarchiver instead

## Declaration

```objectivec
+ (void) decodeClassName:(NSString *) inArchiveName asClassName:(NSString *) trueName;
```

## Parameters

- `inArchiveName`: The ostensible name of a class in an archive.
- `trueName`: The name of the class to use when instantiating objects whose ostensible class, according to the archived data, is `nameInArchive`.

<a id="Discussion"></a>

## Discussion

This method enables easy conversion of unarchived data when the name of a class has changed since the archive was created.

Note that there is also an instance method of the same name. An instance of `NSUnarchiver` can maintain its own mapping of class names. However, if both the class method and the instance method have been invoked using an identical value for `nameInArchive`, the class method takes precedence.

## See Also

### Substituting classes or objects

- [classNameDecodedForArchiveClassName:](classnamedecoded%28forarchiveclassname_%29-swift.type.method.md): Deprecated. Returns the name of the class used when instantiating objects whose ostensible class, according to the archived data, is a given name.
- [classNameDecodedForArchiveClassName:](classnamedecoded%28forarchiveclassname_%29-swift.method.md): Deprecated. Returns the name of the class that will be used when instantiating objects whose ostensible class, according to the archived data, is a given name.
- [decodeClassName:asClassName:](decodeclassname%28__asclassname_%29-swift.method.md): Deprecated. Instructs the receiver to use the class with a given name when instantiating objects whose ostensible class, according to the archived data, is another given name.
- [replaceObject:withObject:](replace%28__with_%29.md): Deprecated. Causes the receiver to substitute one given object for another whenever the latter is extracted from the archive.
