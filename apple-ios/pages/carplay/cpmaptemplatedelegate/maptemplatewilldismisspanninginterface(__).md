> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplatewilldismisspanninginterface(_:)

# mapTemplateWillDismissPanningInterface(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the panning interface will disappear from the map.

## Declaration

```swift
optional func mapTemplateWillDismissPanningInterface(_ mapTemplate: CPMapTemplate)
```

## Parameters

- `mapTemplate`: The current map template.

## See Also

### Showing the panning interface

- [mapTemplateDidShowPanningInterface(\_:)](maptemplatedidshowpanninginterface%28__%29.md): Tells the delegate that the panning interface is visible on the map.
- [mapTemplateDidDismissPanningInterface(\_:)](maptemplatediddismisspanninginterface%28__%29.md): Tells the delegate that the panning interface is no longer visible on the map.

# mapTemplateWillDismissPanningInterface: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the panning interface will disappear from the map.

## Declaration

```objectivec
- (void) mapTemplateWillDismissPanningInterface:(CPMapTemplate *) mapTemplate;
```

## Parameters

- `mapTemplate`: The current map template.

## See Also

### Showing the panning interface

- [mapTemplateDidShowPanningInterface:](maptemplatedidshowpanninginterface%28__%29.md): Tells the delegate that the panning interface is visible on the map.
- [mapTemplateDidDismissPanningInterface:](maptemplatediddismisspanninginterface%28__%29.md): Tells the delegate that the panning interface is no longer visible on the map.
