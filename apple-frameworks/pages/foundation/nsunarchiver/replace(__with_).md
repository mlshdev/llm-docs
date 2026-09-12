> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsunarchiver/replace(_:with:)](https://developer.apple.com/documentation/foundation/nsunarchiver/replace(_:with:))

# replace(\_:with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Causes the receiver to substitute one given object for another whenever the latter is extracted from the archive.

> Use NSKeyedUnarchiver instead

## Declaration

```swift
func replace(_ object: Any, with newObject: Any)
```

## Parameters

- `object`: The archived object to replace.
- `newObject`: The object with which to replace `object`.

<a id="Discussion"></a>

## Discussion

`newObject` can be of a different class from object, and the class mappings set by [classNameDecoded(forArchiveClassName:)](classnamedecoded%28forarchiveclassname_%29-swift.type.method.md) and [decodeClassName(\_:asClassName:)](decodeclassname%28__asclassname_%29-swift.method.md) are ignored.

## See Also

### Substituting classes or objects

- [classNameDecoded(forArchiveClassName:)](classnamedecoded%28forarchiveclassname_%29-swift.type.method.md): Deprecated. Returns the name of the class used when instantiating objects whose ostensible class, according to the archived data, is a given name.
- [decodeClassName(\_:asClassName:)](decodeclassname%28__asclassname_%29-swift.type.method.md): Deprecated. Instructs instances of `NSUnarchiver` to use the class with a given name when instantiating objects whose ostensible class, according to the archived data, is another given name.
- [classNameDecoded(forArchiveClassName:)](classnamedecoded%28forarchiveclassname_%29-swift.method.md): Deprecated. Returns the name of the class that will be used when instantiating objects whose ostensible class, according to the archived data, is a given name.
- [decodeClassName(\_:asClassName:)](decodeclassname%28__asclassname_%29-swift.method.md): Deprecated. Instructs the receiver to use the class with a given name when instantiating objects whose ostensible class, according to the archived data, is another given name.

# replaceObject:withObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Causes the receiver to substitute one given object for another whenever the latter is extracted from the archive.

> Use NSKeyedUnarchiver instead

## Declaration

```objectivec
- (void) replaceObject:(id) object withObject:(id) newObject;
```

## Parameters

- `object`: The archived object to replace.
- `newObject`: The object with which to replace `object`.

<a id="Discussion"></a>

## Discussion

`newObject` can be of a different class from object, and the class mappings set by [classNameDecodedForArchiveClassName:](classnamedecoded%28forarchiveclassname_%29-swift.type.method.md) and [decodeClassName:asClassName:](decodeclassname%28__asclassname_%29-swift.method.md) are ignored.

## See Also

### Substituting classes or objects

- [classNameDecodedForArchiveClassName:](classnamedecoded%28forarchiveclassname_%29-swift.type.method.md): Deprecated. Returns the name of the class used when instantiating objects whose ostensible class, according to the archived data, is a given name.
- [decodeClassName:asClassName:](decodeclassname%28__asclassname_%29-swift.type.method.md): Deprecated. Instructs instances of `NSUnarchiver` to use the class with a given name when instantiating objects whose ostensible class, according to the archived data, is another given name.
- [classNameDecodedForArchiveClassName:](classnamedecoded%28forarchiveclassname_%29-swift.method.md): Deprecated. Returns the name of the class that will be used when instantiating objects whose ostensible class, according to the archived data, is a given name.
- [decodeClassName:asClassName:](decodeclassname%28__asclassname_%29-swift.method.md): Deprecated. Instructs the receiver to use the class with a given name when instantiating objects whose ostensible class, according to the archived data, is another given name.
