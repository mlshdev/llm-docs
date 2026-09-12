> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/1805631-pmsessionmakeoldprintrecord](https://developer.apple.com/documentation/applicationservices/core_printing/1805631-pmsessionmakeoldprintrecord)

# PMSessionMakeOldPrintRecord

**Interface language:** Objective-C

**Framework:** Application Services

Creates an old-style print record from page format and print settings objects.

> There is no replacement; old-style print records are obsolete and serve no useful purpose in macOS.

## Declaration

```objectivec
OSStatus PMSessionMakeOldPrintRecord (
   PMPrintSession printSession,
   PMPrintSettings printSettings,
   PMPageFormat pageFormat,
   Handle *printRecordHandle
);
```

## Parameters

- `printSession`: The current printing session.
- `printSettings`: A print settings object. To create a print settings object you can call the function [PMCreatePrintSettings](../1463239-pmcreateprintsettings.md) and then call the function [PMSessionDefaultPrintSettings](../1460138-pmsessiondefaultprintsettings.md) to initialize the print settings object to default values.
- `pageFormat`: A page format object. To create a page format object you can call the function [PMCreatePageFormat](../1459485-pmcreatepageformat.md) and then call the function [PMSessionDefaultPageFormat](../1462217-pmsessiondefaultpageformat.md) to initialize the page format object to default values.
- `printRecordHandle`: On return, a handle to an old-style print record. You are responsible for disposing of the handle.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../core_printing.md#1670007).

<a id="overview"></a>

## Overview

You must call this function between the creation and release of a printing session. See the function [PMCreateSession](../1463247-pmcreatesession.md).

You can use `PMSessionMakeOldPrintRecord` to create an old-style print record to store with your documents for compatibility with pre-Carbon versions of your application. Note that because the page format and print settings objects contain more information than the old print record, some settings may be lost in the conversion. That is, perfect translation between the old and new style objects is not achievable.

In macOS, the function always creates a LaserWriter 8 compatible print record.

<a id="1819495"></a>

### Special Considerations

The proper way to keep page format information for use in macOS is with a flattened `PMPageFormat` object. Typically applications don't keep print settings with a document but if that is appropriate for a given application, the proper way to do so is to use a flattened `PMPrintSettings` object.

## See Also

### Converting and Saving Old Print Records

- [PMSessionConvertOldPrintRecord](1805626-pmsessionconvertoldprintrecord.md): Deprecated. Creates new page format and print settings objects from an old-style print record created for the classic Printing Manager.
