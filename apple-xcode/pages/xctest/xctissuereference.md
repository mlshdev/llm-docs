> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctissuereference](https://developer.apple.com/documentation/xctest/xctissuereference)

# XCTIssueReference (Swift)

**Framework:** XCTest  
**Kind:** Class

An object that represents a test failure, and includes source code call stacks for test reporting and investigation.

## Declaration

```swift
class XCTIssueReference
```

<a id="overview"></a>

## Overview

In Swift, `XCTIssueReference` bridges to the Objective-C class `XCTIssue`. When you need reference semantics in your Swift test handling, use `XCTIssueReference`; otherwise, use the Swift value semantic [XCTIssue](xctissue-swift.struct.md). In Objective-C, `XCTIssue` supports bridging to Swift with `XCTIssueReference`.

## Topics

### Initializers

- [init(type:compactDescription:)](xctissuereference/init%28type_compactdescription_%29.md): Creates an issue with a compact description for a test failure.
- [init(type:compactDescription:detailedDescription:sourceCodeContext:associatedError:attachments:)](xctissuereference/init%28type_compactdescription_detaileddescription_sourcecodecontext_associatederror_attachments_%29.md): Creates an issue for a test failure, with descriptions, source code location, error, and attachments.
- [init(type:compactDescription:detailedDescription:sourceCodeContext:associatedError:attachments:severity:)](xctissuereference/init%28type_compactdescription_detaileddescription_sourcecodecontext_associatederror_attachments_severity_%29.md)
- [init(type:compactDescription:severity:)](xctissuereference/init%28type_compactdescription_severity_%29.md)

### Issue Types

- [XCTIssueReference.IssueType](xctissuereference/issuetype.md): Constants that indicate types of test failures, such as assertion failures, performance regressions, or thrown errors.

### Issue Details

- [type](xctissuereference/type.md): A value for classifying an issue that occurs during testing.
- [compactDescription](xctissuereference/compactdescription.md): A concise description of the issue with no transient data, suitable for use in test run summaries and results aggregation across multiple test runs.
- [detailedDescription](xctissuereference/detaileddescription.md): A detailed description of the issue that may include transient data, such as numbers, object identifiers, and timestamps, to help diagnose the issue.
- [sourceCodeContext](xctissuereference/sourcecodecontext.md): The source code location for the issue, including the filename, line number, and call stack.
- [associatedError](xctissuereference/associatederror.md): An optional error to associate with a test issue.
- [attachments](xctissuereference/attachments.md): An array of data that augments a test issue, such as files, images, screenshots, data blobs, or ZIP files.

### Instance Properties

- [isFailure](xctissuereference/isfailure.md): Whether or not this issue should cause the test it’s associated with to be considered a failure.
- [severity](xctissuereference/severity-swift.property.md): The severity of the issue.

### Enumerations

- [XCTIssueReference.Severity](xctissuereference/severity-swift.enum.md): An enum representing the severity of a test issue.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [XCTMutableIssue](xctmutableissue.md)

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
- [XCTMutableIssue](xctmutableissue.md): A mutable object that represents a test failure, and includes source code call stacks for test reporting and investigation.
- [XCTSourceCodeContext](xctsourcecodecontext.md): An object that contains call stack and source code location details to provide context for a point of execution in a test.
- [XCTSourceCodeFrame](xctsourcecodeframe.md): An object that represents a single frame in a call stack that supports retrieval of symbol information for the address.
- [XCTSourceCodeLocation](xctsourcecodelocation.md): An object that contains a file URL and line number that represents a distinct location in source code.
- [XCTSourceCodeSymbolInfo](xctsourcecodesymbolinfo.md): An object that contains symbolication information for a specified frame in a call stack.

# XCTIssue (Objective-C)

**Framework:** XCTest  
**Kind:** Class

An object that represents a test failure, and includes source code call stacks for test reporting and investigation.

## Declaration

```objectivec
@interface XCTIssue : NSObject
```

<a id="overview"></a>

## Overview

In Swift, `XCTIssueReference` bridges to the Objective-C class `XCTIssue`. When you need reference semantics in your Swift test handling, use `XCTIssueReference`; otherwise, use the Swift value semantic [XCTIssue](xctissue-swift.struct.md). In Objective-C, `XCTIssue` supports bridging to Swift with `XCTIssueReference`.

## Topics

### Initializers

- [initWithType:compactDescription:](xctissuereference/init%28type_compactdescription_%29.md): Creates an issue with a compact description for a test failure.
- [initWithType:compactDescription:detailedDescription:sourceCodeContext:associatedError:attachments:](xctissuereference/init%28type_compactdescription_detaileddescription_sourcecodecontext_associatederror_attachments_%29.md): Creates an issue for a test failure, with descriptions, source code location, error, and attachments.

### Issue Types

- [XCTIssueType](xctissuereference/issuetype.md): Constants that indicate types of test failures, such as assertion failures, performance regressions, or thrown errors.

### Issue Details

- [type](xctissuereference/type.md): A value for classifying an issue that occurs during testing.
- [compactDescription](xctissuereference/compactdescription.md): A concise description of the issue with no transient data, suitable for use in test run summaries and results aggregation across multiple test runs.
- [detailedDescription](xctissuereference/detaileddescription.md): A detailed description of the issue that may include transient data, such as numbers, object identifiers, and timestamps, to help diagnose the issue.
- [sourceCodeContext](xctissuereference/sourcecodecontext.md): The source code location for the issue, including the filename, line number, and call stack.
- [associatedError](xctissuereference/associatederror.md): An optional error to associate with a test issue.
- [attachments](xctissuereference/attachments.md): An array of data that augments a test issue, such as files, images, screenshots, data blobs, or ZIP files.

### Instance Properties

- [isFailure](xctissuereference/isfailure.md): Whether or not this issue should cause the test it’s associated with to be considered a failure.
- [severity](xctissuereference/severity-swift.property.md): The severity of the issue.

### Instance Methods

- [initWithType:compactDescription:detailedDescription:sourceCodeContext:associatedError:attachments:severity:](xctissuereference/init%28type_compactdescription_detaileddescription_sourcecodecontext_associatederror_attachments_severity_%29.md)
- [initWithType:compactDescription:severity:](xctissuereference/init%28type_compactdescription_severity_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [XCTMutableIssue](xctmutableissue.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSMutableCopying](https://developer.apple.com/documentation/foundation/nsmutablecopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Test Failures

- [XCTMutableIssue](xctmutableissue.md): A mutable object that represents a test failure, and includes source code call stacks for test reporting and investigation.
- [XCTSourceCodeContext](xctsourcecodecontext.md): An object that contains call stack and source code location details to provide context for a point of execution in a test.
- [XCTSourceCodeFrame](xctsourcecodeframe.md): An object that represents a single frame in a call stack that supports retrieval of symbol information for the address.
- [XCTSourceCodeLocation](xctsourcecodelocation.md): An object that contains a file URL and line number that represents a distinct location in source code.
- [XCTSourceCodeSymbolInfo](xctsourcecodesymbolinfo.md): An object that contains symbolication information for a specified frame in a call stack.
