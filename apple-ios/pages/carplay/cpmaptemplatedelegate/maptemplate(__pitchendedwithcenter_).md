> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:pitchendedwithcenter:)

# mapTemplate(\_:pitchEndedWithCenter:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that a person stopped pitching the map.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, pitchEndedWithCenter center: CGPoint)
```

## Parameters

- `mapTemplate`: The [CPMapTemplate](../cpmaptemplate.md) the gesture applies to.
- `center`: A `CGPoint` that indicates the center between two fingers performing the pitch gesture.

## See Also

### Changing the camera pitch

- [mapTemplateDidBeginPitchGesture(\_:)](maptemplatedidbeginpitchgesture%28__%29.md): Tells the delegate that the pitch gesture started.
- [mapTemplate(\_:pitchWithCenter:)](maptemplate%28__pitchwithcenter_%29.md): Called when a pitch gesture changes. May not be called when connected to some CarPlay systems

# mapTemplate:pitchEndedWithCenter: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that a person stopped pitching the map.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate pitchEndedWithCenter:(CGPoint) center;
```

## Parameters

- `mapTemplate`: The [CPMapTemplate](../cpmaptemplate.md) the gesture applies to.
- `center`: A `CGPoint` that indicates the center between two fingers performing the pitch gesture.

## See Also

### Changing the camera pitch

- [mapTemplateDidBeginPitchGesture:](maptemplatedidbeginpitchgesture%28__%29.md): Tells the delegate that the pitch gesture started.
- [mapTemplate:pitchWithCenter:](maptemplate%28__pitchwithcenter_%29.md): Called when a pitch gesture changes. May not be called when connected to some CarPlay systems
