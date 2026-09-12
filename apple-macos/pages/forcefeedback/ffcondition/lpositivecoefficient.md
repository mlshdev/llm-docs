> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffcondition/lpositivecoefficient](https://developer.apple.com/documentation/forcefeedback/ffcondition/lpositivecoefficient)

# lPositiveCoefficient (Swift)

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Coefficient constant on the positive side of the offset, in the range from -10,000 through 10,000.

## Declaration

```swift
var lPositiveCoefficient: LONG
```

## See Also

### Instance Properties

- [dwNegativeSaturation](dwnegativesaturation.md): Maximum force output on the negative side of the offset, in the range from 0 through 10,000.
- [dwPositiveSaturation](dwpositivesaturation.md): Maximum force output on the positive side of the offset, in the range from 0 through 10,000.
- [lDeadBand](ldeadband.md): Region around **lOffset** in which the condition is not active, in the range from 0 through 10,000. In other words, the condition is not active between **lOffset** minus **lDeadBand** and **lOffset** plus **lDeadBand**.
- [lNegativeCoefficient](lnegativecoefficient.md): Coefficient constant on the negative side of the offset, in the range from -10,000 through 10,000.
- [lOffset](loffset.md): Offset for the condition, in the range from -10,000 through 10,000.

# lPositiveCoefficient (Objective-C)

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Coefficient constant on the positive side of the offset, in the range from -10,000 through 10,000.

## Declaration

```objectivec
LONG lPositiveCoefficient;
```

## See Also

### Instance Properties

- [dwNegativeSaturation](dwnegativesaturation.md): Maximum force output on the negative side of the offset, in the range from 0 through 10,000.
- [dwPositiveSaturation](dwpositivesaturation.md): Maximum force output on the positive side of the offset, in the range from 0 through 10,000.
- [lDeadBand](ldeadband.md): Region around **lOffset** in which the condition is not active, in the range from 0 through 10,000. In other words, the condition is not active between **lOffset** minus **lDeadBand** and **lOffset** plus **lDeadBand**.
- [lNegativeCoefficient](lnegativecoefficient.md): Coefficient constant on the negative side of the offset, in the range from -10,000 through 10,000.
- [lOffset](loffset.md): Offset for the condition, in the range from -10,000 through 10,000.
