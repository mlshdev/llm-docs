> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcodekit/xcsourceeditorcommandinvocation/commandidentifier](https://developer.apple.com/documentation/xcodekit/xcsourceeditorcommandinvocation/commandidentifier)

# commandIdentifier (Swift)

**Framework:** XcodeKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The identifier of the command that the user invoked.

## Declaration

```swift
var commandIdentifier: String { get }
```

## See Also

### Responding to Commands

- [buffer](buffer.md): The buffer of source text upon which the command can operate.

# commandIdentifier (Objective-C)

**Framework:** XcodeKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The identifier of the command that the user invoked.

## Declaration

```objectivec
@property (copy, readonly) NSString * commandIdentifier;
```

## See Also

### Responding to Commands

- [buffer](buffer.md): The buffer of source text upon which the command can operate.
