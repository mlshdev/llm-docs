> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplatedidbeginpitchgesture(_:)

# mapTemplateDidBeginPitchGesture(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that the pitch gesture started.

## Declaration

```swift
optional func mapTemplateDidBeginPitchGesture(_ mapTemplate: CPMapTemplate)
```

## Parameters

- `mapTemplate`: The [CPMapTemplate](../cpmaptemplate.md) the gesture applies to.

## See Also

### Changing the camera pitch

- [mapTemplate(\_:pitchWithCenter:)](maptemplate%28__pitchwithcenter_%29.md): Called when a pitch gesture changes. May not be called when connected to some CarPlay systems
- [mapTemplate(\_:pitchEndedWithCenter:)](maptemplate%28__pitchendedwithcenter_%29.md): Tells the delegate that a person stopped pitching the map.

# mapTemplateDidBeginPitchGesture: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that the pitch gesture started.

## Declaration

```objectivec
- (void) mapTemplateDidBeginPitchGesture:(CPMapTemplate *) mapTemplate;
```

## Parameters

- `mapTemplate`: The [CPMapTemplate](../cpmaptemplate.md) the gesture applies to.

## See Also

### Changing the camera pitch

- [mapTemplate:pitchWithCenter:](maptemplate%28__pitchwithcenter_%29.md): Called when a pitch gesture changes. May not be called when connected to some CarPlay systems
- [mapTemplate:pitchEndedWithCenter:](maptemplate%28__pitchendedwithcenter_%29.md): Tells the delegate that a person stopped pitching the map.
