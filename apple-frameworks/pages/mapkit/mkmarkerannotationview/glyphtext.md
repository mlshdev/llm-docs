> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmarkerannotationview/glyphtext](https://developer.apple.com/documentation/mapkit/mkmarkerannotationview/glyphtext)

# glyphText (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 11.0+ · visionOS 1.0+

The text to display in the marker balloon.

## Declaration

```swift
var glyphText: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property or the [glyphText](glyphtext.md) property to specify the marker balloon content. If you specify both an image and text, MapKit displays the text.

MapKit limits the amount of space available for displaying your glyph text. Specify no more than two or three characters for any strings you assign to this property.

## See Also

### Setting the Marker Content

- [glyphImage](glyphimage.md): An image to display in the marker balloon.
- [glyphTintColor](glyphtintcolor.md): The color to apply to the glyph text or image.
- [selectedGlyphImage](selectedglyphimage.md): An image to display when the user selects the marker.

# glyphText (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 11.0+ · visionOS 1.0+

The text to display in the marker balloon.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * glyphText;
```

<a id="Discussion"></a>

## Discussion

Use this property or the [glyphText](glyphtext.md) property to specify the marker balloon content. If you specify both an image and text, MapKit displays the text.

MapKit limits the amount of space available for displaying your glyph text. Specify no more than two or three characters for any strings you assign to this property.

## See Also

### Setting the Marker Content

- [glyphImage](glyphimage.md): An image to display in the marker balloon.
- [glyphTintColor](glyphtintcolor.md): The color to apply to the glyph text or image.
- [selectedGlyphImage](selectedglyphimage.md): An image to display when the user selects the marker.
