> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctsourcecodeframe/address](https://developer.apple.com/documentation/xctest/xctsourcecodeframe/address)

# address (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

An address that represents a specific frame in a call stack.

## Declaration

```swift
var address: UInt64 { get }
```

## See Also

### Frame Information

- [symbolInfo](symbolinfo.md): Symbolication information for the referenced frame.
- [symbolicationError](symbolicationerror.md): An optional error that describes a failed symbolication attempt.
- [symbolInfo()](symbolinfo%28%29.md): Attempts to get symbol information for the address.

# address (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

An address that represents a specific frame in a call stack.

## Declaration

```objectivec
@property (readonly) uint64_t address;
```

## See Also

### Frame Information

- [symbolInfo](symbolinfo.md): Symbolication information for the referenced frame.
- [symbolicationError](symbolicationerror.md): An optional error that describes a failed symbolication attempt.
- [symbolInfoWithError:](symbolinfo%28%29.md): Attempts to get symbol information for the address.
