> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontpanel/convert(_:)](https://developer.apple.com/documentation/appkit/nsfontpanel/convert(_:))

# convert(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Converts the specified font using the settings in the receiver, with the aid of the shared `NSFontManager` if necessary.

## Declaration

```swift
func convert(_ fontObj: NSFont) -> NSFont
```

## Parameters

- `fontObj`: The font to be converted.

<a id="return-value"></a>

## Return Value

The converted font, or `aFont` itself if it can’t be converted.

<a id="Discussion"></a>

## Discussion

For example, if `aFont` is Helvetica Oblique 12.0 point and the user has selected the Times font family (and nothing else) in the Font panel, the font returned is Times Italic 12.0 point.

## See Also

### Related Documentation

- [convert(\_:)](../nsfontmanager/convert%28__%29.md): Converts the given font according to the object that initiated a font change, typically the Font panel or Font menu.

# panelConvertFont: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Converts the specified font using the settings in the receiver, with the aid of the shared `NSFontManager` if necessary.

## Declaration

```objectivec
- (NSFont *) panelConvertFont:(NSFont *) fontObj;
```

## Parameters

- `fontObj`: The font to be converted.

<a id="return-value"></a>

## Return Value

The converted font, or `aFont` itself if it can’t be converted.

<a id="Discussion"></a>

## Discussion

For example, if `aFont` is Helvetica Oblique 12.0 point and the user has selected the Times font family (and nothing else) in the Font panel, the font returned is Times Italic 12.0 point.

## See Also

### Related Documentation

- [convertFont:](../nsfontmanager/convert%28__%29.md): Converts the given font according to the object that initiated a font change, typically the Font panel or Font menu.
