> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcodekit/xcsourceeditorcommanddefinitionkey](https://developer.apple.com/documentation/xcodekit/xcsourceeditorcommanddefinitionkey)

# XCSourceEditorCommandDefinitionKey (Swift)

**Framework:** XcodeKit  
**Kind:** Structure  
**Availability:** macOS 10.12+

A key in the dictionary that defines a source editor command.

## Declaration

```swift
struct XCSourceEditorCommandDefinitionKey
```

## Mentioned In

- [Creating a Source Editor Extension](creating-a-source-editor-extension.md)

<a id="overview"></a>

## Overview

Source editor commands are defined via an array of dictionaries under the `XCSourceEditorCommandDefinitions` key of a Xcode Source Editor Extension’s `NSExtensionAttributes` within its `Info.plist` file. Commands can also be specified via the [commandDefinitions](xcsourceeditorextension/commanddefinitions.md) property in an extension’s conformance to the [XCSourceEditorExtension](xcsourceeditorextension.md) protocol.

## Topics

### Populating a Command Definition Dictionary

- [classNameKey](xcsourceeditorcommanddefinitionkey/classnamekey.md): The class of the source editor command, in its attributes.
- [identifierKey](xcsourceeditorcommanddefinitionkey/identifierkey.md): The identifier of the source editor command in its attributes.
- [nameKey](xcsourceeditorcommanddefinitionkey/namekey.md): The name of the source editor command in its attributes.

### Creating a Key Using a Raw String

- [init(rawValue:)](xcsourceeditorcommanddefinitionkey/init%28rawvalue_%29.md): Creates the key for a source-editor command by using the string value you specify.

### Type Properties

- [systemSymbolNameKey](xcsourceeditorcommanddefinitionkey/systemsymbolnamekey.md): An SF Symbol from the system associated with the command.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# XCSourceEditorCommandDefinitionKey (Objective-C)

**Framework:** XcodeKit  
**Kind:** Type Alias  
**Availability:** macOS 10.12+

A key in the dictionary that defines a source editor command.

## Declaration

```objectivec
typedef NSString * XCSourceEditorCommandDefinitionKey;
```

## Mentioned In

- [Creating a Source Editor Extension](creating-a-source-editor-extension.md)

<a id="overview"></a>

## Overview

Source editor commands are defined via an array of dictionaries under the `XCSourceEditorCommandDefinitions` key of a Xcode Source Editor Extension’s `NSExtensionAttributes` within its `Info.plist` file. Commands can also be specified via the [commandDefinitions](xcsourceeditorextension/commanddefinitions.md) property in an extension’s conformance to the [XCSourceEditorExtension](xcsourceeditorextension.md) protocol.

## Topics

### Populating a Command Definition Dictionary

- [XCSourceEditorCommandClassNameKey](xcsourceeditorcommanddefinitionkey/classnamekey.md): The class of the source editor command, in its attributes.
- [XCSourceEditorCommandIdentifierKey](xcsourceeditorcommanddefinitionkey/identifierkey.md): The identifier of the source editor command in its attributes.
- [XCSourceEditorCommandNameKey](xcsourceeditorcommanddefinitionkey/namekey.md): The name of the source editor command in its attributes.
