> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xcodekit/xcsourceeditorcommandinvocation/commandidentifier

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
