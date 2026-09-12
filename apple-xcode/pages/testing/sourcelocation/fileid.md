> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/sourcelocation/fileid](https://developer.apple.com/documentation/testing/sourcelocation/fileid)

# fileID

**Framework:** Swift Testing  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

The file ID of the source file.

## Declaration

```swift
var fileID: String { get set }
```

<a id="discussion"></a>

## Discussion

> **Precondition**

> The value of this property must not be empty and must be formatted as described in the documentation for the [#fileID](https://developer.apple.com/documentation/swift/fileID%28%29). macro in the Swift standard library.

## See Also

### Related Documentation

- [moduleName](modulename.md): The name of the module containing the source file.
- [fileName](filename.md): The name of the source file.
