> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/copynamefromsoundbank(_:_:)](https://developer.apple.com/documentation/audiotoolbox/copynamefromsoundbank(_:_:))

# CopyNameFromSoundBank(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Copies the name of a sound bank from a sound bank file at a specified URL.

## Declaration

```swift
func CopyNameFromSoundBank(_ inURL: CFURL, _ outName: UnsafeMutablePointer<Unmanaged<CFString>?>) -> OSStatus
```

## Parameters

- `inURL`: A URL that points to the sound bank whose name you want to get.
- `outName`: The name of the sound bank.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Instrument Functions

- [CopyInstrumentInfoFromSoundBank(\_:\_:)](copyinstrumentinfofromsoundbank%28____%29.md)
- [kInstrumentInfoKey_LSB](kinstrumentinfokey_lsb.md)
- [kInstrumentInfoKey_MSB](kinstrumentinfokey_msb.md)
- [kInstrumentInfoKey_Name](kinstrumentinfokey_name.md)
- [kInstrumentInfoKey_Program](kinstrumentinfokey_program.md)

# CopyNameFromSoundBank (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Copies the name of a sound bank from a sound bank file at a specified URL.

## Declaration

```objectivec
extern OSStatus CopyNameFromSoundBank(CFURLRef inURL, CFStringRef*outName);
```

## Parameters

- `inURL`: A URL that points to the sound bank whose name you want to get.
- `outName`: The name of the sound bank.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Instrument Functions

- [CopyInstrumentInfoFromSoundBank](copyinstrumentinfofromsoundbank%28____%29.md)
- [GetNameFromSoundBank](getnamefromsoundbank.md): Deprecated. Gets the name of a sound bank from a sound bank file.
- [kInstrumentInfoKey_LSB](kinstrumentinfokey_lsb.md)
- [kInstrumentInfoKey_MSB](kinstrumentinfokey_msb.md)
- [kInstrumentInfoKey_Name](kinstrumentinfokey_name.md)
- [kInstrumentInfoKey_Program](kinstrumentinfokey_program.md)
