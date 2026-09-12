> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplate(_:pitchwithcenter:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:pitchwithcenter:))

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
