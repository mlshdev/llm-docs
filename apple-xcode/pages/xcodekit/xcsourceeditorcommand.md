> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcodekit/xcsourceeditorcommand](https://developer.apple.com/documentation/xcodekit/xcsourceeditorcommand)

# XCSourceEditorCommand (Swift)

**Framework:** XcodeKit  
**Kind:** Protocol  
**Availability:** macOS 10.12+

The protocol you implement to handle command invocations in a source editor extension.

## Declaration

```swift
protocol XCSourceEditorCommand : NSObjectProtocol
```

## Mentioned In

- [Creating a Source Editor Extension](creating-a-source-editor-extension.md)

<a id="overview"></a>

## Overview

A one-to-one mapping between command classes and commands is not required—multiple commands can be handled by a single class, by checking their invocation’s `commandIdentifier` at runtime.

## Topics

### Defining Editor Commands

- [XCSourceEditorCommandDefinitionKey](xcsourceeditorcommanddefinitionkey.md): A key in the dictionary that defines a source editor command.

### Handling Editor Commands

- [perform(with:completionHandler:)](xcsourceeditorcommand/perform%28with_completionhandler_%29.md): Performs the action associated with the command using the information in an invocation.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Editor Commands

- [XCSourceEditorCommandInvocation](xcsourceeditorcommandinvocation.md): An object that identifies the command issued to your extension and provides the contents of the active source editor.

# XCSourceEditorCommand (Objective-C)

**Framework:** XcodeKit  
**Kind:** Protocol  
**Availability:** macOS 10.12+

The protocol you implement to handle command invocations in a source editor extension.

## Declaration

```objectivec
@protocol XCSourceEditorCommand <NSObject>
```

## Mentioned In

- [Creating a Source Editor Extension](creating-a-source-editor-extension.md)

<a id="overview"></a>

## Overview

A one-to-one mapping between command classes and commands is not required—multiple commands can be handled by a single class, by checking their invocation’s `commandIdentifier` at runtime.

## Topics

### Defining Editor Commands

- [XCSourceEditorCommandDefinitionKey](xcsourceeditorcommanddefinitionkey.md): A key in the dictionary that defines a source editor command.

### Handling Editor Commands

- [performCommandWithInvocation:completionHandler:](xcsourceeditorcommand/perform%28with_completionhandler_%29.md): Performs the action associated with the command using the information in an invocation.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Editor Commands

- [XCSourceEditorCommandInvocation](xcsourceeditorcommandinvocation.md): An object that identifies the command issued to your extension and provides the contents of the active source editor.
