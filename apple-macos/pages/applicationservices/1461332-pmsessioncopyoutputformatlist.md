> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1461332-pmsessioncopyoutputformatlist](https://developer.apple.com/documentation/applicationservices/1461332-pmsessioncopyoutputformatlist)

# PMSessionCopyOutputFormatList(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.1+

Obtains an array of destination formats supported by the current print destination.

## Declaration

```swift
func PMSessionCopyOutputFormatList(_ printSession: PMPrintSession, _ destType: PMDestinationType, _ documentFormatP: UnsafeMutablePointer<Unmanaged<CFArray>?>) -> OSStatus
```

## Parameters

- `printSession`: The printing session that provides a context for the print job. The printer associated with this session is queried for the MIME types it supports.
- `destType`: A destination type that specifies the destination for which you want to obtain valid destination formats. See [PMDestinationType](pmdestinationtype.md) for a list of the possible destination types a print job can have.
- `documentFormatP`: A pointer to your [CFArray](https://developer.apple.com/documentation/corefoundation/cfarray) variable. On return, the variable refers to a Core Foundation array that contains a list of destination formats that can be generated for the current print destination. See [Document Format Strings](core_printing/document_format_strings.md) for a list of some of the output formats that can be returned.

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
- [PMSessionCopyDestinationFormat(\_:\_:\_:)](1464266-pmsessioncopydestinationformat.md): Obtains the destination format for a print job.
- [PMSessionCopyDestinationLocation(\_:\_:\_:)](1462967-pmsessioncopydestinationlocation.md): Obtains a destination location for a print job.

# PMSessionCopyOutputFormatList (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.1+

Obtains an array of destination formats supported by the current print destination.

## Declaration

```objectivec
OSStatus PMSessionCopyOutputFormatList(PMPrintSession printSession, PMDestinationType destType, CFArrayRef  _Nullable *documentFormatP);
```

## Parameters

- `printSession`: The printing session that provides a context for the print job. The printer associated with this session is queried for the MIME types it supports.
- `destType`: A destination type that specifies the destination for which you want to obtain valid destination formats. See [PMDestinationType](pmdestinationtype.md) for a list of the possible destination types a print job can have.
- `documentFormatP`: A pointer to your [CFArrayRef](https://developer.apple.com/documentation/corefoundation/cfarray) variable. On return, the variable refers to a Core Foundation array that contains a list of destination formats that can be generated for the current print destination. See [Document Format Strings](core_printing/document_format_strings.md) for a list of some of the output formats that can be returned.

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
- [PMSessionCopyDestinationFormat](1464266-pmsessioncopydestinationformat.md): Obtains the destination format for a print job.
- [PMSessionCopyDestinationLocation](1462967-pmsessioncopydestinationlocation.md): Obtains a destination location for a print job.
