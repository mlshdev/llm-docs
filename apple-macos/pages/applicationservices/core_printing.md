> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing](https://developer.apple.com/documentation/applicationservices/core_printing)

# Core Printing (Swift)

**Framework:** Application Services  
**Kind:** API Collection

<a id="overview"></a>

## Overview

Core Printing is a C API that Mac apps and command line tools can use to perform printing tasks that don’t display a user interface. Core Printing defines a set of opaque types and a rich set of operations on instances of these types. The Core Printing opaque types include:

- `PMPrintSession` for general information about a print job
- `PMPrintSettings` for print job parameters
- `PMPageFormat` for the page format of a printed document
- `PMPaper` for information about a type of paper
- `PMPrinter` for information about a printer

In Carbon applications, Core Printing is used together with Carbon Printing to implement printing features. For more information about Carbon Printing, see Carbon Printing Reference.

In Cocoa applications, Core Printing can be used to extend the functionality in the Cocoa printing classes. The [NSPrintInfo](../appkit/nsprintinfo.md) class provides direct access to some Core Printing objects.

> **Note**

> Core Printing is available to 64-bit applications, except for functions, data types, and constants that have been deprecated.

## Topics

### Releasing and Retaining Printing Objects

- [PMRelease(\_:)](1461402-pmrelease.md): Releases a printing object by decrementing its reference count.
- [PMRetain(\_:)](1460190-pmretain.md): Retains a printing object by incrementing its reference count.

### Creating and Using Page Format Objects

- [PMCreatePageFormat(\_:)](1459485-pmcreatepageformat.md): Creates a new page format object.
- [PMCreatePageFormatWithPMPaper(\_:\_:)](1459274-pmcreatepageformatwithpmpaper.md): Creates a page format object with a specified paper.
- [PMCopyPageFormat(\_:\_:)](1464669-pmcopypageformat.md): Copies the settings from one page format object into another.
- [PMSessionDefaultPageFormat(\_:\_:)](1462217-pmsessiondefaultpageformat.md): Assigns default parameter values to a page format object used in the specified printing session.
- [PMSessionValidatePageFormat(\_:\_:\_:)](1459090-pmsessionvalidatepageformat.md): Updates the values in a page format object and validates them against the current formatting printer.
- [PMSessionCreatePageFormatList(\_:\_:\_:)](1463985-pmsessioncreatepageformatlist.md): Obtains a list of page format objects, each of which describes a paper size available on the specified printer.
- [PMPageFormatCreateDataRepresentation(\_:\_:\_:)](1464227-pmpageformatcreatedatarepresenta.md): Creates a data representation of a page format object.
- [PMPageFormatCreateWithDataRepresentation(\_:\_:)](1462876-pmpageformatcreatewithdatarepres.md): Creates a page format object from a data representation.

### Accessing Data in Page Format Objects

- [PMGetPageFormatExtendedData(\_:\_:\_:\_:)](1464455-pmgetpageformatextendeddata.md): Obtains extended page format data previously stored by your application.
- [PMSetPageFormatExtendedData(\_:\_:\_:\_:)](1463464-pmsetpageformatextendeddata.md): Stores your application-specific data in a page format object.
- [PMGetPageFormatPaper(\_:\_:)](1461319-pmgetpageformatpaper.md): Obtains the paper associated with a page format object.
- [PMPageFormatGetPrinterID(\_:\_:)](1462961-pmpageformatgetprinterid.md): Obtains the identifier of the formatting printer for a page format object.
- [PMGetOrientation(\_:\_:)](1459144-pmgetorientation.md): Obtains the current setting for page orientation.
- [PMSetOrientation(\_:\_:\_:)](1459016-pmsetorientation.md): Sets the page orientation for printing.
- [PMGetScale(\_:\_:)](1458796-pmgetscale.md): Obtains the scaling factor currently applied to the page and paper rectangles.
- [PMSetScale(\_:\_:)](1463343-pmsetscale.md): Sets the scaling factor for the page and paper rectangles.
- [PMGetAdjustedPageRect(\_:\_:)](1461543-pmgetadjustedpagerect.md): Obtains the imageable area or page rectangle, taking into account orientation, application drawing resolution, and scaling settings.
- [PMGetAdjustedPaperRect(\_:\_:)](1459167-pmgetadjustedpaperrect.md): Obtains the rectangle defining the paper size, taking into account orientation, application drawing resolution, and scaling settings.
- [PMGetUnadjustedPageRect(\_:\_:)](1462944-pmgetunadjustedpagerect.md): Obtains the imageable area or page rectangle, unaffected by orientation, resolution, or scaling.
- [PMGetUnadjustedPaperRect(\_:\_:)](1462939-pmgetunadjustedpaperrect.md): Obtains the paper rectangle, unaffected by rotation, resolution, or scaling.

### Creating and Using Print Settings Objects

- [PMCreatePrintSettings(\_:)](1463239-pmcreateprintsettings.md): Creates a new print settings object.
- [PMSessionDefaultPrintSettings(\_:\_:)](1460138-pmsessiondefaultprintsettings.md): Assigns default parameter values to a print settings object for the specified printing session.
- [PMSessionValidatePrintSettings(\_:\_:\_:)](1458994-pmsessionvalidateprintsettings.md): Validates a print settings object within the context of the specified printing session.
- [PMPrintSettingsCreateDataRepresentation(\_:\_:\_:)](1464570-pmprintsettingscreatedatareprese.md): Creates a data representation of a print settings object.
- [PMPrintSettingsCreateWithDataRepresentation(\_:\_:)](1462203-pmprintsettingscreatewithdatarep.md): Creates a print settings object from a data representation.
- [PMCopyPrintSettings(\_:\_:)](1462491-pmcopyprintsettings.md): Copies the settings from one print settings object into another.
- [PMPrintSettingsToOptions(\_:\_:)](1459069-pmprintsettingstooptions.md): Converts print settings into a CUPS options string.
- [PMPrintSettingsToOptionsWithPrinterAndPageFormat(\_:\_:\_:\_:)](1459435-pmprintsettingstooptionswithprin.md): Converts print settings and page format data into a CUPS options string for a specified printer.

### Accessing Data in Print Settings Objects

- [PMGetFirstPage(\_:\_:)](1460271-pmgetfirstpage.md): Obtains the number of the first page to be printed.
- [PMSetFirstPage(\_:\_:\_:)](1461519-pmsetfirstpage.md): Sets the default page number of the first page to be printed.
- [PMGetLastPage(\_:\_:)](1462747-pmgetlastpage.md): Obtains the number of the last page to be printed.
- [PMSetLastPage(\_:\_:\_:)](1463595-pmsetlastpage.md): Sets the page number of the last page to be printed.
- [PMGetPageRange(\_:\_:\_:)](1459324-pmgetpagerange.md): Obtains the valid range of pages that can be printed.
- [PMSetPageRange(\_:\_:\_:)](1462294-pmsetpagerange.md): Sets the valid range of pages that can be printed.
- [PMPrintSettingsGetJobName(\_:\_:)](1459233-pmprintsettingsgetjobname.md): Obtains the name of a print job.
- [PMPrintSettingsSetJobName(\_:\_:)](1460149-pmprintsettingssetjobname.md): Specifies the name of a print job.
- [PMGetCopies(\_:\_:)](1464480-pmgetcopies.md): Obtains the number of copies that the user requests to be printed.
- [PMSetCopies(\_:\_:\_:)](1463804-pmsetcopies.md): Sets the initial value for the number of copies to be printed.
- [PMGetCollate(\_:\_:)](1464492-pmgetcollate.md): Obtains a Boolean value that indicates whether the job collate option is selected.
- [PMSetCollate(\_:\_:)](1463223-pmsetcollate.md): Specifies whether the job collate option is selected.
- [PMGetDuplex(\_:\_:)](1458921-pmgetduplex.md): Obtains the selected duplex mode.
- [PMSetDuplex(\_:\_:)](1462000-pmsetduplex.md): Sets the duplex mode.
- [PMPrintSettingsGetValue(\_:\_:\_:)](1460602-pmprintsettingsgetvalue.md): Obtains the value of a setting in a print settings object.
- [PMPrintSettingsSetValue(\_:\_:\_:\_:)](1461697-pmprintsettingssetvalue.md): Stores the value of a setting in a print settings object.
- [PMPrintSettingsCopyAsDictionary(\_:\_:)](1459088-pmprintsettingscopyasdictionary.md): Creates a dictionary that contains the settings in a print settings object.
- [PMPrintSettingsCopyKeys(\_:\_:)](1462730-pmprintsettingscopykeys.md): Obtains the keys for items in a print settings object.

### Creating Printing Session Objects

- [PMCreateSession(\_:)](1463247-pmcreatesession.md): Creates and initializes a printing session object and creates a context for printing operations.

### Accessing Data in Printing Session Objects

- [PMSessionGetDataFromSession(\_:\_:\_:)](1462964-pmsessiongetdatafromsession.md): Obtains application-specific data previously stored in a printing session object.
- [PMSessionSetDataInSession(\_:\_:\_:)](1461902-pmsessionsetdatainsession.md): Stores your application-specific data in a printing session object.
- [PMSessionGetCurrentPrinter(\_:\_:)](1458998-pmsessiongetcurrentprinter.md): Obtains the current printer associated with a printing session.
- [PMSessionSetCurrentPMPrinter(\_:\_:)](1461096-pmsessionsetcurrentpmprinter.md): Changes the current printer for a printing session.
- [PMSessionGetCGGraphicsContext(\_:\_:)](1461952-pmsessiongetcggraphicscontext.md): Obtains the Quartz graphics context for the current page in a printing session.
- [PMSessionError(\_:)](1460003-pmsessionerror.md): Obtains the result code for any error returned by the printing session.
- [PMSessionSetError(\_:\_:)](1460216-pmsessionseterror.md): Sets the value of the current result code for the specified printing session.

### Using Printer Presets

- [PMPresetCopyName(\_:\_:)](1460343-pmpresetcopyname.md): Obtains the localized name for a preset.
- [PMPresetCreatePrintSettings(\_:\_:\_:)](1463414-pmpresetcreateprintsettings.md): Creates a print settings object with settings that correspond to a preset.
- [PMPresetGetAttributes(\_:\_:)](1459042-pmpresetgetattributes.md): Obtains the attributes of a preset.

### Creating and Using Paper Objects

- [PMPaperCreateCustom(\_:\_:\_:\_:\_:\_:\_:)](1459322-pmpapercreatecustom.md): Creates a custom paper object.
- [PMPaperIsCustom(\_:)](1459526-pmpaperiscustom.md): Returns a Boolean value indicating whether a specified paper is a custom paper.

### Accessing Data in Paper Objects

- [PMPaperGetID(\_:\_:)](1462910-pmpapergetid.md): Obtains the identifier of a paper object.
- [PMPaperGetWidth(\_:\_:)](1459209-pmpapergetwidth.md): Obtains the width of the sheet of paper represented by a paper object.
- [PMPaperGetHeight(\_:\_:)](1460389-pmpapergetheight.md): Obtains the height of the sheet of paper represented by a paper object.
- [PMPaperGetMargins(\_:\_:)](1461994-pmpapergetmargins.md): Obtains the margins describing the unprintable area of the sheet represented by a paper object.
- [PMPaperCreateLocalizedName(\_:\_:\_:)](1460981-pmpapercreatelocalizedname.md): Obtains the localized name for a given paper.
- [PMPaperGetPrinterID(\_:\_:)](1461737-pmpapergetprinterid.md): Obtains the printer ID of the printer to which a given paper corresponds.
- [PMPaperGetPPDPaperName(\_:\_:)](1461039-pmpapergetppdpapername.md): Obtains the PPD paper name for a given paper.

### Print Loop Functions

- [PMSessionBeginCGDocumentNoDialog(\_:\_:\_:)](1460101-pmsessionbegincgdocumentnodialog.md): Begins a print job that draws into a Quartz graphics context and suppresses the printing status dialog.
- [PMSessionEndDocumentNoDialog(\_:)](1464527-pmsessionenddocumentnodialog.md): Ends a print job started by calling the function [PMSessionBeginCGDocumentNoDialog(\_:\_:\_:)](1460101-pmsessionbegincgdocumentnodialog.md) or [PMSessionBeginDocumentNoDialog](core_printing/1805538-pmsessionbegindocumentnodialog.md).
- [PMSessionBeginPageNoDialog(\_:\_:\_:)](1463416-pmsessionbeginpagenodialog.md): Starts a new page for printing in the specified printing session and suppresses the printing status dialog.
- [PMSessionEndPageNoDialog(\_:)](1462014-pmsessionendpagenodialog.md): Indicates the end of drawing the current page for the specified printing session.

### Accessing the Print Job Destination

- [PMSessionSetDestination(\_:\_:\_:\_:\_:)](1459855-pmsessionsetdestination.md): Sets the destination location, format, and type for a print job.
- [PMSessionGetDestinationType(\_:\_:\_:)](1461071-pmsessiongetdestinationtype.md): Obtains the output destination for a print job.
- [PMSessionCopyDestinationFormat(\_:\_:\_:)](1464266-pmsessioncopydestinationformat.md): Obtains the destination format for a print job.
- [PMSessionCopyDestinationLocation(\_:\_:\_:)](1462967-pmsessioncopydestinationlocation.md): Obtains a destination location for a print job.
- [PMSessionCopyOutputFormatList(\_:\_:\_:)](1461332-pmsessioncopyoutputformatlist.md): Obtains an array of destination formats supported by the current print destination.

### Creating Printer Objects

- [PMServerLaunchPrinterBrowser(\_:\_:)](1460175-pmserverlaunchprinterbrowser.md): Launches the printer browser to browse the printers available for a print server.
- [PMServerCreatePrinterList(\_:\_:)](1459953-pmservercreateprinterlist.md): Creates a list of printers available to a print server.
- [PMSessionCreatePrinterList(\_:\_:\_:\_:)](1460119-pmsessioncreateprinterlist.md): Creates a list of printers available in the specified printing session.
- [PMPrinterCreateFromPrinterID(\_:)](1461363-pmprintercreatefromprinterid.md): Creates a printer object from a print queue identifier.
- [PMCreateGenericPrinter(\_:)](1461960-pmcreategenericprinter.md): Creates a generic printer object.

### Accessing Information About a Printer

- [PMPrinterCopyDescriptionURL(\_:\_:\_:)](1459187-pmprintercopydescriptionurl.md): Obtains the URL of the description file for a given printer.
- [PMPrinterCopyDeviceURI(\_:\_:)](1460543-pmprintercopydeviceuri.md): Obtains the device URI of a given printer.
- [PMPrinterCopyHostName(\_:\_:)](1462076-pmprintercopyhostname.md): Obtains the name of the server hosting the print queue for a given printer.
- [PMPrinterCopyPresets(\_:\_:)](1459117-pmprintercopypresets.md): Obtains a list of print settings presets for a printer.
- [PMPrinterGetCommInfo(\_:\_:\_:)](1461069-pmprintergetcomminfo.md): Obtains information about the communication channel for a printer.
- [PMPrinterGetDriverCreator(\_:\_:)](1459107-pmprintergetdrivercreator.md): Obtains the creator of the driver associated with the specified printer.
- [PMPrinterGetID(\_:)](1459606-pmprintergetid.md): Returns the unique identifier of a printer.
- [PMPrinterGetLocation(\_:)](1461467-pmprintergetlocation.md): Returns the location of a printer.
- [PMPrinterGetMakeAndModelName(\_:\_:)](1463347-pmprintergetmakeandmodelname.md): Obtains the manufacturer and model name of the specified printer.
- [PMPrinterGetMimeTypes(\_:\_:\_:)](1460125-pmprintergetmimetypes.md): Obtains a list of MIME content types supported by a printer using the specified print settings.
- [PMPrinterGetName(\_:)](1459018-pmprintergetname.md): Returns the human-readable name of a printer.
- [PMPrinterGetOutputResolution(\_:\_:\_:)](1459076-pmprintergetoutputresolution.md): Obtains the printer hardware output resolution for the specified print settings.
- [PMPrinterSetOutputResolution(\_:\_:\_:)](1459931-pmprintersetoutputresolution.md): Sets the print settings to reflect the specified printer hardware output resolution.
- [PMPrinterGetPaperList(\_:\_:)](1460088-pmprintergetpaperlist.md): Obtains the list of papers available for a printer.
- [PMPrinterGetPrinterResolutionCount(\_:\_:)](1462004-pmprintergetprinterresolutioncou.md): Obtains the number of resolution settings supported by the specified printer.
- [PMPrinterGetIndexedPrinterResolution(\_:\_:\_:)](1464490-pmprintergetindexedprinterresolu.md): Obtains a resolution setting based on an index into the range of settings supported by the specified printer.
- [PMPrinterGetState(\_:\_:)](1462954-pmprintergetstate.md): Obtains the current state of the print queue for a printer.
- [PMPrinterSetDefault(\_:)](1461118-pmprintersetdefault.md): Sets the default printer for the current user.
- [PMPrinterIsDefault(\_:)](1459030-pmprinterisdefault.md): Returns a Boolean value indicating whether a printer is the default printer for the current user.
- [PMPrinterIsFavorite(\_:)](1462074-pmprinterisfavorite.md): Returns a Boolean value indicating whether a printer is in the user’s list of favorite printers.
- [PMPrinterIsPostScriptCapable(\_:)](1464168-pmprinterispostscriptcapable.md): Returns a Boolean value indicating whether a printer is PostScript capable.
- [PMPrinterIsPostScriptPrinter(\_:\_:)](1462257-pmprinterispostscriptprinter.md): Determines whether a printer is a PostScript printer.
- [PMPrinterIsRemote(\_:\_:)](1461377-pmprinterisremote.md): Indicates whether a printer is hosted by a remote print server.

### Submitting a Print Job to a Printer

- [PMPrinterPrintWithFile(\_:\_:\_:\_:\_:)](1464600-pmprinterprintwithfile.md): Submits a print job to a specified printer using a file that contains print data.
- [PMPrinterPrintWithProvider(\_:\_:\_:\_:\_:)](1461110-pmprinterprintwithprovider.md): Submits a print job to a specified printer using a Quartz data provider to obtain the print data.

### Accessing PostScript Printer Description Files

- [PMCopyAvailablePPDs(\_:\_:)](1464170-pmcopyavailableppds.md): Obtains the list of PostScript printer description (PPD) files in a PPD domain.
- [PMCopyLocalizedPPD(\_:\_:)](1459690-pmcopylocalizedppd.md): Obtains a localized PostScript printer description (PPD) file.
- [PMCopyPPDData(\_:\_:)](1460345-pmcopyppddata.md): Obtains the uncompressed PPD data for a PostScript printer description (PPD) file.

### Printing with PostScript Data

- [PMCGImageCreateWithEPSDataProvider(\_:\_:)](1462361-pmcgimagecreatewithepsdataprovid.md): Creates an image that references both the PostScript contents of EPS data and a preview (proxy) image for the data.
- [PMPrinterWritePostScriptToURL(\_:\_:\_:\_:\_:\_:)](1459729-pmprinterwritepostscripttourl.md): Converts an input file of the specified MIME type to printer-ready PostScript for a destination printer.

### Using PDF Workflow Items

- [PMWorkflowCopyItems(\_:)](1459914-pmworkflowcopyitems.md): Obtains an array of the available PDF workflow items.
- [PMWorkflowSubmitPDFWithOptions(\_:\_:\_:\_:)](1463747-pmworkflowsubmitpdfwithoptions.md): Submits a PDF file for workflow processing using the specified CUPS options string.
- [PMWorkflowSubmitPDFWithSettings(\_:\_:\_:)](1458874-pmworkflowsubmitpdfwithsettings.md): Submits a PDF file for workflow processing using the specified print settings.

### Data Types

- [PMObject](pmobject.md): The base type for all the opaque types used in Core Printing.
- [PMPageFormat](pmpageformat.md): An opaque type that stores the settings in the Page Setup dialog.
- [PMPaper](pmpaper.md): An opaque type that stores information about the paper used in a print job.
- [PMPaperMargins](pmpapermargins.md): A data structure that specifies the unprintable area of a paper object.
- [PMPreset](pmpreset.md): An opaque type that stores information about a named preset available for a print job.
- [PMPrinter](pmprinter.md): An opaque type that represents a printer.
- [PMPrintSession](pmprintsession.md): An opaque type that stores information about a print job.
- [PMPrintSettings](pmprintsettings.md): An opaque type that stores the settings in the Print dialog.
- [PMServer](pmserver.md): An opaque type that identifies a local or remote print server.

### Constants

- [PMDataFormat](pmdataformat.md): Constants that specify the format of the data representation created with the functions [PMPageFormatCreateDataRepresentation(\_:\_:\_:)](1464227-pmpageformatcreatedatarepresenta.md) and [PMPrintSettingsCreateDataRepresentation(\_:\_:\_:)](1464570-pmprintsettingscreatedatareprese.md).
- [PMDestinationType](pmdestinationtype.md): Constants that specify a destination for a print job.
- [PMDuplexMode](pmduplexmode.md): Constants that specify duplex mode settings.
- [PMOrientation](pmorientation.md): Constants that specify page orientation.
- [PDF Workflow Dictionary Keys](core_printing/pdf_workflow_dictionary_keys.md): Constants that specify the keys in a PDF workflow dictionary.
- [PMPPDDomain](pmppddomain.md): Constants that specify the domains for PostScript printer description (PPD) files.
- [Print All Pages Constant](core_printing/1506768-print_all_pages_constant.md): A constant that specifies that all pages of a document should be printed.
- [PMQualityMode](pmqualitymode.md): Constants that specify standard options for print quality.
- [PMPrinterState](pmprinterstate.md): Constants that specify the current state of a print queue.
- [Printer Description Types](core_printing/printer_description_types.md): Constants that specify printer description types.
- [User Cancellation Constant](core_printing/1506795-user_cancellation_constant.md): A constant that specifies an error value that indicates the user canceled a printing operation.

### Result Codes

- [kPMGeneralError](kpmgeneralerror.md): An unspecified error occurred.
- [kPMOutOfScope](kpmoutofscope.md): Your application called this function out of sequence with other printing functions.
- [kPMNoDefaultPrinter](kpmnodefaultprinter.md): The user has not specified a default printer.
- [kPMNotImplemented](kpmnotimplemented.md): The function is not implemented.
- [kPMNoSuchEntry](kpmnosuchentry.md): There is no entry to match your application’s request.
- [kPMInvalidPrintSettings](kpminvalidprintsettings.md): Your application passed an invalid print settings object.
- [kPMInvalidPageFormat](kpminvalidpageformat.md): Your application passed an invalid page format object.
- [kPMValueOutOfRange](kpmvalueoutofrange.md): Your application passed an out-of-range value.
- [kPMInvalidPrintSession](kpminvalidprintsession.md): Your application passed an invalid printing session object.
- [kPMInvalidPrinter](kpminvalidprinter.md): Your application passed an invalid printer object.
- [kPMObjectInUse](kpmobjectinuse.md): The specified object is in use.
- [kPMInvalidIndex](kpminvalidindex.md): An array index is invalid.
- [kPMStringConversionFailure](kpmstringconversionfailure.md): An internal error occurred while converting a string.
- [kPMXMLParseError](kpmxmlparseerror.md): An error occurred while parsing XML data.
- [kPMInvalidJobTemplate](kpminvalidjobtemplate.md): An internal error occurred while creating a job template.
- [kPMInvalidPrinterInfo](kpminvalidprinterinfo.md): The printer information is invalid.
- [kPMInvalidConnection](kpminvalidconnection.md): The printer connection type is invalid.
- [kPMInvalidKey](kpminvalidkey.md): The key in a ticket, job template, or dictionary is invalid.
- [kPMInvalidValue](kpminvalidvalue.md): The value in a ticket, job template, or dictionary is missing.
- [kPMInvalidAllocator](kpminvalidallocator.md): The specified memory allocator is invalid.
- [kPMInvalidTicket](kpminvalidticket.md): The job ticket is invalid.
- [kPMInvalidItem](kpminvaliditem.md): The item being added to a ticket is invalid.
- [kPMInvalidType](kpminvalidtype.md): The data type in a ticket, job template, or dictionary is not the expected type.
- [kPMInvalidReply](kpminvalidreply.md): A remote server or client sent an invalid reply.
- [kPMInvalidFileType](kpminvalidfiletype.md): The file type is invalid.
- [kPMInvalidObject](kpminvalidobject.md): The object is invalid.
- [kPMInvalidPaper](kpminvalidpaper.md): Your application passed an invalid paper object.
- [kPMInvalidCalibrationTarget](kpminvalidcalibrationtarget.md): The dictionary specifying a printer calibration target is invalid.
- [kPMInvalidPreset](kpminvalidpreset.md): Your application passed an invalid preset object.

# Core Printing (Objective-C)

**Framework:** Application Services  
**Kind:** API Collection

<a id="overview"></a>

## Overview

Core Printing is a C API that Mac apps and command line tools can use to perform printing tasks that don’t display a user interface. Core Printing defines a set of opaque types and a rich set of operations on instances of these types. The Core Printing opaque types include:

- `PMPrintSession` for general information about a print job
- `PMPrintSettings` for print job parameters
- `PMPageFormat` for the page format of a printed document
- `PMPaper` for information about a type of paper
- `PMPrinter` for information about a printer

In Carbon applications, Core Printing is used together with Carbon Printing to implement printing features. For more information about Carbon Printing, see Carbon Printing Reference.

In Cocoa applications, Core Printing can be used to extend the functionality in the Cocoa printing classes. The [NSPrintInfo](../appkit/nsprintinfo.md) class provides direct access to some Core Printing objects.

> **Note**

> Core Printing is available to 64-bit applications, except for functions, data types, and constants that have been deprecated.

## Topics

### Releasing and Retaining Printing Objects

- [PMRelease](1461402-pmrelease.md): Releases a printing object by decrementing its reference count.
- [PMRetain](1460190-pmretain.md): Retains a printing object by incrementing its reference count.

### Creating and Using Page Format Objects

- [PMCreatePageFormat](1459485-pmcreatepageformat.md): Creates a new page format object.
- [PMCreatePageFormatWithPMPaper](1459274-pmcreatepageformatwithpmpaper.md): Creates a page format object with a specified paper.
- [PMCopyPageFormat](1464669-pmcopypageformat.md): Copies the settings from one page format object into another.
- [PMSessionDefaultPageFormat](1462217-pmsessiondefaultpageformat.md): Assigns default parameter values to a page format object used in the specified printing session.
- [PMSessionValidatePageFormat](1459090-pmsessionvalidatepageformat.md): Updates the values in a page format object and validates them against the current formatting printer.
- [PMSessionCreatePageFormatList](1463985-pmsessioncreatepageformatlist.md): Obtains a list of page format objects, each of which describes a paper size available on the specified printer.
- [PMPageFormatCreateDataRepresentation](1464227-pmpageformatcreatedatarepresenta.md): Creates a data representation of a page format object.
- [PMPageFormatCreateWithDataRepresentation](1462876-pmpageformatcreatewithdatarepres.md): Creates a page format object from a data representation.
- [PMFlattenPageFormat](core_printing/1805421-pmflattenpageformat.md): Deprecated. Flattens a page format object into a Memory Manager handle for storage in a user document.
- [PMFlattenPageFormatToCFData](core_printing/1805425-pmflattenpageformattocfdata.md): Deprecated. Flattens a page format object into a Core Foundation data object for storage in a user document.
- [PMFlattenPageFormatToURL](core_printing/1805429-pmflattenpageformattourl.md): Deprecated. Flattens a page format object into a file for storage in a user document.
- [PMUnflattenPageFormat](core_printing/1805434-pmunflattenpageformat.md): Deprecated. Rebuilds a page format object from a Memory Manager handle that contains flattened page format data.
- [PMUnflattenPageFormatWithCFData](core_printing/1805439-pmunflattenpageformatwithcfdata.md): Deprecated. Rebuilds a page format object from a Core Foundation data object that contains flattened page format data.
- [PMUnflattenPageFormatWithURL](core_printing/1805441-pmunflattenpageformatwithurl.md): Deprecated. Rebuilds a page format object from a file system URL that contains flattened page format data.

### Accessing Data in Page Format Objects

- [PMGetPageFormatExtendedData](1464455-pmgetpageformatextendeddata.md): Obtains extended page format data previously stored by your application.
- [PMSetPageFormatExtendedData](1463464-pmsetpageformatextendeddata.md): Stores your application-specific data in a page format object.
- [PMGetPageFormatPaper](1461319-pmgetpageformatpaper.md): Obtains the paper associated with a page format object.
- [PMPageFormatGetPrinterID](1462961-pmpageformatgetprinterid.md): Obtains the identifier of the formatting printer for a page format object.
- [PMGetOrientation](1459144-pmgetorientation.md): Obtains the current setting for page orientation.
- [PMSetOrientation](1459016-pmsetorientation.md): Sets the page orientation for printing.
- [PMGetResolution](core_printing/1805451-pmgetresolution.md): Deprecated. Obtains the current application’s drawing resolution.
- [PMSetResolution](core_printing/1805452-pmsetresolution.md): Deprecated. Sets the application drawing resolution.
- [PMGetScale](1458796-pmgetscale.md): Obtains the scaling factor currently applied to the page and paper rectangles.
- [PMSetScale](1463343-pmsetscale.md): Sets the scaling factor for the page and paper rectangles.
- [PMGetAdjustedPageRect](1461543-pmgetadjustedpagerect.md): Obtains the imageable area or page rectangle, taking into account orientation, application drawing resolution, and scaling settings.
- [PMSetAdjustedPageRect](core_printing/1805455-pmsetadjustedpagerect.md): Deprecated. Requests a particular page size, adjusted for the current rotation, resolution, or scaling settings.
- [PMGetAdjustedPaperRect](1459167-pmgetadjustedpaperrect.md): Obtains the rectangle defining the paper size, taking into account orientation, application drawing resolution, and scaling settings.
- [PMGetUnadjustedPageRect](1462944-pmgetunadjustedpagerect.md): Obtains the imageable area or page rectangle, unaffected by orientation, resolution, or scaling.
- [PMGetUnadjustedPaperRect](1462939-pmgetunadjustedpaperrect.md): Obtains the paper rectangle, unaffected by rotation, resolution, or scaling.
- [PMSetUnadjustedPaperRect](core_printing/1805459-pmsetunadjustedpaperrect.md): Deprecated. Requests a particular paper size, unaffected by rotation, resolution, or scaling.

### Creating and Using Print Settings Objects

- [PMCreatePrintSettings](1463239-pmcreateprintsettings.md): Creates a new print settings object.
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

### Accessing Data in Print Settings Objects

- [PMGetPrintSettingsExtendedData](core_printing/1805488-pmgetprintsettingsextendeddata.md): Obtains extended print settings data previously stored by your application.
- [PMSetPrintSettingsExtendedData](core_printing/1805491-pmsetprintsettingsextendeddata.md): Stores your application-specific data in a print settings object.
- [PMGetFirstPage](1460271-pmgetfirstpage.md): Obtains the number of the first page to be printed.
- [PMSetFirstPage](1461519-pmsetfirstpage.md): Sets the default page number of the first page to be printed.
- [PMGetLastPage](1462747-pmgetlastpage.md): Obtains the number of the last page to be printed.
- [PMSetLastPage](1463595-pmsetlastpage.md): Sets the page number of the last page to be printed.
- [PMGetPageRange](1459324-pmgetpagerange.md): Obtains the valid range of pages that can be printed.
- [PMSetPageRange](1462294-pmsetpagerange.md): Sets the valid range of pages that can be printed.
- [PMPrintSettingsGetJobName](1459233-pmprintsettingsgetjobname.md): Obtains the name of a print job.
- [PMPrintSettingsSetJobName](1460149-pmprintsettingssetjobname.md): Specifies the name of a print job.
- [PMGetCopies](1464480-pmgetcopies.md): Obtains the number of copies that the user requests to be printed.
- [PMSetCopies](1463804-pmsetcopies.md): Sets the initial value for the number of copies to be printed.
- [PMGetCollate](1464492-pmgetcollate.md): Obtains a Boolean value that indicates whether the job collate option is selected.
- [PMSetCollate](1463223-pmsetcollate.md): Specifies whether the job collate option is selected.
- [PMGetDuplex](1458921-pmgetduplex.md): Obtains the selected duplex mode.
- [PMSetDuplex](1462000-pmsetduplex.md): Sets the duplex mode.
- [PMPrintSettingsGetValue](1460602-pmprintsettingsgetvalue.md): Obtains the value of a setting in a print settings object.
- [PMPrintSettingsSetValue](1461697-pmprintsettingssetvalue.md): Stores the value of a setting in a print settings object.
- [PMPrintSettingsCopyAsDictionary](1459088-pmprintsettingscopyasdictionary.md): Creates a dictionary that contains the settings in a print settings object.
- [PMPrintSettingsCopyKeys](1462730-pmprintsettingscopykeys.md): Obtains the keys for items in a print settings object.
- [PMGetJobNameCFString](core_printing/1805513-pmgetjobnamecfstring.md): Deprecated. Obtains the name of the print job.
- [PMSetJobNameCFString](core_printing/1805515-pmsetjobnamecfstring.md): Deprecated. Specifies the name of a print job.

### Creating Printing Session Objects

- [PMCreateSession](1463247-pmcreatesession.md): Creates and initializes a printing session object and creates a context for printing operations.

### Accessing Data in Printing Session Objects

- [PMSessionGetDataFromSession](1462964-pmsessiongetdatafromsession.md): Obtains application-specific data previously stored in a printing session object.
- [PMSessionSetDataInSession](1461902-pmsessionsetdatainsession.md): Stores your application-specific data in a printing session object.
- [PMSessionGetCurrentPrinter](1458998-pmsessiongetcurrentprinter.md): Obtains the current printer associated with a printing session.
- [PMSessionSetCurrentPrinter](core_printing/1805523-pmsessionsetcurrentprinter.md): Deprecated. Changes the current printer for a printing session to a printer specified by name.
- [PMSessionSetCurrentPMPrinter](1461096-pmsessionsetcurrentpmprinter.md): Changes the current printer for a printing session.
- [PMSessionGetDocumentFormatGeneration](core_printing/1805525-pmsessiongetdocumentformatgenera.md): Deprecated. Obtains the spool file formats that can be generated for the specified printing session.
- [PMSessionSetDocumentFormatGeneration](core_printing/1805527-pmsessionsetdocumentformatgenera.md): Deprecated. Requests a specified spool file format and supplies the graphics context type to use for drawing pages within the print loop.
- [PMSessionGetCGGraphicsContext](1461952-pmsessiongetcggraphicscontext.md): Obtains the Quartz graphics context for the current page in a printing session.
- [PMSessionGetGraphicsContext](core_printing/1805529-pmsessiongetgraphicscontext.md): Deprecated. Obtains the graphics context for the current page in a printing session.
- [PMSessionError](1460003-pmsessionerror.md): Obtains the result code for any error returned by the printing session.
- [PMSessionSetError](1460216-pmsessionseterror.md): Sets the value of the current result code for the specified printing session.
- [PMSessionGeneral](core_printing/1805530-pmsessiongeneral.md): Deprecated. Maintains compatibility with the `PrGeneral` function in the classic Printing Manager.

### Using Printer Presets

- [PMPresetCopyName](1460343-pmpresetcopyname.md): Obtains the localized name for a preset.
- [PMPresetCreatePrintSettings](1463414-pmpresetcreateprintsettings.md): Creates a print settings object with settings that correspond to a preset.
- [PMPresetGetAttributes](1459042-pmpresetgetattributes.md): Obtains the attributes of a preset.

### Creating and Using Paper Objects

- [PMPaperCreate](core_printing/1805531-pmpapercreate.md): Deprecated. Creates a paper object.
- [PMPaperCreateCustom](1459322-pmpapercreatecustom.md): Creates a custom paper object.
- [PMPaperIsCustom](1459526-pmpaperiscustom.md): Returns a Boolean value indicating whether a specified paper is a custom paper.

### Accessing Data in Paper Objects

- [PMPaperGetID](1462910-pmpapergetid.md): Obtains the identifier of a paper object.
- [PMPaperGetName](core_printing/1805534-pmpapergetname.md): Obtains the name for a given paper.
- [PMPaperGetWidth](1459209-pmpapergetwidth.md): Obtains the width of the sheet of paper represented by a paper object.
- [PMPaperGetHeight](1460389-pmpapergetheight.md): Obtains the height of the sheet of paper represented by a paper object.
- [PMPaperGetMargins](1461994-pmpapergetmargins.md): Obtains the margins describing the unprintable area of the sheet represented by a paper object.
- [PMPaperCreateLocalizedName](1460981-pmpapercreatelocalizedname.md): Obtains the localized name for a given paper.
- [PMPaperGetPrinterID](1461737-pmpapergetprinterid.md): Obtains the printer ID of the printer to which a given paper corresponds.
- [PMPaperGetPPDPaperName](1461039-pmpapergetppdpapername.md): Obtains the PPD paper name for a given paper.

### Print Loop Functions

- [PMSessionBeginCGDocumentNoDialog](1460101-pmsessionbegincgdocumentnodialog.md): Begins a print job that draws into a Quartz graphics context and suppresses the printing status dialog.
- [PMSessionBeginDocumentNoDialog](core_printing/1805538-pmsessionbegindocumentnodialog.md): Deprecated. Begins a print job that, by default, draws into a QuickDraw graphics port, and suppresses the printing status dialog.
- [PMSessionEndDocumentNoDialog](1464527-pmsessionenddocumentnodialog.md): Ends a print job started by calling the function [PMSessionBeginCGDocumentNoDialog](1460101-pmsessionbegincgdocumentnodialog.md) or [PMSessionBeginDocumentNoDialog](core_printing/1805538-pmsessionbegindocumentnodialog.md).
- [PMSessionBeginPageNoDialog](1463416-pmsessionbeginpagenodialog.md): Starts a new page for printing in the specified printing session and suppresses the printing status dialog.
- [PMSessionEndPageNoDialog](1462014-pmsessionendpagenodialog.md): Indicates the end of drawing the current page for the specified printing session.
- [PMSessionSetIdleProc](core_printing/1805540-pmsessionsetidleproc.md): Deprecated. Installs an idle callback function in your print loop.

### Accessing the Print Job Destination

- [PMSessionSetDestination](1459855-pmsessionsetdestination.md): Sets the destination location, format, and type for a print job.
- [PMSessionGetDestinationType](1461071-pmsessiongetdestinationtype.md): Obtains the output destination for a print job.
- [PMSessionCopyDestinationFormat](1464266-pmsessioncopydestinationformat.md): Obtains the destination format for a print job.
- [PMSessionCopyDestinationLocation](1462967-pmsessioncopydestinationlocation.md): Obtains a destination location for a print job.
- [PMSessionCopyOutputFormatList](1461332-pmsessioncopyoutputformatlist.md): Obtains an array of destination formats supported by the current print destination.

### Creating Printer Objects

- [PMServerLaunchPrinterBrowser](1460175-pmserverlaunchprinterbrowser.md): Launches the printer browser to browse the printers available for a print server.
- [PMServerCreatePrinterList](1459953-pmservercreateprinterlist.md): Creates a list of printers available to a print server.
- [PMSessionCreatePrinterList](1460119-pmsessioncreateprinterlist.md): Creates a list of printers available in the specified printing session.
- [PMPrinterCreateFromPrinterID](1461363-pmprintercreatefromprinterid.md): Creates a printer object from a print queue identifier.
- [PMCreateGenericPrinter](1461960-pmcreategenericprinter.md): Creates a generic printer object.

### Accessing Information About a Printer

- [PMPrinterCopyDescriptionURL](1459187-pmprintercopydescriptionurl.md): Obtains the URL of the description file for a given printer.
- [PMPrinterCopyDeviceURI](1460543-pmprintercopydeviceuri.md): Obtains the device URI of a given printer.
- [PMPrinterCopyHostName](1462076-pmprintercopyhostname.md): Obtains the name of the server hosting the print queue for a given printer.
- [PMPrinterCopyPresets](1459117-pmprintercopypresets.md): Obtains a list of print settings presets for a printer.
- [PMPrinterGetCommInfo](1461069-pmprintergetcomminfo.md): Obtains information about the communication channel for a printer.
- [PMPrinterGetDescriptionURL](core_printing/1805546-pmprintergetdescriptionurl.md): Deprecated. Obtains a reference to the specified printer’s description file.
- [PMPrinterGetDeviceURI](core_printing/1805547-pmprintergetdeviceuri.md): Deprecated. Obtains a copy of a printer's device URI.
- [PMPrinterGetDriverCreator](1459107-pmprintergetdrivercreator.md): Obtains the creator of the driver associated with the specified printer.
- [PMPrinterGetDriverReleaseInfo](1464149-pmprintergetdriverreleaseinfo.md): Obtains version information for the driver associated with the specified printer.
- [PMPrinterGetID](1459606-pmprintergetid.md): Returns the unique identifier of a printer.
- [PMPrinterGetLanguageInfo](1458956-pmprintergetlanguageinfo.md): Obtains information about the imaging language for the specified printer.
- [PMPrinterGetLocation](1461467-pmprintergetlocation.md): Returns the location of a printer.
- [PMPrinterGetMakeAndModelName](1463347-pmprintergetmakeandmodelname.md): Obtains the manufacturer and model name of the specified printer.
- [PMPrinterGetMimeTypes](1460125-pmprintergetmimetypes.md): Obtains a list of MIME content types supported by a printer using the specified print settings.
- [PMPrinterGetName](1459018-pmprintergetname.md): Returns the human-readable name of a printer.
- [PMPrinterGetOutputResolution](1459076-pmprintergetoutputresolution.md): Obtains the printer hardware output resolution for the specified print settings.
- [PMPrinterSetOutputResolution](1459931-pmprintersetoutputresolution.md): Sets the print settings to reflect the specified printer hardware output resolution.
- [PMPrinterGetPaperList](1460088-pmprintergetpaperlist.md): Obtains the list of papers available for a printer.
- [PMPrinterGetPrinterResolution](core_printing/1805554-pmprintergetprinterresolution.md): Deprecated. Obtains a resolution setting for the specified printer.
- [PMPrinterGetPrinterResolutionCount](1462004-pmprintergetprinterresolutioncou.md): Obtains the number of resolution settings supported by the specified printer.
- [PMPrinterGetIndexedPrinterResolution](1464490-pmprintergetindexedprinterresolu.md): Obtains a resolution setting based on an index into the range of settings supported by the specified printer.
- [PMPrinterGetState](1462954-pmprintergetstate.md): Obtains the current state of the print queue for a printer.
- [PMPrinterSetDefault](1461118-pmprintersetdefault.md): Sets the default printer for the current user.
- [PMPrinterIsDefault](1459030-pmprinterisdefault.md): Returns a Boolean value indicating whether a printer is the default printer for the current user.
- [PMPrinterIsFavorite](1462074-pmprinterisfavorite.md): Returns a Boolean value indicating whether a printer is in the user’s list of favorite printers.
- [PMPrinterIsPostScriptCapable](1464168-pmprinterispostscriptcapable.md): Returns a Boolean value indicating whether a printer is PostScript capable.
- [PMPrinterIsPostScriptPrinter](1462257-pmprinterispostscriptprinter.md): Determines whether a printer is a PostScript printer.
- [PMPrinterIsRemote](1461377-pmprinterisremote.md): Indicates whether a printer is hosted by a remote print server.

### Submitting a Print Job to a Printer

- [PMPrinterPrintWithFile](1464600-pmprinterprintwithfile.md): Submits a print job to a specified printer using a file that contains print data.
- [PMPrinterPrintWithProvider](1461110-pmprinterprintwithprovider.md): Submits a print job to a specified printer using a Quartz data provider to obtain the print data.

### Accessing PostScript Printer Description Files

- [PMCopyAvailablePPDs](1464170-pmcopyavailableppds.md): Obtains the list of PostScript printer description (PPD) files in a PPD domain.
- [PMCopyLocalizedPPD](1459690-pmcopylocalizedppd.md): Obtains a localized PostScript printer description (PPD) file.
- [PMCopyPPDData](1460345-pmcopyppddata.md): Obtains the uncompressed PPD data for a PostScript printer description (PPD) file.

### Printing with PostScript Data

- [PMCGImageCreateWithEPSDataProvider](1462361-pmcgimagecreatewithepsdataprovid.md): Creates an image that references both the PostScript contents of EPS data and a preview (proxy) image for the data.
- [PMPrinterWritePostScriptToURL](1459729-pmprinterwritepostscripttourl.md): Converts an input file of the specified MIME type to printer-ready PostScript for a destination printer.
- [PMSessionPostScriptBegin](core_printing/1805591-pmsessionpostscriptbegin.md): Deprecated. Puts the current printer driver into PostScript mode, ready to accept PostScript data instead of QuickDraw data.
- [PMSessionPostScriptData](core_printing/1805595-pmsessionpostscriptdata.md): Deprecated. Passes PostScript data, referenced by a pointer, to the current printer driver.
- [PMSessionPostScriptEnd](core_printing/1805601-pmsessionpostscriptend.md): Deprecated. Restores the current driver to QuickDraw mode, ready to accept QuickDraw data instead of PostScript data.
- [PMSessionPostScriptFile](core_printing/1805604-pmsessionpostscriptfile.md): Deprecated. Passes the PostScript data, contained in a file, to the current printer driver.
- [PMSessionPostScriptHandle](core_printing/1805605-pmsessionpostscripthandle.md): Deprecated. Passes the PostScript data, referenced by a Memory Manager handle, to the current printer driver.
- [PMSessionSetPSInjectionData](core_printing/1805610-pmsessionsetpsinjectiondata.md): Deprecated. Specifies a set of PostScript code injection points and the PostScript data to be injected.

### Using PDF Workflow Items

- [PMWorkflowCopyItems](1459914-pmworkflowcopyitems.md): Obtains an array of the available PDF workflow items.
- [PMWorkflowSubmitPDFWithOptions](1463747-pmworkflowsubmitpdfwithoptions.md): Submits a PDF file for workflow processing using the specified CUPS options string.
- [PMWorkflowSubmitPDFWithSettings](1458874-pmworkflowsubmitpdfwithsettings.md): Submits a PDF file for workflow processing using the specified print settings.

### Matching Color With ColorSync

- [PMSetProfile](core_printing/1805614-pmsetprofile.md): Deprecated. Embeds a color profile during printing.
- [PMSessionEnableColorSync](core_printing/1805617-pmsessionenablecolorsync.md): Deprecated. Enables use of a custom ColorSync profile previously set by the function [PMSetProfile](core_printing/1805614-pmsetprofile.md).
- [PMSessionDisableColorSync](core_printing/1805619-pmsessiondisablecolorsync.md): Deprecated. Disables use of a custom ColorSync profile previously enabled by the function [PMSessionEnableColorSync](core_printing/1805617-pmsessionenablecolorsync.md).

### Converting and Saving Old Print Records

- [PMSessionConvertOldPrintRecord](core_printing/1805626-pmsessionconvertoldprintrecord.md): Deprecated. Creates new page format and print settings objects from an old-style print record created for the classic Printing Manager.
- [PMSessionMakeOldPrintRecord](core_printing/1805631-pmsessionmakeoldprintrecord.md): Deprecated. Creates an old-style print record from page format and print settings objects.

### Creating, Calling, and Deleting Universal Procedure Pointers

- [NewPMIdleUPP](core_printing/1805635-newpmidleupp.md): Deprecated. Creates a new universal procedure pointer (UPP) to an idle callback.
- [InvokePMIdleUPP](core_printing/1805637-invokepmidleupp.md): Deprecated. Calls an idle callback.
- [DisposePMIdleUPP](core_printing/1805641-disposepmidleupp.md): Deprecated. Disposes of a universal procedure pointer (UPP) to an idle callback.

### Legacy Core Printing Functions

- [PMBegin](core_printing/1805644-pmbegin.md): Deprecated. Prepares Core Printing for use.
- [PMConvertOldPrintRecord](core_printing/1805650-pmconvertoldprintrecord.md): Deprecated. Creates a new `PMPageFormat` object and a new `PMPrintSettings` object from a print record created by the classic Printing Manager.
- [PMDefaultPageFormat](core_printing/1805655-pmdefaultpageformat.md): Deprecated. Assigns default parameter values to an existing `PMPageFormat` object, for the current printer.
- [PMDefaultPrintSettings](core_printing/1805658-pmdefaultprintsettings.md): Deprecated. Assigns default parameter values to a `PMPrintSettings` object.
- [PMDisableColorSync](core_printing/1805663-pmdisablecolorsync.md): Deprecated. Disables ColorSync color matching for the current page.
- [PMDisposePageFormat](core_printing/1805665-pmdisposepageformat.md): Deprecated. Releases memory previously allocated for a `PMPageFormat` object.
- [PMDisposePrintSettings](core_printing/1805670-pmdisposeprintsettings.md): Deprecated. Releases memory previously allocated for a `PMPrintSettings` object.
- [PMEnableColorSync](core_printing/1805675-pmenablecolorsync.md): Deprecated. Enables ColorSync color matching for the current page.
- [PMEnd](core_printing/1805679-pmend.md): Deprecated. Closes Core Printing and releases its allocated memory.
- [PMError](core_printing/1805683-pmerror.md): Deprecated. Obtains the result code from the last printing function called by your application.
- [PMGeneral](core_printing/1805686-pmgeneral.md): Deprecated. Maintains compatibility with the `PrGeneral` function in the classic Printing Manager.
- [PMGetDestination](core_printing/1805692-pmgetdestination.md): Deprecated. Obtains the output destination of a print job.
- [PMGetDriverCreator](core_printing/1805697-pmgetdrivercreator.md): Deprecated. Obtains the creator of the driver associated with the current printer.
- [PMGetDriverReleaseInfo](core_printing/1805701-pmgetdriverreleaseinfo.md): Deprecated. Obtains release information for the driver associated with the current printer.
- [PMGetGrafPtr](core_printing/1805707-pmgetgrafptr.md): Deprecated. Obtains the printing port from an opaque printing context.
- [PMGetIndexedPrinterResolution](core_printing/1805712-pmgetindexedprinterresolution.md): Deprecated. Obtains a resolution setting based on an index into the range of settings supported by the current printer.
- [PMGetJobName](core_printing/1805714-pmgetjobname.md): Deprecated. Obtains the name of the print job.
- [PMGetLanguageInfo](core_printing/1805718-pmgetlanguageinfo.md): Deprecated. Obtains information about the current printer’s imaging language.
- [PMGetPhysicalPageSize](core_printing/1805720-pmgetphysicalpagesize.md): Deprecated. Obtains the size of the imageable area in points, unaffected by rotation, resolution, or scaling.
- [PMGetPhysicalPaperSize](core_printing/1805722-pmgetphysicalpapersize.md): Deprecated. Obtains the size of the paper in points, unaffected by rotation, resolution, or scaling.
- [PMGetPrinterResolution](core_printing/1805726-pmgetprinterresolution.md): Deprecated. Obtains the resolution setting for the current printer according to the tag parameter.
- [PMGetPrinterResolutionCount](core_printing/1805729-pmgetprinterresolutioncount.md): Deprecated. Obtains the number of resolution settings supported by the current printer.
- [PMIsPostScriptDriver](core_printing/1805734-pmispostscriptdriver.md): Deprecated. Reports whether the current printer driver supports the PostScript language.
- [PMNewPageFormat](core_printing/1805737-pmnewpageformat.md): Deprecated. Creates a new `PMPageFormat` object.
- [PMNewPrintSettings](core_printing/1805743-pmnewprintsettings.md): Deprecated. Creates a new `PMPrintSettings` object.
- [PMMakeOldPrintRecord](core_printing/1805745-pmmakeoldprintrecord.md): Deprecated. Creates an old-style print record from a `PMPageFormat` and a `PMPrintSettings` object.
- [PMPostScriptBegin](core_printing/1805751-pmpostscriptbegin.md): Deprecated. Puts the current driver into PostScript mode, ready to accept PostScript data instead of QuickDraw data.
- [PMPostScriptData](core_printing/1805754-pmpostscriptdata.md): Deprecated. Passes PostScript data, referenced by a pointer, to the current printer driver.
- [PMPostScriptEnd](core_printing/1805759-pmpostscriptend.md): Deprecated. Restores the current driver to QuickDraw mode, ready to accept QuickDraw data instead of PostScript data.
- [PMPostScriptFile](core_printing/1805762-pmpostscriptfile.md): Deprecated. Passes PostScript data, contained in a file, to the current printer driver.
- [PMPostScriptHandle](core_printing/1805767-pmpostscripthandle.md): Deprecated. Passes PostScript data, referenced by a handle, to the current printer driver.
- [PMSessionGetDocumentFormatSupported](core_printing/1805770-pmsessiongetdocumentformatsuppor.md): Deprecated. Obtains the spool file formats that are accepted by the current printer driver.
- [PMSessionIsDocumentFormatSupported](core_printing/1805774-pmsessionisdocumentformatsupport.md): Deprecated. Reports whether the current printer driver supports a specified spool file format.
- [PMGetColorMode](core_printing/1805779-pmgetcolormode.md): Deprecated. Obtains the color mode for the print job.
- [PMSetColorMode](core_printing/1805783-pmsetcolormode.md): Deprecated. Sets the desired color mode for the print job.
- [PMSetError](core_printing/1805784-pmseterror.md): Deprecated. Sets the value of the current result code.
- [PMSetIdleProc](core_printing/1805789-pmsetidleproc.md): Deprecated. Installs an idle callback function in your print loop.
- [PMSetJobName](core_printing/1805792-pmsetjobname.md): Deprecated. Specifies the name of the print job.
- [PMSetPhysicalPaperSize](core_printing/1805794-pmsetphysicalpapersize.md): Deprecated. Requests a particular paper size, unaffected by rotation, resolution, or scaling.
- [PMValidatePageFormat](core_printing/1805800-pmvalidatepageformat.md): Deprecated. Obtains a valid `PMPageFormat` object.
- [PMValidatePrintSettings](core_printing/1805802-pmvalidateprintsettings.md): Deprecated. Obtains a valid `PMPrintSettings` object.

### Callbacks

- [PMIdleProcPtr](core_printing/pmidleprocptr.md): Deprecated. Defines a pointer to an idle function.

### Data Types

- [PMDialog](core_printing/pmdialog.md): An opaque type that represents a custom printing dialog.
- [PMIdleUPP](core_printing/pmidleupp.md): A type that defines a universal procedure pointer to an idle callback.
- [PMLanguageInfo](core_printing/pmlanguageinfo.md): A data structure that contains level, version, and release information for the imaging language used by a printer driver.
- [PMObject](pmobject.md): The base type for all the opaque types used in Core Printing.
- [PMPageFormat](pmpageformat.md): An opaque type that stores the settings in the Page Setup dialog.
- [PMPaper](pmpaper.md): An opaque type that stores information about the paper used in a print job.
- [PMPaperMargins](pmpapermargins.md): A data structure that specifies the unprintable area of a paper object.
- [PMPreset](pmpreset.md): An opaque type that stores information about a named preset available for a print job.
- [PMPrinter](pmprinter.md): An opaque type that represents a printer.
- [PMPrintSession](pmprintsession.md): An opaque type that stores information about a print job.
- [PMPrintSettings](pmprintsettings.md): An opaque type that stores the settings in the Print dialog.
- [PMRect](core_printing/pmrect.md): A data structure that describes a rectangle using four double-precision coordinates.
- [PMResolution](core_printing/pmresolution.md): A data structure that contains printing resolution information.
- [PMServer](pmserver.md): An opaque type that identifies a local or remote print server.
- [PMPrintContext](core_printing/pmprintcontext.md): An opaque type that describes the graphics environment for printing a document.
- [PMColorMode](core_printing/pmcolormode.md): A type that specifies color modes to use for printing.

### Constants

- [Data Not Wanted Constants](core_printing/data_not_wanted_constants.md): Constants your application can use to indicate it does not need certain types of data returned by various printing functions.
- [PMDataFormat](pmdataformat.md): Constants that specify the format of the data representation created with the functions [PMPageFormatCreateDataRepresentation](1464227-pmpageformatcreatedatarepresenta.md) and [PMPrintSettingsCreateDataRepresentation](1464570-pmprintsettingscreatedatareprese.md).
- [PMDestinationType](pmdestinationtype.md): Constants that specify a destination for a print job.
- [Document Format Strings](core_printing/document_format_strings.md): Constants that specify the document format for a print job.
- [PMDuplexMode](pmduplexmode.md): Constants that specify duplex mode settings.
- [Graphics Context Types](core_printing/graphics_context_types.md): Constants that specify the graphics context for a print job.
- [PMOrientation](pmorientation.md): Constants that specify page orientation.
- [PDF Workflow Dictionary Keys](core_printing/pdf_workflow_dictionary_keys.md): Constants that specify the keys in a PDF workflow dictionary.
- [PostScript Injection Dictionary Keys](core_printing/postscript_injection_dictionary_keys.md): Constants that specify keys for PostScript injection dictionary entries.
- [PostScript Page Injection Options](core_printing/postscript_page_injection_options.md): Constants that specify PostScript injection options.
- [PostScript Injection Placement Options](core_printing/postscript_injection_placement_options.md): Constants that specify where in the print job to inject PostScript code.
- [PostScript Injection Sections](core_printing/postscript_injection_sections.md): Constants that specify keys for PostScript injection section values.
- [PostScript Injection Subsections](core_printing/postscript_injection_subsections.md): Constants that specify PostScript injection values for the subsection key.
- [PMPPDDomain](pmppddomain.md): Constants that specify the domains for PostScript printer description (PPD) files.
- [Print All Pages Constant](1506768-print_all_pages_constant.md): A constant that specifies that all pages of a document should be printed.
- [PMQualityMode](pmqualitymode.md): Constants that specify standard options for print quality.
- [PMPrinterState](pmprinterstate.md): Constants that specify the current state of a print queue.
- [Printer Description Types](core_printing/printer_description_types.md): Constants that specify printer description types.
- [Tag Constants](core_printing/tag_constants.md): Constants that specify values, such as minimum and maximum values, that your application can pass to or obtain from printing functions.
- [User Cancellation Constant](1506795-user_cancellation_constant.md): A constant that specifies an error value that indicates the user canceled a printing operation.
- [Color Modes](core_printing/color_modes.md): Constants that specify a color mode to use for printing.

### Result Codes

- [kPMGeneralError](1506722-anonymous/kpmgeneralerror.md): An unspecified error occurred.
- [kPMOutOfScope](1506722-anonymous/kpmoutofscope.md): Your application called this function out of sequence with other printing functions.
- [kPMNoDefaultPrinter](1506722-anonymous/kpmnodefaultprinter.md): The user has not specified a default printer.
- [kPMNotImplemented](1506722-anonymous/kpmnotimplemented.md): The function is not implemented.
- [kPMNoSuchEntry](1506722-anonymous/kpmnosuchentry.md): There is no entry to match your application’s request.
- [kPMInvalidPrintSettings](1506722-anonymous/kpminvalidprintsettings.md): Your application passed an invalid print settings object.
- [kPMInvalidPageFormat](1506722-anonymous/kpminvalidpageformat.md): Your application passed an invalid page format object.
- [kPMValueOutOfRange](1506722-anonymous/kpmvalueoutofrange.md): Your application passed an out-of-range value.
- [kPMInvalidPrintSession](1506800-anonymous/kpminvalidprintsession.md): Your application passed an invalid printing session object.
- [kPMInvalidPrinter](1506800-anonymous/kpminvalidprinter.md): Your application passed an invalid printer object.
- [kPMObjectInUse](1506800-anonymous/kpmobjectinuse.md): The specified object is in use.
- [kPMInvalidIndex](1570866-anonymous/kpminvalidindex.md): An array index is invalid.
- [kPMStringConversionFailure](1570866-anonymous/kpmstringconversionfailure.md): An internal error occurred while converting a string.
- [kPMXMLParseError](1570866-anonymous/kpmxmlparseerror.md): An error occurred while parsing XML data.
- [kPMInvalidJobTemplate](1570866-anonymous/kpminvalidjobtemplate.md): An internal error occurred while creating a job template.
- [kPMInvalidPrinterInfo](1570866-anonymous/kpminvalidprinterinfo.md): The printer information is invalid.
- [kPMInvalidConnection](1570866-anonymous/kpminvalidconnection.md): The printer connection type is invalid.
- [kPMInvalidKey](1570866-anonymous/kpminvalidkey.md): The key in a ticket, job template, or dictionary is invalid.
- [kPMInvalidValue](1570866-anonymous/kpminvalidvalue.md): The value in a ticket, job template, or dictionary is missing.
- [kPMInvalidAllocator](1570866-anonymous/kpminvalidallocator.md): The specified memory allocator is invalid.
- [kPMInvalidTicket](1570866-anonymous/kpminvalidticket.md): The job ticket is invalid.
- [kPMInvalidItem](1570866-anonymous/kpminvaliditem.md): The item being added to a ticket is invalid.
- [kPMInvalidType](1570866-anonymous/kpminvalidtype.md): The data type in a ticket, job template, or dictionary is not the expected type.
- [kPMInvalidReply](1570866-anonymous/kpminvalidreply.md): A remote server or client sent an invalid reply.
- [kPMInvalidFileType](1570866-anonymous/kpminvalidfiletype.md): The file type is invalid.
- [kPMInvalidObject](1570866-anonymous/kpminvalidobject.md): The object is invalid.
- [kPMInvalidPaper](1570866-anonymous/kpminvalidpaper.md): Your application passed an invalid paper object.
- [kPMInvalidCalibrationTarget](1570866-anonymous/kpminvalidcalibrationtarget.md): The dictionary specifying a printer calibration target is invalid.
- [kPMInvalidPreset](1506800-anonymous/kpminvalidpreset.md): Your application passed an invalid preset object.
