> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilewritefileexistserror-swift.var](https://developer.apple.com/documentation/foundation/nsfilewritefileexistserror-swift.var)

# NSFileWriteFileExistsError

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Could not perform an operation because the destination file already exists.

## Declaration

```swift
var NSFileWriteFileExistsError: Int { get }
```

<a id="Discussion"></a>

## Discussion

This error can be produced by the [FileManager](filemanager.md) class’s copy, move, and link methods

## See Also

### Error Codes

- [NSFileNoSuchFileError](nsfilenosuchfileerror-swift.var.md): A filesystem operation was attempted on a non-existent file.
- [NSFileLockingError](nsfilelockingerror-swift.var.md): The file could not be locked.
- [NSFileReadUnknownError](nsfilereadunknownerror-swift.var.md): Could not read, for unknown reasons.
- [NSFileReadNoPermissionError](nsfilereadnopermissionerror-swift.var.md): Could not read because of a permission problem.
- [NSFileReadInvalidFileNameError](nsfilereadinvalidfilenameerror-swift.var.md): Could not read because of an invalid file name.
- [NSFileReadCorruptFileError](nsfilereadcorruptfileerror-swift.var.md): Could not read because of a corrupted file, bad format, or similar reason.
- [NSFileReadNoSuchFileError](nsfilereadnosuchfileerror-swift.var.md): Could not read because no such file was found.
- [NSFileReadInapplicableStringEncodingError](nsfilereadinapplicablestringencodingerror-swift.var.md): Could not read because the string encoding wasn’t applicable.
- [NSFileReadUnsupportedSchemeError](nsfilereadunsupportedschemeerror-swift.var.md): Could not read because the specified URL scheme is unsupported.
- [NSFileReadTooLargeError](nsfilereadtoolargeerror-swift.var.md): Could not read because the specified file was too large.
- [NSFileReadUnknownStringEncodingError](nsfilereadunknownstringencodingerror-swift.var.md): Could not read because the string coding of the file couldn’t be determined.
- [NSFileWriteUnknownError](nsfilewriteunknownerror-swift.var.md): Could not write, for unknown reasons.
- [NSFileWriteNoPermissionError](nsfilewritenopermissionerror-swift.var.md): Could not write because of a permission problem.
- [NSFileWriteInvalidFileNameError](nsfilewriteinvalidfilenameerror-swift.var.md): Could not write because of an invalid file name.
- [NSFileWriteInapplicableStringEncodingError](nsfilewriteinapplicablestringencodingerror-swift.var.md): Could not write because the string encoding was not applicable.
