> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1506722-anonymous/kpmoutofscope](https://developer.apple.com/documentation/applicationservices/1506722-anonymous/kpmoutofscope)

# kPMOutOfScope

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

Your application called this function out of sequence with other printing functions.

## Declaration

```objectivec
kPMOutOfScope = -30871
```

## See Also

### Result Codes

- [kPMGeneralError](kpmgeneralerror.md): An unspecified error occurred.
- [kPMNoDefaultPrinter](kpmnodefaultprinter.md): The user has not specified a default printer.
- [kPMNotImplemented](kpmnotimplemented.md): The function is not implemented.
- [kPMNoSuchEntry](kpmnosuchentry.md): There is no entry to match your application’s request.
- [kPMInvalidPrintSettings](kpminvalidprintsettings.md): Your application passed an invalid print settings object.
- [kPMInvalidPageFormat](kpminvalidpageformat.md): Your application passed an invalid page format object.
- [kPMValueOutOfRange](kpmvalueoutofrange.md): Your application passed an out-of-range value.
- [kPMInvalidPrintSession](../1506800-anonymous/kpminvalidprintsession.md): Your application passed an invalid printing session object.
- [kPMInvalidPrinter](../1506800-anonymous/kpminvalidprinter.md): Your application passed an invalid printer object.
- [kPMObjectInUse](../1506800-anonymous/kpmobjectinuse.md): The specified object is in use.
- [kPMInvalidIndex](../1570866-anonymous/kpminvalidindex.md): An array index is invalid.
- [kPMStringConversionFailure](../1570866-anonymous/kpmstringconversionfailure.md): An internal error occurred while converting a string.
- [kPMXMLParseError](../1570866-anonymous/kpmxmlparseerror.md): An error occurred while parsing XML data.
- [kPMInvalidJobTemplate](../1570866-anonymous/kpminvalidjobtemplate.md): An internal error occurred while creating a job template.
- [kPMInvalidPrinterInfo](../1570866-anonymous/kpminvalidprinterinfo.md): The printer information is invalid.
- [kPMInvalidConnection](../1570866-anonymous/kpminvalidconnection.md): The printer connection type is invalid.
- [kPMInvalidKey](../1570866-anonymous/kpminvalidkey.md): The key in a ticket, job template, or dictionary is invalid.
- [kPMInvalidValue](../1570866-anonymous/kpminvalidvalue.md): The value in a ticket, job template, or dictionary is missing.
- [kPMInvalidAllocator](../1570866-anonymous/kpminvalidallocator.md): The specified memory allocator is invalid.
- [kPMInvalidTicket](../1570866-anonymous/kpminvalidticket.md): The job ticket is invalid.
- [kPMInvalidItem](../1570866-anonymous/kpminvaliditem.md): The item being added to a ticket is invalid.
- [kPMInvalidType](../1570866-anonymous/kpminvalidtype.md): The data type in a ticket, job template, or dictionary is not the expected type.
- [kPMInvalidReply](../1570866-anonymous/kpminvalidreply.md): A remote server or client sent an invalid reply.
- [kPMInvalidFileType](../1570866-anonymous/kpminvalidfiletype.md): The file type is invalid.
- [kPMInvalidObject](../1570866-anonymous/kpminvalidobject.md): The object is invalid.
- [kPMInvalidPaper](../1570866-anonymous/kpminvalidpaper.md): Your application passed an invalid paper object.
- [kPMInvalidCalibrationTarget](../1570866-anonymous/kpminvalidcalibrationtarget.md): The dictionary specifying a printer calibration target is invalid.
- [kPMInvalidPreset](../1506800-anonymous/kpminvalidpreset.md): Your application passed an invalid preset object.
