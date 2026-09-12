> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctissuereference/type](https://developer.apple.com/documentation/xctest/xctissuereference/type)

# type (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

A value for classifying an issue that occurs during testing.

## Declaration

```swift
var type: XCTIssueReference.IssueType { get }
```

## See Also

### Issue Details

- [compactDescription](compactdescription.md): A concise description of the issue with no transient data, suitable for use in test run summaries and results aggregation across multiple test runs.
- [detailedDescription](detaileddescription.md): A detailed description of the issue that may include transient data, such as numbers, object identifiers, and timestamps, to help diagnose the issue.
- [sourceCodeContext](sourcecodecontext.md): The source code location for the issue, including the filename, line number, and call stack.
- [associatedError](associatederror.md): An optional error to associate with a test issue.
- [attachments](attachments.md): An array of data that augments a test issue, such as files, images, screenshots, data blobs, or ZIP files.

# type (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

A value for classifying an issue that occurs during testing.

## Declaration

```objectivec
@property (readonly) XCTIssueType type;
```

## See Also

### Issue Details

- [compactDescription](compactdescription.md): A concise description of the issue with no transient data, suitable for use in test run summaries and results aggregation across multiple test runs.
- [detailedDescription](detaileddescription.md): A detailed description of the issue that may include transient data, such as numbers, object identifiers, and timestamps, to help diagnose the issue.
- [sourceCodeContext](sourcecodecontext.md): The source code location for the issue, including the filename, line number, and call stack.
- [associatedError](associatederror.md): An optional error to associate with a test issue.
- [attachments](attachments.md): An array of data that augments a test issue, such as files, images, screenshots, data blobs, or ZIP files.
