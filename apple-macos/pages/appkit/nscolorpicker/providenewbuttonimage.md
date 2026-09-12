> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpicker/providenewbuttonimage](https://developer.apple.com/documentation/appkit/nscolorpicker/providenewbuttonimage)

# provideNewButtonImage (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The button image used by the color picker.

## Declaration

```swift
var provideNewButtonImage: NSImage { get }
```

<a id="Discussion"></a>

## Discussion

The image placed on the mode button the user uses to select this color picker. This is the same image the color panel uses as an argument when sending the [insertNewButtonImage(\_:in:)](insertnewbuttonimage%28__in_%29.md) message. Override this property’s getter method to provide a custom button image. The default implementation looks in the color picker’s bundle for a TIFF file named after the color picker’s class, with the extension “`.tiff`”.

## See Also

### Adding Button Images

- [insertNewButtonImage(\_:in:)](insertnewbuttonimage%28__in_%29.md): Sets the image used for the specified button cell.

# provideNewButtonImage (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The button image used by the color picker.

## Declaration

```objectivec
@property (strong, readonly) NSImage * provideNewButtonImage;
```

<a id="Discussion"></a>

## Discussion

The image placed on the mode button the user uses to select this color picker. This is the same image the color panel uses as an argument when sending the [insertNewButtonImage:in:](insertnewbuttonimage%28__in_%29.md) message. Override this property’s getter method to provide a custom button image. The default implementation looks in the color picker’s bundle for a TIFF file named after the color picker’s class, with the extension “`.tiff`”.

## See Also

### Adding Button Images

- [insertNewButtonImage:in:](insertnewbuttonimage%28__in_%29.md): Sets the image used for the specified button cell.
