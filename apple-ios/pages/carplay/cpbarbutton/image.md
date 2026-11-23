> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpbarbutton/image

# image (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The image to display in the button.

## Declaration

```swift
var image: UIImage? { get set }
```

<a id="discussion"></a>

## Discussion

Specify the button’s image at initialization time and use this property to update it. If you initialize the button with text instead of an image, this property is `nil`.

## See Also

### Configuring the button

- [title](title.md): The text to display in the button.
- [isEnabled](isenabled.md): A Boolean value that indicates whether the button is enabled.

# image (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The image to display in the button.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * image;
```

<a id="discussion"></a>

## Discussion

Specify the button’s image at initialization time and use this property to update it. If you initialize the button with text instead of an image, this property is `nil`.

## See Also

### Configuring the button

- [title](title.md): The text to display in the button.
- [enabled](isenabled.md): A Boolean value that indicates whether the button is enabled.
