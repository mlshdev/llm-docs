> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpvoicecontrolstate/titlevariants](https://developer.apple.com/documentation/carplay/cpvoicecontrolstate/titlevariants)

# titleVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The array of title variants for the voice control state.

## Declaration

```swift
var titleVariants: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

When creating a voice control state, arrange the titles from most to least preferred. The system displays the first title found in the array that best fits the available screen space. Also, localize each title for display to the user, and be sure to include at least one title in the array.

## See Also

### Getting State Information

- [identifier](identifier.md): The string that your app uses to identify the voice control state.
- [image](image.md): The image displayed while the voice control template is in this state.
- [repeats](repeats.md): A Boolean value that indicates whether the display of an animated image repeats the animation sequence indefinitely.

# titleVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The array of title variants for the voice control state.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSString *> * titleVariants;
```

<a id="Discussion"></a>

## Discussion

When creating a voice control state, arrange the titles from most to least preferred. The system displays the first title found in the array that best fits the available screen space. Also, localize each title for display to the user, and be sure to include at least one title in the array.

## See Also

### Getting State Information

- [identifier](identifier.md): The string that your app uses to identify the voice control state.
- [image](image.md): The image displayed while the voice control template is in this state.
- [repeats](repeats.md): A Boolean value that indicates whether the display of an animated image repeats the animation sequence indefinitely.
