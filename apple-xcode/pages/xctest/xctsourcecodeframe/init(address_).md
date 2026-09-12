> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctsourcecodeframe/init(address:)](https://developer.apple.com/documentation/xctest/xctsourcecodeframe/init(address:))

# init(address:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Initializes an instance with a frame address.

## Declaration

```swift
convenience init(address: UInt64)
```

## Parameters

- `address`: An address that represents a specific frame in a call stack.

## See Also

### Initializers

- [init(address:symbolInfo:)](init%28address_symbolinfo_%29.md): Initializes an instance with a frame address and symbol information.

# initWithAddress: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Initializes an instance with a frame address.

## Declaration

```objectivec
- (instancetype) initWithAddress:(uint64_t) address;
```

## Parameters

- `address`: An address that represents a specific frame in a call stack.

## See Also

### Initializers

- [initWithAddress:symbolInfo:](init%28address_symbolinfo_%29.md): Initializes an instance with a frame address and symbol information.
