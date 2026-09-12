> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctissuereference/compactdescription](https://developer.apple.com/documentation/xctest/xctissuereference/compactdescription)

# compactDescription (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

A concise description of the issue with no transient data, suitable for use in test run summaries and results aggregation across multiple test runs.

## Declaration

```swift
var compactDescription: String { get }
```

## See Also

### Issue Details

- [type](type.md): A value for classifying an issue that occurs during testing.
- [detailedDescription](detaileddescription.md): A detailed description of the issue that may include transient data, such as numbers, object identifiers, and timestamps, to help diagnose the issue.
- [sourceCodeContext](sourcecodecontext.md): The source code location for the issue, including the filename, line number, and call stack.
- [associatedError](associatederror.md): An optional error to associate with a test issue.
- [attachments](attachments.md): An array of data that augments a test issue, such as files, images, screenshots, data blobs, or ZIP files.

# compactDescription (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

A concise description of the issue with no transient data, suitable for use in test run summaries and results aggregation across multiple test runs.

## Declaration

```objectivec
@property (copy, readonly) NSString * compactDescription;
```

## See Also

### Issue Details

- [type](type.md): A value for classifying an issue that occurs during testing.
- [detailedDescription](detaileddescription.md): A detailed description of the issue that may include transient data, such as numbers, object identifiers, and timestamps, to help diagnose the issue.
- [sourceCodeContext](sourcecodecontext.md): The source code location for the issue, including the filename, line number, and call stack.
- [associatedError](associatederror.md): An optional error to associate with a test issue.
- [attachments](attachments.md): An array of data that augments a test issue, such as files, images, screenshots, data blobs, or ZIP files.
