> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewitem/textfield](https://developer.apple.com/documentation/appkit/nscollectionviewitem/textfield)

# textField (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A text field outlet that you can use to display a string.

## Declaration

```swift
@IBOutlet weak var textField: NSTextField? { get set }
```

<a id="Discussion"></a>

## Discussion

This is a convenience property for accessing a text field in your item’s view hierarchy. Normally, you configure this property in Interface Builder by connecting it to one of your item’s text fields.

## See Also

### Getting and Setting Image and Text Fields

- [imageView](imageview.md): An image view outlet that you can use to display images.

# textField (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A text field outlet that you can use to display a string.

## Declaration

```objectivec
@property (weak, nullable) NSTextField * textField;
```

<a id="Discussion"></a>

## Discussion

This is a convenience property for accessing a text field in your item’s view hierarchy. Normally, you configure this property in Interface Builder by connecting it to one of your item’s text fields.

## See Also

### Getting and Setting Image and Text Fields

- [imageView](imageview.md): An image view outlet that you can use to display images.
