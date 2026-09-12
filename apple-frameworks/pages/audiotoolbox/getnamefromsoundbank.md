> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/getnamefromsoundbank](https://developer.apple.com/documentation/audiotoolbox/getnamefromsoundbank)

# GetNameFromSoundBank

**Interface language:** Objective-C

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.5)

Gets the name of a sound bank from a sound bank file.

## Declaration

```objectivec
extern OSStatus GetNameFromSoundBank(const struct FSRef *inSoundBankRef, CFStringRef*outName);
```

## Parameters

- `inSoundBankRef`: The sound bank whose name you want to get.
- `outName`: The name of the sound bank.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

The caller is responsible for releasing the sound bank name.

## See Also

### Instrument Functions

- [CopyNameFromSoundBank](copynamefromsoundbank%28____%29.md): Copies the name of a sound bank from a sound bank file at a specified URL.
- [CopyInstrumentInfoFromSoundBank](copyinstrumentinfofromsoundbank%28____%29.md)
- [kInstrumentInfoKey_LSB](kinstrumentinfokey_lsb.md)
- [kInstrumentInfoKey_MSB](kinstrumentinfokey_msb.md)
- [kInstrumentInfoKey_Name](kinstrumentinfokey_name.md)
- [kInstrumentInfoKey_Program](kinstrumentinfokey_program.md)
