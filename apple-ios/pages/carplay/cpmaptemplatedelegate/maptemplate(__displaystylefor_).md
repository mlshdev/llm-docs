> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplate(_:displaystylefor:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:displaystylefor:))

# mapTemplate(\_:displayStyleFor:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Asks the delegate for the maneuver’s display style.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, displayStyleFor maneuver: CPManeuver) -> CPManeuverDisplayStyle
```

## Parameters

- `mapTemplate`: The current map template.
- `maneuver`: The maneuver that the system applies the display style to.

<a id="return-value"></a>

## Return Value

A display style that determines the visual layout for the maneuver.

<a id="Discussion"></a>

## Discussion

The display style only applies to the second maneuver that you provide in the navigation session’s [upcomingManeuvers](../cpnavigationsession/upcomingmaneuvers.md) array.

## See Also

### Setting the Display Style

- [CPManeuverDisplayStyle](../cpmaneuverdisplaystyle.md): A display style that determines the visual layout for a maneuver.

# mapTemplate:displayStyleForManeuver: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Asks the delegate for the maneuver’s display style.

## Declaration

```objectivec
- (CPManeuverDisplayStyle) mapTemplate:(CPMapTemplate *) mapTemplate displayStyleForManeuver:(CPManeuver *) maneuver;
```

## Parameters

- `mapTemplate`: The current map template.
- `maneuver`: The maneuver that the system applies the display style to.

<a id="return-value"></a>

## Return Value

A display style that determines the visual layout for the maneuver.

<a id="Discussion"></a>

## Discussion

The display style only applies to the second maneuver that you provide in the navigation session’s [upcomingManeuvers](../cpnavigationsession/upcomingmaneuvers.md) array.

## See Also

### Setting the Display Style

- [CPManeuverDisplayStyle](../cpmaneuverdisplaystyle.md): A display style that determines the visual layout for a maneuver.
