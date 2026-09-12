> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewitem/imageview](https://developer.apple.com/documentation/appkit/nscollectionviewitem/imageview)

# imageView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

An image view outlet that you can use to display images.

## Declaration

```swift
@IBOutlet weak var imageView: NSImageView? { get set }
```

<a id="Discussion"></a>

## Discussion

This is a convenience property for accessing an image view in your item’s view hierarchy. Normally, you configure this property in Interface Builder by connecting it to one of your item’s image views.

## See Also

### Getting and Setting Image and Text Fields

- [textField](textfield.md): A text field outlet that you can use to display a string.

# imageView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

An image view outlet that you can use to display images.

## Declaration

```objectivec
@property (weak, nullable) NSImageView * imageView;
```

<a id="Discussion"></a>

## Discussion

This is a convenience property for accessing an image view in your item’s view hierarchy. Normally, you configure this property in Interface Builder by connecting it to one of your item’s image views.

## See Also

### Getting and Setting Image and Text Fields

- [textField](textfield.md): A text field outlet that you can use to display a string.
