> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1464570-pmprintsettingscreatedatareprese](https://developer.apple.com/documentation/applicationservices/1464570-pmprintsettingscreatedatareprese)

# PMPrintSettingsCreateDataRepresentation(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Creates a data representation of a print settings object.

## Declaration

```swift
func PMPrintSettingsCreateDataRepresentation(_ printSettings: PMPrintSettings, _ data: UnsafeMutablePointer<Unmanaged<CFData>?>, _ format: PMDataFormat) -> OSStatus
```

## Parameters

- `printSettings`: The print settings object to convert.
- `data`: A pointer to your [CFData](https://developer.apple.com/documentation/corefoundation/cfdata) variable. On return, the variable refers to a new Core Foundation data object that contains a representation of the specified print settings object in the specified data format. You are responsible for releasing the data object.
- `format`: A constant that specifies the format of the data representation.  Supported values are:

  - `kPMDataFormatXMLDefault` (compatible with all macOS versions)
  - `kPMDataFormatXMLMinimal` (approximately 3-5 times smaller; compatible with macOS 10.5 and later)
  - `kPMDataFormatXMLCompressed` (approximately 20 times smaller; compatible with macOS 10.5 and later)

  See [PMDataFormat](pmdataformat.md) for a full description of these formats.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

This function is typically used to convert a print settings object into a data representation suitable for storage in a user document. For information about using a Core Foundation data object, see `CFData`.

Before calling this function, you should call the function [PMSessionValidatePrintSettings(\_:\_:\_:)](1458994-pmsessionvalidateprintsettings.md) to make sure the print settings object contains valid values.

Apple recommends that you do not reuse the print settings information if the user prints the document again. The information supplied by the user in the Print dialog should pertain to the document only while the document prints, so there is no need to save the print settings object.

## See Also

### Creating and Using Print Settings Objects

- [PMCreatePrintSettings(\_:)](1463239-pmcreateprintsettings.md): Creates a new print settings object.
- [PMSessionDefaultPrintSettings(\_:\_:)](1460138-pmsessiondefaultprintsettings.md): Assigns default parameter values to a print settings object for the specified printing session.
- [PMSessionValidatePrintSettings(\_:\_:\_:)](1458994-pmsessionvalidateprintsettings.md): Validates a print settings object within the context of the specified printing session.
- [PMPrintSettingsCreateWithDataRepresentation(\_:\_:)](1462203-pmprintsettingscreatewithdatarep.md): Creates a print settings object from a data representation.
- [PMCopyPrintSettings(\_:\_:)](1462491-pmcopyprintsettings.md): Copies the settings from one print settings object into another.
- [PMPrintSettingsToOptions(\_:\_:)](1459069-pmprintsettingstooptions.md): Converts print settings into a CUPS options string.
- [PMPrintSettingsToOptionsWithPrinterAndPageFormat(\_:\_:\_:\_:)](1459435-pmprintsettingstooptionswithprin.md): Converts print settings and page format data into a CUPS options string for a specified printer.

# PMPrintSettingsCreateDataRepresentation (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Creates a data representation of a print settings object.

## Declaration

```objectivec
OSStatus PMPrintSettingsCreateDataRepresentation(PMPrintSettings printSettings, CFDataRef  _Nullable *data, PMDataFormat format);
```

## Parameters

- `printSettings`: The print settings object to convert.
- `data`: A pointer to your [CFDataRef](https://developer.apple.com/documentation/corefoundation/cfdata) variable. On return, the variable refers to a new Core Foundation data object that contains a representation of the specified print settings object in the specified data format. You are responsible for releasing the data object.
- `format`: A constant that specifies the format of the data representation.  Supported values are:

  - `kPMDataFormatXMLDefault` (compatible with all macOS versions)
  - `kPMDataFormatXMLMinimal` (approximately 3-5 times smaller; compatible with macOS 10.5 and later)
  - `kPMDataFormatXMLCompressed` (approximately 20 times smaller; compatible with macOS 10.5 and later)

  See [PMDataFormat](pmdataformat.md) for a full description of these formats.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

This function is typically used to convert a print settings object into a data representation suitable for storage in a user document. For information about using a Core Foundation data object, see `CFData`.

Before calling this function, you should call the function [PMSessionValidatePrintSettings](1458994-pmsessionvalidateprintsettings.md) to make sure the print settings object contains valid values.

Apple recommends that you do not reuse the print settings information if the user prints the document again. The information supplied by the user in the Print dialog should pertain to the document only while the document prints, so there is no need to save the print settings object.

## See Also

### Creating and Using Print Settings Objects

- [PMCreatePrintSettings](1463239-pmcreateprintsettings.md): Creates a new print settings object.
- [PMSessionDefaultPrintSettings](1460138-pmsessiondefaultprintsettings.md): Assigns default parameter values to a print settings object for the specified printing session.
- [PMSessionValidatePrintSettings](1458994-pmsessionvalidateprintsettings.md): Validates a print settings object within the context of the specified printing session.
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
