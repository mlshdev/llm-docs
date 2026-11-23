> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:pitchwithcenter:)

# mapTemplate(\_:pitchWithCenter:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Called when a pitch gesture changes. May not be called when connected to some CarPlay systems

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, pitchWithCenter center: CGPoint)
```

## Parameters

- `mapTemplate`: The [CPMapTemplate](../cpmaptemplate.md) the gesture applies to.
- `center`: A `CGPoint` that indicates the center between two fingers performing the pitch gesture.

<a id="discussion"></a>

## Discussion

Tells the delegate that a person is pitching the map.

## See Also

### Changing the camera pitch

- [mapTemplateDidBeginPitchGesture(\_:)](maptemplatedidbeginpitchgesture%28__%29.md): Tells the delegate that the pitch gesture started.
- [mapTemplate(\_:pitchEndedWithCenter:)](maptemplate%28__pitchendedwithcenter_%29.md): Tells the delegate that a person stopped pitching the map.

# mapTemplate:pitchWithCenter: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Called when a pitch gesture changes. May not be called when connected to some CarPlay systems

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate pitchWithCenter:(CGPoint) center;
```

## Parameters

- `mapTemplate`: The [CPMapTemplate](../cpmaptemplate.md) the gesture applies to.
- `center`: A `CGPoint` that indicates the center between two fingers performing the pitch gesture.

<a id="discussion"></a>

## Discussion

Tells the delegate that a person is pitching the map.

## See Also

### Changing the camera pitch

- [mapTemplateDidBeginPitchGesture:](maptemplatedidbeginpitchgesture%28__%29.md): Tells the delegate that the pitch gesture started.
- [mapTemplate:pitchEndedWithCenter:](maptemplate%28__pitchendedwithcenter_%29.md): Tells the delegate that a person stopped pitching the map.
