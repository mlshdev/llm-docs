> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctissuereference/attachments](https://developer.apple.com/documentation/xctest/xctissuereference/attachments)

# attachments (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

An array of data that augments a test issue, such as files, images, screenshots, data blobs, or ZIP files.

## Declaration

```swift
var attachments: [XCTAttachment] { get }
```

## See Also

### Issue Details

- [type](type.md): A value for classifying an issue that occurs during testing.
- [compactDescription](compactdescription.md): A concise description of the issue with no transient data, suitable for use in test run summaries and results aggregation across multiple test runs.
- [detailedDescription](detaileddescription.md): A detailed description of the issue that may include transient data, such as numbers, object identifiers, and timestamps, to help diagnose the issue.
- [sourceCodeContext](sourcecodecontext.md): The source code location for the issue, including the filename, line number, and call stack.
- [associatedError](associatederror.md): An optional error to associate with a test issue.

# attachments (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

An array of data that augments a test issue, such as files, images, screenshots, data blobs, or ZIP files.

## Declaration

```objectivec
@property (copy, readonly) NSArray<XCTAttachment *> * attachments;
```

## See Also

### Issue Details

- [type](type.md): A value for classifying an issue that occurs during testing.
- [compactDescription](compactdescription.md): A concise description of the issue with no transient data, suitable for use in test run summaries and results aggregation across multiple test runs.
- [detailedDescription](detaileddescription.md): A detailed description of the issue that may include transient data, such as numbers, object identifiers, and timestamps, to help diagnose the issue.
- [sourceCodeContext](sourcecodecontext.md): The source code location for the issue, including the filename, line number, and call stack.
- [associatedError](associatederror.md): An optional error to associate with a test issue.
