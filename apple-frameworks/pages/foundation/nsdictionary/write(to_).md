> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/write(to:)](https://developer.apple.com/documentation/foundation/nsdictionary/write(to:))

# write(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Writes a property list representation of the contents of the dictionary to a given URL.

## Declaration

```swift
func write(to url: URL) throws
```

## Parameters

- `url`: The URL to which to write the dictionary.

<a id="Discussion"></a>

## Discussion

This method recursively validates that all the contained objects are property list objects (instances of [NSData](../nsdata.md), [NSDate](../nsdate.md), [NSNumber](../nsnumber.md), [NSString](../nsstring.md), [NSArray](../nsarray.md), or [NSDictionary](../nsdictionary.md)) before writing out the file. The method throws an error if all the objects are not property list objects, because the resulting output wouldn’t be a valid property list.

If the dictionary’s contents are all property list objects, you can use the location written by this method to initialize a new dictionary with the instance method `NSDictionary/init(contentsOfURL:)-4pv16`.

If you need greater control over the property list representation, use [PropertyListSerialization](../propertylistserialization.md) instead.

For more information about property lists, see [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i).

## See Also

### Storing Dictionaries

- [write(to:atomically:)](write%28to_atomically_%29.md): Deprecated. Writes a property list representation of the contents of the dictionary to a given URL.
- [write(toFile:atomically:)](write%28tofile_atomically_%29.md): Deprecated. Writes a property list representation of the contents of the dictionary to a given path.

# writeToURL:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Writes a property list representation of the contents of the dictionary to a given URL.

## Declaration

```objectivec
- (BOOL) writeToURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: The URL to which to write the dictionary.
- `error`: On failure, a reference to the error that occurred.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the location is written successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method recursively validates that all the contained objects are property list objects (instances of [NSData](../nsdata.md), [NSDate](../nsdate.md), [NSNumber](../nsnumber.md), [NSString](../nsstring.md), [NSArray](../nsarray.md), or [NSDictionary](../nsdictionary.md)) before writing out the file. The method throws an error if all the objects are not property list objects, because the resulting output wouldn’t be a valid property list.

If the dictionary’s contents are all property list objects, you can use the location written by this method to initialize a new dictionary with the instance method `NSDictionary/init(contentsOfURL:)-4pv16`.

If you need greater control over the property list representation, use [NSPropertyListSerialization](../propertylistserialization.md) instead.

For more information about property lists, see [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i).

## See Also

### Storing Dictionaries

- [writeToURL:atomically:](write%28to_atomically_%29.md): Deprecated. Writes a property list representation of the contents of the dictionary to a given URL.
- [writeToFile:atomically:](write%28tofile_atomically_%29.md): Deprecated. Writes a property list representation of the contents of the dictionary to a given path.
