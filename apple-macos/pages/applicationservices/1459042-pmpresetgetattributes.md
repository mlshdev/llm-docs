> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1459042-pmpresetgetattributes](https://developer.apple.com/documentation/applicationservices/1459042-pmpresetgetattributes)

# PMPresetGetAttributes(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Obtains the attributes of a preset.

## Declaration

```swift
func PMPresetGetAttributes(_ preset: PMPreset, _ attributes: UnsafeMutablePointer<Unmanaged<CFDictionary>?>) -> OSStatus
```

## Parameters

- `preset`: The preset whose attributes you want to obtain. You can use the function [PMPrinterCopyPresets(\_:\_:)](1459117-pmprintercopypresets.md) to obtain the presets for a given printer.
- `attributes`: A pointer to your [CFDictionary](https://developer.apple.com/documentation/corefoundation/cfdictionary) variable. On return, the variable refers to a Core Foundation dictionary containing the attributes of the specified preset, or `NULL` if the attributes could not be obtained. For more information about these attributes, see the Discussion. You should not release this dictionary without first retaining it.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

A preset has associated with it a dictionary containing the preset identifier, the localized name, and a description of the environment for which the preset is intended. In addition to these standard attributes, the preset you specify may contain additional attributes that reflect custom print settings.

## See Also

### Using Printer Presets

- [PMPresetCopyName(\_:\_:)](1460343-pmpresetcopyname.md): Obtains the localized name for a preset.
- [PMPresetCreatePrintSettings(\_:\_:\_:)](1463414-pmpresetcreateprintsettings.md): Creates a print settings object with settings that correspond to a preset.

# PMPresetGetAttributes (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Obtains the attributes of a preset.

## Declaration

```objectivec
OSStatus PMPresetGetAttributes(PMPreset preset, CFDictionaryRef  _Nullable *attributes);
```

## Parameters

- `preset`: The preset whose attributes you want to obtain. You can use the function [PMPrinterCopyPresets](1459117-pmprintercopypresets.md) to obtain the presets for a given printer.
- `attributes`: A pointer to your [CFDictionaryRef](https://developer.apple.com/documentation/corefoundation/cfdictionary) variable. On return, the variable refers to a Core Foundation dictionary containing the attributes of the specified preset, or `NULL` if the attributes could not be obtained. For more information about these attributes, see the Discussion. You should not release this dictionary without first retaining it.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

A preset has associated with it a dictionary containing the preset identifier, the localized name, and a description of the environment for which the preset is intended. In addition to these standard attributes, the preset you specify may contain additional attributes that reflect custom print settings.

## See Also

### Using Printer Presets

- [PMPresetCopyName](1460343-pmpresetcopyname.md): Obtains the localized name for a preset.
- [PMPresetCreatePrintSettings](1463414-pmpresetcreateprintsettings.md): Creates a print settings object with settings that correspond to a preset.
