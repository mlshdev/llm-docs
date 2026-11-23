> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplate/dismisspanninginterface(animated:)

# dismissPanningInterface(animated:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Dismisses the panning interface.

## Declaration

```swift
func dismissPanningInterface(animated: Bool)
```

## Parameters

- `animated`: A Boolean value that determines whether to animate the dismissal of the panning interface. Set to [true](https://developer.apple.com/documentation/swift/true) to animate the dismissal.

<a id="Discussion"></a>

## Discussion

When dismissing the panning interface, the system shows the previously hidden map buttons.

## See Also

### Displaying the panning interface

- [showPanningInterface(animated:)](showpanninginterface%28animated_%29.md): Shows the panning interface on the map.
- [isPanningInterfaceVisible](ispanninginterfacevisible.md): A Boolean value that indicates whether the map template is displaying the panning interface.

# dismissPanningInterfaceAnimated: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Dismisses the panning interface.

## Declaration

```objectivec
- (void) dismissPanningInterfaceAnimated:(BOOL) animated;
```

## Parameters

- `animated`: A Boolean value that determines whether to animate the dismissal of the panning interface. Set to [true](https://developer.apple.com/documentation/swift/true) to animate the dismissal.

<a id="Discussion"></a>

## Discussion

When dismissing the panning interface, the system shows the previously hidden map buttons.

## See Also

### Displaying the panning interface

- [showPanningInterfaceAnimated:](showpanninginterface%28animated_%29.md): Shows the panning interface on the map.
- [panningInterfaceVisible](ispanninginterfacevisible.md): A Boolean value that indicates whether the map template is displaying the panning interface.
