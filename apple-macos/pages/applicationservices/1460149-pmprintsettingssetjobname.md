> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1460149-pmprintsettingssetjobname](https://developer.apple.com/documentation/applicationservices/1460149-pmprintsettingssetjobname)

# PMPrintSettingsSetJobName(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Specifies the name of a print job.

## Declaration

```swift
func PMPrintSettingsSetJobName(_ printSettings: PMPrintSettings, _ name: CFString) -> OSStatus
```

## Parameters

- `printSettings`: The print settings object whose job name you want to set.
- `name`: The new name for the print job.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

If you’re using the Print dialog, you should call this function before presenting the dialog. You are strongly encouraged to create a print job name that’s meaningful to the user and use this function to set the name; this produces the best user experience. If you do not specify the print job name, the printing system creates an appropriate job name for you.

If you call this function after initiating a print job, the change is ignored for the current job.

## See Also

### Accessing Data in Print Settings Objects

- [PMGetFirstPage(\_:\_:)](1460271-pmgetfirstpage.md): Obtains the number of the first page to be printed.
- [PMSetFirstPage(\_:\_:\_:)](1461519-pmsetfirstpage.md): Sets the default page number of the first page to be printed.
- [PMGetLastPage(\_:\_:)](1462747-pmgetlastpage.md): Obtains the number of the last page to be printed.
- [PMSetLastPage(\_:\_:\_:)](1463595-pmsetlastpage.md): Sets the page number of the last page to be printed.
- [PMGetPageRange(\_:\_:\_:)](1459324-pmgetpagerange.md): Obtains the valid range of pages that can be printed.
- [PMSetPageRange(\_:\_:\_:)](1462294-pmsetpagerange.md): Sets the valid range of pages that can be printed.
- [PMPrintSettingsGetJobName(\_:\_:)](1459233-pmprintsettingsgetjobname.md): Obtains the name of a print job.
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

# PMPrintSettingsSetJobName (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Specifies the name of a print job.

## Declaration

```objectivec
OSStatus PMPrintSettingsSetJobName(PMPrintSettings printSettings, CFStringRef name);
```

## Parameters

- `printSettings`: The print settings object whose job name you want to set.
- `name`: The new name for the print job.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

If you’re using the Print dialog, you should call this function before presenting the dialog. You are strongly encouraged to create a print job name that’s meaningful to the user and use this function to set the name; this produces the best user experience. If you do not specify the print job name, the printing system creates an appropriate job name for you.

If you call this function after initiating a print job, the change is ignored for the current job.

## See Also

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
