> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1464266-pmsessioncopydestinationformat](https://developer.apple.com/documentation/applicationservices/1464266-pmsessioncopydestinationformat)

# PMSessionCopyDestinationFormat(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.1+

Obtains the destination format for a print job.

## Declaration

```swift
func PMSessionCopyDestinationFormat(_ printSession: PMPrintSession, _ printSettings: PMPrintSettings, _ destFormatP: UnsafeMutablePointer<Unmanaged<CFString>?>) -> OSStatus
```

## Parameters

- `printSession`: The printing session that provides a context for the print job.
- `printSettings`: The print settings object for the print job whose destination format you want to obtain.
- `destFormatP`: A pointer to your [CFString](https://developer.apple.com/documentation/corefoundation/cfstring) variable. On return, the variable refers to a Core Foundation string that contains the destination format for the print job. You are responsible for releasing the string. Currently, there are two possible values: `kPMDocumentFormatPDF` or `kPMDocumentFormatPostScript`.

  If an error occurs, the variable is set to `NULL`. If the function executes without error  and the variable is set to `NULL`, the print job is set to use the default destination format.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

You must call this function between the creation and release of a printing session. See the function [PMCreateSession(\_:)](1463247-pmcreatesession.md).

## See Also

### Accessing the Print Job Destination

- [PMSessionSetDestination(\_:\_:\_:\_:\_:)](1459855-pmsessionsetdestination.md): Sets the destination location, format, and type for a print job.
- [PMSessionGetDestinationType(\_:\_:\_:)](1461071-pmsessiongetdestinationtype.md): Obtains the output destination for a print job.
- [PMSessionCopyDestinationLocation(\_:\_:\_:)](1462967-pmsessioncopydestinationlocation.md): Obtains a destination location for a print job.
- [PMSessionCopyOutputFormatList(\_:\_:\_:)](1461332-pmsessioncopyoutputformatlist.md): Obtains an array of destination formats supported by the current print destination.

# PMSessionCopyDestinationFormat (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.1+

Obtains the destination format for a print job.

## Declaration

```objectivec
OSStatus PMSessionCopyDestinationFormat(PMPrintSession printSession, PMPrintSettings printSettings, CFStringRef  _Nullable *destFormatP);
```

## Parameters

- `printSession`: The printing session that provides a context for the print job.
- `printSettings`: The print settings object for the print job whose destination format you want to obtain.
- `destFormatP`: A pointer to your [CFStringRef](https://developer.apple.com/documentation/corefoundation/cfstring) variable. On return, the variable refers to a Core Foundation string that contains the destination format for the print job. You are responsible for releasing the string. Currently, there are two possible values: `kPMDocumentFormatPDF` or `kPMDocumentFormatPostScript`.

  If an error occurs, the variable is set to `NULL`. If the function executes without error  and the variable is set to `NULL`, the print job is set to use the default destination format.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

You must call this function between the creation and release of a printing session. See the function [PMCreateSession](1463247-pmcreatesession.md).

## See Also

### Accessing the Print Job Destination

- [PMSessionSetDestination](1459855-pmsessionsetdestination.md): Sets the destination location, format, and type for a print job.
- [PMSessionGetDestinationType](1461071-pmsessiongetdestinationtype.md): Obtains the output destination for a print job.
- [PMSessionCopyDestinationLocation](1462967-pmsessioncopydestinationlocation.md): Obtains a destination location for a print job.
- [PMSessionCopyOutputFormatList](1461332-pmsessioncopyoutputformatlist.md): Obtains an array of destination formats supported by the current print destination.
