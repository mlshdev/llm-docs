> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/directoryenumerator/directoryattributes](https://developer.apple.com/documentation/foundation/filemanager/directoryenumerator/directoryattributes)

# directoryAttributes (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary with the attributes of the directory at which enumeration started.

## Declaration

```swift
var directoryAttributes: [FileAttributeKey : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

See the description of the [fileAttributes(atPath:traverseLink:)](../fileattributes%28atpath_traverselink_%29.md) method of [FileManager](../../filemanager.md) for details on obtaining the attributes from the dictionary.

## See Also

### Related Documentation

- [createDirectory(atPath:attributes:)](../createdirectory%28atpath_attributes_%29.md): Deprecated. Creates a directory (without contents) at a given path with given attributes.

### Getting File and Directory Attributes

- [fileAttributes](fileattributes.md): A dictionary with the attributes of the most recently returned file or subdirectory (as referenced by the pathname).
- [level](level.md): The number of levels deep the current object is in the directory hierarchy being enumerated.

# directoryAttributes (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary with the attributes of the directory at which enumeration started.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<NSString *,id> * directoryAttributes;
```

<a id="Discussion"></a>

## Discussion

See the description of the [fileAttributesAtPath:traverseLink:](../fileattributes%28atpath_traverselink_%29.md) method of [NSFileManager](../../filemanager.md) for details on obtaining the attributes from the dictionary.

## See Also

### Related Documentation

- [createDirectoryAtPath:attributes:](../createdirectory%28atpath_attributes_%29.md): Deprecated. Creates a directory (without contents) at a given path with given attributes.

### Getting File and Directory Attributes

- [fileAttributes](fileattributes.md): A dictionary with the attributes of the most recently returned file or subdirectory (as referenced by the pathname).
- [level](level.md): The number of levels deep the current object is in the directory hierarchy being enumerated.
