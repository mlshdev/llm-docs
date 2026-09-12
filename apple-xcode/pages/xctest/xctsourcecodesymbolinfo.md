> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctsourcecodesymbolinfo](https://developer.apple.com/documentation/xctest/xctsourcecodesymbolinfo)

# XCTSourceCodeSymbolInfo (Swift)

**Framework:** XCTest  
**Kind:** Class

An object that contains symbolication information for a specified frame in a call stack.

## Declaration

```swift
class XCTSourceCodeSymbolInfo
```

## Topics

### Initializers

- [init(imageName:symbolName:location:)](xctsourcecodesymbolinfo/init%28imagename_symbolname_location_%29.md): Initializes an instance with a binary image name, source code location, and symbol name.

### Symbol Information

- [imageName](xctsourcecodesymbolinfo/imagename.md): The name of the binary image that contains the symbolicated code.
- [location](xctsourcecodesymbolinfo/location.md): A representation of a location in source code where a test issue occurred.
- [symbolName](xctsourcecodesymbolinfo/symbolname.md): A string that represents a human-readable symbol in source code.

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
- [XCTSourceCodeLocation](xctsourcecodelocation.md): An object that contains a file URL and line number that represents a distinct location in source code.

# XCTSourceCodeSymbolInfo (Objective-C)

**Framework:** XCTest  
**Kind:** Class

An object that contains symbolication information for a specified frame in a call stack.

## Declaration

```objectivec
@interface XCTSourceCodeSymbolInfo : NSObject
```

## Topics

### Initializers

- [initWithImageName:symbolName:location:](xctsourcecodesymbolinfo/init%28imagename_symbolname_location_%29.md): Initializes an instance with a binary image name, source code location, and symbol name.

### Symbol Information

- [imageName](xctsourcecodesymbolinfo/imagename.md): The name of the binary image that contains the symbolicated code.
- [location](xctsourcecodesymbolinfo/location.md): A representation of a location in source code where a test issue occurred.
- [symbolName](xctsourcecodesymbolinfo/symbolname.md): A string that represents a human-readable symbol in source code.

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
- [XCTSourceCodeLocation](xctsourcecodelocation.md): An object that contains a file URL and line number that represents a distinct location in source code.
