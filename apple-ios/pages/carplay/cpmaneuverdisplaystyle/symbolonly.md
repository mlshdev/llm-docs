> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaneuverdisplaystyle/symbolonly](https://developer.apple.com/documentation/carplay/cpmaneuverdisplaystyle/symbolonly)

# symbolOnly (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Only the symbol appears for the maneuver.

## Declaration

```swift
static var symbolOnly: CPManeuverDisplayStyle { get }
```

<a id="Discussion"></a>

## Discussion

If your app provides lane guidance, include a second maneuver to the navigation session’s [upcomingManeuvers](../cpnavigationsession/upcomingmaneuvers.md) array that provides the lane guidance information. The second maneuver should have:

- A [symbolSet](../cpmaneuver/symbolset.md) containing dark and light images that fill the full width of the guidance panel with a maximum image size of 120 pt x 18 pt.
- An empty array of [instructionVariants](../cpmaneuver/instructionvariants.md).

The map template should include a [mapDelegate](../cpmaptemplate/mapdelegate.md) object that conforms to [CPMapTemplateDelegate](../cpmaptemplatedelegate.md) and implements the [mapTemplate(\_:displayStyleFor:)](../cpmaptemplatedelegate/maptemplate%28__displaystylefor_%29.md) method, which returns the [symbolOnly](symbolonly.md) display style for the maneuver.

## See Also

### Display Styles

- [leadingSymbol](leadingsymbol.md): The symbol appears before the instructions for the maneuver.
- [trailingSymbol](trailingsymbol.md): The symbol appears after the instructions for the maneuver.
- [instructionOnly](instructiononly.md): Only the instructions appear for the maneuver.

# CPManeuverDisplayStyleSymbolOnly (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Only the symbol appears for the maneuver.

## Declaration

```objectivec
CPManeuverDisplayStyleSymbolOnly
```

<a id="Discussion"></a>

## Discussion

If your app provides lane guidance, include a second maneuver to the navigation session’s [upcomingManeuvers](../cpnavigationsession/upcomingmaneuvers.md) array that provides the lane guidance information. The second maneuver should have:

- A [symbolSet](../cpmaneuver/symbolset.md) containing dark and light images that fill the full width of the guidance panel with a maximum image size of 120 pt x 18 pt.
- An empty array of [instructionVariants](../cpmaneuver/instructionvariants.md).

The map template should include a [mapDelegate](../cpmaptemplate/mapdelegate.md) object that conforms to [CPMapTemplateDelegate](../cpmaptemplatedelegate.md) and implements the [mapTemplate:displayStyleForManeuver:](../cpmaptemplatedelegate/maptemplate%28__displaystylefor_%29.md) method, which returns the [CPManeuverDisplayStyleSymbolOnly](symbolonly.md) display style for the maneuver.

## See Also

### Display Styles

- [CPManeuverDisplayStyleDefault](cpmaneuverdisplaystyledefault.md): The default display style for the maneuver.
- [CPManeuverDisplayStyleLeadingSymbol](leadingsymbol.md): The symbol appears before the instructions for the maneuver.
- [CPManeuverDisplayStyleTrailingSymbol](trailingsymbol.md): The symbol appears after the instructions for the maneuver.
- [CPManeuverDisplayStyleInstructionOnly](instructiononly.md): Only the instructions appear for the maneuver.
