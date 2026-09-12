> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctsourcecodecontext/init()](https://developer.apple.com/documentation/xctest/xctsourcecodecontext/init())

# init() (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Initializes a new instance with a call stack from the executing thread and no location.

## Declaration

```swift
convenience init()
```

<a id="Discussion"></a>

## Discussion

The system derives the call stack from `NSThread.callStackReturnAddresses.`

## See Also

### Initializers

- [init(callStack:location:)](init%28callstack_location_%29.md): Initializes a new instance with a provided call stack and source code location.
- [init(callStackAddresses:location:)](init%28callstackaddresses_location_%29.md): Initializes a new instance with an array of call stack addresses and a source code location.
- [init(location:)](init%28location_%29.md): Initializes a new instance with a call stack from the executing thread and a provided source code location.

# init (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Initializes a new instance with a call stack from the executing thread and no location.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="Discussion"></a>

## Discussion

The system derives the call stack from `NSThread.callStackReturnAddresses.`

## See Also

### Initializers

- [initWithCallStack:location:](init%28callstack_location_%29.md): Initializes a new instance with a provided call stack and source code location.
- [initWithCallStackAddresses:location:](init%28callstackaddresses_location_%29.md): Initializes a new instance with an array of call stack addresses and a source code location.
- [initWithLocation:](init%28location_%29.md): Initializes a new instance with a call stack from the executing thread and a provided source code location.
