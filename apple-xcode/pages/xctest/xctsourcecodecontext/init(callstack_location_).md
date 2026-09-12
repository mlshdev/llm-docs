> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctsourcecodecontext/init(callstack:location:)](https://developer.apple.com/documentation/xctest/xctsourcecodecontext/init(callstack:location:))

# init(callStack:location:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Initializes a new instance with a provided call stack and source code location.

## Declaration

```swift
init(callStack: [XCTSourceCodeFrame], location: XCTSourceCodeLocation?)
```

## Parameters

- `callStack`: An array of source code frames that describe the call stack.
- `location`: A representation of a location in source code.

## See Also

### Initializers

- [init(callStackAddresses:location:)](init%28callstackaddresses_location_%29.md): Initializes a new instance with an array of call stack addresses and a source code location.
- [init(location:)](init%28location_%29.md): Initializes a new instance with a call stack from the executing thread and a provided source code location.
- [init()](init%28%29.md): Initializes a new instance with a call stack from the executing thread and no location.

# initWithCallStack:location: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Initializes a new instance with a provided call stack and source code location.

## Declaration

```objectivec
- (instancetype) initWithCallStack:(NSArray<XCTSourceCodeFrame *> *) callStack location:(XCTSourceCodeLocation *) location;
```

## Parameters

- `callStack`: An array of source code frames that describe the call stack.
- `location`: A representation of a location in source code.

## See Also

### Initializers

- [initWithCallStackAddresses:location:](init%28callstackaddresses_location_%29.md): Initializes a new instance with an array of call stack addresses and a source code location.
- [initWithLocation:](init%28location_%29.md): Initializes a new instance with a call stack from the executing thread and a provided source code location.
- [init](init%28%29.md): Initializes a new instance with a call stack from the executing thread and no location.
