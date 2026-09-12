> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/1805626-pmsessionconvertoldprintrecord](https://developer.apple.com/documentation/applicationservices/core_printing/1805626-pmsessionconvertoldprintrecord)

# PMSessionConvertOldPrintRecord

**Interface language:** Objective-C

**Framework:** Application Services

Creates new page format and print settings objects from an old-style print record created for the classic Printing Manager.

> There is no replacement; during the transition from Mac OS 9 to macOS, this function facilitated the migration of print records saved in documents created in Mac OS 9, but the function no longer serves any useful purpose in macOS.

## Declaration

```objectivec
OSStatus PMSessionConvertOldPrintRecord (
   PMPrintSession printSession,
   Handle printRecordHandle,
   PMPrintSettings *printSettings,
   PMPageFormat *pageFormat
);
```

## Parameters

- `printSession`: The current printing session.
- `printRecordHandle`: A handle to an old-style print record created by the classic Printing Manager. You are responsible for disposing of the handle.
- `printSettings`: On return, a print settings object that contains values converted from the print record. You are responsible for releasing the print settings object with the function [PMRelease](../1461402-pmrelease.md).
- `pageFormat`: On return, a page format object that contains values converted from the print record. You are responsible for releasing the page format object with the function [PMRelease](../1461402-pmrelease.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../core_printing.md#1670007).

<a id="overview"></a>

## Overview

You must call this function between the creation and release of a printing session. See the function [PMCreateSession](../1463247-pmcreatesession.md).

You can use `PMSessionConvertOldPrintRecord` to create page format and print settings objects from old-style print records stored in documents created by pre-Carbon versions of your application. You should validate the page format and print settings objects returned to you by calling the functions `PMSessionValidatePageFormat` and `PMSessionValidatePrintSettings`. Note that perfect translation between the old and new style objects is not achievable. 

In macOS, the function assumes the print record to be converted is a LaserWriter 8 print record.

<a id="1819494"></a>

### Special Considerations

If you need to convert a Mac OS 9 print record into data you can use in macOS, you should extract the page size data from the print record and use the function [PMCreatePageFormatWithPMPaper](../1459274-pmcreatepageformatwithpmpaper.md) to create a `PMPageFormat` object that corresponds to that data.

## See Also

### Converting and Saving Old Print Records

- [PMSessionMakeOldPrintRecord](1805631-pmsessionmakeoldprintrecord.md): Deprecated. Creates an old-style print record from page format and print settings objects.
