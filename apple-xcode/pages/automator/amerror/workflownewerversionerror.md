> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amerror/workflownewerversionerror](https://developer.apple.com/documentation/automator/amerror/workflownewerversionerror)

# workflowNewerVersionError

**Framework:** Automator  
**Kind:** Type Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An error that indicates an attempt to open a workflow document that was saved with a newer version of Automator.

## Declaration

```swift
static var workflowNewerVersionError: AMError.Code { get }
```

## See Also

### Error Codes

- [workflowActionsNotLoadedError](workflowactionsnotloadederror.md): An error that indicates one of the actions of the workflow couldn’t be loaded.
- [workflowNewerActionVersionError](workflowneweractionversionerror.md): An error that indicates an action in a workflow is newer than the installed action.
- [workflowNoEnabledActionsError](workflownoenabledactionserror.md): An error that indicates there are no enabled actions in the workflow.
- [workflowOlderActionVersionError](workflowolderactionversionerror.md): An error that indicates an action in a workflow is older than the installed action.
- [workflowPropertyListInvalidError](workflowpropertylistinvaliderror.md): An error that indicates an attempt to open a workflow document whose property list couldn’t be read.
- [userCanceledError](usercancelederror.md): An error that indicates the user cancelled.
- [actionApplicationResourceError](actionapplicationresourceerror.md): An error that indicates an app required by the action is not found.
- [actionApplicationVersionResourceError](actionapplicationversionresourceerror.md): An error that indicates an app required by the action is the wrong version.
- [actionArchitectureMismatchError](actionarchitecturemismatcherror.md): An error that indicates the action’s binary is not compatible with the current processor.
- [actionExceptionError](actionexceptionerror.md): An error that indicates an action encounters an exception while running.
- [actionExecutionError](actionexecutionerror.md): An error that indicates an action encounters an error while running (reason unknown).
- [actionFailedGatekeeperError](actionfailedgatekeepererror.md): An error that indicates the action doesn’t meet the Gatekeeper security policy.
- [actionFileResourceError](actionfileresourceerror.md): An error that indicates a file required by the action is not found.
- [actionInitializationError](actioninitializationerror.md): An error that indicates Automator is unable to initialize an action (reason unknown).
- [actionInsufficientDataError](actioninsufficientdataerror.md): An error that indicates the action requires input data to run, but none was supplied.
