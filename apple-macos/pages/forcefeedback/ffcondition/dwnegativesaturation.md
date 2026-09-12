> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffcondition/dwnegativesaturation](https://developer.apple.com/documentation/forcefeedback/ffcondition/dwnegativesaturation)

# dwNegativeSaturation (Swift)

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Maximum force output on the negative side of the offset, in the range from 0 through 10,000.

## Declaration

```swift
var dwNegativeSaturation: DWORD
```

<a id="Discussion"></a>

## Discussion

If the device does not support force saturation, the value of this member is ignored.

If the device does not support separate positive and negative saturation, the value of dwNegativeSaturation is ignored, and the value of dwPositiveSaturation is used as both the positive and negative saturation.

## See Also

### Instance Properties

- [dwPositiveSaturation](dwpositivesaturation.md): Maximum force output on the positive side of the offset, in the range from 0 through 10,000.
- [lDeadBand](ldeadband.md): Region around **lOffset** in which the condition is not active, in the range from 0 through 10,000. In other words, the condition is not active between **lOffset** minus **lDeadBand** and **lOffset** plus **lDeadBand**.
- [lNegativeCoefficient](lnegativecoefficient.md): Coefficient constant on the negative side of the offset, in the range from -10,000 through 10,000.
- [lOffset](loffset.md): Offset for the condition, in the range from -10,000 through 10,000.
- [lPositiveCoefficient](lpositivecoefficient.md): Coefficient constant on the positive side of the offset, in the range from -10,000 through 10,000.

# dwNegativeSaturation (Objective-C)

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Maximum force output on the negative side of the offset, in the range from 0 through 10,000.

## Declaration

```objectivec
DWORD dwNegativeSaturation;
```

<a id="Discussion"></a>

## Discussion

If the device does not support force saturation, the value of this member is ignored.

If the device does not support separate positive and negative saturation, the value of dwNegativeSaturation is ignored, and the value of dwPositiveSaturation is used as both the positive and negative saturation.

## See Also

### Instance Properties

- [dwPositiveSaturation](dwpositivesaturation.md): Maximum force output on the positive side of the offset, in the range from 0 through 10,000.
- [lDeadBand](ldeadband.md): Region around **lOffset** in which the condition is not active, in the range from 0 through 10,000. In other words, the condition is not active between **lOffset** minus **lDeadBand** and **lOffset** plus **lDeadBand**.
- [lNegativeCoefficient](lnegativecoefficient.md): Coefficient constant on the negative side of the offset, in the range from -10,000 through 10,000.
- [lOffset](loffset.md): Offset for the condition, in the range from -10,000 through 10,000.
- [lPositiveCoefficient](lpositivecoefficient.md): Coefficient constant on the positive side of the offset, in the range from -10,000 through 10,000.
