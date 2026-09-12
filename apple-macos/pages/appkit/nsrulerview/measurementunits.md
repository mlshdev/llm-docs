> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulerview/measurementunits](https://developer.apple.com/documentation/appkit/nsrulerview/measurementunits)

# measurementUnits (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The measurement units used by the ruler to `unitName`.

## Declaration

```swift
var measurementUnits: NSRulerView.UnitName { get set }
```

<a id="Discussion"></a>

## Discussion

`unitName` must have been registered with the NSRulerView class object prior to invoking this method. See the description of the class method [registerUnit(withName:abbreviation:unitToPointsConversionFactor:stepUpCycle:stepDownCycle:)](registerunit%28withname_abbreviation_unittopointsconversionfactor_stepupcycle_stepdowncycle_%29.md) for a list of predefined units.

## See Also

### Altering measurement units

- [registerUnit(withName:abbreviation:unitToPointsConversionFactor:stepUpCycle:stepDownCycle:)](registerunit%28withname_abbreviation_unittopointsconversionfactor_stepupcycle_stepdowncycle_%29.md): Registers a new unit of measurement with the NSRulerView class, making it available to all instances of NSRulerView.
- [NSRulerView.UnitName](unitname.md)

# measurementUnits (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The measurement units used by the ruler to `unitName`.

## Declaration

```objectivec
@property (copy) NSRulerViewUnitName measurementUnits;
```

<a id="Discussion"></a>

## Discussion

`unitName` must have been registered with the NSRulerView class object prior to invoking this method. See the description of the class method [registerUnitWithName:abbreviation:unitToPointsConversionFactor:stepUpCycle:stepDownCycle:](registerunit%28withname_abbreviation_unittopointsconversionfactor_stepupcycle_stepdowncycle_%29.md) for a list of predefined units.

## See Also

### Altering measurement units

- [registerUnitWithName:abbreviation:unitToPointsConversionFactor:stepUpCycle:stepDownCycle:](registerunit%28withname_abbreviation_unittopointsconversionfactor_stepupcycle_stepdowncycle_%29.md): Registers a new unit of measurement with the NSRulerView class, making it available to all instances of NSRulerView.
- [NSRulerViewUnitName](unitname.md)
