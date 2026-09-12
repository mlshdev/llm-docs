> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctsourcecodecontext/init(location:)](https://developer.apple.com/documentation/xctest/xctsourcecodecontext/init(location:))

# init(location:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Initializes a new instance with a call stack from the executing thread and a provided source code location.

## Declaration

```swift
convenience init(location: XCTSourceCodeLocation?)
```

## Parameters

- `location`: A representation of a location in source code.

<a id="Discussion"></a>

## Discussion

The system derives the call stack from `NSThread.callStackReturnAddresses.`

## See Also

### Initializers

- [init(callStack:location:)](init%28callstack_location_%29.md): Initializes a new instance with a provided call stack and source code location.
- [init(callStackAddresses:location:)](init%28callstackaddresses_location_%29.md): Initializes a new instance with an array of call stack addresses and a source code location.
- [init()](init%28%29.md): Initializes a new instance with a call stack from the executing thread and no location.

# initWithLocation: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Initializes a new instance with a call stack from the executing thread and a provided source code location.

## Declaration

```objectivec
- (instancetype) initWithLocation:(XCTSourceCodeLocation *) location;
```

## Parameters

- `location`: A representation of a location in source code.

<a id="Discussion"></a>

## Discussion

The system derives the call stack from `NSThread.callStackReturnAddresses.`

## See Also

### Initializers

- [initWithCallStack:location:](init%28callstack_location_%29.md): Initializes a new instance with a provided call stack and source code location.
- [initWithCallStackAddresses:location:](init%28callstackaddresses_location_%29.md): Initializes a new instance with an array of call stack addresses and a source code location.
- [init](init%28%29.md): Initializes a new instance with a call stack from the executing thread and no location.
