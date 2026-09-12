> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/write(tofile:atomically:updatefilenames:)](https://developer.apple.com/documentation/foundation/filewrapper/write(tofile:atomically:updatefilenames:))

# write(toFile:atomically:updateFilenames:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Writes a file wrapper’s contents to a given file-system node.

> Use [write(to:options:originalContentsURL:)](write%28to_options_originalcontentsurl_%29.md) instead.

## Declaration

```swift
func write(toFile path: String, atomically atomicFlag: Bool, updateFilenames updateFilenamesFlag: Bool) -> Bool
```

## Parameters

- `path`: Pathname of the file-system node to which the receiver’s contents are written.
- `atomicFlag`: [true](https://developer.apple.com/documentation/swift/true) to write the file safely so that:

  - An existing file is not overwritten
  - The method fails if the file cannot be written in its entirety

  [false](https://developer.apple.com/documentation/swift/false) to overwrite an existing file and ignore incomplete writes.
- `updateFilenamesFlag`: [true](https://developer.apple.com/documentation/swift/true) to update the receiver’s filenames (its filename and—for directory file wrappers—the filenames of its sub–file wrappers) be changed to the filenames of the corresponding nodes in the file system, after a successful write operation. Use this in Save or Save As operations.

  [false](https://developer.apple.com/documentation/swift/false) to specify that the receiver’s filenames not be updated. Use this in Save To operations.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the write operation is successful, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Beginning with OS X v10.6, the preferred method of referring to files is with a `file://` URL. Therefore, this method has been deprecated in favor of [write(to:options:originalContentsURL:)](write%28to_options_originalcontentsurl_%29.md).

## See Also

### Related Documentation

- [filename](filename.md): The filename of the file wrapper object

### Writing Files

- [write(to:options:originalContentsURL:)](write%28to_options_originalcontentsurl_%29.md): Recursively writes the entire contents of a file wrapper to a given file-system URL.

# writeToFile:atomically:updateFilenames: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Writes a file wrapper’s contents to a given file-system node.

> Use [writeToURL:options:originalContentsURL:error:](write%28to_options_originalcontentsurl_%29.md) instead.

## Declaration

```objectivec
- (BOOL) writeToFile:(NSString *) path atomically:(BOOL) atomicFlag updateFilenames:(BOOL) updateFilenamesFlag;
```

## Parameters

- `path`: Pathname of the file-system node to which the receiver’s contents are written.
- `atomicFlag`: [true](https://developer.apple.com/documentation/swift/true) to write the file safely so that:

  - An existing file is not overwritten
  - The method fails if the file cannot be written in its entirety

  [false](https://developer.apple.com/documentation/swift/false) to overwrite an existing file and ignore incomplete writes.
- `updateFilenamesFlag`: [true](https://developer.apple.com/documentation/swift/true) to update the receiver’s filenames (its filename and—for directory file wrappers—the filenames of its sub–file wrappers) be changed to the filenames of the corresponding nodes in the file system, after a successful write operation. Use this in Save or Save As operations.

  [false](https://developer.apple.com/documentation/swift/false) to specify that the receiver’s filenames not be updated. Use this in Save To operations.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the write operation is successful, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Beginning with OS X v10.6, the preferred method of referring to files is with a `file://` URL. Therefore, this method has been deprecated in favor of [writeToURL:options:originalContentsURL:error:](write%28to_options_originalcontentsurl_%29.md).

## See Also

### Related Documentation

- [filename](filename.md): The filename of the file wrapper object

### Writing Files

- [writeToURL:options:originalContentsURL:error:](write%28to_options_originalcontentsurl_%29.md): Recursively writes the entire contents of a file wrapper to a given file-system URL.
