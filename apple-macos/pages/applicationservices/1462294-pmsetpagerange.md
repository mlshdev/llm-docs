> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1462294-pmsetpagerange](https://developer.apple.com/documentation/applicationservices/1462294-pmsetpagerange)

# PMSetPageRange(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Sets the valid range of pages that can be printed.

## Declaration

```swift
func PMSetPageRange(_ printSettings: PMPrintSettings, _ minPage: UInt32, _ maxPage: UInt32) -> OSStatus
```

## Parameters

- `printSettings`: The print settings object whose page range you want to set.
- `minPage`: The minimum page number allowed. This value appears as the default in the From field of the Print dialog.
- `maxPage`: The maximum page number allowed. This value appears as the default in the To field of the Print dialog. Pass the constant `kPMPrintAllPages` to allow the user to print the entire document. If the first page is set to 1, then passing `kPMPrintAllPages` as the maximum page number causes the All button to be selected.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

The function `PMSetPageRange` allows applications to set the minimum and maximum page numbers that can be printed for a document. If the user enters a value outside of this range in the Print dialog, the value is set to the closest allowed value. You can use the [PMGetFirstPage(\_:\_:)](1460271-pmgetfirstpage.md) and [PMGetLastPage(\_:\_:)](1462747-pmgetlastpage.md) functions to obtain the values entered by the user in the Print dialog.)

If you call the function `PMSetPageRange` to set the maximum page to a value other than the constant `kPMPrintAllPages`, the function `PMSetPageRange` causes the page range in the Print dialog to be properly restricted to the specified range. If you call the function `PMSetPageRange` without also calling the functions `PMSetFirstPage` or `PMSetLastPage`, then the Print dialog shows the specified page range in the From and To fields but with the All button selected. If you call the function `PMSetPageRange` and then call `PMSetFirstPage` or `PMSetLastPage` using the same page range you specified for `PMSetPageRange`, then the Print dialog shows the From button selected.

In all cases, if your application sets a range with `PMSetPageRange` and subsequently calls [PMSetFirstPage(\_:\_:\_:)](1461519-pmsetfirstpage.md) or [PMSetLastPage(\_:\_:\_:)](1463595-pmsetlastpage.md) with values outside of the specified range, Core Printing returns a result code of `kPMValueOutOfRange`. Conversely, if your application calls `PMSetPageRange` after calling `PMSetFirstPage` or `PMSetLastPage` (or after displaying the Print dialog), the page range specified by `PMSetPageRange` takes precedence, and the first and last page values are adjusted accordingly.

If you call this function after initiating a print job, the change is ignored for the current job.

## See Also

### Accessing Data in Print Settings Objects

- [PMGetFirstPage(\_:\_:)](1460271-pmgetfirstpage.md): Obtains the number of the first page to be printed.
- [PMSetFirstPage(\_:\_:\_:)](1461519-pmsetfirstpage.md): Sets the default page number of the first page to be printed.
- [PMGetLastPage(\_:\_:)](1462747-pmgetlastpage.md): Obtains the number of the last page to be printed.
- [PMSetLastPage(\_:\_:\_:)](1463595-pmsetlastpage.md): Sets the page number of the last page to be printed.
- [PMGetPageRange(\_:\_:\_:)](1459324-pmgetpagerange.md): Obtains the valid range of pages that can be printed.
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

# PMSetPageRange (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Sets the valid range of pages that can be printed.

## Declaration

```objectivec
OSStatus PMSetPageRange(PMPrintSettings printSettings, UInt32 minPage, UInt32 maxPage);
```

## Parameters

- `printSettings`: The print settings object whose page range you want to set.
- `minPage`: The minimum page number allowed. This value appears as the default in the From field of the Print dialog.
- `maxPage`: The maximum page number allowed. This value appears as the default in the To field of the Print dialog. Pass the constant `kPMPrintAllPages` to allow the user to print the entire document. If the first page is set to 1, then passing `kPMPrintAllPages` as the maximum page number causes the All button to be selected.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

The function `PMSetPageRange` allows applications to set the minimum and maximum page numbers that can be printed for a document. If the user enters a value outside of this range in the Print dialog, the value is set to the closest allowed value. You can use the [PMGetFirstPage](1460271-pmgetfirstpage.md) and [PMGetLastPage](1462747-pmgetlastpage.md) functions to obtain the values entered by the user in the Print dialog.)

If you call the function `PMSetPageRange` to set the maximum page to a value other than the constant `kPMPrintAllPages`, the function `PMSetPageRange` causes the page range in the Print dialog to be properly restricted to the specified range. If you call the function `PMSetPageRange` without also calling the functions `PMSetFirstPage` or `PMSetLastPage`, then the Print dialog shows the specified page range in the From and To fields but with the All button selected. If you call the function `PMSetPageRange` and then call `PMSetFirstPage` or `PMSetLastPage` using the same page range you specified for `PMSetPageRange`, then the Print dialog shows the From button selected.

In all cases, if your application sets a range with `PMSetPageRange` and subsequently calls [PMSetFirstPage](1461519-pmsetfirstpage.md) or [PMSetLastPage](1463595-pmsetlastpage.md) with values outside of the specified range, Core Printing returns a result code of `kPMValueOutOfRange`. Conversely, if your application calls `PMSetPageRange` after calling `PMSetFirstPage` or `PMSetLastPage` (or after displaying the Print dialog), the page range specified by `PMSetPageRange` takes precedence, and the first and last page values are adjusted accordingly.

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
