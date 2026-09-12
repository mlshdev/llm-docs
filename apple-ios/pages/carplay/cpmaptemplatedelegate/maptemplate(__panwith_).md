> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplate(_:panwith:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:panwith:))

# mapTemplate(\_:panWith:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the user is panning in a certain direction on the map.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, panWith direction: CPMapTemplate.PanDirection)
```

## Parameters

- `mapTemplate`: The current map template.
- `direction`: The direction to move on the map.

## See Also

### Panning the Map

- [mapTemplateDidShowPanningInterface(\_:)](maptemplatedidshowpanninginterface%28__%29.md): Tells the delegate that the panning interface is visible on the map.
- [mapTemplateWillDismissPanningInterface(\_:)](maptemplatewilldismisspanninginterface%28__%29.md): Tells the delegate that the panning interface will disappear from the map.
- [mapTemplateDidDismissPanningInterface(\_:)](maptemplatediddismisspanninginterface%28__%29.md): Tells the delegate that the panning interface is no longer visible on the map.
- [mapTemplateDidBeginPanGesture(\_:)](maptemplatedidbeginpangesture%28__%29.md): Tells the delegate that the pan gesture has started.
- [mapTemplate(\_:panBeganWith:)](maptemplate%28__panbeganwith_%29.md): Tells the delegate that the user is starting to pan the map.
- [mapTemplate(\_:panEndedWith:)](maptemplate%28__panendedwith_%29.md): Tells the delegate that the user stopped panning the map.
- [CPMapTemplate.PanDirection](../cpmaptemplate/pandirection.md): The directions a user can pan (or move) a map displayed on the CarPlay screen.
- [mapTemplate(\_:didEndPanGestureWithVelocity:)](maptemplate%28__didendpangesturewithvelocity_%29.md): Tells the delegate that the pan gesture ended with the specified velocity.
- [mapTemplate(\_:didUpdatePanGestureWithTranslation:velocity:)](maptemplate%28__didupdatepangesturewithtranslation_velocity_%29.md): Tells the delegate that the pan gesture changed.

# mapTemplate:panWithDirection: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the user is panning in a certain direction on the map.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate panWithDirection:(CPPanDirection) direction;
```

## Parameters

- `mapTemplate`: The current map template.
- `direction`: The direction to move on the map.

## See Also

### Panning the Map

- [mapTemplateDidShowPanningInterface:](maptemplatedidshowpanninginterface%28__%29.md): Tells the delegate that the panning interface is visible on the map.
- [mapTemplateWillDismissPanningInterface:](maptemplatewilldismisspanninginterface%28__%29.md): Tells the delegate that the panning interface will disappear from the map.
- [mapTemplateDidDismissPanningInterface:](maptemplatediddismisspanninginterface%28__%29.md): Tells the delegate that the panning interface is no longer visible on the map.
- [mapTemplateDidBeginPanGesture:](maptemplatedidbeginpangesture%28__%29.md): Tells the delegate that the pan gesture has started.
- [mapTemplate:panBeganWithDirection:](maptemplate%28__panbeganwith_%29.md): Tells the delegate that the user is starting to pan the map.
- [mapTemplate:panEndedWithDirection:](maptemplate%28__panendedwith_%29.md): Tells the delegate that the user stopped panning the map.
- [CPPanDirection](../cpmaptemplate/pandirection.md): The directions a user can pan (or move) a map displayed on the CarPlay screen.
- [mapTemplate:didEndPanGestureWithVelocity:](maptemplate%28__didendpangesturewithvelocity_%29.md): Tells the delegate that the pan gesture ended with the specified velocity.
- [mapTemplate:didUpdatePanGestureWithTranslation:velocity:](maptemplate%28__didupdatepangesturewithtranslation_velocity_%29.md): Tells the delegate that the pan gesture changed.
