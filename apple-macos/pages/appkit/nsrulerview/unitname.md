> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulerview/unitname](https://developer.apple.com/documentation/appkit/nsrulerview/unitname)

# NSRulerView.UnitName (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

## Declaration

```swift
struct UnitName
```

## Topics

### Ruler Units

- [centimeters](unitname/centimeters.md)
- [inches](unitname/inches.md)
- [picas](unitname/picas.md)
- [points](unitname/points.md)

### Initializers

- [init(\_:)](unitname/init%28__%29.md)
- [init(rawValue:)](unitname/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Altering measurement units

- [registerUnit(withName:abbreviation:unitToPointsConversionFactor:stepUpCycle:stepDownCycle:)](registerunit%28withname_abbreviation_unittopointsconversionfactor_stepupcycle_stepdowncycle_%29.md): Registers a new unit of measurement with the NSRulerView class, making it available to all instances of NSRulerView.
- [measurementUnits](measurementunits.md): The measurement units used by the ruler to `unitName`.

# NSRulerViewUnitName (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef NSString * NSRulerViewUnitName;
```

## Topics

### Ruler Units

- [NSRulerViewUnitCentimeters](unitname/centimeters.md)
- [NSRulerViewUnitInches](unitname/inches.md)
- [NSRulerViewUnitPicas](unitname/picas.md)
- [NSRulerViewUnitPoints](unitname/points.md)

## See Also

### Altering measurement units

- [registerUnitWithName:abbreviation:unitToPointsConversionFactor:stepUpCycle:stepDownCycle:](registerunit%28withname_abbreviation_unittopointsconversionfactor_stepupcycle_stepdowncycle_%29.md): Registers a new unit of measurement with the NSRulerView class, making it available to all instances of NSRulerView.
- [measurementUnits](measurementunits.md): The measurement units used by the ruler to `unitName`.
