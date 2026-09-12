> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1459914-pmworkflowcopyitems](https://developer.apple.com/documentation/applicationservices/1459914-pmworkflowcopyitems)

# PMWorkflowCopyItems(\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Obtains an array of the available PDF workflow items.

## Declaration

```swift
func PMWorkflowCopyItems(_ workflowItems: UnsafeMutablePointer<Unmanaged<CFArray>?>) -> OSStatus
```

## Parameters

- `workflowItems`: A pointer to your [CFArray](https://developer.apple.com/documentation/corefoundation/cfarray) variable. On return, the variable refers to an Core Foundation array. Each element in the array is a dictionary that describes either a PDF workflow item or a folder containing a set of PDF workflow items. For a list of possible keys, see [PDF Workflow Dictionary Keys](core_printing/pdf_workflow_dictionary_keys.md). You are responsible for releasing the array.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

## See Also

### Using PDF Workflow Items

- [PMWorkflowSubmitPDFWithOptions(\_:\_:\_:\_:)](1463747-pmworkflowsubmitpdfwithoptions.md): Submits a PDF file for workflow processing using the specified CUPS options string.
- [PMWorkflowSubmitPDFWithSettings(\_:\_:\_:)](1458874-pmworkflowsubmitpdfwithsettings.md): Submits a PDF file for workflow processing using the specified print settings.

# PMWorkflowCopyItems (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Obtains an array of the available PDF workflow items.

## Declaration

```objectivec
OSStatus PMWorkflowCopyItems(CFArrayRef  _Nullable *workflowItems);
```

## Parameters

- `workflowItems`: A pointer to your [CFArrayRef](https://developer.apple.com/documentation/corefoundation/cfarray) variable. On return, the variable refers to an Core Foundation array. Each element in the array is a dictionary that describes either a PDF workflow item or a folder containing a set of PDF workflow items. For a list of possible keys, see [PDF Workflow Dictionary Keys](core_printing/pdf_workflow_dictionary_keys.md). You are responsible for releasing the array.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

## See Also

### Using PDF Workflow Items

- [PMWorkflowSubmitPDFWithOptions](1463747-pmworkflowsubmitpdfwithoptions.md): Submits a PDF file for workflow processing using the specified CUPS options string.
- [PMWorkflowSubmitPDFWithSettings](1458874-pmworkflowsubmitpdfwithsettings.md): Submits a PDF file for workflow processing using the specified print settings.
