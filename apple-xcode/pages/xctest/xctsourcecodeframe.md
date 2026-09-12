> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctsourcecodeframe](https://developer.apple.com/documentation/xctest/xctsourcecodeframe)

# XCTSourceCodeFrame (Swift)

**Framework:** XCTest  
**Kind:** Class

An object that represents a single frame in a call stack that supports retrieval of symbol information for the address.

## Declaration

```swift
class XCTSourceCodeFrame
```

## Topics

### Initializers

- [init(address:symbolInfo:)](xctsourcecodeframe/init%28address_symbolinfo_%29.md): Initializes an instance with a frame address and symbol information.
- [init(address:)](xctsourcecodeframe/init%28address_%29.md): Initializes an instance with a frame address.

### Frame Information

- [address](xctsourcecodeframe/address.md): An address that represents a specific frame in a call stack.
- [symbolInfo](xctsourcecodeframe/symbolinfo.md): Symbolication information for the referenced frame.
- [symbolicationError](xctsourcecodeframe/symbolicationerror.md): An optional error that describes a failed symbolication attempt.
- [symbolInfo()](xctsourcecodeframe/symbolinfo%28%29.md): Attempts to get symbol information for the address.

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
- [XCTSourceCodeLocation](xctsourcecodelocation.md): An object that contains a file URL and line number that represents a distinct location in source code.
- [XCTSourceCodeSymbolInfo](xctsourcecodesymbolinfo.md): An object that contains symbolication information for a specified frame in a call stack.

# XCTSourceCodeFrame (Objective-C)

**Framework:** XCTest  
**Kind:** Class

An object that represents a single frame in a call stack that supports retrieval of symbol information for the address.

## Declaration

```objectivec
@interface XCTSourceCodeFrame : NSObject
```

## Topics

### Initializers

- [initWithAddress:symbolInfo:](xctsourcecodeframe/init%28address_symbolinfo_%29.md): Initializes an instance with a frame address and symbol information.
- [initWithAddress:](xctsourcecodeframe/init%28address_%29.md): Initializes an instance with a frame address.

### Frame Information

- [address](xctsourcecodeframe/address.md): An address that represents a specific frame in a call stack.
- [symbolInfo](xctsourcecodeframe/symbolinfo.md): Symbolication information for the referenced frame.
- [symbolicationError](xctsourcecodeframe/symbolicationerror.md): An optional error that describes a failed symbolication attempt.
- [symbolInfoWithError:](xctsourcecodeframe/symbolinfo%28%29.md): Attempts to get symbol information for the address.

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
- [XCTSourceCodeLocation](xctsourcecodelocation.md): An object that contains a file URL and line number that represents a distinct location in source code.
- [XCTSourceCodeSymbolInfo](xctsourcecodesymbolinfo.md): An object that contains symbolication information for a specified frame in a call stack.
