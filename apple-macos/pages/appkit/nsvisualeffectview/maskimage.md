> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsvisualeffectview/maskimage](https://developer.apple.com/documentation/appkit/nsvisualeffectview/maskimage)

# maskImage (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

An image whose alpha channel masks the visual effect view’s material.

## Declaration

```swift
var maskImage: NSImage? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`, which is the equivalent of allowing all of the visual effect view’s content to show through. Assigning an image to this property masks the portions of the visual effect view using the image’s alpha channel.

If the visual effect view is the content view of a window, the mask is applied in an appropriate way to the window’s shadow.

# maskImage (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

An image whose alpha channel masks the visual effect view’s material.

## Declaration

```objectivec
@property (retain, nullable) NSImage * maskImage;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`, which is the equivalent of allowing all of the visual effect view’s content to show through. Assigning an image to this property masks the portions of the visual effect view using the image’s alpha channel.

If the visual effect view is the content view of a window, the mask is applied in an appropriate way to the window’s shadow.
