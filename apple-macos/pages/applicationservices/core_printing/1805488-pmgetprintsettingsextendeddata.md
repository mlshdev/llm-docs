> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/1805488-pmgetprintsettingsextendeddata](https://developer.apple.com/documentation/applicationservices/core_printing/1805488-pmgetprintsettingsextendeddata)

# PMGetPrintSettingsExtendedData

**Interface language:** Objective-C

**Framework:** Application Services

Obtains extended print settings data previously stored by your application.

## Declaration

```objectivec
OSStatus PMGetPrintSettingsExtendedData (
   PMPrintSettings printSettings,
   OSType dataID,
   UInt32 *size,
   void *extendedData
);
```

## Parameters

- `printSettings`: The print settings object whose extended data you want to obtain.
- `dataID`: The unique 4-character code of the data to retrieve. This is typically your application’s creator code. However, if your creator code is outside the ASCII 7-bit character range 0x20–0x7F, you need to use a different 4-character code.
- `size`: A pointer to a value that specifies the size of the buffer you have allocated for the extended print settings data. On return, this variable contains the number of bytes read into the buffer or the size of the extended data. You can pass the constant `kPMDontWantSize` if you do not need this information. (See [Data Not Wanted Constants](data_not_wanted_constants.md) for more information.)
- `extendedData`: A pointer to a buffer to receive the extended data. Pass the constant `kPMDontWantData` if you do not want to read the data. (See [Data Not Wanted Constants](data_not_wanted_constants.md) for more information.)

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../core_printing.md#1670007).

<a id="overview"></a>

## Overview

Your application typically needs to call `PMGetPrintSettingsExtendedData` two times in order to retrieve the extended print settings data. The first time, pass the constant `kPMDontWantData` in the `extendedData` parameter to obtain the buffer size required for the extended data. Then allocate the buffer and call the function a second time to read the extended data into your buffer.

You may find it easier to use the functions [PMPrintSettingsSetValue](../1461697-pmprintsettingssetvalue.md) and [PMPrintSettingsGetValue](../1460602-pmprintsettingsgetvalue.md) to store and retrieve user-defined data in a print settings object. If you use these functions, make sure that the custom keys you define for your private data do not conflict with other print settings keys.

## See Also

### Accessing Data in Print Settings Objects

- [PMSetPrintSettingsExtendedData](1805491-pmsetprintsettingsextendeddata.md): Stores your application-specific data in a print settings object.
- [PMGetFirstPage](../1460271-pmgetfirstpage.md): Obtains the number of the first page to be printed.
- [PMSetFirstPage](../1461519-pmsetfirstpage.md): Sets the default page number of the first page to be printed.
- [PMGetLastPage](../1462747-pmgetlastpage.md): Obtains the number of the last page to be printed.
- [PMSetLastPage](../1463595-pmsetlastpage.md): Sets the page number of the last page to be printed.
- [PMGetPageRange](../1459324-pmgetpagerange.md): Obtains the valid range of pages that can be printed.
- [PMSetPageRange](../1462294-pmsetpagerange.md): Sets the valid range of pages that can be printed.
- [PMPrintSettingsGetJobName](../1459233-pmprintsettingsgetjobname.md): Obtains the name of a print job.
- [PMPrintSettingsSetJobName](../1460149-pmprintsettingssetjobname.md): Specifies the name of a print job.
- [PMGetCopies](../1464480-pmgetcopies.md): Obtains the number of copies that the user requests to be printed.
- [PMSetCopies](../1463804-pmsetcopies.md): Sets the initial value for the number of copies to be printed.
- [PMGetCollate](../1464492-pmgetcollate.md): Obtains a Boolean value that indicates whether the job collate option is selected.
- [PMSetCollate](../1463223-pmsetcollate.md): Specifies whether the job collate option is selected.
- [PMGetDuplex](../1458921-pmgetduplex.md): Obtains the selected duplex mode.
- [PMSetDuplex](../1462000-pmsetduplex.md): Sets the duplex mode.
- [PMPrintSettingsGetValue](../1460602-pmprintsettingsgetvalue.md): Obtains the value of a setting in a print settings object.
- [PMPrintSettingsSetValue](../1461697-pmprintsettingssetvalue.md): Stores the value of a setting in a print settings object.
- [PMPrintSettingsCopyAsDictionary](../1459088-pmprintsettingscopyasdictionary.md): Creates a dictionary that contains the settings in a print settings object.
- [PMPrintSettingsCopyKeys](../1462730-pmprintsettingscopykeys.md): Obtains the keys for items in a print settings object.
- [PMGetJobNameCFString](1805513-pmgetjobnamecfstring.md): Deprecated. Obtains the name of the print job.
- [PMSetJobNameCFString](1805515-pmsetjobnamecfstring.md): Deprecated. Specifies the name of a print job.
