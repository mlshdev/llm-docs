> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpalerttemplate/actions](https://developer.apple.com/documentation/carplay/cpalerttemplate/actions)

# actions (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The array of actions available on the alert.

## Declaration

```swift
var actions: [CPAlertAction] { get }
```

<a id="Discussion"></a>

## Discussion

The array must include at least one action.

## See Also

### Getting the Alert Information

- [titleVariants](titlevariants.md): The array of title variants.

# actions (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The array of actions available on the alert.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<CPAlertAction *> * actions;
```

<a id="Discussion"></a>

## Discussion

The array must include at least one action.

## See Also

### Getting the Alert Information

- [titleVariants](titlevariants.md): The array of title variants.
