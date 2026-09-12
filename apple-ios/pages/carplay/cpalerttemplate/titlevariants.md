> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpalerttemplate/titlevariants](https://developer.apple.com/documentation/carplay/cpalerttemplate/titlevariants)

# titleVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The array of title variants.

## Declaration

```swift
var titleVariants: [String] { get }
```

<a id="Discussion"></a>

## Discussion

When the system displays the alert, it selects the title that best fits the available screen space, so arrange the titles from most to least preferred when creating an alert template. Also, localize each title for display to the user, and be sure to include at least one title in the array.

## See Also

### Getting the Alert Information

- [actions](actions.md): The array of actions available on the alert.

# titleVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The array of title variants.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * titleVariants;
```

<a id="Discussion"></a>

## Discussion

When the system displays the alert, it selects the title that best fits the available screen space, so arrange the titles from most to least preferred when creating an alert template. Also, localize each title for display to the user, and be sure to include at least one title in the array.

## See Also

### Getting the Alert Information

- [actions](actions.md): The array of actions available on the alert.
