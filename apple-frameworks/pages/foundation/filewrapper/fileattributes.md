> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/fileattributes](https://developer.apple.com/documentation/foundation/filewrapper/fileattributes)

# fileAttributes (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary of file attributes.

## Declaration

```swift
var fileAttributes: [String : Any] { get set }
```

<a id="Discussion"></a>

## Discussion

The file attributes’ dictionary is the same format as that returned by [attributesOfItem(atPath:)](../filemanager/attributesofitem%28atpath_%29.md) (`NSFileManager`).

## See Also

### Accessing Files

- [filename](filename.md): The filename of the file wrapper object
- [preferredFilename](preferredfilename.md): The preferred filename for the file wrapper object.
- [regularFileContents](regularfilecontents.md): The contents of the file-system node associated with a regular-file file wrapper.

# fileAttributes (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary of file attributes.

## Declaration

```objectivec
@property (copy) NSDictionary<NSString *,id> * fileAttributes;
```

<a id="Discussion"></a>

## Discussion

The file attributes’ dictionary is the same format as that returned by [attributesOfItemAtPath:error:](../filemanager/attributesofitem%28atpath_%29.md) (`NSFileManager`).

## See Also

### Accessing Files

- [filename](filename.md): The filename of the file wrapper object
- [preferredFilename](preferredfilename.md): The preferred filename for the file wrapper object.
- [regularFileContents](regularfilecontents.md): The contents of the file-system node associated with a regular-file file wrapper.
