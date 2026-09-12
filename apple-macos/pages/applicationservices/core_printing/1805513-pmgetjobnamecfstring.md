> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/1805513-pmgetjobnamecfstring](https://developer.apple.com/documentation/applicationservices/core_printing/1805513-pmgetjobnamecfstring)

# PMGetJobNameCFString

**Interface language:** Objective-C

**Framework:** Application Services

Obtains the name of the print job.

> Use [PMPrintSettingsGetJobName](../1459233-pmprintsettingsgetjobname.md) instead.

## Declaration

```objectivec
OSStatus PMGetJobNameCFString (
   PMPrintSettings printSettings,
   CFStringRef *name
);
```

## Parameters

- `printSettings`: The print settings object whose job name you want to obtain.
- `name`: A pointer to your [CFStringRef](https://developer.apple.com/documentation/corefoundation/cfstring) variable. On return, the variable refers to a string that contains the name of the print job. Despite what its name implies, the function `PMGetJobNameCFString` has Create/Copy semantics which means your application must release the string returned to it.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../core_printing.md#1670007).

## See Also

### Accessing Data in Print Settings Objects

- [PMGetPrintSettingsExtendedData](1805488-pmgetprintsettingsextendeddata.md): Obtains extended print settings data previously stored by your application.
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
- [PMSetJobNameCFString](1805515-pmsetjobnamecfstring.md): Deprecated. Specifies the name of a print job.
