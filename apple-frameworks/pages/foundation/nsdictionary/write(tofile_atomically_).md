> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/write(tofile:atomically:)](https://developer.apple.com/documentation/foundation/nsdictionary/write(tofile:atomically:))

# write(toFile:atomically:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Writes a property list representation of the contents of the dictionary to a given path.

> Use [write(to:)](write%28to_%29.md) instead.

## Declaration

```swift
func write(toFile path: String, atomically useAuxiliaryFile: Bool) -> Bool
```

## Parameters

- `path`: The path at which to write the file.

  If `path` contains a tilde (~) character, you must expand it with [expandingTildeInPath](../nsstring/expandingtildeinpath.md) before invoking this method.
- `useAuxiliaryFile`: A flag that specifies whether the file should be written atomically.

  If `useAuxiliaryFile` is [true](https://developer.apple.com/documentation/swift/true), the dictionary is written to an auxiliary file, and then the auxiliary file is renamed to `path`. If `useAuxiliaryFile` is [false](https://developer.apple.com/documentation/swift/false), the dictionary is written directly to `path`. The [true](https://developer.apple.com/documentation/swift/true) option guarantees that `path`, if it exists at all, won’t be corrupted even if the system should crash during writing.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the file is written successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method recursively validates that all the contained objects are property list objects (instances of `NSData`, `NSDate`, `NSNumber`, `NSString`, `NSArray`, or `NSDictionary`) before writing out the file, and returns [false](https://developer.apple.com/documentation/swift/false) if all the objects are not property list objects, since the resultant file would not be a valid property list.

If the dictionary’s contents are all property list objects, the file written by this method can be used to initialize a new dictionary with the class method [dictionaryWithContentsOfFile:](dictionarywithcontentsoffile_.md) or the instance method [init(contentsOfFile:)](init%28contentsoffile_%29.md).

If you need greater control over the property list representation, use [PropertyListSerialization](../propertylistserialization.md) instead.

For more information about property lists, see [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i).

## See Also

### Storing Dictionaries

- [write(to:)](write%28to_%29.md): Writes a property list representation of the contents of the dictionary to a given URL.
- [write(to:atomically:)](write%28to_atomically_%29.md): Deprecated. Writes a property list representation of the contents of the dictionary to a given URL.

# writeToFile:atomically: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Writes a property list representation of the contents of the dictionary to a given path.

> Use [writeToURL:error:](write%28to_%29.md) instead.

## Declaration

```objectivec
- (BOOL) writeToFile:(NSString *) path atomically:(BOOL) useAuxiliaryFile;
```

## Parameters

- `path`: The path at which to write the file.

  If `path` contains a tilde (~) character, you must expand it with [stringByExpandingTildeInPath](../nsstring/expandingtildeinpath.md) before invoking this method.
- `useAuxiliaryFile`: A flag that specifies whether the file should be written atomically.

  If `useAuxiliaryFile` is [true](https://developer.apple.com/documentation/swift/true), the dictionary is written to an auxiliary file, and then the auxiliary file is renamed to `path`. If `useAuxiliaryFile` is [false](https://developer.apple.com/documentation/swift/false), the dictionary is written directly to `path`. The [true](https://developer.apple.com/documentation/swift/true) option guarantees that `path`, if it exists at all, won’t be corrupted even if the system should crash during writing.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the file is written successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method recursively validates that all the contained objects are property list objects (instances of `NSData`, `NSDate`, `NSNumber`, `NSString`, `NSArray`, or `NSDictionary`) before writing out the file, and returns [false](https://developer.apple.com/documentation/swift/false) if all the objects are not property list objects, since the resultant file would not be a valid property list.

If the dictionary’s contents are all property list objects, the file written by this method can be used to initialize a new dictionary with the class method [dictionaryWithContentsOfFile:](dictionarywithcontentsoffile_.md) or the instance method [initWithContentsOfFile:](init%28contentsoffile_%29.md).

If you need greater control over the property list representation, use [NSPropertyListSerialization](../propertylistserialization.md) instead.

For more information about property lists, see [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i).

## See Also

### Storing Dictionaries

- [writeToURL:error:](write%28to_%29.md): Writes a property list representation of the contents of the dictionary to a given URL.
- [writeToURL:atomically:](write%28to_atomically_%29.md): Deprecated. Writes a property list representation of the contents of the dictionary to a given URL.
