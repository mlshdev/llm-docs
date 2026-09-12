> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/filename](https://developer.apple.com/documentation/foundation/filewrapper/filename)

# filename (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The filename of the file wrapper object

## Declaration

```swift
var filename: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the file wrapper’s filename, or `nil` when the file wrapper has no corresponding file-system node.

The filename is used for record-keeping purposes only and is set automatically when the file wrapper is created from the file system using [init(url:options:)](init%28url_options_%29-70161.md) and when it’s saved to the file system using [write(to:options:originalContentsURL:)](write%28to_options_originalcontentsurl_%29.md) (although this method allows you to request that the filename not be updated).

The filename is usually the same as the preferred filename, but might instead be a name derived from the preferred filename.  You can use this method to get the name of a child that’s just been read. Don’t use this method to get the name of a child that’s about to be written, because the name might be about to change; send [keyForChildFileWrapper(\_:)](keyforchildfilewrapper%28__%29.md) to the parent instead.

## See Also

### Accessing Files

- [preferredFilename](preferredfilename.md): The preferred filename for the file wrapper object.
- [fileAttributes](fileattributes.md): A dictionary of file attributes.
- [regularFileContents](regularfilecontents.md): The contents of the file-system node associated with a regular-file file wrapper.

# filename (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The filename of the file wrapper object

## Declaration

```objectivec
@property (copy, nullable) NSString * filename;
```

<a id="Discussion"></a>

## Discussion

This property contains the file wrapper’s filename, or `nil` when the file wrapper has no corresponding file-system node.

The filename is used for record-keeping purposes only and is set automatically when the file wrapper is created from the file system using [initWithURL:options:error:](init%28url_options_%29-70161.md) and when it’s saved to the file system using [writeToURL:options:originalContentsURL:error:](write%28to_options_originalcontentsurl_%29.md) (although this method allows you to request that the filename not be updated).

The filename is usually the same as the preferred filename, but might instead be a name derived from the preferred filename.  You can use this method to get the name of a child that’s just been read. Don’t use this method to get the name of a child that’s about to be written, because the name might be about to change; send [keyForFileWrapper:](keyforchildfilewrapper%28__%29.md) to the parent instead.

## See Also

### Accessing Files

- [preferredFilename](preferredfilename.md): The preferred filename for the file wrapper object.
- [fileAttributes](fileattributes.md): A dictionary of file attributes.
- [regularFileContents](regularfilecontents.md): The contents of the file-system node associated with a regular-file file wrapper.
