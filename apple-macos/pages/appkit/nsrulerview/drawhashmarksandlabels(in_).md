> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulerview/drawhashmarksandlabels(in:)](https://developer.apple.com/documentation/appkit/nsrulerview/drawhashmarksandlabels(in:))

# drawHashMarksAndLabels(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the receiver’s hash marks and labels in `aRect`, which is expressed in the receiver’s coordinate system.

## Declaration

```swift
func drawHashMarksAndLabels(in rect: NSRect)
```

<a id="Discussion"></a>

## Discussion

This method is invoked by [draw(\_:)](../nsrulermarker/draw%28__%29.md)—you should never need to invoke it directly. You can define custom measurement units using the class method [registerUnit(withName:abbreviation:unitToPointsConversionFactor:stepUpCycle:stepDownCycle:)](registerunit%28withname_abbreviation_unittopointsconversionfactor_stepupcycle_stepdowncycle_%29.md). Override this method if you want to customize the appearance of the hash marks themselves.

## See Also

### Drawing

- [drawMarkers(in:)](drawmarkers%28in_%29.md): Draws the receiver’s markers in `aRect`, which is expressed in the receiver’s coordinate system.
- [invalidateHashMarks()](invalidatehashmarks%28%29.md): Forces recalculation of the hash mark spacing for the next time the receiver is displayed.

# drawHashMarksAndLabelsInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the receiver’s hash marks and labels in `aRect`, which is expressed in the receiver’s coordinate system.

## Declaration

```objectivec
- (void) drawHashMarksAndLabelsInRect:(NSRect) rect;
```

<a id="Discussion"></a>

## Discussion

This method is invoked by [drawRect:](../nsrulermarker/draw%28__%29.md)—you should never need to invoke it directly. You can define custom measurement units using the class method [registerUnitWithName:abbreviation:unitToPointsConversionFactor:stepUpCycle:stepDownCycle:](registerunit%28withname_abbreviation_unittopointsconversionfactor_stepupcycle_stepdowncycle_%29.md). Override this method if you want to customize the appearance of the hash marks themselves.

## See Also

### Drawing

- [drawMarkersInRect:](drawmarkers%28in_%29.md): Draws the receiver’s markers in `aRect`, which is expressed in the receiver’s coordinate system.
- [invalidateHashMarks](invalidatehashmarks%28%29.md): Forces recalculation of the hash mark spacing for the next time the receiver is displayed.
