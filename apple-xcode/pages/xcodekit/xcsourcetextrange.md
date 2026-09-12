> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcodekit/xcsourcetextrange](https://developer.apple.com/documentation/xcodekit/xcsourcetextrange)

# XCSourceTextRange (Swift)

**Framework:** XcodeKit  
**Kind:** Class  
**Availability:** macOS 10.12+

A half-open range of text in a buffer you use to select text or specify the insertion point for new text.

## Declaration

```swift
class XCSourceTextRange
```

<a id="overview"></a>

## Overview

Source text ranges are half-open ranges. As a result, source text ranges include the character at the start position but exclude the character at the end position.

A range with equal start and end positions may be used to indicate a point within the buffer, such as an insertion point. The `start` and `end` position may be improperly ordered while you prepare them in your own code, but must be properly ordered before passing an `XCSourceTextRange` instance to other methods.

## Topics

### Creating Source Text Ranges

- [init(start:end:)](xcsourcetextrange/init%28start_end_%29.md): Creates a new source text range defined by its starting and ending positions.

### Getting the Bounds of Source Text Ranges

- [start](xcsourcetextrange/start.md): The start position of the range.
- [end](xcsourcetextrange/end.md): The end position of the range.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Source Text

- [XCSourceTextBuffer](xcsourcetextbuffer.md): A buffer you use to access and modify the text contents and text selections in a source editor.
- [XCSourceTextPosition](xcsourcetextposition.md): A zero-based position in a source editor, defined by a line number and column number.

# XCSourceTextRange (Objective-C)

**Framework:** XcodeKit  
**Kind:** Class  
**Availability:** macOS 10.12+

A half-open range of text in a buffer you use to select text or specify the insertion point for new text.

## Declaration

```objectivec
@interface XCSourceTextRange : NSObject
```

<a id="overview"></a>

## Overview

Source text ranges are half-open ranges. As a result, source text ranges include the character at the start position but exclude the character at the end position.

A range with equal start and end positions may be used to indicate a point within the buffer, such as an insertion point. The `start` and `end` position may be improperly ordered while you prepare them in your own code, but must be properly ordered before passing an `XCSourceTextRange` instance to other methods.

## Topics

### Creating Source Text Ranges

- [initWithStart:end:](xcsourcetextrange/init%28start_end_%29.md): Creates a new source text range defined by its starting and ending positions.

### Getting the Bounds of Source Text Ranges

- [start](xcsourcetextrange/start.md): The start position of the range.
- [end](xcsourcetextrange/end.md): The end position of the range.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Source Text

- [XCSourceTextBuffer](xcsourcetextbuffer.md): A buffer you use to access and modify the text contents and text selections in a source editor.
- [XCSourceTextPosition](xcsourcetextposition.md): A zero-based position in a source editor, defined by a line number and column number.
