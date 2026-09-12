> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctsourcecodeframe/symbolinfo](https://developer.apple.com/documentation/xctest/xctsourcecodeframe/symbolinfo)

# symbolInfo (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

Symbolication information for the referenced frame.

## Declaration

```swift
var symbolInfo: XCTSourceCodeSymbolInfo? { get }
```

## See Also

### Frame Information

- [address](address.md): An address that represents a specific frame in a call stack.
- [symbolicationError](symbolicationerror.md): An optional error that describes a failed symbolication attempt.
- [symbolInfo()](symbolinfo%28%29.md): Attempts to get symbol information for the address.

# symbolInfo (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

Symbolication information for the referenced frame.

## Declaration

```objectivec
@property (readonly, nullable) XCTSourceCodeSymbolInfo * symbolInfo;
```

## See Also

### Frame Information

- [address](address.md): An address that represents a specific frame in a call stack.
- [symbolicationError](symbolicationerror.md): An optional error that describes a failed symbolication attempt.
- [symbolInfoWithError:](symbolinfo%28%29.md): Attempts to get symbol information for the address.
