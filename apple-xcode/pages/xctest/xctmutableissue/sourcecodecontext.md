> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctmutableissue/sourcecodecontext](https://developer.apple.com/documentation/xctest/xctmutableissue/sourcecodecontext)

# sourceCodeContext (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

The source code location for the issue, including the filename, line number, and call stack.

## Declaration

```swift
var sourceCodeContext: XCTSourceCodeContext { get set }
```

## See Also

### Issue Details

- [type](type.md): A value for classifying an issue that occurs during testing.
- [compactDescription](compactdescription.md): A concise description of the issue with no transient data, suitable for use in test run summaries and results aggregation across multiple test runs.
- [detailedDescription](detaileddescription.md): A detailed description of the issue that may include transient data, such as numbers, object identifiers, and timestamps, to help diagnose the issue.
- [associatedError](associatederror.md): An optional error to associate with a test issue.
- [attachments](attachments.md): An array of data that augments an issue, such as files, images, screenshots, data blobs, or ZIP files.
- [add(\_:)](add%28__%29.md): Adds supporting data to an issue.

# sourceCodeContext (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The source code location for the issue, including the filename, line number, and call stack.

## Declaration

```objectivec
@property (strong, readwrite) XCTSourceCodeContext * sourceCodeContext;
```

## See Also

### Issue Details

- [type](type.md): A value for classifying an issue that occurs during testing.
- [compactDescription](compactdescription.md): A concise description of the issue with no transient data, suitable for use in test run summaries and results aggregation across multiple test runs.
- [detailedDescription](detaileddescription.md): A detailed description of the issue that may include transient data, such as numbers, object identifiers, and timestamps, to help diagnose the issue.
- [associatedError](associatederror.md): An optional error to associate with a test issue.
- [attachments](attachments.md): An array of data that augments an issue, such as files, images, screenshots, data blobs, or ZIP files.
- [addAttachment:](add%28__%29.md): Adds supporting data to an issue.
