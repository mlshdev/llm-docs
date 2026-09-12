> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsyncconversioninpchan](https://developer.apple.com/documentation/colorsync/kcolorsyncconversioninpchan)

# kColorSyncConversionInpChan (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A key for the number of input channels of a lookup table.

## Declaration

```swift
var kColorSyncConversionInpChan: Unmanaged<CFString>!
```

## See Also

### Reading lookup tables

- [kColorSyncConversion1DLut](kcolorsyncconversion1dlut.md): A key for a one-dimensional lookup table with interpolation, represented as `CFData` containing a `Float32` table.
- [kColorSyncConversion3DLut](kcolorsyncconversion3dlut.md): A key for a three-dimensional lookup table with interpolation, represented as `CFData`.
- [kColorSyncConversionNDLut](kcolorsyncconversionndlut.md): A key for a multi-dimensional lookup table with interpolation, represented as `CFData` for N inputs and M outputs.
- [kColorSyncConversionGridPoints](kcolorsyncconversiongridpoints.md): A key for the number of grid points in a lookup table.
- [kColorSyncConversionChannelID](kcolorsyncconversionchannelid.md): A key for the identifier of the channel a conversion component applies to.
- [kColorSyncConversionOutChan](kcolorsyncconversionoutchan.md): A key for the number of output channels of a lookup table.

# kColorSyncConversionInpChan (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A key for the number of input channels of a lookup table.

## Declaration

```objectivec
extern CFStringRef kColorSyncConversionInpChan;
```

## See Also

### Reading lookup tables

- [kColorSyncConversion1DLut](kcolorsyncconversion1dlut.md): A key for a one-dimensional lookup table with interpolation, represented as `CFData` containing a `Float32` table.
- [kColorSyncConversion3DLut](kcolorsyncconversion3dlut.md): A key for a three-dimensional lookup table with interpolation, represented as `CFData`.
- [kColorSyncConversionNDLut](kcolorsyncconversionndlut.md): A key for a multi-dimensional lookup table with interpolation, represented as `CFData` for N inputs and M outputs.
- [kColorSyncConversionGridPoints](kcolorsyncconversiongridpoints.md): A key for the number of grid points in a lookup table.
- [kColorSyncConversionChannelID](kcolorsyncconversionchannelid.md): A key for the identifier of the channel a conversion component applies to.
- [kColorSyncConversionOutChan](kcolorsyncconversionoutchan.md): A key for the number of output channels of a lookup table.
