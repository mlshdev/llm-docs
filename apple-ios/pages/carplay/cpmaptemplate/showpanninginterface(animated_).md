> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplate/showpanninginterface(animated:)](https://developer.apple.com/documentation/carplay/cpmaptemplate/showpanninginterface(animated:))

# showPanningInterface(animated:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Shows the panning interface on the map.

## Declaration

```swift
func showPanningInterface(animated: Bool)
```

## Parameters

- `animated`: A Boolean value that determines whether to animate the panning interface.

<a id="Discussion"></a>

## Discussion

Calling this method while displaying the panning interface has no effect.

While showing the panning interface, the system hides all map buttons. The system doesn’t provide a button to dismiss the panning interface. Instead, you must provide a map button in the navigation bar that the user taps to dismiss the panning interface.

## See Also

### Panning the Map

- [dismissPanningInterface(animated:)](dismisspanninginterface%28animated_%29.md): Dismisses the panning interface.
- [isPanningInterfaceVisible](ispanninginterfacevisible.md): A Boolean value that indicates whether the map template is displaying the panning interface.

# showPanningInterfaceAnimated: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Shows the panning interface on the map.

## Declaration

```objectivec
- (void) showPanningInterfaceAnimated:(BOOL) animated;
```

## Parameters

- `animated`: A Boolean value that determines whether to animate the panning interface.

<a id="Discussion"></a>

## Discussion

Calling this method while displaying the panning interface has no effect.

While showing the panning interface, the system hides all map buttons. The system doesn’t provide a button to dismiss the panning interface. Instead, you must provide a map button in the navigation bar that the user taps to dismiss the panning interface.

## See Also

### Panning the Map

- [dismissPanningInterfaceAnimated:](dismisspanninginterface%28animated_%29.md): Dismisses the panning interface.
- [panningInterfaceVisible](ispanninginterfacevisible.md): A Boolean value that indicates whether the map template is displaying the panning interface.
