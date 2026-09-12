> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctissue-swift.struct](https://developer.apple.com/documentation/xctest/xctissue-swift.struct)

# XCTIssue

**Framework:** XCTest  
**Kind:** Structure

An object that represents a test failure, and includes source code call stacks for test reporting and investigation.

## Declaration

```swift
struct XCTIssue
```

## Topics

### Issue Types

- [XCTIssue.IssueType](xctissue-swift.struct/issuetype.md): Constants that indicate types of test failures, such as assertion failures, performance regressions, or thrown errors.

### Issue Details

- [type](xctissue-swift.struct/type.md): A value for classifying an issue that occurs during testing.
- [compactDescription](xctissue-swift.struct/compactdescription.md): A concise description of the issue with no transient data, suitable for use in test run summaries and results aggregation across multiple test runs.
- [detailedDescription](xctissue-swift.struct/detaileddescription.md): A detailed description of the issue that may include transient data, such as numbers, object identifiers, and timestamps, to help diagnose the issue.
- [sourceCodeContext](xctissue-swift.struct/sourcecodecontext.md): The source code location for the issue, including the filename, line number, and call stack.
- [associatedError](xctissue-swift.struct/associatederror.md): An optional error to associate with a test issue.
- [attachments](xctissue-swift.struct/attachments.md): An array of data that augments an issue, such as files, images, screenshots, data blobs, or ZIP files.
- [add(\_:)](xctissue-swift.struct/add%28__%29.md): Adds supporting data to an issue.

### Initializers

- [init(type:compactDescription:detailedDescription:sourceCodeContext:associatedError:attachments:severity:)](xctissue-swift.struct/init%28type_compactdescription_detaileddescription_sourcecodecontext_associatederror_attachments_severity_%29.md)

### Instance Properties

- [isFailure](xctissue-swift.struct/isfailure.md): Whether or not this issue should cause the test it’s associated with to be considered a failure.
- [severity](xctissue-swift.struct/severity-swift.property.md): The severity of the issue.

### Type Aliases

- [XCTIssue.Severity](xctissue-swift.struct/severity-swift.typealias.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Test Failures

- [XCTIssueReference](xctissuereference.md): An object that represents a test failure, and includes source code call stacks for test reporting and investigation.
- [XCTMutableIssue](xctmutableissue.md): A mutable object that represents a test failure, and includes source code call stacks for test reporting and investigation.
- [XCTSourceCodeContext](xctsourcecodecontext.md): An object that contains call stack and source code location details to provide context for a point of execution in a test.
- [XCTSourceCodeFrame](xctsourcecodeframe.md): An object that represents a single frame in a call stack that supports retrieval of symbol information for the address.
- [XCTSourceCodeLocation](xctsourcecodelocation.md): An object that contains a file URL and line number that represents a distinct location in source code.
- [XCTSourceCodeSymbolInfo](xctsourcecodesymbolinfo.md): An object that contains symbolication information for a specified frame in a call stack.
