> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowseraction/image](https://developer.apple.com/documentation/uikit/uidocumentbrowseraction/image)

# image (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The action’s image displayed in the navigation bar.

## Declaration

```swift
var image: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is used only when the action is displayed in the navigation bar. By default, it is set to `nil`, and the navigation bar displays the value of the action’s [localizedTitle](localizedtitle.md) property.

If set, the navigation bar derives a bar button image from this image. Only the alpha values in the source image are used to create the bar button image—opaque values are ignored.

If this image is too large, it is scaled to fit. Typically, navigation bar images are 20 x 20 points.

## See Also

### Creating and configuring actions

- [init(identifier:localizedTitle:availability:handler:)](init%28identifier_localizedtitle_availability_handler_%29.md): Instantiates and returns a new browser action item.
- [supportedContentTypes](supportedcontenttypes.md): An array of uniform type identifiers that define the types of documents that the action supports.
- [supportsMultipleItems](supportsmultipleitems.md): A Boolean value that determines whether the action can be triggered on more than one document at a time.

# image (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The action’s image displayed in the navigation bar.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * image;
```

<a id="Discussion"></a>

## Discussion

This property is used only when the action is displayed in the navigation bar. By default, it is set to `nil`, and the navigation bar displays the value of the action’s [localizedTitle](localizedtitle.md) property.

If set, the navigation bar derives a bar button image from this image. Only the alpha values in the source image are used to create the bar button image—opaque values are ignored.

If this image is too large, it is scaled to fit. Typically, navigation bar images are 20 x 20 points.

## See Also

### Creating and configuring actions

- [initWithIdentifier:localizedTitle:availability:handler:](init%28identifier_localizedtitle_availability_handler_%29.md): Instantiates and returns a new browser action item.
- [supportedContentTypes](supportedcontenttypes.md): An array of uniform type identifiers that define the types of documents that the action supports.
- [supportsMultipleItems](supportsmultipleitems.md): A Boolean value that determines whether the action can be triggered on more than one document at a time.
