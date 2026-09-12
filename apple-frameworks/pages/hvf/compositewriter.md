> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/compositewriter](https://developer.apple.com/documentation/hvf/compositewriter)

# CompositeWriter

**Framework:** hvf  
**Kind:** Protocol  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Protocol for creating a Composite part for rendering or to build an HVGL table

## Declaration

```swift
protocol CompositeWriter
```

## Topics

### Instance Properties

- [axisCount](compositewriter/axiscount.md): The number of axes the part has
- [extremumCSCAxisValues](compositewriter/extremumcscaxisvalues.md): The axis values for extrema, in CSC sparse matrix format
- [extremumCSCColumnStarts](compositewriter/extremumcsccolumnstarts.md): The CSC column starts for extremum axis values The columns correspond to the axis extrema, with minimum first, then maximum
- [extremumCSCRowIndices](compositewriter/extremumcscrowindices.md): The CSC row indices for the extremum axis values
- [extremumRotationIndices](compositewriter/extremumrotationindices.md): The row/column indices for extremum rotations, ascending by row/column
- [extremumRotations](compositewriter/extremumrotations.md): The corresponding extremum rotations
- [extremumTranslationIndices](compositewriter/extremumtranslationindices.md): The row/column indices for extremum translations, ascending by row/column
- [extremumTranslations](compositewriter/extremumtranslations.md): The corresponding extremum translations
- [masterCSCAxisValues](compositewriter/mastercscaxisvalues.md): The axis values for the master, corresponding to the row indices
- [masterCSCRowIndices](compositewriter/mastercscrowindices.md): The row indices for the master axis values, ascending order
- [masterRotationIndices](compositewriter/masterrotationindices.md): The row indices for master rotations, ascending
- [masterRotations](compositewriter/masterrotations.md): The corresponding master rotations, in radians, counterclockwise
- [masterTranslationIndices](compositewriter/mastertranslationindices.md): The row indices for master translations, ascending
- [masterTranslations](compositewriter/mastertranslations.md): The corresponding master translations
- [maximumExtremumCount](compositewriter/maximumextremumcount.md): The largest number of axis extrema of any part in the structure tree
- [subpartCount](compositewriter/subpartcount.md): The number of subparts the part has
- [subparts](compositewriter/subparts.md): The composite’s subparts
- [totalAxisCount](compositewriter/totalaxiscount.md): The total number of axes in the composite’s structure tree (including its own)
- [totalPartCount](compositewriter/totalpartcount.md): The total number of parts in the composite’s structure tree (including its own)

### Instance Methods

- [column(axis:extremum:)](compositewriter/column%28axis_extremum_%29.md): Convenience for computing matrix column
- [finalize()](compositewriter/finalize%28%29.md): Call when done writing the Composite
