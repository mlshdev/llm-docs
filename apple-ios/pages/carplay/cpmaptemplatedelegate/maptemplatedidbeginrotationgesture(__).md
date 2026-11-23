> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplatedidbeginrotationgesture(_:)

# mapTemplateDidBeginRotationGesture(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that the rotation gesture started.

## Declaration

```swift
optional func mapTemplateDidBeginRotationGesture(_ mapTemplate: CPMapTemplate)
```

## Parameters

- `mapTemplate`: The [CPMapTemplate](../cpmaptemplate.md) the gesture applies to.

## See Also

### Rotating the map

- [mapTemplate(\_:didRotateWithCenter:rotation:velocity:)](maptemplate%28__didrotatewithcenter_rotation_velocity_%29.md): Tells the delegate that a person is rotating the map.
- [mapTemplate(\_:rotationDidEndWithVelocity:)](maptemplate%28__rotationdidendwithvelocity_%29.md): Tells the delegate that a person stopped rotating the map.

# mapTemplateDidBeginRotationGesture: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that the rotation gesture started.

## Declaration

```objectivec
- (void) mapTemplateDidBeginRotationGesture:(CPMapTemplate *) mapTemplate;
```

## Parameters

- `mapTemplate`: The [CPMapTemplate](../cpmaptemplate.md) the gesture applies to.

## See Also

### Rotating the map

- [mapTemplate:didRotateWithCenter:rotation:velocity:](maptemplate%28__didrotatewithcenter_rotation_velocity_%29.md): Tells the delegate that a person is rotating the map.
- [mapTemplate:rotationDidEndWithVelocity:](maptemplate%28__rotationdidendwithvelocity_%29.md): Tells the delegate that a person stopped rotating the map.
