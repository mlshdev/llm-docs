> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1459855-pmsessionsetdestination](https://developer.apple.com/documentation/applicationservices/1459855-pmsessionsetdestination)

# PMSessionSetDestination(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.1+

Sets the destination location, format, and type for a print job.

## Declaration

```swift
func PMSessionSetDestination(_ printSession: PMPrintSession, _ printSettings: PMPrintSettings, _ destType: PMDestinationType, _ destFormat: CFString?, _ destLocation: CFURL?) -> OSStatus
```

## Parameters

- `printSession`: The printing session that provides a context for the print job.
- `printSettings`: The print settings for the print job whose destination you want to set.
- `destType`: The destination type for the print job associated with the specified printing session and print settings. Possible values include:

  - `kPMDestinationPrinter` (output to a printer)
  - `kPMDestinationFile` (output to a file)
  - `kPMDestinationFax` (output to a fax)
  - `kPMDestinationPreview` (output to print preview)
  - `kPMDestinationProcessPDF` (output to a PDF workflow option)

  See [PMDestinationType](pmdestinationtype.md) for a complete description of destination types you can specify.
- `destFormat`: The MIME type to be generated for the specified destination type. Pass `NULL` if you want to use the default format for the specified destination type. To obtain a list of valid formats for a given destination type, use the function [PMSessionCopyOutputFormatList(\_:\_:\_:)](1461332-pmsessioncopyoutputformatlist.md).
- `destLocation`: A reference to a Core Foundation URL that specifies a destination location. You can provide this if the destination type supports a destination location. Otherwise, pass `NULL`. For example, if the destination type is a file (`kPMDestinationFile`) you can supply a file system URL to specify where the file resides.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

You can use the function `PMSessionSetDestination` when you want to send print output to a file without requiring user interaction. You must call this function between the creation and release of a printing session. See the function [PMCreateSession(\_:)](1463247-pmcreatesession.md).

## See Also

### Accessing the Print Job Destination

- [PMSessionGetDestinationType(\_:\_:\_:)](1461071-pmsessiongetdestinationtype.md): Obtains the output destination for a print job.
- [PMSessionCopyDestinationFormat(\_:\_:\_:)](1464266-pmsessioncopydestinationformat.md): Obtains the destination format for a print job.
- [PMSessionCopyDestinationLocation(\_:\_:\_:)](1462967-pmsessioncopydestinationlocation.md): Obtains a destination location for a print job.
- [PMSessionCopyOutputFormatList(\_:\_:\_:)](1461332-pmsessioncopyoutputformatlist.md): Obtains an array of destination formats supported by the current print destination.

# PMSessionSetDestination (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.1+

Sets the destination location, format, and type for a print job.

## Declaration

```objectivec
OSStatus PMSessionSetDestination(PMPrintSession printSession, PMPrintSettings printSettings, PMDestinationType destType, CFStringRef destFormat, CFURLRef destLocation);
```

## Parameters

- `printSession`: The printing session that provides a context for the print job.
- `printSettings`: The print settings for the print job whose destination you want to set.
- `destType`: The destination type for the print job associated with the specified printing session and print settings. Possible values include:

  - `kPMDestinationPrinter` (output to a printer)
  - `kPMDestinationFile` (output to a file)
  - `kPMDestinationFax` (output to a fax)
  - `kPMDestinationPreview` (output to print preview)
  - `kPMDestinationProcessPDF` (output to a PDF workflow option)

  See [PMDestinationType](pmdestinationtype.md) for a complete description of destination types you can specify.
- `destFormat`: The MIME type to be generated for the specified destination type. Pass `NULL` if you want to use the default format for the specified destination type. To obtain a list of valid formats for a given destination type, use the function [PMSessionCopyOutputFormatList](1461332-pmsessioncopyoutputformatlist.md).
- `destLocation`: A reference to a Core Foundation URL that specifies a destination location. You can provide this if the destination type supports a destination location. Otherwise, pass `NULL`. For example, if the destination type is a file (`kPMDestinationFile`) you can supply a file system URL to specify where the file resides.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

You can use the function `PMSessionSetDestination` when you want to send print output to a file without requiring user interaction. You must call this function between the creation and release of a printing session. See the function [PMCreateSession](1463247-pmcreatesession.md).

## See Also

### Accessing the Print Job Destination

- [PMSessionGetDestinationType](1461071-pmsessiongetdestinationtype.md): Obtains the output destination for a print job.
- [PMSessionCopyDestinationFormat](1464266-pmsessioncopydestinationformat.md): Obtains the destination format for a print job.
- [PMSessionCopyDestinationLocation](1462967-pmsessioncopydestinationlocation.md): Obtains a destination location for a print job.
- [PMSessionCopyOutputFormatList](1461332-pmsessioncopyoutputformatlist.md): Obtains an array of destination formats supported by the current print destination.
