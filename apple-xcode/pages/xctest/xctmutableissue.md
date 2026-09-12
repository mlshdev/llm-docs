> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctmutableissue](https://developer.apple.com/documentation/xctest/xctmutableissue)

# XCTMutableIssue (Swift)

**Framework:** XCTest  
**Kind:** Class

A mutable object that represents a test failure, and includes source code call stacks for test reporting and investigation.

## Declaration

```swift
class XCTMutableIssue
```

## Topics

### Issue Details

- [type](xctmutableissue/type.md): A value for classifying an issue that occurs during testing.
- [compactDescription](xctmutableissue/compactdescription.md): A concise description of the issue with no transient data, suitable for use in test run summaries and results aggregation across multiple test runs.
- [detailedDescription](xctmutableissue/detaileddescription.md): A detailed description of the issue that may include transient data, such as numbers, object identifiers, and timestamps, to help diagnose the issue.
- [sourceCodeContext](xctmutableissue/sourcecodecontext.md): The source code location for the issue, including the filename, line number, and call stack.
- [associatedError](xctmutableissue/associatederror.md): An optional error to associate with a test issue.
- [attachments](xctmutableissue/attachments.md): An array of data that augments an issue, such as files, images, screenshots, data blobs, or ZIP files.
- [add(\_:)](xctmutableissue/add%28__%29.md): Adds supporting data to an issue.

### Instance Properties

- [severity](xctmutableissue/severity.md)

## Relationships

### Inherits From

- [XCTIssueReference](xctissuereference.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSMutableCopying](https://developer.apple.com/documentation/foundation/nsmutablecopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Test Failures

- [XCTIssue](xctissue-swift.struct.md): An object that represents a test failure, and includes source code call stacks for test reporting and investigation.
- [XCTIssueReference](xctissuereference.md): An object that represents a test failure, and includes source code call stacks for test reporting and investigation.
- [XCTSourceCodeContext](xctsourcecodecontext.md): An object that contains call stack and source code location details to provide context for a point of execution in a test.
- [XCTSourceCodeFrame](xctsourcecodeframe.md): An object that represents a single frame in a call stack that supports retrieval of symbol information for the address.
- [XCTSourceCodeLocation](xctsourcecodelocation.md): An object that contains a file URL and line number that represents a distinct location in source code.
- [XCTSourceCodeSymbolInfo](xctsourcecodesymbolinfo.md): An object that contains symbolication information for a specified frame in a call stack.

# XCTMutableIssue (Objective-C)

**Framework:** XCTest  
**Kind:** Class

A mutable object that represents a test failure, and includes source code call stacks for test reporting and investigation.

## Declaration

```objectivec
@interface XCTMutableIssue : XCTIssue
```

## Topics

### Issue Details

- [type](xctmutableissue/type.md): A value for classifying an issue that occurs during testing.
- [compactDescription](xctmutableissue/compactdescription.md): A concise description of the issue with no transient data, suitable for use in test run summaries and results aggregation across multiple test runs.
- [detailedDescription](xctmutableissue/detaileddescription.md): A detailed description of the issue that may include transient data, such as numbers, object identifiers, and timestamps, to help diagnose the issue.
- [sourceCodeContext](xctmutableissue/sourcecodecontext.md): The source code location for the issue, including the filename, line number, and call stack.
- [associatedError](xctmutableissue/associatederror.md): An optional error to associate with a test issue.
- [attachments](xctmutableissue/attachments.md): An array of data that augments an issue, such as files, images, screenshots, data blobs, or ZIP files.
- [addAttachment:](xctmutableissue/add%28__%29.md): Adds supporting data to an issue.

### Instance Properties

- [severity](xctmutableissue/severity.md)

## Relationships

### Inherits From

- [XCTIssue](xctissuereference.md)

## See Also

### Test Failures

- [XCTIssue](xctissuereference.md): An object that represents a test failure, and includes source code call stacks for test reporting and investigation.
- [XCTSourceCodeContext](xctsourcecodecontext.md): An object that contains call stack and source code location details to provide context for a point of execution in a test.
- [XCTSourceCodeFrame](xctsourcecodeframe.md): An object that represents a single frame in a call stack that supports retrieval of symbol information for the address.
- [XCTSourceCodeLocation](xctsourcecodelocation.md): An object that contains a file URL and line number that represents a distinct location in source code.
- [XCTSourceCodeSymbolInfo](xctsourcecodesymbolinfo.md): An object that contains symbolication information for a specified frame in a call stack.
