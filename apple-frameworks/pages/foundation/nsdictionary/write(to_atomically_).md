> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/write(to:atomically:)](https://developer.apple.com/documentation/foundation/nsdictionary/write(to:atomically:))

# write(to:atomically:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Writes a property list representation of the contents of the dictionary to a given URL.

> Use [write(to:)](write%28to_%29.md) instead.

## Declaration

```swift
func write(to url: URL, atomically: Bool) -> Bool
```

## Parameters

- `url`: The URL to which to write the dictionary.
- `atomically`: A flag that specifies whether the output should be written atomically.

  If `atomically` is [true](https://developer.apple.com/documentation/swift/true), the dictionary is written to an auxiliary location, and then the auxiliary location is renamed to `url`. If `atomically` is [false](https://developer.apple.com/documentation/swift/false), the dictionary is written directly to `url`. The [true](https://developer.apple.com/documentation/swift/true) option guarantees that `url`, if it exists at all, won’t be corrupted even if the system should crash during writing. `atomically` is ignored if `url` is of a type that cannot be written atomically.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the location is written successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method recursively validates that all the contained objects are property list objects (instances of `NSData`, `NSDate`, `NSNumber`, `NSString`, `NSArray`, or `NSDictionary`) before writing out the file, and returns [false](https://developer.apple.com/documentation/swift/false) if all the objects are not property list objects, since the resultant output would not be a valid property list.

If the dictionary’s contents are all property list objects, the location written by this method can be used to initialize a new dictionary with the class method `NSDictionary/init(contentsOfURL:)-98pl3` or the instance method `NSDictionary/init(contentsOfURL:)-4pv16`.

If you need greater control over the property list representation, use [PropertyListSerialization](../propertylistserialization.md) instead.

For more information about property lists, see [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i).

## See Also

### Storing Dictionaries

- [write(to:)](write%28to_%29.md): Writes a property list representation of the contents of the dictionary to a given URL.
- [write(toFile:atomically:)](write%28tofile_atomically_%29.md): Deprecated. Writes a property list representation of the contents of the dictionary to a given path.

# writeToURL:atomically: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Writes a property list representation of the contents of the dictionary to a given URL.

> Use [writeToURL:error:](write%28to_%29.md) instead.

## Declaration

```objectivec
- (BOOL) writeToURL:(NSURL *) url atomically:(BOOL) atomically;
```

## Parameters

- `url`: The URL to which to write the dictionary.
- `atomically`: A flag that specifies whether the output should be written atomically.

  If `atomically` is [true](https://developer.apple.com/documentation/swift/true), the dictionary is written to an auxiliary location, and then the auxiliary location is renamed to `url`. If `atomically` is [false](https://developer.apple.com/documentation/swift/false), the dictionary is written directly to `url`. The [true](https://developer.apple.com/documentation/swift/true) option guarantees that `url`, if it exists at all, won’t be corrupted even if the system should crash during writing. `atomically` is ignored if `url` is of a type that cannot be written atomically.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the location is written successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method recursively validates that all the contained objects are property list objects (instances of `NSData`, `NSDate`, `NSNumber`, `NSString`, `NSArray`, or `NSDictionary`) before writing out the file, and returns [false](https://developer.apple.com/documentation/swift/false) if all the objects are not property list objects, since the resultant output would not be a valid property list.

If the dictionary’s contents are all property list objects, the location written by this method can be used to initialize a new dictionary with the class method `NSDictionary/init(contentsOfURL:)-98pl3` or the instance method `NSDictionary/init(contentsOfURL:)-4pv16`.

If you need greater control over the property list representation, use [NSPropertyListSerialization](../propertylistserialization.md) instead.

For more information about property lists, see [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i).

## See Also

### Storing Dictionaries

- [writeToURL:error:](write%28to_%29.md): Writes a property list representation of the contents of the dictionary to a given URL.
- [writeToFile:atomically:](write%28tofile_atomically_%29.md): Deprecated. Writes a property list representation of the contents of the dictionary to a given path.
