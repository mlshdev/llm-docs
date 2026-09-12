> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didendpangesturewithvelocity:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didendpangesturewithvelocity:))

# mapTemplate(\_:didEndPanGestureWithVelocity:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the pan gesture ended with the specified velocity.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, didEndPanGestureWithVelocity velocity: CGPoint)
```

## Parameters

- `mapTemplate`: The current map template.
- `velocity`: The velocity of the pan gesture.

<a id="Discussion"></a>

## Discussion

CarPlay doesn’t call this method when connected to some CarPlay systems.

## See Also

### Panning the Map

- [mapTemplateDidShowPanningInterface(\_:)](maptemplatedidshowpanninginterface%28__%29.md): Tells the delegate that the panning interface is visible on the map.
- [mapTemplateWillDismissPanningInterface(\_:)](maptemplatewilldismisspanninginterface%28__%29.md): Tells the delegate that the panning interface will disappear from the map.
- [mapTemplateDidDismissPanningInterface(\_:)](maptemplatediddismisspanninginterface%28__%29.md): Tells the delegate that the panning interface is no longer visible on the map.
- [mapTemplateDidBeginPanGesture(\_:)](maptemplatedidbeginpangesture%28__%29.md): Tells the delegate that the pan gesture has started.
- [mapTemplate(\_:panBeganWith:)](maptemplate%28__panbeganwith_%29.md): Tells the delegate that the user is starting to pan the map.
- [mapTemplate(\_:panWith:)](maptemplate%28__panwith_%29.md): Tells the delegate that the user is panning in a certain direction on the map.
- [mapTemplate(\_:panEndedWith:)](maptemplate%28__panendedwith_%29.md): Tells the delegate that the user stopped panning the map.
- [CPMapTemplate.PanDirection](../cpmaptemplate/pandirection.md): The directions a user can pan (or move) a map displayed on the CarPlay screen.
- [mapTemplate(\_:didUpdatePanGestureWithTranslation:velocity:)](maptemplate%28__didupdatepangesturewithtranslation_velocity_%29.md): Tells the delegate that the pan gesture changed.

# mapTemplate:didEndPanGestureWithVelocity: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the pan gesture ended with the specified velocity.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate didEndPanGestureWithVelocity:(CGPoint) velocity;
```

## Parameters

- `mapTemplate`: The current map template.
- `velocity`: The velocity of the pan gesture.

<a id="Discussion"></a>

## Discussion

CarPlay doesn’t call this method when connected to some CarPlay systems.

## See Also

### Panning the Map

- [mapTemplateDidShowPanningInterface:](maptemplatedidshowpanninginterface%28__%29.md): Tells the delegate that the panning interface is visible on the map.
- [mapTemplateWillDismissPanningInterface:](maptemplatewilldismisspanninginterface%28__%29.md): Tells the delegate that the panning interface will disappear from the map.
- [mapTemplateDidDismissPanningInterface:](maptemplatediddismisspanninginterface%28__%29.md): Tells the delegate that the panning interface is no longer visible on the map.
- [mapTemplateDidBeginPanGesture:](maptemplatedidbeginpangesture%28__%29.md): Tells the delegate that the pan gesture has started.
- [mapTemplate:panBeganWithDirection:](maptemplate%28__panbeganwith_%29.md): Tells the delegate that the user is starting to pan the map.
- [mapTemplate:panWithDirection:](maptemplate%28__panwith_%29.md): Tells the delegate that the user is panning in a certain direction on the map.
- [mapTemplate:panEndedWithDirection:](maptemplate%28__panendedwith_%29.md): Tells the delegate that the user stopped panning the map.
- [CPPanDirection](../cpmaptemplate/pandirection.md): The directions a user can pan (or move) a map displayed on the CarPlay screen.
- [mapTemplate:didUpdatePanGestureWithTranslation:velocity:](maptemplate%28__didupdatepangesturewithtranslation_velocity_%29.md): Tells the delegate that the pan gesture changed.
