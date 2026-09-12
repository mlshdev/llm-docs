> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpgridbutton/image](https://developer.apple.com/documentation/carplay/cpgridbutton/image)

# image (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The image displayed on the button.

## Declaration

```swift
var image: UIImage { get }
```

<a id="Discussion"></a>

## Discussion

When creating a grid button, don’t provide an animated image. If you do, the button uses the first image in the animation sequence.

## See Also

### Obtaining Grid Button Information

- [titleVariants](titlevariants.md): An array of title variants for the button.

# image (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The image displayed on the button.

## Declaration

```objectivec
@property (nonatomic, readonly) UIImage * image;
```

<a id="Discussion"></a>

## Discussion

When creating a grid button, don’t provide an animated image. If you do, the button uses the first image in the animation sequence.

## See Also

### Obtaining Grid Button Information

- [titleVariants](titlevariants.md): An array of title variants for the button.
