> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolsresultoptions](https://developer.apple.com/documentation/appkit/nswritingtoolsresultoptions)

# NSWritingToolsResultOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 15.0+

Constants to specify what type of content to allow in Writing Tools suggestions or rewrites.

## Declaration

```swift
struct NSWritingToolsResultOptions
```

<a id="overview"></a>

## Overview

When configuring a text view, specify what type of text input you want Writing Tools to deliver to your view. You can ask it to return plain text without any attributes, or you can ask it to apply relevant formatting attributes to the text. You can even encourage it to return items in a list or format them in a table.

## Topics

### Getting the output options

- [plainText](nswritingtoolsresultoptions/plaintext.md): An option to allow only plain text without any attributes in the returned text.
- [richText](nswritingtoolsresultoptions/richtext.md): An option to include style attributes consistent with the RTF format in the returned text.
- [list](nswritingtoolsresultoptions/list.md): An option to allow list-style formatting in the returned text.
- [table](nswritingtoolsresultoptions/table.md): An option to allow tabular layout attributes in the returned text.

### Initializers

- [init(rawValue:)](nswritingtoolsresultoptions/init%28rawvalue_%29.md)

### Type Properties

- [presentationIntent](nswritingtoolsresultoptions/presentationintent.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Enumerations

- [NSCursor.FrameResizePosition](nscursor/frameresizeposition.md): The position along the perimeter of a rectangular frame (its edges and corners) from which it’s resized.
- [NSHorizontalDirection](nshorizontaldirection.md): An absolute direction on the horizontal axis.
- [NSSharingCollaborationMode](nssharingcollaborationmode.md): Represents the types of sharing (collaborating on an item vs. sending a copy of the item) The share picker supports up to two modes, each of which corresponds to one of these types
- [NSImage.DynamicRange](nsimage/dynamicrange.md): Describes how High Dynamic Range (HDR) image content displays.
- [NSTextCursorAccessoryPlacement](nstextcursoraccessoryplacement.md)
- [NSVerticalDirection](nsverticaldirection.md): A direction on the vertical axis.
- [NSWritingToolsBehavior](nswritingtoolsbehavior.md): Constants that specify the Writing Tools experience for the underlying view.

# NSWritingToolsResultOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 15.0+

Constants to specify what type of content to allow in Writing Tools suggestions or rewrites.

## Declaration

```objectivec
enum NSWritingToolsResultOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

When configuring a text view, specify what type of text input you want Writing Tools to deliver to your view. You can ask it to return plain text without any attributes, or you can ask it to apply relevant formatting attributes to the text. You can even encourage it to return items in a list or format them in a table.

## Topics

### Getting the output options

- [NSWritingToolsResultPlainText](nswritingtoolsresultoptions/plaintext.md): An option to allow only plain text without any attributes in the returned text.
- [NSWritingToolsResultRichText](nswritingtoolsresultoptions/richtext.md): An option to include style attributes consistent with the RTF format in the returned text.
- [NSWritingToolsResultList](nswritingtoolsresultoptions/list.md): An option to allow list-style formatting in the returned text.
- [NSWritingToolsResultTable](nswritingtoolsresultoptions/table.md): An option to allow tabular layout attributes in the returned text.

### Enumeration Cases

- [NSWritingToolsResultDefault](nswritingtoolsresultoptions/nswritingtoolsresultdefault.md)
- [NSWritingToolsResultPresentationIntent](nswritingtoolsresultoptions/presentationintent.md)

## See Also

### Enumerations

- [NSCursorFrameResizePosition](nscursor/frameresizeposition.md): The position along the perimeter of a rectangular frame (its edges and corners) from which it’s resized.
- [NSCursorFrameResizeDirections](nscursorframeresizedirections.md): The directions in which a rectangular frame can be resized.
- [NSHorizontalDirections](nshorizontaldirections.md): The absolute directions on the horizontal axis.
- [NSSharingCollaborationMode](nssharingcollaborationmode.md): Represents the types of sharing (collaborating on an item vs. sending a copy of the item) The share picker supports up to two modes, each of which corresponds to one of these types
- [NSImageDynamicRange](nsimage/dynamicrange.md): Describes how High Dynamic Range (HDR) image content displays.
- [NSTextCursorAccessoryPlacement](nstextcursoraccessoryplacement.md)
- [NSVerticalDirections](nsverticaldirections.md): The directions on the vertical axis.
- [NSWritingToolsBehavior](nswritingtoolsbehavior.md): Constants that specify the Writing Tools experience for the underlying view.
