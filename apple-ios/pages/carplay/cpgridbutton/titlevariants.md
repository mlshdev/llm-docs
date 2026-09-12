> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpgridbutton/titlevariants](https://developer.apple.com/documentation/carplay/cpgridbutton/titlevariants)

# titleVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An array of title variants for the button.

## Declaration

```swift
var titleVariants: [String] { get }
```

<a id="Discussion"></a>

## Discussion

When the system displays the button, it selects the title that best fits the available screen space, so arrange the titles from most to least preferred when creating a grid button. Also, localize each title for display to the user, and be sure to include at least one title in the array.

## See Also

### Obtaining Grid Button Information

- [image](image.md): The image displayed on the button.

# titleVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An array of title variants for the button.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * titleVariants;
```

<a id="Discussion"></a>

## Discussion

When the system displays the button, it selects the title that best fits the available screen space, so arrange the titles from most to least preferred when creating a grid button. Also, localize each title for display to the user, and be sure to include at least one title in the array.

## See Also

### Obtaining Grid Button Information

- [image](image.md): The image displayed on the button.
