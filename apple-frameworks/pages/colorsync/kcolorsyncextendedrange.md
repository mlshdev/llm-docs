> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsyncextendedrange](https://developer.apple.com/documentation/colorsync/kcolorsyncextendedrange)

# kColorSyncExtendedRange (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A key whose `CFBooleanRef` value enables or disables extended range.

## Declaration

```swift
var kColorSyncExtendedRange: Unmanaged<CFString>!
```

## See Also

### Handling HDR and extended range

- [kColorSyncConvertUseExtendedRange](kcolorsyncconvertuseextendedrange.md): A key whose `CFBooleanRef` value allows float data to exceed the `[0.0, 1.0]` range.
- [kColorSyncTransformUseITU709OETF](kcolorsynctransformuseitu709oetf.md): A key whose `CFBooleanRef` value uses the ITU-R BT.709 opto-electronic transfer function.
- [kColorSyncHDRDerivative](kcolorsynchdrderivative.md): A key for the HDR derivative to apply to the profile in a profile-sequence dictionary.
- [kColorSyncPQDerivative](kcolorsyncpqderivative.md): A [kColorSyncHDRDerivative](kcolorsynchdrderivative.md) value selecting the PQ HDR derivative.
- [kColorSyncHLGDerivative](kcolorsynchlgderivative.md): A [kColorSyncHDRDerivative](kcolorsynchdrderivative.md) value selecting the HLG HDR derivative.

# kColorSyncExtendedRange (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A key whose `CFBooleanRef` value enables or disables extended range.

## Declaration

```objectivec
extern CFStringRef kColorSyncExtendedRange;
```

## See Also

### Handling HDR and extended range

- [kColorSyncConvertUseExtendedRange](kcolorsyncconvertuseextendedrange.md): A key whose `CFBooleanRef` value allows float data to exceed the `[0.0, 1.0]` range.
- [kColorSyncTransformUseITU709OETF](kcolorsynctransformuseitu709oetf.md): A key whose `CFBooleanRef` value uses the ITU-R BT.709 opto-electronic transfer function.
- [kColorSyncHDRDerivative](kcolorsynchdrderivative.md): A key for the HDR derivative to apply to the profile in a profile-sequence dictionary.
- [kColorSyncPQDerivative](kcolorsyncpqderivative.md): A [kColorSyncHDRDerivative](kcolorsynchdrderivative.md) value selecting the PQ HDR derivative.
- [kColorSyncHLGDerivative](kcolorsynchlgderivative.md): A [kColorSyncHDRDerivative](kcolorsynchdrderivative.md) value selecting the HLG HDR derivative.
