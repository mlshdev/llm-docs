> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amerror/code/workflowneweractionversionerror](https://developer.apple.com/documentation/automator/amerror/code/workflowneweractionversionerror)

# AMError.Code.workflowNewerActionVersionError (Swift)

**Framework:** Automator  
**Kind:** Case  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An error that indicates an action in a workflow is newer than the installed action.

## Declaration

```swift
case workflowNewerActionVersionError
```

<a id="Discussion"></a>

## Discussion

This error is presented to the user as a warning.

## See Also

### Workflow Errors

- [AMError.Code.workflowActionsNotLoadedError](workflowactionsnotloadederror.md): An error that indicates one of the actions of the workflow couldn’t be loaded.
- [AMError.Code.workflowNewerVersionError](workflownewerversionerror.md): An error that indicates an attempt to open a workflow document that was saved with a newer version of Automator.
- [AMError.Code.workflowNoEnabledActionsError](workflownoenabledactionserror.md): An error that indicates there are no enabled actions in the workflow.
- [AMError.Code.workflowOlderActionVersionError](workflowolderactionversionerror.md): An error that indicates an action in a workflow is older than the installed action.
- [AMError.Code.workflowPropertyListInvalidError](workflowpropertylistinvaliderror.md): An error that indicates an attempt to open a workflow document whose property list couldn’t be read.

# AMWorkflowNewerActionVersionError (Objective-C)

**Framework:** Automator  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An error that indicates an action in a workflow is newer than the installed action.

## Declaration

```objectivec
AMWorkflowNewerActionVersionError
```

<a id="Discussion"></a>

## Discussion

This error is presented to the user as a warning.

## See Also

### Workflow Errors

- [AMWorkflowActionsNotLoadedError](workflowactionsnotloadederror.md): An error that indicates one of the actions of the workflow couldn’t be loaded.
- [AMWorkflowNewerVersionError](workflownewerversionerror.md): An error that indicates an attempt to open a workflow document that was saved with a newer version of Automator.
- [AMWorkflowNoEnabledActionsError](workflownoenabledactionserror.md): An error that indicates there are no enabled actions in the workflow.
- [AMWorkflowOlderActionVersionError](workflowolderactionversionerror.md): An error that indicates an action in a workflow is older than the installed action.
- [AMWorkflowPropertyListInvalidError](workflowpropertylistinvaliderror.md): An error that indicates an attempt to open a workflow document whose property list couldn’t be read.
