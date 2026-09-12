> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctsourcecodecontext](https://developer.apple.com/documentation/xctest/xctsourcecodecontext)

# XCTSourceCodeContext (Swift)

**Framework:** XCTest  
**Kind:** Class

An object that contains call stack and source code location details to provide context for a point of execution in a test.

## Declaration

```swift
class XCTSourceCodeContext
```

## Topics

### Initializers

- [init(callStack:location:)](xctsourcecodecontext/init%28callstack_location_%29.md): Initializes a new instance with a provided call stack and source code location.
- [init(callStackAddresses:location:)](xctsourcecodecontext/init%28callstackaddresses_location_%29.md): Initializes a new instance with an array of call stack addresses and a source code location.
- [init(location:)](xctsourcecodecontext/init%28location_%29.md): Initializes a new instance with a call stack from the executing thread and a provided source code location.
- [init()](xctsourcecodecontext/init%28%29.md): Initializes a new instance with a call stack from the executing thread and no location.

### Context Information

- [callStack](xctsourcecodecontext/callstack.md): An array of source code frames that describes the call stack when a test issue occurs.
- [location](xctsourcecodecontext/location.md): A representation of a location in source code where a test issue occurred.

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
- [XCTSourceCodeFrame](xctsourcecodeframe.md): An object that represents a single frame in a call stack that supports retrieval of symbol information for the address.
- [XCTSourceCodeLocation](xctsourcecodelocation.md): An object that contains a file URL and line number that represents a distinct location in source code.
- [XCTSourceCodeSymbolInfo](xctsourcecodesymbolinfo.md): An object that contains symbolication information for a specified frame in a call stack.

# XCTSourceCodeContext (Objective-C)

**Framework:** XCTest  
**Kind:** Class

An object that contains call stack and source code location details to provide context for a point of execution in a test.

## Declaration

```objectivec
@interface XCTSourceCodeContext : NSObject
```

## Topics

### Initializers

- [initWithCallStack:location:](xctsourcecodecontext/init%28callstack_location_%29.md): Initializes a new instance with a provided call stack and source code location.
- [initWithCallStackAddresses:location:](xctsourcecodecontext/init%28callstackaddresses_location_%29.md): Initializes a new instance with an array of call stack addresses and a source code location.
- [initWithLocation:](xctsourcecodecontext/init%28location_%29.md): Initializes a new instance with a call stack from the executing thread and a provided source code location.
- [init](xctsourcecodecontext/init%28%29.md): Initializes a new instance with a call stack from the executing thread and no location.

### Context Information

- [callStack](xctsourcecodecontext/callstack.md): An array of source code frames that describes the call stack when a test issue occurs.
- [location](xctsourcecodecontext/location.md): A representation of a location in source code where a test issue occurred.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Test Failures

- [XCTIssue](xctissuereference.md): An object that represents a test failure, and includes source code call stacks for test reporting and investigation.
- [XCTMutableIssue](xctmutableissue.md): A mutable object that represents a test failure, and includes source code call stacks for test reporting and investigation.
- [XCTSourceCodeFrame](xctsourcecodeframe.md): An object that represents a single frame in a call stack that supports retrieval of symbol information for the address.
- [XCTSourceCodeLocation](xctsourcecodelocation.md): An object that contains a file URL and line number that represents a distinct location in source code.
- [XCTSourceCodeSymbolInfo](xctsourcecodesymbolinfo.md): An object that contains symbolication information for a specified frame in a call stack.
