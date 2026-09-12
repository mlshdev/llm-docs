> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/1805491-pmsetprintsettingsextendeddata](https://developer.apple.com/documentation/applicationservices/core_printing/1805491-pmsetprintsettingsextendeddata)

# PMSetPrintSettingsExtendedData

**Interface language:** Objective-C

**Framework:** Application Services

Stores your application-specific data in a print settings object.

## Declaration

```objectivec
OSStatus PMSetPrintSettingsExtendedData (
   PMPrintSettings printSettings,
   OSType dataID,
   UInt32 size,
   void *extendedData
);
```

## Parameters

- `printSettings`: The print settings object in which to store your application-specific data.
- `dataID`: A 4-character code that will be used to identify your data. The 4-character code must not contain any characters outside the standard ASCII 7-bit character range 0x20–0x7F. This is typically your application’s creator code.
- `size`: The size, in bytes, of the data to be stored in the print settings object.
- `extendedData`: A pointer to a buffer that contains the extended data you want to store.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../core_printing.md#1670007).

<a id="overview"></a>

## Overview

You can retrieve the data you store with the function `PMSetPrintSettingsExtendedData` by calling the function `PMGetPrintSettingsExtendedData`.

You may find it easier to use the functions [PMPrintSettingsSetValue](../1461697-pmprintsettingssetvalue.md) and [PMPrintSettingsGetValue](../1460602-pmprintsettingsgetvalue.md) to store and retrieve user-defined data in a print settings object. If you use these functions, make sure that the custom keys you define for your private data do not conflict with other print settings keys.

## See Also

### Accessing Data in Print Settings Objects

- [PMGetPrintSettingsExtendedData](1805488-pmgetprintsettingsextendeddata.md): Obtains extended print settings data previously stored by your application.
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
