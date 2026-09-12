> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorlist/write(tofile:)](https://developer.apple.com/documentation/appkit/nscolorlist/write(tofile:))

# write(toFile:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Saves the color list to the file at the specified path.

> Use [write(to:)](write%28to_%29.md) instead.

## Declaration

```swift
func write(toFile path: String?) -> Bool
```

## Parameters

- `path`: The path at which to save the color list. If `path` is a directory, the receiver is saved in a file named listname`.clr` in that directory (where listname is the name with which the receiver was initialized).

  If `path` includes a filename, this method saves the file under that name. If `path` is `nil`,  the file is saved as listname`.clr` in the user’s private colorlists directory.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) upon success and [false](https://developer.apple.com/documentation/swift/false) if the method fails to write the file.

## See Also

### Writing and Removing Color List Files

- [write(to:)](write%28to_%29.md): Saves the color list to the file at the specified URL.
- [removeFile()](removefile%28%29.md): Removes the file from which the list was created, if the file is in a standard search path and owned by the user.

# writeToFile: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Saves the color list to the file at the specified path.

> Use [writeToURL:error:](write%28to_%29.md) instead.

## Declaration

```objectivec
- (BOOL) writeToFile:(NSString *) path;
```

## Parameters

- `path`: The path at which to save the color list. If `path` is a directory, the receiver is saved in a file named listname`.clr` in that directory (where listname is the name with which the receiver was initialized).

  If `path` includes a filename, this method saves the file under that name. If `path` is `nil`,  the file is saved as listname`.clr` in the user’s private colorlists directory.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) upon success and [false](https://developer.apple.com/documentation/swift/false) if the method fails to write the file.

## See Also

### Writing and Removing Color List Files

- [writeToURL:error:](write%28to_%29.md): Saves the color list to the file at the specified URL.
- [removeFile](removefile%28%29.md): Removes the file from which the list was created, if the file is in a standard search path and owned by the user.
