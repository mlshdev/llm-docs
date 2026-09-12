> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaneuverdisplaystyle](https://developer.apple.com/documentation/carplay/cpmaneuverdisplaystyle)

# CPManeuverDisplayStyle (Swift)

**Framework:** CarPlay  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A display style that determines the visual layout for a maneuver.

## Declaration

```swift
struct CPManeuverDisplayStyle
```

## Topics

### Display Styles

- [leadingSymbol](cpmaneuverdisplaystyle/leadingsymbol.md): The symbol appears before the instructions for the maneuver.
- [trailingSymbol](cpmaneuverdisplaystyle/trailingsymbol.md): The symbol appears after the instructions for the maneuver.
- [instructionOnly](cpmaneuverdisplaystyle/instructiononly.md): Only the instructions appear for the maneuver.
- [symbolOnly](cpmaneuverdisplaystyle/symbolonly.md): Only the symbol appears for the maneuver.

### Initializers

- [init(rawValue:)](cpmaneuverdisplaystyle/init%28rawvalue_%29.md): Initializes a maneuver display style using the specified raw value.

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

### Setting the Display Style

- [mapTemplate(\_:displayStyleFor:)](cpmaptemplatedelegate/maptemplate%28__displaystylefor_%29.md): Asks the delegate for the maneuver’s display style.

# CPManeuverDisplayStyle (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A display style that determines the visual layout for a maneuver.

## Declaration

```objectivec
enum CPManeuverDisplayStyle : NSInteger;
```

## Topics

### Display Styles

- [CPManeuverDisplayStyleDefault](cpmaneuverdisplaystyle/cpmaneuverdisplaystyledefault.md): The default display style for the maneuver.
- [CPManeuverDisplayStyleLeadingSymbol](cpmaneuverdisplaystyle/leadingsymbol.md): The symbol appears before the instructions for the maneuver.
- [CPManeuverDisplayStyleTrailingSymbol](cpmaneuverdisplaystyle/trailingsymbol.md): The symbol appears after the instructions for the maneuver.
- [CPManeuverDisplayStyleInstructionOnly](cpmaneuverdisplaystyle/instructiononly.md): Only the instructions appear for the maneuver.
- [CPManeuverDisplayStyleSymbolOnly](cpmaneuverdisplaystyle/symbolonly.md): Only the symbol appears for the maneuver.

## See Also

### Setting the Display Style

- [mapTemplate:displayStyleForManeuver:](cpmaptemplatedelegate/maptemplate%28__displaystylefor_%29.md): Asks the delegate for the maneuver’s display style.
