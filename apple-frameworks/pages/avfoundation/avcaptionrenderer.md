> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionrenderer](https://developer.apple.com/documentation/avfoundation/avcaptionrenderer)

# AVCaptionRenderer (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.4+ · visionOS 26.4+

An object that renders captions for display at a particular time.

## Declaration

```swift
class AVCaptionRenderer
```

<a id="overview"></a>

## Overview

This object renders a caption scene for a given time from a collection of captions. If there aren’t any captions to display at the specified time, the renderer draws an empty flood fill with a zero alpha or a color.

## Topics

### Configuring the renderer

- [captions](avcaptionrenderer/captions.md): The captions to render.
- [bounds](avcaptionrenderer/bounds.md): The drawing bounds of caption scenes.

### Determining scene changes

- [captionSceneChanges(in:)](avcaptionrenderer/captionscenechanges%28in_%29.md): Determine render time ranges within an enclosing time range to account for visual changes among captions.
- [AVCaptionRenderer.Scene](avcaptionrenderer/scene.md): An object that holds a time range and an associated state which indicates when the renderer draws output.

### Rendering a caption

- [render(in:for:)](avcaptionrenderer/render%28in_for_%29.md): Draw the captions for the time you specify.

### Initializers

- [init()](avcaptionrenderer/init%28%29.md)

### Type Methods

- [captionPreview(forProfileID:extendedLanguageTag:renderSize:)](avcaptionrenderer/captionpreview%28forprofileid_extendedlanguagetag_rendersize_%29.md): Generate a caption preview attributed string for the specified profile ID.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# AVCaptionRenderer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.4+ · visionOS 26.4+

An object that renders captions for display at a particular time.

## Declaration

```objectivec
@interface AVCaptionRenderer : NSObject
```

<a id="overview"></a>

## Overview

This object renders a caption scene for a given time from a collection of captions. If there aren’t any captions to display at the specified time, the renderer draws an empty flood fill with a zero alpha or a color.

## Topics

### Configuring the renderer

- [captions](avcaptionrenderer/captions.md): The captions to render.
- [bounds](avcaptionrenderer/bounds.md): The drawing bounds of caption scenes.

### Determining scene changes

- [captionSceneChangesInRange:](avcaptionrenderer/captionscenechanges%28in_%29.md): Determine render time ranges within an enclosing time range to account for visual changes among captions.
- [AVCaptionRendererScene](avcaptionrenderer/scene.md): An object that holds a time range and an associated state which indicates when the renderer draws output.

### Rendering a caption

- [renderInContext:forTime:](avcaptionrenderer/render%28in_for_%29.md): Draw the captions for the time you specify.

### Instance Methods

- [init](avcaptionrenderer/init%28%29.md)

### Type Methods

- [captionPreviewForProfileID:extendedLanguageTag:renderSize:](avcaptionrenderer/captionpreview%28forprofileid_extendedlanguagetag_rendersize_%29.md): Generate a caption preview attributed string for the specified profile ID.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
