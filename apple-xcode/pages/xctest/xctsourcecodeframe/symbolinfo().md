> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctsourcecodeframe/symbolinfo()](https://developer.apple.com/documentation/xctest/xctsourcecodeframe/symbolinfo())

# symbolInfo() (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Attempts to get symbol information for the address.

## Declaration

```swift
func symbolInfo() throws -> XCTSourceCodeSymbolInfo
```

<a id="return-value"></a>

## Return Value

Symbol information for the address.

<a id="Discussion"></a>

## Discussion

This method can fail if required symbol data is not available. The system makes only one attempt to retrieve the symbol information. If that attempt fails, the system stores the error and returns it for future requests.

## See Also

### Frame Information

- [address](address.md): An address that represents a specific frame in a call stack.
- [symbolInfo](symbolinfo.md): Symbolication information for the referenced frame.
- [symbolicationError](symbolicationerror.md): An optional error that describes a failed symbolication attempt.

# symbolInfoWithError: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Attempts to get symbol information for the address.

## Declaration

```objectivec
- (XCTSourceCodeSymbolInfo *) symbolInfoWithError:(NSError **) outError;
```

<a id="return-value"></a>

## Return Value

Symbol information for the address.

<a id="Discussion"></a>

## Discussion

This method can fail if required symbol data is not available. The system makes only one attempt to retrieve the symbol information. If that attempt fails, the system stores the error and returns it for future requests.

## See Also

### Frame Information

- [address](address.md): An address that represents a specific frame in a call stack.
- [symbolInfo](symbolinfo.md): Symbolication information for the referenced frame.
- [symbolicationError](symbolicationerror.md): An optional error that describes a failed symbolication attempt.
