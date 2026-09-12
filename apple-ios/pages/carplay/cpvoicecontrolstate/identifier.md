> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpvoicecontrolstate/identifier](https://developer.apple.com/documentation/carplay/cpvoicecontrolstate/identifier)

# identifier (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The string that your app uses to identify the voice control state.

## Declaration

```swift
var identifier: String { get }
```

<a id="Discussion"></a>

## Discussion

Use [identifier](identifier.md) when calling the [activateVoiceControlState(withIdentifier:)](../cpvoicecontroltemplate/activatevoicecontrolstate%28withidentifier_%29.md) method to activate the voice control state.

## See Also

### Getting State Information

- [titleVariants](titlevariants.md): The array of title variants for the voice control state.
- [image](image.md): The image displayed while the voice control template is in this state.
- [repeats](repeats.md): A Boolean value that indicates whether the display of an animated image repeats the animation sequence indefinitely.

# identifier (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The string that your app uses to identify the voice control state.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

Use [identifier](identifier.md) when calling the [activateVoiceControlStateWithIdentifier:](../cpvoicecontroltemplate/activatevoicecontrolstate%28withidentifier_%29.md) method to activate the voice control state.

## See Also

### Getting State Information

- [titleVariants](titlevariants.md): The array of title variants for the voice control state.
- [image](image.md): The image displayed while the voice control template is in this state.
- [repeats](repeats.md): A Boolean value that indicates whether the display of an animated image repeats the animation sequence indefinitely.
