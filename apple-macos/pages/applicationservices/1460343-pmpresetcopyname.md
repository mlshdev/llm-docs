> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1460343-pmpresetcopyname](https://developer.apple.com/documentation/applicationservices/1460343-pmpresetcopyname)

# PMPresetCopyName(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Obtains the localized name for a preset.

## Declaration

```swift
func PMPresetCopyName(_ preset: PMPreset, _ name: UnsafeMutablePointer<Unmanaged<CFString>?>) -> OSStatus
```

## Parameters

- `preset`: The preset object whose localized name you want to obtain. You can use the function [PMPrinterCopyPresets(\_:\_:)](1459117-pmprintercopypresets.md) to obtain the presets for a given printer.
- `paperID`: A pointer to your [CFString](https://developer.apple.com/documentation/corefoundation/cfstring) variable. On return, the variable refers to a Core Foundation string containing the localized name of the specified preset. You are responsible for releasing the string.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

## See Also

### Using Printer Presets

- [PMPresetCreatePrintSettings(\_:\_:\_:)](1463414-pmpresetcreateprintsettings.md): Creates a print settings object with settings that correspond to a preset.
- [PMPresetGetAttributes(\_:\_:)](1459042-pmpresetgetattributes.md): Obtains the attributes of a preset.

# PMPresetCopyName (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Obtains the localized name for a preset.

## Declaration

```objectivec
OSStatus PMPresetCopyName(PMPreset preset, CFStringRef  _Nullable *name);
```

## Parameters

- `preset`: The preset object whose localized name you want to obtain. You can use the function [PMPrinterCopyPresets](1459117-pmprintercopypresets.md) to obtain the presets for a given printer.
- `paperID`: A pointer to your [CFStringRef](https://developer.apple.com/documentation/corefoundation/cfstring) variable. On return, the variable refers to a Core Foundation string containing the localized name of the specified preset. You are responsible for releasing the string.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

## See Also

### Using Printer Presets

- [PMPresetCreatePrintSettings](1463414-pmpresetcreateprintsettings.md): Creates a print settings object with settings that correspond to a preset.
- [PMPresetGetAttributes](1459042-pmpresetgetattributes.md): Obtains the attributes of a preset.
