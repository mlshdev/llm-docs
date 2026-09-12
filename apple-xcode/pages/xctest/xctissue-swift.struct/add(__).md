> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctissue-swift.struct/add(_:)](https://developer.apple.com/documentation/xctest/xctissue-swift.struct/add(_:))

# add(\_:)

**Framework:** XCTest  
**Kind:** Instance Method

Adds supporting data to an issue.

## Declaration

```swift
mutating func add(_ attachment: XCTAttachment)
```

## Parameters

- `attachment`: A data item that augments an issue, such as a file, image, screenshot, data blob, or ZIP file.

## See Also

### Issue Details

- [type](type.md): A value for classifying an issue that occurs during testing.
- [compactDescription](compactdescription.md): A concise description of the issue with no transient data, suitable for use in test run summaries and results aggregation across multiple test runs.
- [detailedDescription](detaileddescription.md): A detailed description of the issue that may include transient data, such as numbers, object identifiers, and timestamps, to help diagnose the issue.
- [sourceCodeContext](sourcecodecontext.md): The source code location for the issue, including the filename, line number, and call stack.
- [associatedError](associatederror.md): An optional error to associate with a test issue.
- [attachments](attachments.md): An array of data that augments an issue, such as files, images, screenshots, data blobs, or ZIP files.
