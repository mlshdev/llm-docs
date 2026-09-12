> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1463747-pmworkflowsubmitpdfwithoptions](https://developer.apple.com/documentation/applicationservices/1463747-pmworkflowsubmitpdfwithoptions)

# PMWorkflowSubmitPDFWithOptions(\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Submits a PDF file for workflow processing using the specified CUPS options string.

## Declaration

```swift
func PMWorkflowSubmitPDFWithOptions(_ workflowItem: CFURL, _ title: CFString?, _ options: UnsafePointer<CChar>?, _ pdfFile: CFURL) -> OSStatus
```

## Parameters

- `workflowItem`: A file system URL pointing to the workflow item that will handle the PDF file. See [PMWorkflowCopyItems(\_:)](1459914-pmworkflowcopyitems.md). The following table describes the different types of workflow items for this function.

  | Workflow item | Description |
  | --- | --- |
  | Automator action | The action is executed for the PDF file. Available in macOS 10.4 and later. |
  | Folder alias | The PDF file is moved to the resolved folder. |
  | Application or application alias | The application is sent an open event along with a reference to the PDF file. |
  | Compiled AppleScript | The script is run with an open event along with a reference to the PDF file. |
  | Executable tool | The tool is run with the following parameters: `title`, `options`, and `pdfFile`. |
- `title`: The user-displayable name of the PDF document.
- `options`: A string of CUPS-style key-value pairs that may be passed to the PDF workflow item. This parameter can be `NULL` in which case an empty string of options is used.
- `pdfFile`: A file system URL pointing to the PDF file to be processed by the workflow item.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

The printing system uses this function in conjunction with the function [PMWorkflowCopyItems(\_:)](1459914-pmworkflowcopyitems.md) to implement the PDF workflow button in the Print dialog.

## See Also

### Using PDF Workflow Items

- [PMWorkflowCopyItems(\_:)](1459914-pmworkflowcopyitems.md): Obtains an array of the available PDF workflow items.
- [PMWorkflowSubmitPDFWithSettings(\_:\_:\_:)](1458874-pmworkflowsubmitpdfwithsettings.md): Submits a PDF file for workflow processing using the specified print settings.

# PMWorkflowSubmitPDFWithOptions (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Submits a PDF file for workflow processing using the specified CUPS options string.

## Declaration

```objectivec
OSStatus PMWorkflowSubmitPDFWithOptions(CFURLRef workflowItem, CFStringRef title, const char *options, CFURLRef pdfFile);
```

## Parameters

- `workflowItem`: A file system URL pointing to the workflow item that will handle the PDF file. See [PMWorkflowCopyItems](1459914-pmworkflowcopyitems.md). The following table describes the different types of workflow items for this function.

  | Workflow item | Description |
  | --- | --- |
  | Automator action | The action is executed for the PDF file. Available in macOS 10.4 and later. |
  | Folder alias | The PDF file is moved to the resolved folder. |
  | Application or application alias | The application is sent an open event along with a reference to the PDF file. |
  | Compiled AppleScript | The script is run with an open event along with a reference to the PDF file. |
  | Executable tool | The tool is run with the following parameters: `title`, `options`, and `pdfFile`. |
- `title`: The user-displayable name of the PDF document.
- `options`: A string of CUPS-style key-value pairs that may be passed to the PDF workflow item. This parameter can be `NULL` in which case an empty string of options is used.
- `pdfFile`: A file system URL pointing to the PDF file to be processed by the workflow item.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

The printing system uses this function in conjunction with the function [PMWorkflowCopyItems](1459914-pmworkflowcopyitems.md) to implement the PDF workflow button in the Print dialog.

## See Also

### Using PDF Workflow Items

- [PMWorkflowCopyItems](1459914-pmworkflowcopyitems.md): Obtains an array of the available PDF workflow items.
- [PMWorkflowSubmitPDFWithSettings](1458874-pmworkflowsubmitpdfwithsettings.md): Submits a PDF file for workflow processing using the specified print settings.
