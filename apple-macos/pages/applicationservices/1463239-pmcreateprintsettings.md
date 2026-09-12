> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1463239-pmcreateprintsettings](https://developer.apple.com/documentation/applicationservices/1463239-pmcreateprintsettings)

# PMCreatePrintSettings(\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Creates a new print settings object.

## Declaration

```swift
func PMCreatePrintSettings(_ printSettings: UnsafeMutablePointer<PMPrintSettings?>) -> OSStatus
```

## Parameters

- `printSettings`: A pointer to your [PMPrintSettings](pmprintsettings.md) variable. On return, the variable refers to a new print settings object. You are responsible for releasing the print settings object with the function [PMRelease(\_:)](1461402-pmrelease.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

This function allocates memory for a new print settings object in your application’s memory space and sets its reference count to 1. The new print settings object is empty and unusable until you call [PMSessionDefaultPrintSettings(\_:\_:)](1460138-pmsessiondefaultprintsettings.md) or [PMCopyPrintSettings(\_:\_:)](1462491-pmcopyprintsettings.md).

## See Also

### Creating and Using Print Settings Objects

- [PMSessionDefaultPrintSettings(\_:\_:)](1460138-pmsessiondefaultprintsettings.md): Assigns default parameter values to a print settings object for the specified printing session.
- [PMSessionValidatePrintSettings(\_:\_:\_:)](1458994-pmsessionvalidateprintsettings.md): Validates a print settings object within the context of the specified printing session.
- [PMPrintSettingsCreateDataRepresentation(\_:\_:\_:)](1464570-pmprintsettingscreatedatareprese.md): Creates a data representation of a print settings object.
- [PMPrintSettingsCreateWithDataRepresentation(\_:\_:)](1462203-pmprintsettingscreatewithdatarep.md): Creates a print settings object from a data representation.
- [PMCopyPrintSettings(\_:\_:)](1462491-pmcopyprintsettings.md): Copies the settings from one print settings object into another.
- [PMPrintSettingsToOptions(\_:\_:)](1459069-pmprintsettingstooptions.md): Converts print settings into a CUPS options string.
- [PMPrintSettingsToOptionsWithPrinterAndPageFormat(\_:\_:\_:\_:)](1459435-pmprintsettingstooptionswithprin.md): Converts print settings and page format data into a CUPS options string for a specified printer.

# PMCreatePrintSettings (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Creates a new print settings object.

## Declaration

```objectivec
OSStatus PMCreatePrintSettings(PMPrintSettings  _Nullable *printSettings);
```

## Parameters

- `printSettings`: A pointer to your [PMPrintSettings](pmprintsettings.md) variable. On return, the variable refers to a new print settings object. You are responsible for releasing the print settings object with the function [PMRelease](1461402-pmrelease.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

This function allocates memory for a new print settings object in your application’s memory space and sets its reference count to 1. The new print settings object is empty and unusable until you call [PMSessionDefaultPrintSettings](1460138-pmsessiondefaultprintsettings.md) or [PMCopyPrintSettings](1462491-pmcopyprintsettings.md).

## See Also

### Creating and Using Print Settings Objects

- [PMSessionDefaultPrintSettings](1460138-pmsessiondefaultprintsettings.md): Assigns default parameter values to a print settings object for the specified printing session.
- [PMSessionValidatePrintSettings](1458994-pmsessionvalidateprintsettings.md): Validates a print settings object within the context of the specified printing session.
- [PMPrintSettingsCreateDataRepresentation](1464570-pmprintsettingscreatedatareprese.md): Creates a data representation of a print settings object.
- [PMPrintSettingsCreateWithDataRepresentation](1462203-pmprintsettingscreatewithdatarep.md): Creates a print settings object from a data representation.
- [PMFlattenPrintSettings](core_printing/1805469-pmflattenprintsettings.md): Deprecated. Flattens a print settings object into a Memory Manager handle for storage in a user document.
- [PMFlattenPrintSettingsToCFData](core_printing/1805472-pmflattenprintsettingstocfdata.md): Deprecated. Flattens a print settings object into a Core Foundation data object for storage in a user document.
- [PMFlattenPrintSettingsToURL](core_printing/1805473-pmflattenprintsettingstourl.md): Deprecated. Flattens a print settings object into a URL for storage in a user document.
- [PMUnflattenPrintSettings](core_printing/1805476-pmunflattenprintsettings.md): Deprecated. Rebuilds a print settings object from a Memory Manager handle that contains flattened print settings data.
- [PMUnflattenPrintSettingsWithCFData](core_printing/1805479-pmunflattenprintsettingswithcfda.md): Deprecated. Rebuilds a print settings object from a Core Foundation data object that contains flattened print settings data.
- [PMUnflattenPrintSettingsWithURL](core_printing/1805481-pmunflattenprintsettingswithurl.md): Deprecated. Rebuilds a print settings object from a file that contains flattened print settings data.
- [PMCopyPrintSettings](1462491-pmcopyprintsettings.md): Copies the settings from one print settings object into another.
- [PMPrintSettingsToOptions](1459069-pmprintsettingstooptions.md): Converts print settings into a CUPS options string.
- [PMPrintSettingsToOptionsWithPrinterAndPageFormat](1459435-pmprintsettingstooptionswithprin.md): Converts print settings and page format data into a CUPS options string for a specified printer.
