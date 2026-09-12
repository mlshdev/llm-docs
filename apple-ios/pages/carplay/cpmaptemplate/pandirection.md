> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplate/pandirection](https://developer.apple.com/documentation/carplay/cpmaptemplate/pandirection)

# CPMapTemplate.PanDirection (Swift)

**Framework:** CarPlay  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The directions a user can pan (or move) a map displayed on the CarPlay screen.

## Declaration

```swift
struct PanDirection
```

## Topics

### Pan Directions

- [down](pandirection/down.md): The user panned the map downward.
- [left](pandirection/left.md): The user panned the map to the left.
- [right](pandirection/right.md): The user panned the map to the right.
- [up](pandirection/up.md): The user panned the map upward.

### Initializers

- [init(rawValue:)](pandirection/init%28rawvalue_%29.md): Initializes a pan direction using the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Panning the Map

- [mapTemplateDidShowPanningInterface(\_:)](../cpmaptemplatedelegate/maptemplatedidshowpanninginterface%28__%29.md): Tells the delegate that the panning interface is visible on the map.
- [mapTemplateWillDismissPanningInterface(\_:)](../cpmaptemplatedelegate/maptemplatewilldismisspanninginterface%28__%29.md): Tells the delegate that the panning interface will disappear from the map.
- [mapTemplateDidDismissPanningInterface(\_:)](../cpmaptemplatedelegate/maptemplatediddismisspanninginterface%28__%29.md): Tells the delegate that the panning interface is no longer visible on the map.
- [mapTemplateDidBeginPanGesture(\_:)](../cpmaptemplatedelegate/maptemplatedidbeginpangesture%28__%29.md): Tells the delegate that the pan gesture has started.
- [mapTemplate(\_:panBeganWith:)](../cpmaptemplatedelegate/maptemplate%28__panbeganwith_%29.md): Tells the delegate that the user is starting to pan the map.
- [mapTemplate(\_:panWith:)](../cpmaptemplatedelegate/maptemplate%28__panwith_%29.md): Tells the delegate that the user is panning in a certain direction on the map.
- [mapTemplate(\_:panEndedWith:)](../cpmaptemplatedelegate/maptemplate%28__panendedwith_%29.md): Tells the delegate that the user stopped panning the map.
- [mapTemplate(\_:didEndPanGestureWithVelocity:)](../cpmaptemplatedelegate/maptemplate%28__didendpangesturewithvelocity_%29.md): Tells the delegate that the pan gesture ended with the specified velocity.
- [mapTemplate(\_:didUpdatePanGestureWithTranslation:velocity:)](../cpmaptemplatedelegate/maptemplate%28__didupdatepangesturewithtranslation_velocity_%29.md): Tells the delegate that the pan gesture changed.

# CPPanDirection (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The directions a user can pan (or move) a map displayed on the CarPlay screen.

## Declaration

```objectivec
enum CPPanDirection : NSInteger;
```

## Topics

### Pan Directions

- [CPPanDirectionNone](../cppandirection/cppandirectionnone.md)
- [CPPanDirectionDown](pandirection/down.md): The user panned the map downward.
- [CPPanDirectionLeft](pandirection/left.md): The user panned the map to the left.
- [CPPanDirectionRight](pandirection/right.md): The user panned the map to the right.
- [CPPanDirectionUp](pandirection/up.md): The user panned the map upward.

## See Also

### Panning the Map

- [mapTemplateDidShowPanningInterface:](../cpmaptemplatedelegate/maptemplatedidshowpanninginterface%28__%29.md): Tells the delegate that the panning interface is visible on the map.
- [mapTemplateWillDismissPanningInterface:](../cpmaptemplatedelegate/maptemplatewilldismisspanninginterface%28__%29.md): Tells the delegate that the panning interface will disappear from the map.
- [mapTemplateDidDismissPanningInterface:](../cpmaptemplatedelegate/maptemplatediddismisspanninginterface%28__%29.md): Tells the delegate that the panning interface is no longer visible on the map.
- [mapTemplateDidBeginPanGesture:](../cpmaptemplatedelegate/maptemplatedidbeginpangesture%28__%29.md): Tells the delegate that the pan gesture has started.
- [mapTemplate:panBeganWithDirection:](../cpmaptemplatedelegate/maptemplate%28__panbeganwith_%29.md): Tells the delegate that the user is starting to pan the map.
- [mapTemplate:panWithDirection:](../cpmaptemplatedelegate/maptemplate%28__panwith_%29.md): Tells the delegate that the user is panning in a certain direction on the map.
- [mapTemplate:panEndedWithDirection:](../cpmaptemplatedelegate/maptemplate%28__panendedwith_%29.md): Tells the delegate that the user stopped panning the map.
- [mapTemplate:didEndPanGestureWithVelocity:](../cpmaptemplatedelegate/maptemplate%28__didendpangesturewithvelocity_%29.md): Tells the delegate that the pan gesture ended with the specified velocity.
- [mapTemplate:didUpdatePanGestureWithTranslation:velocity:](../cpmaptemplatedelegate/maptemplate%28__didupdatepangesturewithtranslation_velocity_%29.md): Tells the delegate that the pan gesture changed.
