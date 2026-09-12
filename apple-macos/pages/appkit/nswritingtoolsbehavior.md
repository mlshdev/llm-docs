> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolsbehavior](https://developer.apple.com/documentation/appkit/nswritingtoolsbehavior)

# NSWritingToolsBehavior (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 15.0+

Constants that specify the Writing Tools experience for the underlying view.

## Declaration

```swift
enum NSWritingToolsBehavior
```

<a id="overview"></a>

## Overview

Writing Tools provide proofreading and rewriting support for the content of text views. On devices that support Writing Tools features, people engage the system UI to choose how to rewrite all or part of the available text. These constants indicate whether people experience Writing Tools inline with their text, in an overlay panel, or not at all.

## Topics

### Getting the Writing Tools behaviors

- [NSWritingToolsBehavior.none](nswritingtoolsbehavior/none.md): An option to prevent Writing Tools from modifying the text in the view.
- [NSWritingToolsBehavior.default](nswritingtoolsbehavior/default.md): An option to let the system determine the best way to enable Writing Tools for the view.
- [NSWritingToolsBehavior.complete](nswritingtoolsbehavior/complete.md): An option to provide the complete Writing Tools experience for the text view.
- [NSWritingToolsBehavior.limited](nswritingtoolsbehavior/limited.md): An option to provide a limited, overlay-panel experience for the text view.

### Initializers

- [init(rawValue:)](nswritingtoolsbehavior/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [NSCursor.FrameResizePosition](nscursor/frameresizeposition.md): The position along the perimeter of a rectangular frame (its edges and corners) from which it’s resized.
- [NSHorizontalDirection](nshorizontaldirection.md): An absolute direction on the horizontal axis.
- [NSSharingCollaborationMode](nssharingcollaborationmode.md): Represents the types of sharing (collaborating on an item vs. sending a copy of the item) The share picker supports up to two modes, each of which corresponds to one of these types
- [NSImage.DynamicRange](nsimage/dynamicrange.md): Describes how High Dynamic Range (HDR) image content displays.
- [NSTextCursorAccessoryPlacement](nstextcursoraccessoryplacement.md)
- [NSVerticalDirection](nsverticaldirection.md): A direction on the vertical axis.
- [NSWritingToolsResultOptions](nswritingtoolsresultoptions.md): Constants to specify what type of content to allow in Writing Tools suggestions or rewrites.

# NSWritingToolsBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 15.0+

Constants that specify the Writing Tools experience for the underlying view.

## Declaration

```objectivec
enum NSWritingToolsBehavior : NSInteger;
```

<a id="overview"></a>

## Overview

Writing Tools provide proofreading and rewriting support for the content of text views. On devices that support Writing Tools features, people engage the system UI to choose how to rewrite all or part of the available text. These constants indicate whether people experience Writing Tools inline with their text, in an overlay panel, or not at all.

## Topics

### Getting the Writing Tools behaviors

- [NSWritingToolsBehaviorNone](nswritingtoolsbehavior/none.md): An option to prevent Writing Tools from modifying the text in the view.
- [NSWritingToolsBehaviorDefault](nswritingtoolsbehavior/default.md): An option to let the system determine the best way to enable Writing Tools for the view.
- [NSWritingToolsBehaviorComplete](nswritingtoolsbehavior/complete.md): An option to provide the complete Writing Tools experience for the text view.
- [NSWritingToolsBehaviorLimited](nswritingtoolsbehavior/limited.md): An option to provide a limited, overlay-panel experience for the text view.

## See Also

### Enumerations

- [NSCursorFrameResizePosition](nscursor/frameresizeposition.md): The position along the perimeter of a rectangular frame (its edges and corners) from which it’s resized.
- [NSCursorFrameResizeDirections](nscursorframeresizedirections.md): The directions in which a rectangular frame can be resized.
- [NSHorizontalDirections](nshorizontaldirections.md): The absolute directions on the horizontal axis.
- [NSSharingCollaborationMode](nssharingcollaborationmode.md): Represents the types of sharing (collaborating on an item vs. sending a copy of the item) The share picker supports up to two modes, each of which corresponds to one of these types
- [NSImageDynamicRange](nsimage/dynamicrange.md): Describes how High Dynamic Range (HDR) image content displays.
- [NSTextCursorAccessoryPlacement](nstextcursoraccessoryplacement.md)
- [NSVerticalDirections](nsverticaldirections.md): The directions on the vertical axis.
- [NSWritingToolsResultOptions](nswritingtoolsresultoptions.md): Constants to specify what type of content to allow in Writing Tools suggestions or rewrites.
