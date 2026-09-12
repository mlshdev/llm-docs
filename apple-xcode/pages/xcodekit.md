> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcodekit](https://developer.apple.com/documentation/xcodekit)

# XcodeKit (Swift)

**Framework:** XcodeKit  
**Kind:** Framework  
**Availability:** macOS 10.12+

Create extensions to add commands to the Xcode source editor.

<a id="overview"></a>

## Overview

Using the XcodeKit framework, you can customize Xcode with source editor extensions to add functionality and specialized behavior to the source editor. Source editor extensions provide a group of editor commands alongside the built-in commands in the Editor menu in Xcode.  Source editor extensions can read and modify the contents of a source file, as well as read and modify the current text selection within the editor. Include source editor extensions in developer apps distributed on the Mac App Store.

## Topics

### Essentials

Add a source editor extension target to an Xcode project and activate its scheme.

- [Creating a Source Editor Extension](xcodekit/creating-a-source-editor-extension.md): Add and configure a source editor extension in your Xcode project.
- [Testing Your Source Editor Extension](xcodekit/testing-your-source-editor-extension.md): Launch a special instance of Xcode to test your source editor extension.
- [XCSourceEditorExtension](xcodekit/xcsourceeditorextension.md): The protocol you implement to create Xcode source editor extensions.

### Editor Commands

Respond to commands by changing the text contents and text selections in a source editor.

- [XCSourceEditorCommand](xcodekit/xcsourceeditorcommand.md): The protocol you implement to handle command invocations in a source editor extension.
- [XCSourceEditorCommandInvocation](xcodekit/xcsourceeditorcommandinvocation.md): An object that identifies the command issued to your extension and provides the contents of the active source editor.

### Source Text

- [XCSourceTextBuffer](xcodekit/xcsourcetextbuffer.md): A buffer you use to access and modify the text contents and text selections in a source editor.
- [XCSourceTextPosition](xcodekit/xcsourcetextposition.md): A zero-based position in a source editor, defined by a line number and column number.
- [XCSourceTextRange](xcodekit/xcsourcetextrange.md): A half-open range of text in a buffer you use to select text or specify the insertion point for new text.

### XcodeKit Constants

- [XcodeKit Version Constants](xcodekit/xcodekit-version-constants.md): Determine the version of XcodeKit available in an instance of Xcode.

# XcodeKit (Objective-C)

**Framework:** XcodeKit  
**Kind:** Framework  
**Availability:** macOS 10.12+

Create extensions to add commands to the Xcode source editor.

<a id="overview"></a>

## Overview

Using the XcodeKit framework, you can customize Xcode with source editor extensions to add functionality and specialized behavior to the source editor. Source editor extensions provide a group of editor commands alongside the built-in commands in the Editor menu in Xcode.  Source editor extensions can read and modify the contents of a source file, as well as read and modify the current text selection within the editor. Include source editor extensions in developer apps distributed on the Mac App Store.

## Topics

### Essentials

Add a source editor extension target to an Xcode project and activate its scheme.

- [Creating a Source Editor Extension](xcodekit/creating-a-source-editor-extension.md): Add and configure a source editor extension in your Xcode project.
- [Testing Your Source Editor Extension](xcodekit/testing-your-source-editor-extension.md): Launch a special instance of Xcode to test your source editor extension.
- [XCSourceEditorExtension](xcodekit/xcsourceeditorextension.md): The protocol you implement to create Xcode source editor extensions.

### Editor Commands

Respond to commands by changing the text contents and text selections in a source editor.

- [XCSourceEditorCommand](xcodekit/xcsourceeditorcommand.md): The protocol you implement to handle command invocations in a source editor extension.
- [XCSourceEditorCommandInvocation](xcodekit/xcsourceeditorcommandinvocation.md): An object that identifies the command issued to your extension and provides the contents of the active source editor.

### Source Text

- [XCSourceTextBuffer](xcodekit/xcsourcetextbuffer.md): A buffer you use to access and modify the text contents and text selections in a source editor.
- [XCSourceTextPosition](xcodekit/xcsourcetextposition.md): A zero-based position in a source editor, defined by a line number and column number.
- [XCSourceTextRange](xcodekit/xcsourcetextrange.md): A half-open range of text in a buffer you use to select text or specify the insertion point for new text.

### XcodeKit Constants

- [XcodeKit Version Constants](xcodekit/xcodekit-version-constants.md): Determine the version of XcodeKit available in an instance of Xcode.

### Variables

- [XCSourceEditorCommandSystemSymbolNameKey](xcodekit/xcsourceeditorcommanddefinitionkey/systemsymbolnamekey.md): An SF Symbol from the system associated with the command.
