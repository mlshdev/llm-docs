> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctsourcecodeframe/init(address:symbolinfo:)](https://developer.apple.com/documentation/xctest/xctsourcecodeframe/init(address:symbolinfo:))

# init(address:symbolInfo:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Initializes an instance with a frame address and symbol information.

## Declaration

```swift
init(address: UInt64, symbolInfo: XCTSourceCodeSymbolInfo?)
```

## Parameters

- `address`: An address that represents a specific frame in a call stack.
- `symbolInfo`: Symbolication information for the referenced frame.

## See Also

### Initializers

- [init(address:)](init%28address_%29.md): Initializes an instance with a frame address.

# initWithAddress:symbolInfo: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Initializes an instance with a frame address and symbol information.

## Declaration

```objectivec
- (instancetype) initWithAddress:(uint64_t) address symbolInfo:(XCTSourceCodeSymbolInfo *) symbolInfo;
```

## Parameters

- `address`: An address that represents a specific frame in a call stack.
- `symbolInfo`: Symbolication information for the referenced frame.

## See Also

### Initializers

- [initWithAddress:](init%28address_%29.md): Initializes an instance with a frame address.
