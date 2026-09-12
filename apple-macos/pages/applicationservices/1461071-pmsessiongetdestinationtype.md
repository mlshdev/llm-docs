> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1461071-pmsessiongetdestinationtype](https://developer.apple.com/documentation/applicationservices/1461071-pmsessiongetdestinationtype)

# PMSessionGetDestinationType(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.1+

Obtains the output destination for a print job.

## Declaration

```swift
func PMSessionGetDestinationType(_ printSession: PMPrintSession, _ printSettings: PMPrintSettings, _ destTypeP: UnsafeMutablePointer<PMDestinationType>) -> OSStatus
```

## Parameters

- `printSession`: The printing session that provides a context for the print job. This must be the same printing session used for the Print dialog. The printing session contains the preview setting, which can override the destination type in the print settings.
- `printSettings`: The print settings for the print job whose destination you want to obtain.
- `destTypeP`: A pointer to your `PMDestinationType` variable. On return, the variable contains the destination type for the specified print job. Possible values include:

  - `kPMDestinationPrinter` (output to a printer)
  - `kPMDestinationFile` (output to a file)
  - `kPMDestinationFax` (output to a fax)
  - `kPMDestinationPreview` (output to print preview)
  - `kPMDestinationProcessPDF` (output to a PDF workflow option)

  See [PMDestinationType](pmdestinationtype.md) for a complete description of the destination type constants.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

You must call this function between the creation and release of a printing session. See the function [PMCreateSession(\_:)](1463247-pmcreatesession.md).

All of the destination types are stored in the print settings object except for `kPMDestinationPreview`, which is stored in the printing session object. If the destination type is set as preview, the preview setting overrides the destination set in the print settings object.

## See Also

### Accessing the Print Job Destination

- [PMSessionSetDestination(\_:\_:\_:\_:\_:)](1459855-pmsessionsetdestination.md): Sets the destination location, format, and type for a print job.
- [PMSessionCopyDestinationFormat(\_:\_:\_:)](1464266-pmsessioncopydestinationformat.md): Obtains the destination format for a print job.
- [PMSessionCopyDestinationLocation(\_:\_:\_:)](1462967-pmsessioncopydestinationlocation.md): Obtains a destination location for a print job.
- [PMSessionCopyOutputFormatList(\_:\_:\_:)](1461332-pmsessioncopyoutputformatlist.md): Obtains an array of destination formats supported by the current print destination.

# PMSessionGetDestinationType (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.1+

Obtains the output destination for a print job.

## Declaration

```objectivec
OSStatus PMSessionGetDestinationType(PMPrintSession printSession, PMPrintSettings printSettings, PMDestinationType *destTypeP);
```

## Parameters

- `printSession`: The printing session that provides a context for the print job. This must be the same printing session used for the Print dialog. The printing session contains the preview setting, which can override the destination type in the print settings.
- `printSettings`: The print settings for the print job whose destination you want to obtain.
- `destTypeP`: A pointer to your `PMDestinationType` variable. On return, the variable contains the destination type for the specified print job. Possible values include:

  - `kPMDestinationPrinter` (output to a printer)
  - `kPMDestinationFile` (output to a file)
  - `kPMDestinationFax` (output to a fax)
  - `kPMDestinationPreview` (output to print preview)
  - `kPMDestinationProcessPDF` (output to a PDF workflow option)

  See [PMDestinationType](pmdestinationtype.md) for a complete description of the destination type constants.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

You must call this function between the creation and release of a printing session. See the function [PMCreateSession](1463247-pmcreatesession.md).

All of the destination types are stored in the print settings object except for `kPMDestinationPreview`, which is stored in the printing session object. If the destination type is set as preview, the preview setting overrides the destination set in the print settings object.

## See Also

### Accessing the Print Job Destination

- [PMSessionSetDestination](1459855-pmsessionsetdestination.md): Sets the destination location, format, and type for a print job.
- [PMSessionCopyDestinationFormat](1464266-pmsessioncopydestinationformat.md): Obtains the destination format for a print job.
- [PMSessionCopyDestinationLocation](1462967-pmsessioncopydestinationlocation.md): Obtains a destination location for a print job.
- [PMSessionCopyOutputFormatList](1461332-pmsessioncopyoutputformatlist.md): Obtains an array of destination formats supported by the current print destination.
