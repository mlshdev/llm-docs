> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctsourcecodecontext/init(callstackaddresses:location:)](https://developer.apple.com/documentation/xctest/xctsourcecodecontext/init(callstackaddresses:location:))

# init(callStackAddresses:location:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Initializes a new instance with an array of call stack addresses and a source code location.

## Declaration

```swift
convenience init(callStackAddresses: [NSNumber], location: XCTSourceCodeLocation?)
```

## Parameters

- `callStackAddresses`: An array of call stack return addresses.
- `location`: A representation of a location in source code.

<a id="Discussion"></a>

## Discussion

The call stack addresses could be from `NSThread.callStackReturnAddresses`, `NSException.callStackReturnAddresses`, or another source.

## See Also

### Initializers

- [init(callStack:location:)](init%28callstack_location_%29.md): Initializes a new instance with a provided call stack and source code location.
- [init(location:)](init%28location_%29.md): Initializes a new instance with a call stack from the executing thread and a provided source code location.
- [init()](init%28%29.md): Initializes a new instance with a call stack from the executing thread and no location.

# initWithCallStackAddresses:location: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Initializes a new instance with an array of call stack addresses and a source code location.

## Declaration

```objectivec
- (instancetype) initWithCallStackAddresses:(NSArray<NSNumber *> *) callStackAddresses location:(XCTSourceCodeLocation *) location;
```

## Parameters

- `callStackAddresses`: An array of call stack return addresses.
- `location`: A representation of a location in source code.

<a id="Discussion"></a>

## Discussion

The call stack addresses could be from `NSThread.callStackReturnAddresses`, `NSException.callStackReturnAddresses`, or another source.

## See Also

### Initializers

- [initWithCallStack:location:](init%28callstack_location_%29.md): Initializes a new instance with a provided call stack and source code location.
- [initWithLocation:](init%28location_%29.md): Initializes a new instance with a call stack from the executing thread and a provided source code location.
- [init](init%28%29.md): Initializes a new instance with a call stack from the executing thread and no location.
