> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorlist/removefile()](https://developer.apple.com/documentation/appkit/nscolorlist/removefile())

# removeFile() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the file from which the list was created, if the file is in a standard search path and owned by the user.

## Declaration

```swift
func removeFile()
```

<a id="Discussion"></a>

## Discussion

In addition to removing the file, this method removes the color list from the contents of the [availableColorLists](availablecolorlists.md) property. If there are no outstanding references to the color list, this method might also deallocate the object.

## See Also

### Writing and Removing Color List Files

- [write(to:)](write%28to_%29.md): Saves the color list to the file at the specified URL.
- [write(toFile:)](write%28tofile_%29.md): Deprecated. Saves the color list to the file at the specified path.

# removeFile (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the file from which the list was created, if the file is in a standard search path and owned by the user.

## Declaration

```objectivec
- (void) removeFile;
```

<a id="Discussion"></a>

## Discussion

In addition to removing the file, this method removes the color list from the contents of the [availableColorLists](availablecolorlists.md) property. If there are no outstanding references to the color list, this method might also deallocate the object.

## See Also

### Writing and Removing Color List Files

- [writeToURL:error:](write%28to_%29.md): Saves the color list to the file at the specified URL.
- [writeToFile:](write%28tofile_%29.md): Deprecated. Saves the color list to the file at the specified path.
