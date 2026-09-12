> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsyncpqderivative](https://developer.apple.com/documentation/colorsync/kcolorsyncpqderivative)

# kColorSyncPQDerivative (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A [kColorSyncHDRDerivative](kcolorsynchdrderivative.md) value selecting the PQ HDR derivative.

## Declaration

```swift
var kColorSyncPQDerivative: Unmanaged<CFString>!
```

## See Also

### Handling HDR and extended range

- [kColorSyncExtendedRange](kcolorsyncextendedrange.md): A key whose `CFBooleanRef` value enables or disables extended range.
- [kColorSyncConvertUseExtendedRange](kcolorsyncconvertuseextendedrange.md): A key whose `CFBooleanRef` value allows float data to exceed the `[0.0, 1.0]` range.
- [kColorSyncTransformUseITU709OETF](kcolorsynctransformuseitu709oetf.md): A key whose `CFBooleanRef` value uses the ITU-R BT.709 opto-electronic transfer function.
- [kColorSyncHDRDerivative](kcolorsynchdrderivative.md): A key for the HDR derivative to apply to the profile in a profile-sequence dictionary.
- [kColorSyncHLGDerivative](kcolorsynchlgderivative.md): A [kColorSyncHDRDerivative](kcolorsynchdrderivative.md) value selecting the HLG HDR derivative.

# kColorSyncPQDerivative (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A [kColorSyncHDRDerivative](kcolorsynchdrderivative.md) value selecting the PQ HDR derivative.

## Declaration

```objectivec
extern CFStringRef kColorSyncPQDerivative;
```

## See Also

### Handling HDR and extended range

- [kColorSyncExtendedRange](kcolorsyncextendedrange.md): A key whose `CFBooleanRef` value enables or disables extended range.
- [kColorSyncConvertUseExtendedRange](kcolorsyncconvertuseextendedrange.md): A key whose `CFBooleanRef` value allows float data to exceed the `[0.0, 1.0]` range.
- [kColorSyncTransformUseITU709OETF](kcolorsynctransformuseitu709oetf.md): A key whose `CFBooleanRef` value uses the ITU-R BT.709 opto-electronic transfer function.
- [kColorSyncHDRDerivative](kcolorsynchdrderivative.md): A key for the HDR derivative to apply to the profile in a profile-sequence dictionary.
- [kColorSyncHLGDerivative](kcolorsynchlgderivative.md): A [kColorSyncHDRDerivative](kcolorsynchdrderivative.md) value selecting the HLG HDR derivative.
