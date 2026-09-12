> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/sourcelocation/modulename](https://developer.apple.com/documentation/testing/sourcelocation/modulename)

# moduleName

**Framework:** Swift Testing  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

The name of the module containing the source file.

## Declaration

```swift
var moduleName: String { get }
```

<a id="discussion"></a>

## Discussion

The name of the module is derived from this instance’s [fileID](fileid.md) property. It consists of the substring of the file ID up to the first forward-slash character (`"/"`.) For example, if the value of this instance’s [fileID](fileid.md) property is `"FoodTruck/WheelTests.swift"`, the module name is `"FoodTruck"`.

The structure of file IDs is described in the documentation for the [#fileID](https://developer.apple.com/documentation/swift/fileID%28%29) macro in the Swift standard library.

## See Also

### Related Documentation

- [fileID](fileid.md): The file ID of the source file.
- [fileName](filename.md): The name of the source file.
- [#fileID](https://developer.apple.com/documentation/swift/fileID%28%29)
