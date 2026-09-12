> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextpreview](https://developer.apple.com/documentation/appkit/nstextpreview)

# NSTextPreview (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 15.2+

A snapshot of the text in your view, which the system uses to create user-visible effects.

## Declaration

```swift
@MainActor class NSTextPreview
```

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](adding-writing-tools-support-to-a-custom-nsview.md)

<a id="overview"></a>

## Overview

An `NSTextPreview` object provides a static image of your view’s text content that the system can use to create animations. You provide preview objects in response to system requests, such as ones from Writing Tools. In addition to creating an image of your view’s text, you also specify the location of that text in your view’s frame rectangle. When creating animations, the system places the image on top of your view’s content and animates changes to the image instead of to your view.

Create an `NSTextPreview` object in response to specific system requests. Create an image with a transparent background and render your view’s text into the image using the current text attributes. Construct your `NSTextPreview` object with both the image and the frame rectangle that represents the location of the rendered text in your view’s coordinate system. To highlight specific portions of text, instead of all the text in the image, provide a set of candidate rectangles with the locations of the text you want to highlight.

## Topics

### Creating a text preview

- [init(snapshotImage:presentationFrame:)](nstextpreview/init%28snapshotimage_presentationframe_%29.md): Creates a text preview using the specified image.
- [init(snapshotImage:presentationFrame:candidateRects:)](nstextpreview/init%28snapshotimage_presentationframe_candidaterects_%29.md): Creates a text preview using the specified image and rectangles that indicate the portions of text to highlight.

### Getting the preview details

- [previewImage](nstextpreview/previewimage.md): The image that contains the requested text from your view.
- [presentationFrame](nstextpreview/presentationframe.md): The frame rectangle that places the preview image directly over the matching text.
- [candidateRects](nstextpreview/candidaterects.md): Rectangles that define the specific portions of text to highlight.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# NSTextPreview (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 15.2+

A snapshot of the text in your view, which the system uses to create user-visible effects.

## Declaration

```objectivec
@interface NSTextPreview : NSObject
```

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](adding-writing-tools-support-to-a-custom-nsview.md)

<a id="overview"></a>

## Overview

An `NSTextPreview` object provides a static image of your view’s text content that the system can use to create animations. You provide preview objects in response to system requests, such as ones from Writing Tools. In addition to creating an image of your view’s text, you also specify the location of that text in your view’s frame rectangle. When creating animations, the system places the image on top of your view’s content and animates changes to the image instead of to your view.

Create an `NSTextPreview` object in response to specific system requests. Create an image with a transparent background and render your view’s text into the image using the current text attributes. Construct your `NSTextPreview` object with both the image and the frame rectangle that represents the location of the rendered text in your view’s coordinate system. To highlight specific portions of text, instead of all the text in the image, provide a set of candidate rectangles with the locations of the text you want to highlight.

## Topics

### Creating a text preview

- [initWithSnapshotImage:presentationFrame:](nstextpreview/init%28snapshotimage_presentationframe_%29.md): Creates a text preview using the specified image.
- [initWithSnapshotImage:presentationFrame:candidateRects:](nstextpreview/init%28snapshotimage_presentationframe_candidaterects_%29.md): Creates a text preview using the specified image and rectangles that indicate the portions of text to highlight.

### Getting the preview details

- [previewImage](nstextpreview/previewimage.md): The image that contains the requested text from your view.
- [presentationFrame](nstextpreview/presentationframe.md): The frame rectangle that places the preview image directly over the matching text.
- [candidateRects](nstextpreview/candidaterects.md): Rectangles that define the specific portions of text to highlight.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
