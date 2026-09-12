> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimageview/contenttintcolor](https://developer.apple.com/documentation/appkit/nsimageview/contenttintcolor)

# contentTintColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

A tint color to be used when rendering template image content.

## Declaration

```swift
@NSCopying var contentTintColor: NSColor? { get set }
```

<a id="discussion"></a>

## Discussion

This color may be combined with other effects to produce a theme-appropriate rendition of the template image. A `nil` value indicates the standard set of effects without color modification. The default value is `nil`.

## See Also

### Specifying the visual characteristics

- [imageFrameStyle](imageframestyle.md): The style of frame that appears around the image.
- [imageAlignment](imagealignment.md): The alignment of the cell’s image inside the image view.
- [imageScaling](imagescaling.md): The scaling mode applied to make the cell’s image fit the frame of the image view.
- [animates](animates.md): A Boolean value indicating whether the image view automatically plays animated images.

# contentTintColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

A tint color to be used when rendering template image content.

## Declaration

```objectivec
@property (copy, nullable) NSColor * contentTintColor;
```

<a id="discussion"></a>

## Discussion

This color may be combined with other effects to produce a theme-appropriate rendition of the template image. A `nil` value indicates the standard set of effects without color modification. The default value is `nil`.

## See Also

### Specifying the visual characteristics

- [imageFrameStyle](imageframestyle.md): The style of frame that appears around the image.
- [imageAlignment](imagealignment.md): The alignment of the cell’s image inside the image view.
- [imageScaling](imagescaling.md): The scaling mode applied to make the cell’s image fit the frame of the image view.
- [animates](animates.md): A Boolean value indicating whether the image view automatically plays animated images.
