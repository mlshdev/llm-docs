> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctmutableissue/compactdescription](https://developer.apple.com/documentation/xctest/xctmutableissue/compactdescription)

# compactDescription (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

A concise description of the issue with no transient data, suitable for use in test run summaries and results aggregation across multiple test runs.

## Declaration

```swift
var compactDescription: String { get set }
```

## See Also

### Issue Details

- [type](type.md): A value for classifying an issue that occurs during testing.
- [detailedDescription](detaileddescription.md): A detailed description of the issue that may include transient data, such as numbers, object identifiers, and timestamps, to help diagnose the issue.
- [sourceCodeContext](sourcecodecontext.md): The source code location for the issue, including the filename, line number, and call stack.
- [associatedError](associatederror.md): An optional error to associate with a test issue.
- [attachments](attachments.md): An array of data that augments an issue, such as files, images, screenshots, data blobs, or ZIP files.
- [add(\_:)](add%28__%29.md): Adds supporting data to an issue.

# compactDescription (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

A concise description of the issue with no transient data, suitable for use in test run summaries and results aggregation across multiple test runs.

## Declaration

```objectivec
@property (copy, readwrite) NSString * compactDescription;
```

## See Also

### Issue Details

- [type](type.md): A value for classifying an issue that occurs during testing.
- [detailedDescription](detaileddescription.md): A detailed description of the issue that may include transient data, such as numbers, object identifiers, and timestamps, to help diagnose the issue.
- [sourceCodeContext](sourcecodecontext.md): The source code location for the issue, including the filename, line number, and call stack.
- [associatedError](associatederror.md): An optional error to associate with a test issue.
- [attachments](attachments.md): An array of data that augments an issue, such as files, images, screenshots, data blobs, or ZIP files.
- [addAttachment:](add%28__%29.md): Adds supporting data to an issue.
