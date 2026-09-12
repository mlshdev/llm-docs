> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1458994-pmsessionvalidateprintsettings](https://developer.apple.com/documentation/applicationservices/1458994-pmsessionvalidateprintsettings)

# PMSessionValidatePrintSettings(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Validates a print settings object within the context of the specified printing session.

## Declaration

```swift
func PMSessionValidatePrintSettings(_ printSession: PMPrintSession, _ printSettings: PMPrintSettings, _ changed: UnsafeMutablePointer<DarwinBoolean>?) -> OSStatus
```

## Parameters

- `printSession`: The printing session for the specified print settings object.
- `printSettings`: The print settings object to validate.
- `result`: A pointer to your Boolean variable. On return, `true` if any parameters changed, or `false` if no parameters changed.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

You must call this function between the creation and release of a printing session. See the function [PMCreateSession(\_:)](1463247-pmcreatesession.md).

## See Also

### Creating and Using Print Settings Objects

- [PMCreatePrintSettings(\_:)](1463239-pmcreateprintsettings.md): Creates a new print settings object.
- [PMSessionDefaultPrintSettings(\_:\_:)](1460138-pmsessiondefaultprintsettings.md): Assigns default parameter values to a print settings object for the specified printing session.
- [PMPrintSettingsCreateDataRepresentation(\_:\_:\_:)](1464570-pmprintsettingscreatedatareprese.md): Creates a data representation of a print settings object.
- [PMPrintSettingsCreateWithDataRepresentation(\_:\_:)](1462203-pmprintsettingscreatewithdatarep.md): Creates a print settings object from a data representation.
- [PMCopyPrintSettings(\_:\_:)](1462491-pmcopyprintsettings.md): Copies the settings from one print settings object into another.
- [PMPrintSettingsToOptions(\_:\_:)](1459069-pmprintsettingstooptions.md): Converts print settings into a CUPS options string.
- [PMPrintSettingsToOptionsWithPrinterAndPageFormat(\_:\_:\_:\_:)](1459435-pmprintsettingstooptionswithprin.md): Converts print settings and page format data into a CUPS options string for a specified printer.

# PMSessionValidatePrintSettings (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Validates a print settings object within the context of the specified printing session.

## Declaration

```objectivec
OSStatus PMSessionValidatePrintSettings(PMPrintSession printSession, PMPrintSettings printSettings, Boolean *changed);
```

## Parameters

- `printSession`: The printing session for the specified print settings object.
- `printSettings`: The print settings object to validate.
- `result`: A pointer to your Boolean variable. On return, `true` if any parameters changed, or `false` if no parameters changed.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

You must call this function between the creation and release of a printing session. See the function [PMCreateSession](1463247-pmcreatesession.md).

## See Also

### Creating and Using Print Settings Objects

- [PMCreatePrintSettings](1463239-pmcreateprintsettings.md): Creates a new print settings object.
- [PMSessionDefaultPrintSettings](1460138-pmsessiondefaultprintsettings.md): Assigns default parameter values to a print settings object for the specified printing session.
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
