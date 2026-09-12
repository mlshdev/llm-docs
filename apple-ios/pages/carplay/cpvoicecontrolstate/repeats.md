> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpvoicecontrolstate/repeats](https://developer.apple.com/documentation/carplay/cpvoicecontrolstate/repeats)

# repeats (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether the display of an animated image repeats the animation sequence indefinitely.

## Declaration

```swift
var repeats: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The animation repeats when this property is [true](https://developer.apple.com/documentation/swift/true); otherwise, animation occurs only once.

## See Also

### Getting State Information

- [identifier](identifier.md): The string that your app uses to identify the voice control state.
- [titleVariants](titlevariants.md): The array of title variants for the voice control state.
- [image](image.md): The image displayed while the voice control template is in this state.

# repeats (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether the display of an animated image repeats the animation sequence indefinitely.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL repeats;
```

<a id="Discussion"></a>

## Discussion

The animation repeats when this property is [true](https://developer.apple.com/documentation/swift/true); otherwise, animation occurs only once.

## See Also

### Getting State Information

- [identifier](identifier.md): The string that your app uses to identify the voice control state.
- [titleVariants](titlevariants.md): The array of title variants for the voice control state.
- [image](image.md): The image displayed while the voice control template is in this state.
