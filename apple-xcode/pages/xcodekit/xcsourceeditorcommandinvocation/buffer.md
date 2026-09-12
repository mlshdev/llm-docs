> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcodekit/xcsourceeditorcommandinvocation/buffer](https://developer.apple.com/documentation/xcodekit/xcsourceeditorcommandinvocation/buffer)

# buffer (Swift)

**Framework:** XcodeKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The buffer of source text upon which the command can operate.

## Declaration

```swift
var buffer: XCSourceTextBuffer { get }
```

## See Also

### Responding to Commands

- [commandIdentifier](commandidentifier.md): The identifier of the command that the user invoked.

# buffer (Objective-C)

**Framework:** XcodeKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The buffer of source text upon which the command can operate.

## Declaration

```objectivec
@property (strong, readonly) XCSourceTextBuffer * buffer;
```

## See Also

### Responding to Commands

- [commandIdentifier](commandidentifier.md): The identifier of the command that the user invoked.
