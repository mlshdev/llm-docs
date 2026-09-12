> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amerror/code](https://developer.apple.com/documentation/automator/amerror/code)

# AMError.Code (Swift)

**Framework:** Automator  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Automator error codes.

## Declaration

```swift
enum Code
```

<a id="overview"></a>

## Overview

These constants are [NSError](https://developer.apple.com/documentation/foundation/nserror) code numbers in the Automator error domain ([AMAutomatorErrorDomain](../amautomatorerrordomain.md)). You’ll obtain these error codes from the instances of [NSError](https://developer.apple.com/documentation/foundation/nserror) returned, for example, by certain methods of [AMWorkflow](../amworkflow.md) and [AMWorkflowController](../amworkflowcontroller.md). For related information, see [AMActionErrorKey](../amactionerrorkey.md).

## Topics

### Workflow Errors

- [AMError.Code.workflowActionsNotLoadedError](code/workflowactionsnotloadederror.md): An error that indicates one of the actions of the workflow couldn’t be loaded.
- [AMError.Code.workflowNewerActionVersionError](code/workflowneweractionversionerror.md): An error that indicates an action in a workflow is newer than the installed action.
- [AMError.Code.workflowNewerVersionError](code/workflownewerversionerror.md): An error that indicates an attempt to open a workflow document that was saved with a newer version of Automator.
- [AMError.Code.workflowNoEnabledActionsError](code/workflownoenabledactionserror.md): An error that indicates there are no enabled actions in the workflow.
- [AMError.Code.workflowOlderActionVersionError](code/workflowolderactionversionerror.md): An error that indicates an action in a workflow is older than the installed action.
- [AMError.Code.workflowPropertyListInvalidError](code/workflowpropertylistinvaliderror.md): An error that indicates an attempt to open a workflow document whose property list couldn’t be read.

### Workflow Runtime Errors

- [AMError.Code.userCanceledError](code/usercancelederror.md): An error that indicates the user cancelled.

### Action Errors

- [AMError.Code.actionApplicationResourceError](code/actionapplicationresourceerror.md): An error that indicates an app required by the action is not found.
- [AMError.Code.actionApplicationVersionResourceError](code/actionapplicationversionresourceerror.md): An error that indicates an app required by the action is the wrong version.
- [AMError.Code.actionArchitectureMismatchError](code/actionarchitecturemismatcherror.md): An error that indicates the action’s binary is not compatible with the current processor.
- [AMError.Code.actionExceptionError](code/actionexceptionerror.md): An error that indicates an action encounters an exception while running.
- [AMError.Code.actionExecutionError](code/actionexecutionerror.md): An error that indicates an action encounters an error while running (reason unknown).
- [AMError.Code.actionFailedGatekeeperError](code/actionfailedgatekeepererror.md): An error that indicates the action doesn’t meet the Gatekeeper security policy.
- [AMError.Code.actionFileResourceError](code/actionfileresourceerror.md): An error that indicates a file required by the action is not found.
- [AMError.Code.actionInitializationError](code/actioninitializationerror.md): An error that indicates Automator is unable to initialize an action (reason unknown).
- [AMError.Code.actionInsufficientDataError](code/actioninsufficientdataerror.md): An error that indicates the action requires input data to run, but none was supplied.
- [AMError.Code.actionIsDeprecatedError](code/actionisdeprecatederror.md): An error that indicates the action has been deprecated.
- [AMError.Code.actionLicenseResourceError](code/actionlicenseresourceerror.md): An error that indicates a license required by the action was not found.
- [AMError.Code.actionLinkError](code/actionlinkerror.md): An error that indicates the action’s executable failed to load due to linking issues.
- [AMError.Code.actionLoadError](code/actionloaderror.md): An error that indicates the action’s executable failed to load.
- [AMError.Code.actionMalwareError](code/actionmalwareerror.md): An error that indicates the action has been identified as malware by XProtect.
- [AMError.Code.actionNotLoadableError](code/actionnotloadableerror.md): An error that indicates the action’s executable is of a type that is not loadable in the current process.
- [AMError.Code.actionPropertyListInvalidError](code/actionpropertylistinvaliderror.md): An error that indicates the property list for an action is invalid.
- [AMError.Code.actionQuarantineError](code/actionquarantineerror.md): An error that indicates action has been quarantined by XProtect, the antimalware system on the Mac.
- [AMError.Code.actionRequiredActionResourceError](code/actionrequiredactionresourceerror.md): An error that indicates an action required by the action is not loaded.
- [AMError.Code.actionRuntimeMismatchError](code/actionruntimemismatcherror.md): An error that indicates an attempt was made to load an action that is not compiled in a way that is compatible with the current app.
- [AMError.Code.actionSignatureCorruptError](code/actionsignaturecorrupterror.md): An error that indicates developer signature for this action is corrupted.
- [AMError.Code.actionThirdPartyActionsNotAllowedError](code/actionthirdpartyactionsnotallowederror.md): An error that indicates the action is a third party action, and loading it has not been allowed by the user.
- [AMError.Code.actionXPCError](code/actionxpcerror.md): An error that indicates the remote process running the action has crashed.
- [AMError.Code.actionXProtectError](code/actionxprotecterror.md): An error that indicates XProtect is unable to successfully analyze the action.
- [AMError.Code.noSuchActionError](code/nosuchactionerror.md): An error that indicates the action could not be located on the system.

### Data Conversion Errors

- [AMError.Code.conversionFailedError](code/conversionfailederror.md): An error that occurs when, for example, the converter encounters an error converting data from one type to another.
- [AMError.Code.conversionNoDataError](code/conversionnodataerror.md): An error that occurs when the converter determines that the conversion, though possible, would produce a nil result.
- [AMError.Code.conversionNotPossibleError](code/conversionnotpossibleerror.md): An error that occurs when the converter determines that it is unable to convert from one data type to another.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [AMAutomatorErrorDomain](../amautomatorerrordomain.md): A string that identifies the Automator error domain.
- [AMActionErrorKey](../amactionerrorkey.md): A key to retrieve the action that caused an error.
- [AMError](../amerror.md): An Automator error.

# AMErrorCode (Objective-C)

**Framework:** Automator  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Automator error codes.

## Declaration

```objectivec
enum AMErrorCode : NSInteger;
```

<a id="overview"></a>

## Overview

These constants are [NSError](https://developer.apple.com/documentation/foundation/nserror) code numbers in the Automator error domain ([AMAutomatorErrorDomain](../amautomatorerrordomain.md)). You’ll obtain these error codes from the instances of [NSError](https://developer.apple.com/documentation/foundation/nserror) returned, for example, by certain methods of [AMWorkflow](../amworkflow.md) and [AMWorkflowController](../amworkflowcontroller.md). For related information, see [AMActionErrorKey](../amactionerrorkey.md).

## Topics

### Workflow Errors

- [AMWorkflowActionsNotLoadedError](code/workflowactionsnotloadederror.md): An error that indicates one of the actions of the workflow couldn’t be loaded.
- [AMWorkflowNewerActionVersionError](code/workflowneweractionversionerror.md): An error that indicates an action in a workflow is newer than the installed action.
- [AMWorkflowNewerVersionError](code/workflownewerversionerror.md): An error that indicates an attempt to open a workflow document that was saved with a newer version of Automator.
- [AMWorkflowNoEnabledActionsError](code/workflownoenabledactionserror.md): An error that indicates there are no enabled actions in the workflow.
- [AMWorkflowOlderActionVersionError](code/workflowolderactionversionerror.md): An error that indicates an action in a workflow is older than the installed action.
- [AMWorkflowPropertyListInvalidError](code/workflowpropertylistinvaliderror.md): An error that indicates an attempt to open a workflow document whose property list couldn’t be read.

### Workflow Runtime Errors

- [AMUserCanceledError](code/usercancelederror.md): An error that indicates the user cancelled.

### Action Errors

- [AMActionApplicationResourceError](code/actionapplicationresourceerror.md): An error that indicates an app required by the action is not found.
- [AMActionApplicationVersionResourceError](code/actionapplicationversionresourceerror.md): An error that indicates an app required by the action is the wrong version.
- [AMActionArchitectureMismatchError](code/actionarchitecturemismatcherror.md): An error that indicates the action’s binary is not compatible with the current processor.
- [AMActionExceptionError](code/actionexceptionerror.md): An error that indicates an action encounters an exception while running.
- [AMActionExecutionError](code/actionexecutionerror.md): An error that indicates an action encounters an error while running (reason unknown).
- [AMActionFailedGatekeeperError](code/actionfailedgatekeepererror.md): An error that indicates the action doesn’t meet the Gatekeeper security policy.
- [AMActionFileResourceError](code/actionfileresourceerror.md): An error that indicates a file required by the action is not found.
- [AMActionInitializationError](code/actioninitializationerror.md): An error that indicates Automator is unable to initialize an action (reason unknown).
- [AMActionInsufficientDataError](code/actioninsufficientdataerror.md): An error that indicates the action requires input data to run, but none was supplied.
- [AMActionIsDeprecatedError](code/actionisdeprecatederror.md): An error that indicates the action has been deprecated.
- [AMActionLicenseResourceError](code/actionlicenseresourceerror.md): An error that indicates a license required by the action was not found.
- [AMActionLinkError](code/actionlinkerror.md): An error that indicates the action’s executable failed to load due to linking issues.
- [AMActionLoadError](code/actionloaderror.md): An error that indicates the action’s executable failed to load.
- [AMActionMalwareError](code/actionmalwareerror.md): An error that indicates the action has been identified as malware by XProtect.
- [AMActionNotLoadableError](code/actionnotloadableerror.md): An error that indicates the action’s executable is of a type that is not loadable in the current process.
- [AMActionPropertyListInvalidError](code/actionpropertylistinvaliderror.md): An error that indicates the property list for an action is invalid.
- [AMActionQuarantineError](code/actionquarantineerror.md): An error that indicates action has been quarantined by XProtect, the antimalware system on the Mac.
- [AMActionRequiredActionResourceError](code/actionrequiredactionresourceerror.md): An error that indicates an action required by the action is not loaded.
- [AMActionRuntimeMismatchError](code/actionruntimemismatcherror.md): An error that indicates an attempt was made to load an action that is not compiled in a way that is compatible with the current app.
- [AMActionSignatureCorruptError](code/actionsignaturecorrupterror.md): An error that indicates developer signature for this action is corrupted.
- [AMActionThirdPartyActionsNotAllowedError](code/actionthirdpartyactionsnotallowederror.md): An error that indicates the action is a third party action, and loading it has not been allowed by the user.
- [AMActionXPCError](code/actionxpcerror.md): An error that indicates the remote process running the action has crashed.
- [AMActionXProtectError](code/actionxprotecterror.md): An error that indicates XProtect is unable to successfully analyze the action.
- [AMNoSuchActionError](code/nosuchactionerror.md): An error that indicates the action could not be located on the system.

### Data Conversion Errors

- [AMConversionFailedError](code/conversionfailederror.md): An error that occurs when, for example, the converter encounters an error converting data from one type to another.
- [AMConversionNoDataError](code/conversionnodataerror.md): An error that occurs when the converter determines that the conversion, though possible, would produce a nil result.
- [AMConversionNotPossibleError](code/conversionnotpossibleerror.md): An error that occurs when the converter determines that it is unable to convert from one data type to another.

## See Also

### Errors

- [AMAutomatorErrorDomain](../amautomatorerrordomain.md): A string that identifies the Automator error domain.
- [AMActionErrorKey](../amactionerrorkey.md): A key to retrieve the action that caused an error.
