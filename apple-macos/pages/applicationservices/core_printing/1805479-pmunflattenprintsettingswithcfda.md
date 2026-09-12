> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/1805479-pmunflattenprintsettingswithcfda](https://developer.apple.com/documentation/applicationservices/core_printing/1805479-pmunflattenprintsettingswithcfda)

# PMUnflattenPrintSettingsWithCFData

**Interface language:** Objective-C

**Framework:** Application Services

Rebuilds a print settings object from a Core Foundation data object that contains flattened print settings data.

> Use [PMPrintSettingsCreateWithDataRepresentation](../1462203-pmprintsettingscreatewithdatarep.md) instead.

## Declaration

```objectivec
OSStatus PMUnflattenPrintSettingsWithCFData (
   CFDataRef flattenCFData,
   PMPrintSettings *printSettings
);
```

## Parameters

- `flattenCFData`: A flattened representation of a print settings object.
- `printSettings`: A pointer to your [PMPrintSettings](../pmprintsettings.md) variable. On return, the variable refers to a print settings object rebuilt from the specified Core Foundation data object. You are responsible for releasing the print settings object with the function [PMRelease](../1461402-pmrelease.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../core_printing.md#1670007).

## See Also

### Creating and Using Print Settings Objects

- [PMCreatePrintSettings](../1463239-pmcreateprintsettings.md): Creates a new print settings object.
- [PMSessionDefaultPrintSettings](../1460138-pmsessiondefaultprintsettings.md): Assigns default parameter values to a print settings object for the specified printing session.
- [PMSessionValidatePrintSettings](../1458994-pmsessionvalidateprintsettings.md): Validates a print settings object within the context of the specified printing session.
- [PMPrintSettingsCreateDataRepresentation](../1464570-pmprintsettingscreatedatareprese.md): Creates a data representation of a print settings object.
- [PMPrintSettingsCreateWithDataRepresentation](../1462203-pmprintsettingscreatewithdatarep.md): Creates a print settings object from a data representation.
- [PMFlattenPrintSettings](1805469-pmflattenprintsettings.md): Deprecated. Flattens a print settings object into a Memory Manager handle for storage in a user document.
- [PMFlattenPrintSettingsToCFData](1805472-pmflattenprintsettingstocfdata.md): Deprecated. Flattens a print settings object into a Core Foundation data object for storage in a user document.
- [PMFlattenPrintSettingsToURL](1805473-pmflattenprintsettingstourl.md): Deprecated. Flattens a print settings object into a URL for storage in a user document.
- [PMUnflattenPrintSettings](1805476-pmunflattenprintsettings.md): Deprecated. Rebuilds a print settings object from a Memory Manager handle that contains flattened print settings data.
- [PMUnflattenPrintSettingsWithURL](1805481-pmunflattenprintsettingswithurl.md): Deprecated. Rebuilds a print settings object from a file that contains flattened print settings data.
- [PMCopyPrintSettings](../1462491-pmcopyprintsettings.md): Copies the settings from one print settings object into another.
- [PMPrintSettingsToOptions](../1459069-pmprintsettingstooptions.md): Converts print settings into a CUPS options string.
- [PMPrintSettingsToOptionsWithPrinterAndPageFormat](../1459435-pmprintsettingstooptionswithprin.md): Converts print settings and page format data into a CUPS options string for a specified printer.
