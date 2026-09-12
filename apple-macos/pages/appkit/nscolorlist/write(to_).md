> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorlist/write(to:)](https://developer.apple.com/documentation/appkit/nscolorlist/write(to:))

# write(to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Saves the color list to the file at the specified URL.

## Declaration

```swift
func write(to url: URL?) throws
```

## Parameters

- `url`: The URL at which to store the color list. The URL must specify either a directory or file in the file system. Specify `nil` to save the color list to the user’s `~/Library/Colors` directory.

<a id="Discussion"></a>

## Discussion

If `url` represents a directory, this method saves the color list in that directory in a file with the name `.clr`, where  is the value of the [name](name-swift.property.md) property. If `url` represents a file, this method saves the color list using the name you provided.

## See Also

### Writing and Removing Color List Files

- [removeFile()](removefile%28%29.md): Removes the file from which the list was created, if the file is in a standard search path and owned by the user.
- [write(toFile:)](write%28tofile_%29.md): Deprecated. Saves the color list to the file at the specified path.

# writeToURL:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Saves the color list to the file at the specified URL.

## Declaration

```objectivec
- (BOOL) writeToURL:(NSURL *) url error:(NSError **) errPtr;
```

## Parameters

- `url`: The URL at which to store the color list. The URL must specify either a directory or file in the file system. Specify `nil` to save the color list to the user’s `~/Library/Colors` directory.
- `errPtr`: In Objective-C, a pointer to an error object variable, which you use to receive any error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the method saved the color list successfully or [false](https://developer.apple.com/documentation/swift/false) if there was an error.

<a id="Discussion"></a>

## Discussion

If `url` represents a directory, this method saves the color list in that directory in a file with the name `.clr`, where  is the value of the [name](name-swift.property.md) property. If `url` represents a file, this method saves the color list using the name you provided.

## See Also

### Writing and Removing Color List Files

- [removeFile](removefile%28%29.md): Removes the file from which the list was created, if the file is in a standard search path and owned by the user.
- [writeToFile:](write%28tofile_%29.md): Deprecated. Saves the color list to the file at the specified path.
