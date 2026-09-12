> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmarkerannotationview/glyphtintcolor](https://developer.apple.com/documentation/mapkit/mkmarkerannotationview/glyphtintcolor)

# glyphTintColor (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 11.0+ · visionOS 1.0+

The color to apply to the glyph text or image.

## Declaration

```swift
@NSCopying var glyphTintColor: UIColor? { get set }
```

```swift
@NSCopying var glyphTintColor: NSColor? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`, which applies the standard tint color for the current map style.

## See Also

### Setting the Marker Content

- [glyphText](glyphtext.md): The text to display in the marker balloon.
- [glyphImage](glyphimage.md): An image to display in the marker balloon.
- [selectedGlyphImage](selectedglyphimage.md): An image to display when the user selects the marker.

# glyphTintColor (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 11.0+ · visionOS 1.0+

The color to apply to the glyph text or image.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIColor * glyphTintColor;
```

```objectivec
@property (nonatomic, copy, nullable) NSColor * glyphTintColor;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`, which applies the standard tint color for the current map style.

## See Also

### Setting the Marker Content

- [glyphText](glyphtext.md): The text to display in the marker balloon.
- [glyphImage](glyphimage.md): An image to display in the marker balloon.
- [selectedGlyphImage](selectedglyphimage.md): An image to display when the user selects the marker.
