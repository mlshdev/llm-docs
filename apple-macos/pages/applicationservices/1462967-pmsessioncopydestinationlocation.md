> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1462967-pmsessioncopydestinationlocation](https://developer.apple.com/documentation/applicationservices/1462967-pmsessioncopydestinationlocation)

# PMSessionCopyDestinationLocation(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.1+

Obtains a destination location for a print job.

## Declaration

```swift
func PMSessionCopyDestinationLocation(_ printSession: PMPrintSession, _ printSettings: PMPrintSettings, _ destLocationP: UnsafeMutablePointer<Unmanaged<CFURL>?>) -> OSStatus
```

## Parameters

- `printSession`: The printing session that provides a context for the print job.
- `printSettings`: The print settings for the print job whose destination location you want to obtain.
- `destLocationP`: A pointer to your [CFURL](https://developer.apple.com/documentation/corefoundation/cfurl) variable. On return, the variable refers to a Core Foundation URL that specifies the destination location of the print job. You are responsible for releasing the URL. If `NULL` is returned and the function executes without error (result code is `noErr`), the print job uses the default destination location for the current destination type. If an error occurs, the variable is set to `NULL`.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

You must call this function between the creation and release of a printing session. See the function [PMCreateSession(\_:)](1463247-pmcreatesession.md).

Some destination types define a specific kind of destination location for a print job. For example, the destination type `kPMDestinationFile` uses a file system URL to specify where a new file should be created for the print job’s output.

## See Also

### Accessing the Print Job Destination

- [PMSessionSetDestination(\_:\_:\_:\_:\_:)](1459855-pmsessionsetdestination.md): Sets the destination location, format, and type for a print job.
- [PMSessionGetDestinationType(\_:\_:\_:)](1461071-pmsessiongetdestinationtype.md): Obtains the output destination for a print job.
- [PMSessionCopyDestinationFormat(\_:\_:\_:)](1464266-pmsessioncopydestinationformat.md): Obtains the destination format for a print job.
- [PMSessionCopyOutputFormatList(\_:\_:\_:)](1461332-pmsessioncopyoutputformatlist.md): Obtains an array of destination formats supported by the current print destination.

# PMSessionCopyDestinationLocation (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.1+

Obtains a destination location for a print job.

## Declaration

```objectivec
OSStatus PMSessionCopyDestinationLocation(PMPrintSession printSession, PMPrintSettings printSettings, CFURLRef  _Nullable *destLocationP);
```

## Parameters

- `printSession`: The printing session that provides a context for the print job.
- `printSettings`: The print settings for the print job whose destination location you want to obtain.
- `destLocationP`: A pointer to your [CFURLRef](https://developer.apple.com/documentation/corefoundation/cfurl) variable. On return, the variable refers to a Core Foundation URL that specifies the destination location of the print job. You are responsible for releasing the URL. If `NULL` is returned and the function executes without error (result code is `noErr`), the print job uses the default destination location for the current destination type. If an error occurs, the variable is set to `NULL`.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

You must call this function between the creation and release of a printing session. See the function [PMCreateSession](1463247-pmcreatesession.md).

Some destination types define a specific kind of destination location for a print job. For example, the destination type `kPMDestinationFile` uses a file system URL to specify where a new file should be created for the print job’s output.

## See Also

### Accessing the Print Job Destination

- [PMSessionSetDestination](1459855-pmsessionsetdestination.md): Sets the destination location, format, and type for a print job.
- [PMSessionGetDestinationType](1461071-pmsessiongetdestinationtype.md): Obtains the output destination for a print job.
- [PMSessionCopyDestinationFormat](1464266-pmsessioncopydestinationformat.md): Obtains the destination format for a print job.
- [PMSessionCopyOutputFormatList](1461332-pmsessioncopyoutputformatlist.md): Obtains an array of destination formats supported by the current print destination.
