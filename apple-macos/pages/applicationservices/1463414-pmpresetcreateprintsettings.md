> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1463414-pmpresetcreateprintsettings](https://developer.apple.com/documentation/applicationservices/1463414-pmpresetcreateprintsettings)

# PMPresetCreatePrintSettings(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Creates a print settings object with settings that correspond to a preset.

## Declaration

```swift
func PMPresetCreatePrintSettings(_ preset: PMPreset, _ session: PMPrintSession, _ printSettings: UnsafeMutablePointer<PMPrintSettings?>) -> OSStatus
```

## Parameters

- `preset`: The preset whose settings you want to obtain. You can use the function [PMPrinterCopyPresets(\_:\_:)](1459117-pmprintercopypresets.md) to obtain the presets for a given printer.
- `session`: The session you use to present the Print dialog.
- `printSettings`: A pointer to your [PMPrintSettings](pmprintsettings.md) variable. On return, the variable refers to a print settings object with settings that correspond to the specified preset. You are responsible for releasing the print settings object with the function [PMRelease(\_:)](1461402-pmrelease.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

## See Also

### Using Printer Presets

- [PMPresetCopyName(\_:\_:)](1460343-pmpresetcopyname.md): Obtains the localized name for a preset.
- [PMPresetGetAttributes(\_:\_:)](1459042-pmpresetgetattributes.md): Obtains the attributes of a preset.

# PMPresetCreatePrintSettings (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Creates a print settings object with settings that correspond to a preset.

## Declaration

```objectivec
OSStatus PMPresetCreatePrintSettings(PMPreset preset, PMPrintSession session, PMPrintSettings  _Nullable *printSettings);
```

## Parameters

- `preset`: The preset whose settings you want to obtain. You can use the function [PMPrinterCopyPresets](1459117-pmprintercopypresets.md) to obtain the presets for a given printer.
- `session`: The session you use to present the Print dialog.
- `printSettings`: A pointer to your [PMPrintSettings](pmprintsettings.md) variable. On return, the variable refers to a print settings object with settings that correspond to the specified preset. You are responsible for releasing the print settings object with the function [PMRelease](1461402-pmrelease.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

## See Also

### Using Printer Presets

- [PMPresetCopyName](1460343-pmpresetcopyname.md): Obtains the localized name for a preset.
- [PMPresetGetAttributes](1459042-pmpresetgetattributes.md): Obtains the attributes of a preset.
