> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odframeworkerrors](https://developer.apple.com/documentation/opendirectory/odframeworkerrors)

# ODFrameworkErrors (Swift)

**Framework:** Open Directory  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
struct ODFrameworkErrors
```

## Topics

### Constants

- [kODErrorCredentialsAccountDisabled](koderrorcredentialsaccountdisabled.md): The account is disabled.
- [kODErrorCredentialsAccountExpired](koderrorcredentialsaccountexpired.md): The account is expired.
- [kODErrorCredentialsAccountInactive](koderrorcredentialsaccountinactive.md): The account is inactive.
- [kODErrorCredentialsAccountNotFound](koderrorcredentialsaccountnotfound.md): The authentication server could not find the provided account.
- [kODErrorCredentialsInvalid](koderrorcredentialsinvalid.md): The provided credentials are invalid with the current node.
- [kODErrorCredentialsInvalidComputer](koderrorcredentialsinvalidcomputer.md): The account is not permitted to log into this computer.
- [kODErrorCredentialsInvalidLogonHours](koderrorcredentialsinvalidlogonhours.md): The logon attempt was not within set logon hours.
- [kODErrorCredentialsMethodNotSupported](koderrorcredentialsmethodnotsupported.md): The extended authentication method is not supported.
- [kODErrorCredentialsNotAuthorized](koderrorcredentialsnotauthorized.md): The operation, such as changing a password, is not permitted with current privileges.
- [kODErrorCredentialsOperationFailed](koderrorcredentialsoperationfailed.md): The requested operation failed.
- [kODErrorCredentialsParameterError](koderrorcredentialsparametererror.md): An invalid parameter was provided.
- [kODErrorCredentialsPasswordChangeRequired](koderrorcredentialspasswordchangerequired.md): The password must be changed.
- [kODErrorCredentialsPasswordChangeTooSoon](koderrorcredentialspasswordchangetoosoon.md): The password was changed too recently to be changed again.
- [kODErrorCredentialsPasswordExpired](koderrorcredentialspasswordexpired.md): The password has expired and must be changed.
- [kODErrorCredentialsPasswordNeedsDigit](koderrorcredentialspasswordneedsdigit.md): The provided password needs at least one digit.
- [kODErrorCredentialsPasswordNeedsLetter](koderrorcredentialspasswordneedsletter.md): The provided password needs at least one letter.
- [kODErrorCredentialsPasswordQualityFailed](koderrorcredentialspasswordqualityfailed.md): The provided password did not meet minimum quality requirements.
- [kODErrorCredentialsPasswordTooLong](koderrorcredentialspasswordtoolong.md): The provided password is too long.
- [kODErrorCredentialsPasswordTooShort](koderrorcredentialspasswordtooshort.md): The provided password is too short.
- [kODErrorCredentialsPasswordUnrecoverable](koderrorcredentialspasswordunrecoverable.md): The password could not be recovered from the authentication database.
- [kODErrorCredentialsServerCommunicationError](koderrorcredentialsservercommunicationerror.md): The authentication server encountered a communication error.
- [kODErrorCredentialsServerError](koderrorcredentialsservererror.md): The authentication server encountered an error.
- [kODErrorCredentialsServerNotFound](koderrorcredentialsservernotfound.md): The authentication server could not be found.
- [kODErrorCredentialsServerTimeout](koderrorcredentialsservertimeout.md): The authentication server timed out.
- [kODErrorCredentialsServerUnreachable](koderrorcredentialsserverunreachable.md): The authentication server could not be reached.
- [kODErrorDaemonError](koderrordaemonerror.md): The daemon has encountered an undefined error.
- [kODErrorNodeConnectionFailed](koderrornodeconnectionfailed.md): The node connection failed.
- [kODErrorNodeDisabled](koderrornodedisabled.md)
- [kODErrorNodeUnknownHost](koderrornodeunknownhost.md): The host provided is invalid.
- [kODErrorNodeUnknownName](koderrornodeunknownname.md): The node name provided does not exist and cannot be opened.
- [kODErrorNodeUnknownType](koderrornodeunknowntype.md): The node type provided is not a known value.
- [kODErrorPluginError](koderrorpluginerror.md): A plug-in has encountered an undefined error.
- [kODErrorPluginOperationNotSupported](koderrorpluginoperationnotsupported.md): The plug-in does not support the requested operation.
- [kODErrorPluginOperationTimeout](koderrorpluginoperationtimeout.md)
- [kODErrorPolicyOutOfRange](koderrorpolicyoutofrange.md)
- [kODErrorPolicyUnsupported](koderrorpolicyunsupported.md)
- [kODErrorQueryInvalidMatchType](koderrorqueryinvalidmatchtype.md): An invalid match type was provided in the query.
- [kODErrorQuerySynchronize](koderrorquerysynchronize.md): A query synchronization has been initiated.
- [kODErrorQueryTimeout](koderrorquerytimeout.md): The query timed out.
- [kODErrorQueryUnsupportedMatchType](koderrorqueryunsupportedmatchtype.md): An unsupported match type was provided in the query.
- [kODErrorRecordAlreadyExists](koderrorrecordalreadyexists.md): The record create failed because the record already exists.
- [kODErrorRecordAttributeNotFound](koderrorrecordattributenotfound.md): The requested attribute could not be found in the record.
- [kODErrorRecordAttributeUnknownType](koderrorrecordattributeunknowntype.md): The attribute type is unknown.
- [kODErrorRecordAttributeValueNotFound](koderrorrecordattributevaluenotfound.md): The requested attribute value could not be found in the record.
- [kODErrorRecordAttributeValueSchemaError](koderrorrecordattributevalueschemaerror.md): The attribute value does not meet schema requirements.
- [kODErrorRecordInvalidType](koderrorrecordinvalidtype.md)
- [kODErrorRecordNoLongerExists](koderrorrecordnolongerexists.md)
- [kODErrorRecordParameterError](koderrorrecordparametererror.md): An invalid parameter was provided.
- [kODErrorRecordPermissionError](koderrorrecordpermissionerror.md): The changes were denied due to insufficient permissions.
- [kODErrorRecordReadOnlyNode](koderrorrecordreadonlynode.md): The record cannot be modified.
- [kODErrorRecordTypeDisabled](koderrorrecordtypedisabled.md): The record type is disabled by policy for a plug-in.
- [kODErrorSessionDaemonNotRunning](koderrorsessiondaemonnotrunning.md): The daemon is not running.
- [kODErrorSessionDaemonRefused](koderrorsessiondaemonrefused.md): The daemon refused the session.
- [kODErrorSessionLocalOnlyDaemonInUse](koderrorsessionlocalonlydaemoninuse.md): A normal request was issued when the local-only daemon was in use.
- [kODErrorSessionNormalDaemonInUse](koderrorsessionnormaldaemoninuse.md): A local-only request was issued when the normal daemon was in use.
- [kODErrorSessionProxyCommunicationError](koderrorsessionproxycommunicationerror.md): There was a communication error with the remote daemon.
- [kODErrorSessionProxyIPUnreachable](koderrorsessionproxyipunreachable.md): The proxy did not respond.
- [kODErrorSessionProxyUnknownHost](koderrorsessionproxyunknownhost.md): The proxy could not be resolved.
- [kODErrorSessionProxyVersionMismatch](koderrorsessionproxyversionmismatch.md): Versions mismatch between the remote daemon and the local framework.
- [kODErrorSuccess](koderrorsuccess.md)
- [kODErrorCredentialsAccountLocked](koderrorcredentialsaccountlocked.md)
- [kODErrorCredentialsAccountTemporarilyLocked](koderrorcredentialsaccounttemporarilylocked.md)
- [kODErrorCredentialsContactPrimary](koderrorcredentialscontactprimary.md)

### Initializers

- [init(\_:)](odframeworkerrors/init%28__%29.md)
- [init(rawValue:)](odframeworkerrors/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](odframeworkerrors/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# ODFrameworkErrors (Objective-C)

**Framework:** Open Directory  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
enum ODFrameworkErrors : unsigned int;
```

## Topics

### Constants

- [kODErrorCredentialsAccountDisabled](koderrorcredentialsaccountdisabled.md): The account is disabled.
- [kODErrorCredentialsAccountExpired](koderrorcredentialsaccountexpired.md): The account is expired.
- [kODErrorCredentialsAccountInactive](koderrorcredentialsaccountinactive.md): The account is inactive.
- [kODErrorCredentialsAccountNotFound](koderrorcredentialsaccountnotfound.md): The authentication server could not find the provided account.
- [kODErrorCredentialsContactMaster](odframeworkerrors/koderrorcredentialscontactmaster.md): Deprecated. The authentication server contacted is not the primary server, and the requested operation requires the primary server.
- [kODErrorCredentialsInvalid](koderrorcredentialsinvalid.md): The provided credentials are invalid with the current node.
- [kODErrorCredentialsInvalidComputer](koderrorcredentialsinvalidcomputer.md): The account is not permitted to log into this computer.
- [kODErrorCredentialsInvalidLogonHours](koderrorcredentialsinvalidlogonhours.md): The logon attempt was not within set logon hours.
- [kODErrorCredentialsMethodNotSupported](koderrorcredentialsmethodnotsupported.md): The extended authentication method is not supported.
- [kODErrorCredentialsNotAuthorized](koderrorcredentialsnotauthorized.md): The operation, such as changing a password, is not permitted with current privileges.
- [kODErrorCredentialsOperationFailed](koderrorcredentialsoperationfailed.md): The requested operation failed.
- [kODErrorCredentialsParameterError](koderrorcredentialsparametererror.md): An invalid parameter was provided.
- [kODErrorCredentialsPasswordChangeRequired](koderrorcredentialspasswordchangerequired.md): The password must be changed.
- [kODErrorCredentialsPasswordChangeTooSoon](koderrorcredentialspasswordchangetoosoon.md): The password was changed too recently to be changed again.
- [kODErrorCredentialsPasswordExpired](koderrorcredentialspasswordexpired.md): The password has expired and must be changed.
- [kODErrorCredentialsPasswordNeedsDigit](koderrorcredentialspasswordneedsdigit.md): The provided password needs at least one digit.
- [kODErrorCredentialsPasswordNeedsLetter](koderrorcredentialspasswordneedsletter.md): The provided password needs at least one letter.
- [kODErrorCredentialsPasswordQualityFailed](koderrorcredentialspasswordqualityfailed.md): The provided password did not meet minimum quality requirements.
- [kODErrorCredentialsPasswordTooLong](koderrorcredentialspasswordtoolong.md): The provided password is too long.
- [kODErrorCredentialsPasswordTooShort](koderrorcredentialspasswordtooshort.md): The provided password is too short.
- [kODErrorCredentialsPasswordUnrecoverable](koderrorcredentialspasswordunrecoverable.md): The password could not be recovered from the authentication database.
- [kODErrorCredentialsServerCommunicationError](koderrorcredentialsservercommunicationerror.md): The authentication server encountered a communication error.
- [kODErrorCredentialsServerError](koderrorcredentialsservererror.md): The authentication server encountered an error.
- [kODErrorCredentialsServerNotFound](koderrorcredentialsservernotfound.md): The authentication server could not be found.
- [kODErrorCredentialsServerTimeout](koderrorcredentialsservertimeout.md): The authentication server timed out.
- [kODErrorCredentialsServerUnreachable](koderrorcredentialsserverunreachable.md): The authentication server could not be reached.
- [kODErrorDaemonError](koderrordaemonerror.md): The daemon has encountered an undefined error.
- [kODErrorNodeConnectionFailed](koderrornodeconnectionfailed.md): The node connection failed.
- [kODErrorNodeDisabled](koderrornodedisabled.md)
- [kODErrorNodeUnknownHost](koderrornodeunknownhost.md): The host provided is invalid.
- [kODErrorNodeUnknownName](koderrornodeunknownname.md): The node name provided does not exist and cannot be opened.
- [kODErrorNodeUnknownType](koderrornodeunknowntype.md): The node type provided is not a known value.
- [kODErrorPluginError](koderrorpluginerror.md): A plug-in has encountered an undefined error.
- [kODErrorPluginOperationNotSupported](koderrorpluginoperationnotsupported.md): The plug-in does not support the requested operation.
- [kODErrorPluginOperationTimeout](koderrorpluginoperationtimeout.md)
- [kODErrorPolicyOutOfRange](koderrorpolicyoutofrange.md)
- [kODErrorPolicyUnsupported](koderrorpolicyunsupported.md)
- [kODErrorQueryInvalidMatchType](koderrorqueryinvalidmatchtype.md): An invalid match type was provided in the query.
- [kODErrorQuerySynchronize](koderrorquerysynchronize.md): A query synchronization has been initiated.
- [kODErrorQueryTimeout](koderrorquerytimeout.md): The query timed out.
- [kODErrorQueryUnsupportedMatchType](koderrorqueryunsupportedmatchtype.md): An unsupported match type was provided in the query.
- [kODErrorRecordAlreadyExists](koderrorrecordalreadyexists.md): The record create failed because the record already exists.
- [kODErrorRecordAttributeNotFound](koderrorrecordattributenotfound.md): The requested attribute could not be found in the record.
- [kODErrorRecordAttributeUnknownType](koderrorrecordattributeunknowntype.md): The attribute type is unknown.
- [kODErrorRecordAttributeValueNotFound](koderrorrecordattributevaluenotfound.md): The requested attribute value could not be found in the record.
- [kODErrorRecordAttributeValueSchemaError](koderrorrecordattributevalueschemaerror.md): The attribute value does not meet schema requirements.
- [kODErrorRecordInvalidType](koderrorrecordinvalidtype.md)
- [kODErrorRecordNoLongerExists](koderrorrecordnolongerexists.md)
- [kODErrorRecordParameterError](koderrorrecordparametererror.md): An invalid parameter was provided.
- [kODErrorRecordPermissionError](koderrorrecordpermissionerror.md): The changes were denied due to insufficient permissions.
- [kODErrorRecordReadOnlyNode](koderrorrecordreadonlynode.md): The record cannot be modified.
- [kODErrorRecordTypeDisabled](koderrorrecordtypedisabled.md): The record type is disabled by policy for a plug-in.
- [kODErrorSessionDaemonNotRunning](koderrorsessiondaemonnotrunning.md): The daemon is not running.
- [kODErrorSessionDaemonRefused](koderrorsessiondaemonrefused.md): The daemon refused the session.
- [kODErrorSessionLocalOnlyDaemonInUse](koderrorsessionlocalonlydaemoninuse.md): A normal request was issued when the local-only daemon was in use.
- [kODErrorSessionNormalDaemonInUse](koderrorsessionnormaldaemoninuse.md): A local-only request was issued when the normal daemon was in use.
- [kODErrorSessionProxyCommunicationError](koderrorsessionproxycommunicationerror.md): There was a communication error with the remote daemon.
- [kODErrorSessionProxyIPUnreachable](koderrorsessionproxyipunreachable.md): The proxy did not respond.
- [kODErrorSessionProxyUnknownHost](koderrorsessionproxyunknownhost.md): The proxy could not be resolved.
- [kODErrorSessionProxyVersionMismatch](koderrorsessionproxyversionmismatch.md): Versions mismatch between the remote daemon and the local framework.
- [kODErrorSuccess](koderrorsuccess.md)
- [kODErrorCredentialsAccountLocked](koderrorcredentialsaccountlocked.md)
- [kODErrorCredentialsAccountTemporarilyLocked](koderrorcredentialsaccounttemporarilylocked.md)
- [kODErrorCredentialsContactPrimary](koderrorcredentialscontactprimary.md)
