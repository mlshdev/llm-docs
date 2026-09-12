> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctsourcecodecontext/location](https://developer.apple.com/documentation/xctest/xctsourcecodecontext/location)

# location (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

A representation of a location in source code where a test issue occurred.

## Declaration

```swift
var location: XCTSourceCodeLocation? { get }
```

## See Also

### Context Information

- [callStack](callstack.md): An array of source code frames that describes the call stack when a test issue occurs.

# location (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

A representation of a location in source code where a test issue occurred.

## Declaration

```objectivec
@property (readonly, nullable) XCTSourceCodeLocation * location;
```

## See Also

### Context Information

- [callStack](callstack.md): An array of source code frames that describes the call stack when a test issue occurs.
