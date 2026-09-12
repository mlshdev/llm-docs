> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amerror](https://developer.apple.com/documentation/automator/amerror)

# AMError

**Framework:** Automator  
**Kind:** Structure  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An Automator error.

## Declaration

```swift
struct AMError
```

## Topics

### Error Codes

- [workflowActionsNotLoadedError](amerror/workflowactionsnotloadederror.md): An error that indicates one of the actions of the workflow couldn’t be loaded.
- [workflowNewerActionVersionError](amerror/workflowneweractionversionerror.md): An error that indicates an action in a workflow is newer than the installed action.
- [workflowNewerVersionError](amerror/workflownewerversionerror.md): An error that indicates an attempt to open a workflow document that was saved with a newer version of Automator.
- [workflowNoEnabledActionsError](amerror/workflownoenabledactionserror.md): An error that indicates there are no enabled actions in the workflow.
- [workflowOlderActionVersionError](amerror/workflowolderactionversionerror.md): An error that indicates an action in a workflow is older than the installed action.
- [workflowPropertyListInvalidError](amerror/workflowpropertylistinvaliderror.md): An error that indicates an attempt to open a workflow document whose property list couldn’t be read.
- [userCanceledError](amerror/usercancelederror.md): An error that indicates the user cancelled.
- [actionApplicationResourceError](amerror/actionapplicationresourceerror.md): An error that indicates an app required by the action is not found.
- [actionApplicationVersionResourceError](amerror/actionapplicationversionresourceerror.md): An error that indicates an app required by the action is the wrong version.
- [actionArchitectureMismatchError](amerror/actionarchitecturemismatcherror.md): An error that indicates the action’s binary is not compatible with the current processor.
- [actionExceptionError](amerror/actionexceptionerror.md): An error that indicates an action encounters an exception while running.
- [actionExecutionError](amerror/actionexecutionerror.md): An error that indicates an action encounters an error while running (reason unknown).
- [actionFailedGatekeeperError](amerror/actionfailedgatekeepererror.md): An error that indicates the action doesn’t meet the Gatekeeper security policy.
- [actionFileResourceError](amerror/actionfileresourceerror.md): An error that indicates a file required by the action is not found.
- [actionInitializationError](amerror/actioninitializationerror.md): An error that indicates Automator is unable to initialize an action (reason unknown).
- [actionInsufficientDataError](amerror/actioninsufficientdataerror.md): An error that indicates the action requires input data to run, but none was supplied.
- [actionIsDeprecatedError](amerror/actionisdeprecatederror.md): An error that indicates the action has been deprecated.
- [actionLicenseResourceError](amerror/actionlicenseresourceerror.md): An error that indicates a license required by the action was not found.
- [actionLinkError](amerror/actionlinkerror.md): An error that indicates the action’s executable failed to load due to linking issues.
- [actionLoadError](amerror/actionloaderror.md): An error that indicates the action’s executable failed to load.
- [actionMalwareError](amerror/actionmalwareerror.md): An error that indicates the action has been identified as malware by XProtect.
- [actionNotLoadableError](amerror/actionnotloadableerror.md): An error that indicates the action’s executable is of a type that is not loadable in the current process.
- [actionPropertyListInvalidError](amerror/actionpropertylistinvaliderror.md): An error that indicates the property list for an action is invalid.
- [actionQuarantineError](amerror/actionquarantineerror.md): An error that indicates action has been quarantined by XProtect, the antimalware system on the Mac.
- [actionRequiredActionResourceError](amerror/actionrequiredactionresourceerror.md): An error that indicates an action required by the action is not loaded.
- [actionRuntimeMismatchError](amerror/actionruntimemismatcherror.md): An error that indicates an attempt was made to load an action that is not compiled in a way that is compatible with the current app.
- [actionSignatureCorruptError](amerror/actionsignaturecorrupterror.md): An error that indicates developer signature for this action is corrupted.
- [actionThirdPartyActionsNotAllowedError](amerror/actionthirdpartyactionsnotallowederror.md): An error that indicates the action is a third party action, and loading it has not been allowed by the user.
- [actionXPCError](amerror/actionxpcerror.md): An error that indicates the remote process running the action has crashed.
- [actionXProtectError](amerror/actionxprotecterror.md): An error that indicates XProtect is unable to successfully analyze the action.
- [noSuchActionError](amerror/nosuchactionerror.md): An error that indicates the action could not be located on the system.
- [conversionFailedError](amerror/conversionfailederror.md): An error that occurs when, for example, the converter encounters an error converting data from one type to another.
- [conversionNoDataError](amerror/conversionnodataerror.md): An error that occurs when the converter determines that the conversion, though possible, would produce a nil result.
- [conversionNotPossibleError](amerror/conversionnotpossibleerror.md): An error that occurs when the converter determines that it is unable to convert from one data type to another.
- [AMError.Code](amerror/code.md): Automator error codes.

### Error Domain

- [AMAutomatorErrorDomain](amautomatorerrordomain.md): A string that identifies the Automator error domain.

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [AMAutomatorErrorDomain](amautomatorerrordomain.md): A string that identifies the Automator error domain.
- [AMActionErrorKey](amactionerrorkey.md): A key to retrieve the action that caused an error.
- [AMError.Code](amerror/code.md): Automator error codes.
