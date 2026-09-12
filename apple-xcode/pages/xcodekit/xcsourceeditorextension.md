> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcodekit/xcsourceeditorextension](https://developer.apple.com/documentation/xcodekit/xcsourceeditorextension)

# XCSourceEditorExtension (Swift)

**Framework:** XcodeKit  
**Kind:** Protocol  
**Availability:** macOS 10.12+

The protocol you implement to create Xcode source editor extensions.

## Declaration

```swift
protocol XCSourceEditorExtension : NSObjectProtocol
```

<a id="overview"></a>

## Overview

There are no guarantees about the thread or queue on which any Xcode Source Editor Extension methods are executed, including the designated initializer.

## Topics

### Defining Extension Commands

- [commandDefinitions](xcsourceeditorextension/commanddefinitions.md): The array of command definitions used by Xcode to associate command names with their implementation in an extension.

### Handling Extension Launches

- [extensionDidFinishLaunching()](xcsourceeditorextension/extensiondidfinishlaunching%28%29.md): Tells the extension that it successfully launched and may begin to receive editor commands.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Essentials

- [Creating a Source Editor Extension](creating-a-source-editor-extension.md): Add and configure a source editor extension in your Xcode project.
- [Testing Your Source Editor Extension](testing-your-source-editor-extension.md): Launch a special instance of Xcode to test your source editor extension.

# XCSourceEditorExtension (Objective-C)

**Framework:** XcodeKit  
**Kind:** Protocol  
**Availability:** macOS 10.12+

The protocol you implement to create Xcode source editor extensions.

## Declaration

```objectivec
@protocol XCSourceEditorExtension <NSObject>
```

<a id="overview"></a>

## Overview

There are no guarantees about the thread or queue on which any Xcode Source Editor Extension methods are executed, including the designated initializer.

## Topics

### Defining Extension Commands

- [commandDefinitions](xcsourceeditorextension/commanddefinitions.md): The array of command definitions used by Xcode to associate command names with their implementation in an extension.

### Handling Extension Launches

- [extensionDidFinishLaunching](xcsourceeditorextension/extensiondidfinishlaunching%28%29.md): Tells the extension that it successfully launched and may begin to receive editor commands.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Essentials

- [Creating a Source Editor Extension](creating-a-source-editor-extension.md): Add and configure a source editor extension in your Xcode project.
- [Testing Your Source Editor Extension](testing-your-source-editor-extension.md): Launch a special instance of Xcode to test your source editor extension.
