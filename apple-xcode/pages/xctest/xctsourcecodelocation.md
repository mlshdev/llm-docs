> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctsourcecodelocation](https://developer.apple.com/documentation/xctest/xctsourcecodelocation)

# XCTSourceCodeLocation (Swift)

**Framework:** XCTest  
**Kind:** Class

An object that contains a file URL and line number that represents a distinct location in source code.

## Declaration

```swift
class XCTSourceCodeLocation
```

## Topics

### Initializers

- [init(fileURL:lineNumber:)](xctsourcecodelocation/init%28fileurl_linenumber_%29.md): Initializes a new instance with a file URL and a line number.
- [init(filePath:lineNumber:)](xctsourcecodelocation/init%28filepath_linenumber_%29-3hzmr.md): Initializes a new instance with a file path and a line number.
- [init(filePath:lineNumber:)](xctsourcecodelocation/init%28filepath_linenumber_%29-8qw52.md): Initializes a new instance with a file path and a line number.

### Source Location Information

- [fileURL](xctsourcecodelocation/fileurl.md): A file URL that represents the file-system location of the source code file.
- [lineNumber](xctsourcecodelocation/linenumber.md): An integer that represents a line of code in a source code file.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Test Failures

- [XCTIssue](xctissue-swift.struct.md): An object that represents a test failure, and includes source code call stacks for test reporting and investigation.
- [XCTIssueReference](xctissuereference.md): An object that represents a test failure, and includes source code call stacks for test reporting and investigation.
- [XCTMutableIssue](xctmutableissue.md): A mutable object that represents a test failure, and includes source code call stacks for test reporting and investigation.
- [XCTSourceCodeContext](xctsourcecodecontext.md): An object that contains call stack and source code location details to provide context for a point of execution in a test.
- [XCTSourceCodeFrame](xctsourcecodeframe.md): An object that represents a single frame in a call stack that supports retrieval of symbol information for the address.
- [XCTSourceCodeSymbolInfo](xctsourcecodesymbolinfo.md): An object that contains symbolication information for a specified frame in a call stack.

# XCTSourceCodeLocation (Objective-C)

**Framework:** XCTest  
**Kind:** Class

An object that contains a file URL and line number that represents a distinct location in source code.

## Declaration

```objectivec
@interface XCTSourceCodeLocation : NSObject
```

## Topics

### Initializers

- [initWithFileURL:lineNumber:](xctsourcecodelocation/init%28fileurl_linenumber_%29.md): Initializes a new instance with a file URL and a line number.
- [initWithFilePath:lineNumber:](xctsourcecodelocation/init%28filepath_linenumber_%29-3hzmr.md): Initializes a new instance with a file path and a line number.

### Source Location Information

- [fileURL](xctsourcecodelocation/fileurl.md): A file URL that represents the file-system location of the source code file.
- [lineNumber](xctsourcecodelocation/linenumber.md): An integer that represents a line of code in a source code file.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Test Failures

- [XCTIssue](xctissuereference.md): An object that represents a test failure, and includes source code call stacks for test reporting and investigation.
- [XCTMutableIssue](xctmutableissue.md): A mutable object that represents a test failure, and includes source code call stacks for test reporting and investigation.
- [XCTSourceCodeContext](xctsourcecodecontext.md): An object that contains call stack and source code location details to provide context for a point of execution in a test.
- [XCTSourceCodeFrame](xctsourcecodeframe.md): An object that represents a single frame in a call stack that supports retrieval of symbol information for the address.
- [XCTSourceCodeSymbolInfo](xctsourcecodesymbolinfo.md): An object that contains symbolication information for a specified frame in a call stack.
