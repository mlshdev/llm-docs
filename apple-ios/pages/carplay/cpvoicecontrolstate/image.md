> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpvoicecontrolstate/image](https://developer.apple.com/documentation/carplay/cpvoicecontrolstate/image)

# image (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The image displayed while the voice control template is in this state.

## Declaration

```swift
var image: UIImage? { get }
```

<a id="Discussion"></a>

## Discussion

For the animated images, the system enforces a minimum cycle duration of 0.3 seconds, and a maximum cycle duration of 5 seconds.

## See Also

### Getting State Information

- [identifier](identifier.md): The string that your app uses to identify the voice control state.
- [titleVariants](titlevariants.md): The array of title variants for the voice control state.
- [repeats](repeats.md): A Boolean value that indicates whether the display of an animated image repeats the animation sequence indefinitely.

# image (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The image displayed while the voice control template is in this state.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIImage * image;
```

<a id="Discussion"></a>

## Discussion

For the animated images, the system enforces a minimum cycle duration of 0.3 seconds, and a maximum cycle duration of 5 seconds.

## See Also

### Getting State Information

- [identifier](identifier.md): The string that your app uses to identify the voice control state.
- [titleVariants](titlevariants.md): The array of title variants for the voice control state.
- [repeats](repeats.md): A Boolean value that indicates whether the display of an animated image repeats the animation sequence indefinitely.
