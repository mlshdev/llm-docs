> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcodekit/xcsourcetextbuffer](https://developer.apple.com/documentation/xcodekit/xcsourcetextbuffer)

# XCSourceTextBuffer (Swift)

**Framework:** XcodeKit  
**Kind:** Class  
**Availability:** macOS 10.12+

A buffer you use to access and modify the text contents and text selections in a source editor.

## Declaration

```swift
class XCSourceTextBuffer
```

<a id="overview"></a>

## Overview

Mutations to the buffer are tracked and committed when a command completes successfully and has not been canceled by the user.

## Topics

### Accessing Source Text

- [completeBuffer](xcsourcetextbuffer/completebuffer.md): The complete buffer’s string representation.
- [contentUTI](xcsourcetextbuffer/contentuti.md): The Uniform Type Identifier (UTI) of the content in the buffer.

### Editing Source Text

- [lines](xcsourcetextbuffer/lines.md): The lines of text in the buffer, including line endings.
- [selections](xcsourcetextbuffer/selections.md): The text selections in the buffer.

### Configuring Source Editor Indentation

- [indentationWidth](xcsourcetextbuffer/indentationwidth.md): The number of space characters used for indentation of the text in the buffer.
- [usesTabsForIndentation](xcsourcetextbuffer/usestabsforindentation.md): A Boolean value that indicates whether tabs are used for indentation.
- [tabWidth](xcsourcetextbuffer/tabwidth.md): The number of space characters represented by a tab character in the buffer.

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

### Source Text

- [XCSourceTextPosition](xcsourcetextposition.md): A zero-based position in a source editor, defined by a line number and column number.
- [XCSourceTextRange](xcsourcetextrange.md): A half-open range of text in a buffer you use to select text or specify the insertion point for new text.

# XCSourceTextBuffer (Objective-C)

**Framework:** XcodeKit  
**Kind:** Class  
**Availability:** macOS 10.12+

A buffer you use to access and modify the text contents and text selections in a source editor.

## Declaration

```objectivec
@interface XCSourceTextBuffer : NSObject
```

<a id="overview"></a>

## Overview

Mutations to the buffer are tracked and committed when a command completes successfully and has not been canceled by the user.

## Topics

### Accessing Source Text

- [completeBuffer](xcsourcetextbuffer/completebuffer.md): The complete buffer’s string representation.
- [contentUTI](xcsourcetextbuffer/contentuti.md): The Uniform Type Identifier (UTI) of the content in the buffer.

### Editing Source Text

- [lines](xcsourcetextbuffer/lines.md): The lines of text in the buffer, including line endings.
- [selections](xcsourcetextbuffer/selections.md): The text selections in the buffer.

### Configuring Source Editor Indentation

- [indentationWidth](xcsourcetextbuffer/indentationwidth.md): The number of space characters used for indentation of the text in the buffer.
- [usesTabsForIndentation](xcsourcetextbuffer/usestabsforindentation.md): A Boolean value that indicates whether tabs are used for indentation.
- [tabWidth](xcsourcetextbuffer/tabwidth.md): The number of space characters represented by a tab character in the buffer.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Source Text

- [XCSourceTextPosition](xcsourcetextposition.md): A zero-based position in a source editor, defined by a line number and column number.
- [XCSourceTextRange](xcsourcetextrange.md): A half-open range of text in a buffer you use to select text or specify the insertion point for new text.
