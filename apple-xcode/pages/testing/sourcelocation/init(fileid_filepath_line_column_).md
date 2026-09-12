> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/sourcelocation/init(fileid:filepath:line:column:)](https://developer.apple.com/documentation/testing/sourcelocation/init(fileid:filepath:line:column:))

# init(fileID:filePath:line:column:)

**Framework:** Swift Testing  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Initialize an instance of this type with the specified location details.

## Declaration

```swift
init(fileID: String, filePath: String, line: Int, column: Int)
```

## Parameters

- `fileID`: The file ID of the source file, using the format described in the documentation for the [#fileID](https://developer.apple.com/documentation/swift/fileID%28%29) macro in the Swift standard library.
- `filePath`: The path to the source file.
- `line`: The line in the source file. Must be greater than `0`.
- `column`: The column in the source file. Must be greater than `0`.

<a id="discussion"></a>

## Discussion

> **Precondition**

> `fileID` must not be empty and must be formatted as described in the documentation for [#fileID](https://developer.apple.com/documentation/swift/fileID%28%29).

> **Precondition**

> `line` must be greater than `0`.

> **Precondition**

> `column` must be greater than `0`.
