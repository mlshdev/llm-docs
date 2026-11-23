> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplatedidbeginzoomgesture(_:)

# mapTemplateDidBeginZoomGesture(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that the zoom gesture started.

## Declaration

```swift
optional func mapTemplateDidBeginZoomGesture(_ mapTemplate: CPMapTemplate)
```

## Parameters

- `mapTemplate`: The [CPMapTemplate](../cpmaptemplate.md) the gesture applies to.

## See Also

### Changing the zoom level

- [mapTemplate(\_:didUpdateZoomGestureWithCenter:scale:velocity:)](maptemplate%28__didupdatezoomgesturewithcenter_scale_velocity_%29.md): Tells the delegate that a person is zooming on the map.
- [mapTemplate(\_:didEndZoomGestureWithVelocity:)](maptemplate%28__didendzoomgesturewithvelocity_%29.md): Tells the delegate that a person stopped zooming the map.

# mapTemplateDidBeginZoomGesture: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Tells the delegate that the zoom gesture started.

## Declaration

```objectivec
- (void) mapTemplateDidBeginZoomGesture:(CPMapTemplate *) mapTemplate;
```

## Parameters

- `mapTemplate`: The [CPMapTemplate](../cpmaptemplate.md) the gesture applies to.

## See Also

### Changing the zoom level

- [mapTemplate:didUpdateZoomGestureWithCenter:scale:velocity:](maptemplate%28__didupdatezoomgesturewithcenter_scale_velocity_%29.md): Tells the delegate that a person is zooming on the map.
- [mapTemplate:didEndZoomGestureWithVelocity:](maptemplate%28__didendzoomgesturewithvelocity_%29.md): Tells the delegate that a person stopped zooming the map.
