> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctsourcecodeframe/symbolicationerror

# symbolicationError (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

An optional error that describes a failed symbolication attempt.

## Declaration

```swift
var symbolicationError: (any Error)? { get }
```

<a id="Discussion"></a>

## Discussion

The system doesn’t serialize this error when it encodes the frames.

## See Also

### Frame Information

- [address](address.md): An address that represents a specific frame in a call stack.
- [symbolInfo](symbolinfo.md): Symbolication information for the referenced frame.
- [symbolInfo()](symbolinfo%28%29.md): Attempts to get symbol information for the address.

# symbolicationError (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

An optional error that describes a failed symbolication attempt.

## Declaration

```objectivec
@property (readonly, nullable) NSError * symbolicationError;
```

<a id="Discussion"></a>

## Discussion

The system doesn’t serialize this error when it encodes the frames.

## See Also

### Frame Information

- [address](address.md): An address that represents a specific frame in a call stack.
- [symbolInfo](symbolinfo.md): Symbolication information for the referenced frame.
- [symbolInfoWithError:](symbolinfo%28%29.md): Attempts to get symbol information for the address.
