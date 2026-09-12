> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/copyinstrumentinfofromsoundbank(_:_:)](https://developer.apple.com/documentation/audiotoolbox/copyinstrumentinfofromsoundbank(_:_:))

# CopyInstrumentInfoFromSoundBank(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func CopyInstrumentInfoFromSoundBank(_ inURL: CFURL, _ outInstrumentInfo: UnsafeMutablePointer<Unmanaged<CFArray>?>) -> OSStatus
```

## See Also

### Instrument Functions

- [CopyNameFromSoundBank(\_:\_:)](copynamefromsoundbank%28____%29.md): Copies the name of a sound bank from a sound bank file at a specified URL.
- [kInstrumentInfoKey_LSB](kinstrumentinfokey_lsb.md)
- [kInstrumentInfoKey_MSB](kinstrumentinfokey_msb.md)
- [kInstrumentInfoKey_Name](kinstrumentinfokey_name.md)
- [kInstrumentInfoKey_Program](kinstrumentinfokey_program.md)

# CopyInstrumentInfoFromSoundBank (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern OSStatus CopyInstrumentInfoFromSoundBank(CFURLRef inURL, CFArrayRef*outInstrumentInfo);
```

## See Also

### Instrument Functions

- [CopyNameFromSoundBank](copynamefromsoundbank%28____%29.md): Copies the name of a sound bank from a sound bank file at a specified URL.
- [GetNameFromSoundBank](getnamefromsoundbank.md): Deprecated. Gets the name of a sound bank from a sound bank file.
- [kInstrumentInfoKey_LSB](kinstrumentinfokey_lsb.md)
- [kInstrumentInfoKey_MSB](kinstrumentinfokey_msb.md)
- [kInstrumentInfoKey_Name](kinstrumentinfokey_name.md)
- [kInstrumentInfoKey_Program](kinstrumentinfokey_program.md)
