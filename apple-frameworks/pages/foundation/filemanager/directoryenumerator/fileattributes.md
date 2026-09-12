> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/directoryenumerator/fileattributes](https://developer.apple.com/documentation/foundation/filemanager/directoryenumerator/fileattributes)

# fileAttributes (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary with the attributes of the most recently returned file or subdirectory (as referenced by the pathname).

## Declaration

```swift
var fileAttributes: [FileAttributeKey : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

See the description of the [fileAttributes(atPath:traverseLink:)](../fileattributes%28atpath_traverselink_%29.md) method of [FileManager](../../filemanager.md) for details on obtaining the attributes from the dictionary.

## See Also

### Getting File and Directory Attributes

- [directoryAttributes](directoryattributes.md): A dictionary with the attributes of the directory at which enumeration started.
- [level](level.md): The number of levels deep the current object is in the directory hierarchy being enumerated.

# fileAttributes (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary with the attributes of the most recently returned file or subdirectory (as referenced by the pathname).

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<NSString *,id> * fileAttributes;
```

<a id="Discussion"></a>

## Discussion

See the description of the [fileAttributesAtPath:traverseLink:](../fileattributes%28atpath_traverselink_%29.md) method of [NSFileManager](../../filemanager.md) for details on obtaining the attributes from the dictionary.

## See Also

### Getting File and Directory Attributes

- [directoryAttributes](directoryattributes.md): A dictionary with the attributes of the directory at which enumeration started.
- [level](level.md): The number of levels deep the current object is in the directory hierarchy being enumerated.
