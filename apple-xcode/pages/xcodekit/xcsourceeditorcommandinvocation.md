> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcodekit/xcsourceeditorcommandinvocation](https://developer.apple.com/documentation/xcodekit/xcsourceeditorcommandinvocation)

# XCSourceEditorCommandInvocation (Swift)

**Framework:** XcodeKit  
**Kind:** Class  
**Availability:** macOS 10.12+

An object that identifies the command issued to your extension and provides the contents of the active source editor.

## Declaration

```swift
class XCSourceEditorCommandInvocation
```

## Topics

### Responding to Commands

- [buffer](xcsourceeditorcommandinvocation/buffer.md): The buffer of source text upon which the command can operate.
- [commandIdentifier](xcsourceeditorcommandinvocation/commandidentifier.md): The identifier of the command that the user invoked.

### Responding to Cancelled Commands

- [cancellationHandler](xcsourceeditorcommandinvocation/cancellationhandler.md): A handler to be invoked by Xcode to indicate that the invocation has been canceled by the user.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Editor Commands

- [XCSourceEditorCommand](xcsourceeditorcommand.md): The protocol you implement to handle command invocations in a source editor extension.

# XCSourceEditorCommandInvocation (Objective-C)

**Framework:** XcodeKit  
**Kind:** Class  
**Availability:** macOS 10.12+

An object that identifies the command issued to your extension and provides the contents of the active source editor.

## Declaration

```objectivec
@interface XCSourceEditorCommandInvocation : NSObject
```

## Topics

### Responding to Commands

- [buffer](xcsourceeditorcommandinvocation/buffer.md): The buffer of source text upon which the command can operate.
- [commandIdentifier](xcsourceeditorcommandinvocation/commandidentifier.md): The identifier of the command that the user invoked.

### Responding to Cancelled Commands

- [cancellationHandler](xcsourceeditorcommandinvocation/cancellationhandler.md): A handler to be invoked by Xcode to indicate that the invocation has been canceled by the user.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Editor Commands

- [XCSourceEditorCommand](xcsourceeditorcommand.md): The protocol you implement to handle command invocations in a source editor extension.
