> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmarkerannotationview/glyphimage](https://developer.apple.com/documentation/mapkit/mkmarkerannotationview/glyphimage)

# glyphImage (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 11.0+ · visionOS 1.0+

An image to display in the marker balloon.

## Declaration

```swift
@NSCopying var glyphImage: UIImage? { get set }
```

```swift
@NSCopying var glyphImage: NSImage? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property or the [glyphText](glyphtext.md) property to specify the marker balloon content. If you specify both an image and text, MapKit displays the text.

MapKit displays the glyph image when the marker is in the normal state. Create glyph images as template images so that MapKit can apply the glyph tint color to the image. Normally, you set the size of this image to 20 by 20 points on iOS and 40 by 40 points on tvOS. However, if you don’t provide a separate selected image in the [selectedGlyphImage](selectedglyphimage.md) property, make the size of this image 40 by 40 points on iOS and 60 by 40 points on tvOS instead. MapKit scales images that are larger or smaller than those sizes.

## See Also

### Setting the Marker Content

- [glyphText](glyphtext.md): The text to display in the marker balloon.
- [glyphTintColor](glyphtintcolor.md): The color to apply to the glyph text or image.
- [selectedGlyphImage](selectedglyphimage.md): An image to display when the user selects the marker.

# glyphImage (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 11.0+ · visionOS 1.0+

An image to display in the marker balloon.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIImage * glyphImage;
```

```objectivec
@property (nonatomic, copy, nullable) NSImage * glyphImage;
```

<a id="Discussion"></a>

## Discussion

Use this property or the [glyphText](glyphtext.md) property to specify the marker balloon content. If you specify both an image and text, MapKit displays the text.

MapKit displays the glyph image when the marker is in the normal state. Create glyph images as template images so that MapKit can apply the glyph tint color to the image. Normally, you set the size of this image to 20 by 20 points on iOS and 40 by 40 points on tvOS. However, if you don’t provide a separate selected image in the [selectedGlyphImage](selectedglyphimage.md) property, make the size of this image 40 by 40 points on iOS and 60 by 40 points on tvOS instead. MapKit scales images that are larger or smaller than those sizes.

## See Also

### Setting the Marker Content

- [glyphText](glyphtext.md): The text to display in the marker balloon.
- [glyphTintColor](glyphtintcolor.md): The color to apply to the glyph text or image.
- [selectedGlyphImage](selectedglyphimage.md): An image to display when the user selects the marker.
