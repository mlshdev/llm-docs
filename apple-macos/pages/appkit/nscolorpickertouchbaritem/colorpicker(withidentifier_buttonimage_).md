> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpickertouchbaritem/colorpicker(withidentifier:buttonimage:)](https://developer.apple.com/documentation/appkit/nscolorpickertouchbaritem/colorpicker(withidentifier:buttonimage:))

# colorPicker(withIdentifier:buttonImage:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

Creates a color picker bar item using the supplied image as its icon.

## Declaration

```swift
class func colorPicker(withIdentifier identifier: NSTouchBarItem.Identifier, buttonImage image: UIImage) -> Self
```

```swift
class func colorPicker(withIdentifier identifier: NSTouchBarItem.Identifier, buttonImage image: NSImage) -> Self
```

## See Also

### Creating a color picker item

- [colorPicker(withIdentifier:)](colorpicker%28withidentifier_%29.md): Creates a bar item with the standard color picker icon.
- [textColorPicker(withIdentifier:)](textcolorpicker%28withidentifier_%29.md): Creates a bar item with the standard text color picker icon.
- [strokeColorPicker(withIdentifier:)](strokecolorpicker%28withidentifier_%29.md): Creates a bar item with the standard stroke color picker icon.

# colorPickerWithIdentifier:buttonImage: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

Creates a color picker bar item using the supplied image as its icon.

## Declaration

```objectivec
+ (instancetype) colorPickerWithIdentifier:(NSTouchBarItemIdentifier) identifier buttonImage:(UIImage *) image;
```

```objectivec
+ (instancetype) colorPickerWithIdentifier:(NSTouchBarItemIdentifier) identifier buttonImage:(NSImage *) image;
```

## See Also

### Creating a color picker item

- [colorPickerWithIdentifier:](colorpicker%28withidentifier_%29.md): Creates a bar item with the standard color picker icon.
- [textColorPickerWithIdentifier:](textcolorpicker%28withidentifier_%29.md): Creates a bar item with the standard text color picker icon.
- [strokeColorPickerWithIdentifier:](strokecolorpicker%28withidentifier_%29.md): Creates a bar item with the standard stroke color picker icon.
