> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplate/ispanninginterfacevisible

# isPanningInterfaceVisible (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether the map template is displaying the panning interface.

## Declaration

```swift
var isPanningInterfaceVisible: Bool { get }
```

## See Also

### Panning the Map

- [showPanningInterface(animated:)](showpanninginterface%28animated_%29.md): Shows the panning interface on the map.
- [dismissPanningInterface(animated:)](dismisspanninginterface%28animated_%29.md): Dismisses the panning interface.

# panningInterfaceVisible (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether the map template is displaying the panning interface.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPanningInterfaceVisible) BOOL panningInterfaceVisible;
```

## See Also

### Panning the Map

- [showPanningInterfaceAnimated:](showpanninginterface%28animated_%29.md): Shows the panning interface on the map.
- [dismissPanningInterfaceAnimated:](dismisspanninginterface%28animated_%29.md): Dismisses the panning interface.
