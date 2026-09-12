> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulerview/registerunit(withname:abbreviation:unittopointsconversionfactor:stepupcycle:stepdowncycle:)](https://developer.apple.com/documentation/appkit/nsrulerview/registerunit(withname:abbreviation:unittopointsconversionfactor:stepupcycle:stepdowncycle:))

# registerUnit(withName:abbreviation:unitToPointsConversionFactor:stepUpCycle:stepDownCycle:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Registers a new unit of measurement with the NSRulerView class, making it available to all instances of NSRulerView.

## Declaration

```swift
class func registerUnit(withName unitName: NSRulerView.UnitName, abbreviation: String, unitToPointsConversionFactor conversionFactor: CGFloat, stepUpCycle: [NSNumber], stepDownCycle: [NSNumber])
```

<a id="Discussion"></a>

## Discussion

`unitName` is the name of the unit in English, in plural form and capitalized by convention—“Inches”, for example. The unit name is used as a key to identify the measurement units and so shouldn’t be localized. `abbreviation` is a localized short form of the unit name, such as “in” for Inches. `conversionFactor` is the number of PostScript points in the specified unit; there are 72.0 points per inch, for example. `stepUpCycle` and `stepDownCycle` are arrays of NSNumbers that specify how hash marks are calculated, as explained in [Setting Up a Ruler View](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Rulers/Tasks/SettingUpRulerView.html#//apple_ref/doc/uid/20000874). All numbers in `stepUpCycle` should be greater than 1.0, those in `stepDownCycle` should be less than 1.0.

NSRulerView supports these units by default:

| Unit Name / Abbreviation | Points/Unit | Step-Up Cycle | Step-Down Cycle |
| --- | --- | --- | --- |
| Inches / in | 72.0 | 2.0 | 0.5 |
| Centimeters / cm | 28.35 | 2.0 | 0.5, 0.2 |
| Points / pt | 1.0 | 10.0 | 0.5 |
| Picas / pc | 12.0 | 10.0 | 0.5 |

## See Also

### Altering measurement units

- [measurementUnits](measurementunits.md): The measurement units used by the ruler to `unitName`.
- [NSRulerView.UnitName](unitname.md)

# registerUnitWithName:abbreviation:unitToPointsConversionFactor:stepUpCycle:stepDownCycle: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Registers a new unit of measurement with the NSRulerView class, making it available to all instances of NSRulerView.

## Declaration

```objectivec
+ (void) registerUnitWithName:(NSRulerViewUnitName) unitName abbreviation:(NSString *) abbreviation unitToPointsConversionFactor:(CGFloat) conversionFactor stepUpCycle:(NSArray<NSNumber *> *) stepUpCycle stepDownCycle:(NSArray<NSNumber *> *) stepDownCycle;
```

<a id="Discussion"></a>

## Discussion

`unitName` is the name of the unit in English, in plural form and capitalized by convention—“Inches”, for example. The unit name is used as a key to identify the measurement units and so shouldn’t be localized. `abbreviation` is a localized short form of the unit name, such as “in” for Inches. `conversionFactor` is the number of PostScript points in the specified unit; there are 72.0 points per inch, for example. `stepUpCycle` and `stepDownCycle` are arrays of NSNumbers that specify how hash marks are calculated, as explained in [Setting Up a Ruler View](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Rulers/Tasks/SettingUpRulerView.html#//apple_ref/doc/uid/20000874). All numbers in `stepUpCycle` should be greater than 1.0, those in `stepDownCycle` should be less than 1.0.

NSRulerView supports these units by default:

| Unit Name / Abbreviation | Points/Unit | Step-Up Cycle | Step-Down Cycle |
| --- | --- | --- | --- |
| Inches / in | 72.0 | 2.0 | 0.5 |
| Centimeters / cm | 28.35 | 2.0 | 0.5, 0.2 |
| Points / pt | 1.0 | 10.0 | 0.5 |
| Picas / pc | 12.0 | 10.0 | 0.5 |

## See Also

### Altering measurement units

- [measurementUnits](measurementunits.md): The measurement units used by the ruler to `unitName`.
- [NSRulerViewUnitName](unitname.md)
