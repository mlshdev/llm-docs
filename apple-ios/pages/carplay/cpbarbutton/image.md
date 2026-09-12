> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpbarbutton/image](https://developer.apple.com/documentation/carplay/cpbarbutton/image)

# image (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The image displayed on the bar button.

## Declaration

```swift
var image: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

If you provide an animated image, the button displays only the first image in the animation sequence.

Setting this property has an effect only when the button type is [CPBarButton.Type.image](type/image.md).

## See Also

### Configuring the Button

- [isEnabled](isenabled.md): A Boolean value that enables and disables the bar button.
- [title](title.md): The title displayed on the bar button.

# image (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The image displayed on the bar button.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * image;
```

<a id="Discussion"></a>

## Discussion

If you provide an animated image, the button displays only the first image in the animation sequence.

Setting this property has an effect only when the button type is [CPBarButtonTypeImage](type/image.md).

## See Also

### Configuring the Button

- [enabled](isenabled.md): A Boolean value that enables and disables the bar button.
- [title](title.md): The title displayed on the bar button.
